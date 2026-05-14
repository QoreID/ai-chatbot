# @verifyme/ai-chatbot

Internal NPM package for Verifyme’s AI chatbot wrapper.

## Installation

Install directly from the GitHub repository using the project package URL.

```bash
npm install https://github.com/QoreID/ai-chatbot.git  
```

## Usage

Import the default chatbot wrapper and initialize it with your chatbot configuration.

```ts
import AiChatbot from '@verifyme/ai-chatbot';

await AiChatbot.init(
  {
    botName: 'MyBot',
    projectId: 'your-project-id',
    suggestions: ['Hello', 'Help me'],
    customGreeting: 'Welcome to our assistant!',
    delayBeforeGreeting: '2s',
    uiConfig: {
      logoUrl: 'https://example.com/logo.png',
      colors: {
        primary: '#0066ff',
        background: '#ffffff',
        border: '#e5e7eb',
        shadow: 'rgba(0, 0, 0, 0.08)'
      }
    }
  }
);
```

### To use in development

```
import AiChatbot from '@verifyme/ai-chatbot';

await AiChatbot.init(
  {
    botName: 'MyBot',
    projectId: 'your-project-id',
    suggestions: ['Hello', 'Help me'],
    customGreeting: 'Welcome to our assistant!',
    delayBeforeGreeting: '2s',
    uiConfig: {
      logoUrl: 'https://example.com/logo.png',
      colors: {
        primary: '#0066ff',
        background: '#ffffff',
        border: '#e5e7eb',
        shadow: 'rgba(0, 0, 0, 0.08)'
      }
    }
  },
  'https://<DEV_URL>'
);
```

### Methods

- `AiChatbot.init(config, url?)`

  - `config`: `InitAiChatbot` object.
  - `url`: optional URL to load the chatbot SDK script. Defaults to the production CDN.
- `AiChatbot.setActiveContext(key)`

  - Set the active chatbot context.
- `AiChatbot.getContext(key?)`

  - Retrieve a specific context or the current context.

## Notes

- This package is intended for browser usage and dynamically loads the chatbot SDK script into the page.
- If you use an internal development build, pass the local or staging SDK URL as the second argument to `init()`.
