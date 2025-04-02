# Termii NestJS SDK Documentation

## Introduction
The **termii-nest-sdk** is a NestJS-based software development kit (SDK) designed to simplify the integration of Termii APIs into NestJS projects. It provides a structured and efficient way to interact with Termii's messaging and authentication services.

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
To set up the SDK, import the module into your `AppModule` and pass the required configuration options.

### Example Configuration

```typescript
import { Module } from '@nestjs/common';
import { TermiiSDKModule } from 'termii-nest-sdk';

@Module({
  imports: [
    TermiiSDKModule.register({
      apiKey: process.env.API_KEY, // Ensure API_KEY is set in your environment variables
      baseUrl: 'https://v3.api.termii.com',
      isGlobal: true // Optional flag (default: false). If false, you must import it into each module that needs it.
    }),
  ],
})
export class AppModule {}
```

### Environment Variables
Ensure the following environment variables are set:

```bash
API_KEY=[your_api_key]
BASE_URL=https://v3.api.termii.com
```

## Authentication
Some Termii API requests require authentication. The SDK manages authentication using an API key, which must be provided during module registration.

## Usage
Once configured, the SDK can be utilized in any service or controller.

### Example: Sending an SMS Message

```typescript
import { Injectable } from '@nestjs/common';
import { AbstractMessagingService } from 'termii-nest-sdk';

@Injectable()
export class NotificationService {
  constructor(private readonly messagingService: AbstractMessagingService) {}
  
  async sendSMSMessage() {
    const samplePayload = {
      to: '[recipient]', // Recipient's phone number
      from: '[sender_id]', // Approved sender ID
      sms: 'Hi there, testing Termii',
      type: '[message_type]', // Message type (e.g., plain)
      channel: '[channel_type]', // Channel type (e.g., dnd, whatsapp, generic)
    };
    
    return this.messagingService.sendSingleMessage(samplePayload);
  }
}
```

## Available APIs in the SDK

### `AbstractMessagingService`
Handles sending text messages across different messaging channels.

### `AbstractNumberService`
Manages sending messages using Termii's auto-generated messaging numbers.

### `AbstractSenderIDService`
Retrieves registered business statuses and requests sender ID registration.

### `AbstractTokenService`
Facilitates OTP (One-Time Password) sending and verification.

## API Methods

### Messaging Services
- **`sendSingleMessage(payload: TmSingleMessageRequestPayload)`**: Sends a message to a single recipient.
- **`sendBulkMessage(payload: TmBulkMessageRequestPayload)`**: Sends messages to multiple recipients.

### Number Services
- **`sendMessage(payload: TmNumberPayload)`**: Sends messages using Termii's generated numbers.

### Sender ID Services
- **`fetchSenderId()`**: Retrieves details of registered sender IDs.
- **`requestSenderId(payload: TmRequestSenderIDPayload)`**: Requests a sender ID.

### Token Services
- **`sendToken(payload: TmSendTokenPayload)`**: Sends OTPs across multiple channels.
- **`verifyToken(payload: TmVerifyTokenPayload)`**: Verifies sent tokens.

## Error Handling
All SDK methods return structured responses. Errors can be managed using `try-catch` blocks.

```typescript
try {
  const response = await messagingService.sendSingleMessage(payload);
  console.log(response);
} catch (error) {
  console.error('Error:', error.message);
}
```

## Best Practices
- Always handle API errors gracefully.
- Use environment variables to manage sensitive credentials securely.
- Enable logging for better debugging.

## Logging & Debugging
Enable verbose logging by setting the following environment variable:

```bash
DEBUG=sdk:* npm start
```

## License
This SDK is licensed under the **MIT License**. See the `LICENSE` file for details.

## Contributing
We welcome contributions! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature.
3. Commit and push your changes.
4. Open a pull request.

## Support
For issues or questions, please open an issue on the [GitHub repository](https://github.com/osahondev/termii-nest-sdk.git) or contact via email: [osahondevengine@gmail.com](mailto:osahondevengine@gmail.com).

## Authors

- **Michael Osahon** - [GitHub](https://github.com/osahondev)

