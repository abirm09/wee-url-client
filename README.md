# Welcome to WeeURL Link shortener web app

## 📚 Table of contents

- 📌 [Overview](#overview)
- 🔗 [Quick links](#quick-links)
- 🛠️ [Tech stack](#tech-stack)
- ✨ [Key features](#key-features)
- 🚀 [Getting Started](#getting-started)
  - ✅ [Prerequisites](#prerequisites)
  - 📦 [Installation](#installation)
  - 🔐 [Environment Variables](#environment-variables)
  - 🏃 [Running the App](#running-the-app)
- 📡 [API Reference](#api-reference)
- 🤝 [Contributing](#contributing)

## Overview

WeeURL is a secure, fast, scalable, and production-ready client app for shortening URL. Built with modern technology, it provides smart server-side caching, ensures high availability during peak usage, and enables cost-effective deployments.

[Back to top](#welcome-to-weeurl-link-shortener-web-app)

## Quick links

- [Client side app](https://weeurl.abirmahmud.top)
- [Client side GitHub repo](https://github.com/abirm09/wee-url-client)
- [Server url (EC2)](https://weeurl.srv.abirmahmud.top/api/v1)
- [Server url (vercel)](https://wee.url.abirmahmud.top/api/v1)
- [Server side GitHub repo](https://github.com/abirm09/wee-url-server)

[Back to top](#welcome-to-weeurl-link-shortener-web-app)

## Tech Stack

- **🚀 Runtime & Server**

  - Next.js
  - TypeScript
  - Vercel

- **💳 Payments & Media**

  - Stripe – Payment gateway

- **📦 Package & Build Tools**

  - Yarn – Package manager

- **🧪 Testing & Quality**

  - ESLint – Linting
  - Prettier – Code formatting
  - Husky – Git hooks
  - Lint-Staged – Run linters on staged files

- **🔧 Utilities & Others**
  - Redux.js – Global state management
  - dotenv – Environment variable loader

[Back to top](#welcome-to-weeurl-link-shortener-web-app)

## Key features

- 🔗 **Instant URL Shortening** – Convert long URLs into short, shareable links in seconds.
- 📈 **Click Analytics** – Track total clicks, geolocation, and device info.
- 🧑‍💻 **User Authentication** – Register, log in, TOP verification based access, and manage your own links.
- 🎨 **Custom Aliases** – Create personalized short URLs like `weeurl.srv.abirmahmud.top/abir123`.
- ☁️ **Media Upload Support** – Upload and attach user profile images via Cloudinary.
- 💳 **Stripe Integration** – Optional paid plans or premium link limits using Stripe.
- ⏳ **Link Expiration** – Set an expiration time for short links.
- 🛡️ **Rate Limiting** – Protects the server from spam and abuse.
- 🖼️ **EJS Views** – Server-rendered frontend for ads page for free users.

[Back to top](#welcome-to-weeurl-link-shortener-web-app)

## Getting Started

- ## Prerequisites

  - NodeJS v18 or later
  - yarn install
  - Stripe credentials
  - [WeeURL server](https://github.com/abirm09/wee-url-server)

- ## Installation

  Clone the project:

  ```bash
  git clone https://github.com/abirm09/wee-url-client.git
  ```

  Install dependencies:

  ```bash
  yarn
  ```

- ## Environment Variables

  Install dependencies:

  ```bash
  cp .env.local.example .env.local
  # Copy .env.local.example to .env.local and configure the environment variables.
  # Follow further instructions mentioned on .env.local.example file. Add all variables properly.
  ```

- ## Running the App

  Start server:

  ```bash
  yarn dev
  ```

[Back to top](#welcome-to-weeurl-link-shortener-web-app)

## API Reference

To get api docs please visit link below.

- [API docs](https://weeurl.srv.abirmahmud.top/api/v1/docs)

[Back to top](#welcome-to-weeurl-link-shortener-web-app)

## Contributing

- [MD Abir Mahmud](https://www.linkedin.com/in/abirm09/)

[Back to top](#welcome-to-weeurl-link-shortener-web-app)
