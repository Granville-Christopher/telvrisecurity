import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
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
import { Response } from 'express';

import { AuthRedirectExceptionFilter } from './auth-redirect.exception-filter';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';

@ApiTags('Developer Auth')
@UseFilters(AuthRedirectExceptionFilter)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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
  login(@Body() dto: LoginDto, @Res() response: Response): void {
    this.authService.login(dto);
    response.redirect('/dashboard');
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
  signup(@Body() dto: SignupDto, @Res() response: Response): void {
    this.authService.signup(dto);
    response.redirect('/dashboard');
  }
}
