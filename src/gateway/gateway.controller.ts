import { Controller, Post } from '@nestjs/common';
import { TermiiSDKClient } from './termii-sdk-client.gateway.service';

@Controller('gateway')
export class GatewayController {
  constructor(private readonly gatewayService: TermiiSDKClient) {}
  @Post('/send')
  testMethod() {
    this.gatewayService.sendSingleMessage('');
  }
}
