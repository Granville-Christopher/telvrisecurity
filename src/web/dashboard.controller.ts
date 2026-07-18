import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  Res,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { Response } from 'express';

import { ApiKeysService, ApiKeyView, RotatedApiKey, UserTestKey } from '../api-keys/api-keys.service';
import { CreateApiKeyDto, resolveExpiryDate } from '../api-keys/dto/create-api-key.dto';
import { CsrfGuard } from '../auth/csrf.guard';
import { SessionRedirectExceptionFilter } from '../auth/session-redirect.exception-filter';
import { RequestWithSession, SessionGuard } from '../auth/session.guard';
import { SessionService } from '../auth/session.service';
import { renderPage } from './rendering/page.renderer';
import { renderDashboardSections } from './sections/dashboard/dashboard.sections';

@ApiExcludeController()
@UseGuards(SessionGuard)
@UseFilters(SessionRedirectExceptionFilter)
@Controller()
export class DashboardController {
  constructor(
    private readonly apiKeysService: ApiKeysService,
    private readonly sessionService: SessionService,
  ) {}

  @Get('dashboard')
  @Header('Content-Type', 'text/html; charset=utf-8')
  async dashboardPage(
    @Req() request: RequestWithSession,
    @Res() response: Response,
  ): Promise<void> {
    const user = request.sessionUser!;
    const csrfToken = this.sessionService.ensureCsrfCookie(request, response);
    const [keys, latestActiveKey, testKey] = await Promise.all([
      this.apiKeysService.listForUser(user.id),
      this.apiKeysService.getLatestActiveLiveKey(user.id),
      this.apiKeysService.getOrCreateTestKeyForUser(user.id),
    ]);
    const activeKeyCount = keys.filter((key) => key.status === 'active').length;

    const html = renderPage({
      title: 'Developer Dashboard | Telvri Security',
      seo: {
        description:
          'Telvri Security developer dashboard for API keys, SDK examples, and SIM-swap endpoint integration across JavaScript, Python, Go, and more.',
        canonicalPath: '/dashboard',
        noIndex: true,
      },
      body: renderDashboardSections({
        user,
        keys,
        activeKeyCount,
        latestActiveKey,
        testKey,
        csrfToken,
      }),
    });

    response.send(html);
  }

  @Get('dashboard/api-keys')
  async listApiKeys(@Req() request: RequestWithSession): Promise<{ keys: ApiKeyView[] }> {
    const keys = await this.apiKeysService.listForUser(request.sessionUser!.id);
    return { keys };
  }

  @Post('dashboard/api-keys')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(CsrfGuard)
  async createApiKey(
    @Req() request: RequestWithSession,
    @Body() dto: CreateApiKeyDto,
  ): Promise<{ plainKey: string; key: ApiKeyView }> {
    const expiresAt = resolveExpiryDate(dto);
    const created = await this.apiKeysService.createForUser(
      request.sessionUser!.id,
      dto.name,
      expiresAt,
    );

    return { plainKey: created.plainKey, key: created.view };
  }

  @Post('dashboard/api-keys/:id/revoke')
  @HttpCode(HttpStatus.OK)
  @UseGuards(CsrfGuard)
  async revokeApiKey(
    @Req() request: RequestWithSession,
    @Param('id') id: string,
  ): Promise<{ key: ApiKeyView }> {
    const key = await this.apiKeysService.revokeForUser(request.sessionUser!.id, id);
    return { key };
  }

  @Post('dashboard/api-keys/:id/rotate')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(CsrfGuard)
  async rotateApiKey(
    @Req() request: RequestWithSession,
    @Param('id') id: string,
  ): Promise<RotatedApiKey> {
    return this.apiKeysService.rotateForUser(request.sessionUser!.id, id);
  }

  @Delete('dashboard/api-keys/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(CsrfGuard)
  async deleteApiKey(
    @Req() request: RequestWithSession,
    @Param('id') id: string,
  ): Promise<void> {
    await this.apiKeysService.deleteForUser(request.sessionUser!.id, id);
  }

  @Post('dashboard/api-keys/test/regenerate')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(CsrfGuard)
  async regenerateTestKey(@Req() request: RequestWithSession): Promise<UserTestKey> {
    return this.apiKeysService.regenerateTestKeyForUser(request.sessionUser!.id);
  }
}
