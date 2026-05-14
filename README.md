# @verifyme/ai-chatbot

Internal NPM package for Verifyme’s AI chatbot wrapper.

## Installation

Install directly from the GitLab repository using the project package URL.

```bash
npm install git+ssh://git@gitlab.com:vmn-soa/qoredata/ai-chatbot-js-package.git#
```

Or for HTTPS access:

```bash
npm install https://gitlab.com/vmn-soa/qoredata/ai-chatbot-js-package/-/archive/<branch-or-tag>/ai-chatbot-js-package-<branch-or-tag>.tar.gz
```

For private repo access, use SSH with your authorized GitLab key:

```bash
npm install git+ssh://git@gitlab.com:vmn-soa/qoredata/ai-chatbot-js-package.git#setup
```

If you need a direct tarball and the file is available in the branch, this form may work with the correct GitLab auth:

```bash
npm install https://gitlab.com/vmn-soa/qoredata/ai-chatbot-js-package/-/raw/setup/verifyme-ai-chatbot-0.1.0.tgz
```

> Repo: `git@gitlab.com:vmn-soa/qoredata/ai-chatbot-js-package.git`
> Generated package directory: `ai-chatbot-js-package/`

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
  },
  'https://web-widget.verifyme.ng/chatbot/latest/chatbot.iife.js'
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
