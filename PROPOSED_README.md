# HumorVault-Joke-Delivery-ReactNative-Mobile-App

[![Build Status](https://img.shields.io/github/actions/workflow/status/chirag127/HumorVault-Joke-Delivery-ReactNative-Mobile-App/ci.yml?branch=main&style=flat-square)](https://github.com/chirag127/HumorVault-Joke-Delivery-ReactNative-Mobile-App/actions/workflows/ci.yml)
[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey?style=flat-square)](https://creativecommons.org/licenses/by-nc/4.0/)
[![GitHub Stars](https://img.shields.io/github/stars/chirag127/HumorVault-Joke-Delivery-ReactNative-Mobile-App?style=flat-square)](https://github.com/chirag127/HumorVault-Joke-Delivery-ReactNative-Mobile-App)

HumorVault is a React Native mobile application for delivering curated jokes across various categories. Built with Expo, it offers a delightful user experience for instant entertainment on the go. Star ⭐ this repo!

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [AI Agent Directives](#ai-agent-directives)
- [Development](#development)
  - [Setup](#setup)
  - [Scripts](#scripts)
  - [Principles](#principles)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Curated Jokes:** Access a wide range of jokes across different categories.
- **User-Friendly Interface:** Enjoy a seamless and intuitive user experience.
- **Cross-Platform:** Available on both iOS and Android devices.
- **Instant Entertainment:** Get a quick laugh anytime, anywhere.
- **Expo Integration:** Built with Expo for easy development and deployment.

## Architecture


├── App.js                # Entry point of the application
├── components/
│   ├── JokeCard.js       # Component to display individual jokes
│   └── CategoryList.js   # Component to display joke categories
├── screens/
│   ├── HomeScreen.js     # Main screen with joke categories
│   └── JokeScreen.js     # Screen displaying jokes from a selected category
├── utils/
│   └── api.js            # API functions for fetching jokes
├── app.json              # Expo configuration file
└── ...


## AI Agent Directives

<details>
  <summary>Click to expand</summary>

  ### Tech Stack Definition
  
  This project leverages **JavaScript** with **React Native** and **Expo**. Key tools include **npm** or **yarn** for package management, **ESLint** for linting, and **Jest** for unit testing.

  *   **React Native:** A framework for building native mobile apps using JavaScript and React.
  *   **Expo:** A platform for universal React applications, providing tools and services for building, deploying, and updating React Native apps.
  *   **JavaScript:** The primary language for building the application logic and UI.

  ### Architectural Patterns

  *   **Component-Based Architecture:** The UI is built using reusable React components, promoting modularity and maintainability.
  *   **Separation of Concerns:** Dividing the application into distinct sections, each addressing a separate concern.
  *   **Functional Programming:** Using pure functions and immutable data to improve code clarity and reduce side effects.

  ### Verification Commands

  1.  **Install Dependencies:**

      bash
      npm install
      # or
      yarn install
      

  2.  **Run ESLint:**

      bash
      npm run lint
      # or
      yarn lint
      

  3.  **Run Unit Tests:**

      bash
      npm run test
      # or
      yarn test
      

</details>

## Development

### Setup

1.  Clone the repository:

    bash
    git clone https://github.com/chirag127/HumorVault-Joke-Delivery-ReactNative-Mobile-App.git
    cd HumorVault-Joke-Delivery-ReactNative-Mobile-App
    

2.  Install dependencies:

    bash
    npm install
    # or
    yarn install
    

3.  Start the Expo development server:

    bash
    npm start
    # or
    yarn start
    

### Scripts

| Script        | Description                           |
| ------------- | ------------------------------------- |
| `start`       | Starts the Expo development server    |
| `android`     | Runs the app on an Android emulator   |
| `ios`         | Runs the app on an iOS simulator       |
| `web`         | Runs the app in a web browser          |
| `test`        | Runs the unit tests                   |
| `lint`        | Runs ESLint for code linting          |

### Principles

- **SOLID:** Adhere to the SOLID principles of object-oriented design.
- **DRY:** Follow the Don't Repeat Yourself principle to avoid code duplication.
- **YAGNI:** Implement features only when they are needed, following the You Ain't Gonna Need It principle.

## Contributing

Contributions are welcome! Please see the [Contributing Guidelines](https://github.com/chirag127/HumorVault-Joke-Delivery-ReactNative-Mobile-App/blob/main/.github/CONTRIBUTING.md) for details.

## License

This project is licensed under the [CC BY-NC 4.0 License](https://creativecommons.org/licenses/by-nc/4.0/).
