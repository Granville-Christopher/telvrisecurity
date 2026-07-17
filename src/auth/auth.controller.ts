import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Request, Response } from 'express';

import { AuthRedirectExceptionFilter } from './auth-redirect.exception-filter';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { SessionService } from './session.service';
import { wantsJsonResponse } from './wants-json.util';

@ApiTags('Developer Auth')
@UseFilters(AuthRedirectExceptionFilter)
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly sessionService: SessionService,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.FOUND)
  @ApiConsumes('application/x-www-form-urlencoded', 'application/json')
  @ApiOperation({
    summary: 'Authenticate a developer account',
    description: 'Accepts login credentials and redirects to the dashboard on success.',
  })
  @ApiOkResponse({ description: 'Redirect to dashboard after successful login.' })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials.' })
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  )
  async login(
    @Body() dto: LoginDto,
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<void> {
    const user = await this.authService.login(dto);
    this.sessionService.issueSession(response, user);
    this.completeAuth(request, response);
  }

  @Post('signup')
  @HttpCode(HttpStatus.FOUND)
  @ApiConsumes('application/x-www-form-urlencoded', 'application/json')
  @ApiOperation({
    summary: 'Create a developer account',
    description: 'Registers a developer account and redirects to the dashboard on success.',
  })
  @ApiCreatedResponse({ description: 'Redirect to dashboard after successful signup.' })
  @ApiBadRequestResponse({ description: 'Validation failed or passwords do not match.' })
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  )
  async signup(
    @Body() dto: SignupDto,
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<void> {
    const user = await this.authService.signup(dto);
    this.sessionService.issueSession(response, user);
    this.completeAuth(request, response);
  }

  @Post('logout')
  @HttpCode(HttpStatus.FOUND)
  @ApiOperation({ summary: 'Sign out of the developer dashboard' })
  @ApiOkResponse({ description: 'Clears the session cookie and redirects to login.' })
  logout(@Res() response: Response): void {
    this.sessionService.clearSession(response);
    response.redirect('/login');
  }

  private completeAuth(request: Request, response: Response): void {
    if (wantsJsonResponse(request)) {
      response.status(HttpStatus.OK).json({ redirect: '/dashboard' });
      return;
    }

    response.redirect('/dashboard');
  }
}
