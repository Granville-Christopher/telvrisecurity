import { Controller, Get, Header, Query, Res } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { Response } from 'express';
import { join } from 'path';

import { renderPage } from './rendering/page.renderer';
import { renderLoginPageSections } from './sections/auth/login.sections';
import { renderSignupPageSections } from './sections/auth/signup.sections';
import { renderDashboardSections } from './sections/dashboard/dashboard.sections';
import { renderHomepageSections } from './sections/homepage.sections';
import {
  HomepageResourceFeed,
  HomepageResourcesService,
} from './services/homepage-resources.service';

@ApiExcludeController()
@Controller()
export class WebController {
  constructor(private readonly homepageResourcesService: HomepageResourcesService) {}

  @Get()
  @Header('Content-Type', 'text/html; charset=utf-8')
  landingPage(): string {
    return renderPage({
      title: 'Telvri Security API',
      body: renderHomepageSections(),
    });
  }

  @Get('media/logo/telvri.png')
  serveTelvriLogoFromLogoFolder(@Res() response: Response): void {
    response.sendFile(join(__dirname, '..', 'MEDIA', 'logo', 'telvri.png'));
  }

  @Get('media/telvri.png')
  serveTelvriLogoPng(@Res() response: Response): void {
    response.sendFile(join(__dirname, '..', 'MEDIA', 'telvri.png'));
  }

  @Get('media/telvri.jpeg')
  serveTelvriLogoJpeg(@Res() response: Response): void {
    response.sendFile(join(__dirname, '..', 'MEDIA', 'telvri.jpeg'));
  }

  @Get('homepage/resources')
  async homepageResources(@Query('topic') topicQuery?: string): Promise<HomepageResourceFeed> {
    return this.homepageResourcesService.getResources(topicQuery);
  }

  @Get('login')
  @Header('Content-Type', 'text/html; charset=utf-8')
  loginPage(
    @Query('error') errorQuery?: string,
    @Query('email') emailQuery?: string,
  ): string {
    return renderPage({
      title: 'Sign in | Telvri Security',
      includeAuthStyles: true,
      body: renderLoginPageSections({
        errorMessage: errorQuery,
        email: emailQuery,
      }),
    });
  }

  @Get('signup')
  @Header('Content-Type', 'text/html; charset=utf-8')
  signupPage(
    @Query('error') errorQuery?: string,
    @Query('email') emailQuery?: string,
    @Query('fullName') fullNameQuery?: string,
    @Query('company') companyQuery?: string,
  ): string {
    return renderPage({
      title: 'Sign up | Telvri Security',
      includeAuthStyles: true,
      body: renderSignupPageSections({
        errorMessage: errorQuery,
        email: emailQuery,
        fullName: fullNameQuery,
        company: companyQuery,
      }),
    });
  }

  @Get('dashboard')
  @Header('Content-Type', 'text/html; charset=utf-8')
  dashboardPage(): string {
    return renderPage({
      title: 'Telvri Security Dashboard',
      body: renderDashboardSections(),
    });
  }
}
