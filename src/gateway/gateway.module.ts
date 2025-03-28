import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { SdkConfig } from 'src/config';
import { TermiiSDKClient } from './termii-sdk-client.gateway.service';

@Module({
  providers: [
    {
      provide: TermiiSDKClient,
      useClass: TermiiSDKClient,
      // useFactory: () => {
      //   const config: SdkConfig = {
      //     termiiBaseUrl: 'https://v3.api.termii.com',
      //     termiiApiKey:
      //       'TL4pPUULsrdwQlj5JLpcYrxNv0ZXTC43J84VBiQBwLOi7a96V8x2l3WF477nr',
      //   }; // Provide a default or allow external configuration
      //   return new TermiiSDKClient(config);
      // },
    },
  ],
  exports: [TermiiSDKClient],
  // controllers: [GatewayController],
})
export class GatewayModule {}
