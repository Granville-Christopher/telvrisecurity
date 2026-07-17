import { Controller, Get, Header, Query, Res } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { Response } from 'express';
import { join } from 'path';

import { renderPage } from './rendering/page.renderer';
import { DEFAULT_OG_IMAGE_PATH, SITE_SEO_DESCRIPTION } from './rendering/site-metadata';
import { renderLoginPageSections } from './sections/auth/login.sections';
import { renderSignupPageSections } from './sections/auth/signup.sections';
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
      title: 'Telvri Security | Developer-First SIM-Swap & Mobile Identity API',
      seo: {
        description: SITE_SEO_DESCRIPTION,
        canonicalPath: '/',
        ogImagePath: DEFAULT_OG_IMAGE_PATH,
        keywords: [
          'SIM-swap detection API',
          'mobile identity security',
          'telco fraud prevention',
          'account takeover protection',
          'phone number risk signals',
          'developer security API',
          'OpenAPI identity security',
          'wallet recovery protection',
          'payout fraud prevention',
          'SIM-swap check endpoint',
        ],
      },
      body: renderHomepageSections(),
    });
  }

  @Get('media/home.png')
  serveHomePreviewImage(@Res() response: Response): void {
    response.sendFile(join(__dirname, '..', 'MEDIA', 'home.png'));
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
      seo: {
        description:
          'Sign in to Telvri Security to manage API keys, review SIM-swap integration examples, and access your developer dashboard.',
        canonicalPath: '/login',
        noIndex: true,
      },
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
      seo: {
        description:
          'Create your Telvri Security developer account to start integrating SIM-swap checks into login recovery, payouts, and wallet protection flows.',
        canonicalPath: '/signup',
        noIndex: true,
      },
      includeAuthStyles: true,
      body: renderSignupPageSections({
        errorMessage: errorQuery,
        email: emailQuery,
        fullName: fullNameQuery,
        company: companyQuery,
      }),
    });
  }
}
