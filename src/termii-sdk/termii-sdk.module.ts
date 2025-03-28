import { Module } from '@nestjs/common';
import { MessagingService } from 'src/services/messaging/application/messaging.service';
import { ConfigurableModuleClass } from './termii-sdk-definition';
import { IntegrationService } from 'src/services/integration/application/integration.service';
import { AbstractMessagingService } from 'src/services/messaging/application/core';

@Module({
  providers: [
    IntegrationService,
    {
      provide: AbstractMessagingService,
      useClass: MessagingService,
    },
  ],
  exports: [
    {
      provide: AbstractMessagingService,
      useClass: MessagingService,
    },
    IntegrationService,
  ],
})
export class TermiiSdkModule extends ConfigurableModuleClass {}
