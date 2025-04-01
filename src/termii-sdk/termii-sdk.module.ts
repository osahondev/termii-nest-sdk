import { Module } from '@nestjs/common';
import { MessagingService } from 'src/services/messaging/application/messaging.service';
import { ConfigurableModuleClass } from './termii-sdk-definition';
import { IntegrationService } from 'src/services/integration/application/integration.service';
import { AbstractMessagingService } from 'src/services/messaging/application/core';
import { AbstractSenderIDService } from 'src/services/sender';
import { SenderIDService } from 'src/services/sender/application/sender-id.service';

@Module({
  providers: [
    IntegrationService,
    {
      provide: AbstractMessagingService,
      useClass: MessagingService,
    },
    {
      provide: AbstractSenderIDService,
      useClass: SenderIDService,
    },
  ],
  exports: [
    {
      provide: AbstractMessagingService,
      useClass: MessagingService,
    },
    {
      provide: AbstractSenderIDService,
      useClass: SenderIDService,
    },
    IntegrationService,
  ],
})
export class TermiiSdkModule extends ConfigurableModuleClass {}
