# Termii SDK Documentation

## Introduction
The **termii-nest-sdk** is a NestJS-based software development kit (SDK) created to enable the seamless integration of Termii based APIs in NestJS based project.

## Installation
To install the SDK, run the following command:

```bash
npm install termii-nest-sdk
```

or with Yarn:

```bash
yarn add termii-nest-sdk
```

## Configuration
To configure the SDK, import the module into your `AppModule` and provide necessary options.

### Example Configuration

```typescript
import { Module } from '@nestjs/common';
import { TermiiSDKModule } from 'termii-nest-sdk';

@Module({
  imports: [
    TermiiSDKModule.register({
      apiKey: process.env.API_KEY, // (this is the assumption that the environment variable is named API_KEY in your application)
      baseUrl: 'https://v3.api.termii.com',
      isGlobal: true // this is an optional flag/param. It's false by default. If false, it means you need to import it into every module that needs it
    }),
  ],
})
export class AppModule {}
```

### Environment Variables
Ensure you set up the necessary environment variables:

```bash
API_KEY=[your_api_key]
BASE_URL=https://v3.api.termii.com
```

## Authentication
Some API requests may require authentication. termii-nest-sdk handles authentication using an API key that's why when registering the sdk, we ask for the API key.


## Usage
Once configured, the SDK can be used in any service or controller.

### Importing and Using the SDK Service

```typescript
import { Injectable } from '@nestjs/common';
import { AbstractMessagingService } from 'termii-nest-sdk';

@Injectable()
export class NotificationService {
  constructor(private readonly messagingService: AbstractMessagingService) {}
  async sendSMSMessage() {
    const samplePayload = {
       to: '[recipient]', // recipient phone number (can be in normal format or international format)
      from: '[sender_id]', // approved sender id
      sms: 'Hi there, testing Termii',
      type: '[message_type]', // plain
      channel: '[channel_type]', // can be dnd, whatsapp or generic
    }
    
    return this.messagingService.sendSingleMessage(samplePayload);
  }
}
```

## API Methods

### `sendSingleMessage(payload: TmSingleMessageRequestPayload)`
**Description:** Sends messgae to a single recipient or phone number.

**Example Usage:**

```typescript
const response = await sdkService.fetchData();
console.log(response);
```

### `sendData(payload: any)`
**Description:** Sends data to the API.

**Example Usage:**

```typescript
const payload = { key: 'value' };
const response = await sdkService.sendData(payload);
console.log(response);
```

## Error Handling
All SDK methods return structured responses, but errors can be caught using a `try-catch` block.

## Best Practices
- Always handle API errors in your application gracefully.
- Use environment variables for sensitive credentials.
- Enable logging for debugging purposes.

## Logging & Debugging
Enable verbose logging by setting an environment variable:

```bash
DEBUG=sdk:* npm start
```

## License
This SDK is licensed under the **MIT License**. See `LICENSE` for details.

## Contributing
We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature.
3. Commit and push your changes.
4. Open a pull request.

## Support
For issues or questions, please open an issue on [GitHub Repo URL] (https://github.com/osahondev/termii-nest-sdk.git) or contact [Support Email] (osahondevengine@gmail.com).


## Authors

- [Michael Osahon](https://github.com/osahondev)

