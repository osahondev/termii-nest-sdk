import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './termii-sdk-definition';
import {
  AbstractMessagingService,
  MessagingService,
} from 'src/services/messaging';
import { AbstractSenderIDService, SenderIDService } from 'src/services/sender';
import { IntegrationService } from 'src/services/integration';
import { AbstractNumberService, NumberService } from 'src/services/number';
import { AbstractTokenService, TokenService } from 'src/services/token';

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
    {
      provide: AbstractNumberService,
      useClass: NumberService,
    },
    {
      provide: AbstractTokenService,
      useClass: TokenService,
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
    {
      provide: AbstractNumberService,
      useClass: NumberService,
    },
    {
      provide: AbstractTokenService,
      useClass: TokenService,
    },
    IntegrationService,
  ],
})
export class TermiiSdkModule extends ConfigurableModuleClass {}
