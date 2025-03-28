import { ConfigurableModuleBuilder } from '@nestjs/common';
import { SdkConfig } from 'src/config';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<SdkConfig>()
    .setExtras<{ isGlobal?: boolean }>(
      { isGlobal: false },
      (definition, extras) => ({
        ...definition,
        global: extras.isGlobal, // Allow toggling global module registration
      }),
    )
    .build();
