import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseFilters,
  UseGuards,
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
  ApiTooManyRequestsResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';
import { Request, Response } from 'express';

import { UsersService } from '../users/users.service';
import { AuthRedirectExceptionFilter } from './auth-redirect.exception-filter';
import { AuthService } from './auth.service';
import { CsrfGuard } from './csrf.guard';
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
    private readonly usersService: UsersService,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.FOUND)
  @UseGuards(ThrottlerGuard)
  @Throttle({ default: { limit: 10, ttl: 60_000 } })
  @ApiConsumes('application/x-www-form-urlencoded', 'application/json')
  @ApiOperation({
    summary: 'Authenticate a developer account',
    description: 'Accepts login credentials and redirects to the dashboard on success.',
  })
  @ApiOkResponse({ description: 'Redirect to dashboard after successful login.' })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials.' })
  @ApiTooManyRequestsResponse({ description: 'Too many login attempts.' })
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
  @UseGuards(ThrottlerGuard)
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  @ApiConsumes('application/x-www-form-urlencoded', 'application/json')
  @ApiOperation({
    summary: 'Create a developer account',
    description: 'Registers a developer account and redirects to the dashboard on success.',
  })
  @ApiCreatedResponse({ description: 'Redirect to dashboard after successful signup.' })
  @ApiBadRequestResponse({ description: 'Validation failed or passwords do not match.' })
  @ApiTooManyRequestsResponse({ description: 'Too many signup attempts.' })
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
  @UseGuards(CsrfGuard)
  @ApiOperation({ summary: 'Sign out of the developer dashboard' })
  @ApiOkResponse({ description: 'Clears the session and redirects to the homepage.' })
  async logout(@Req() request: Request, @Res() response: Response): Promise<void> {
    const payload = this.sessionService.readSessionToken(request);

    if (payload?.sub) {
      await this.usersService.bumpSessionVersion(payload.sub);
    }

    this.sessionService.clearSession(response);
    response.redirect('/');
  }

  private completeAuth(request: Request, response: Response): void {
    if (wantsJsonResponse(request)) {
      response.status(HttpStatus.OK).json({ redirect: '/dashboard' });
      return;
    }

    response.redirect('/dashboard');
  }
}
