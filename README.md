# HumorVault-Joke-Delivery-ReactNative-Mobile-App

[![Build Status](https://img.shields.io/github/actions/workflow/status/chirag127/HumorVault-Joke-Delivery-ReactNative-Mobile-App/ci.yml?label=Build&style=flat-square)](https://github.com/chirag127/HumorVault-Joke-Delivery-ReactNative-Mobile-App/actions/workflows/ci.yml)
[![Code Coverage](https://img.shields.io/codecov/c/github/chirag127/HumorVault-Joke-Delivery-ReactNative-Mobile-App?label=Coverage&style=flat-square)](https://codecov.io/gh/chirag127/HumorVault-Joke-Delivery-ReactNative-Mobile-App)
[![License](https://img.shields.io/github/license/chirag127/HumorVault-Joke-Delivery-ReactNative-Mobile-App?style=flat-square)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/chirag127/HumorVault-Joke-Delivery-ReactNative-Mobile-App?style=flat-square)](https://github.com/chirag127/HumorVault-Joke-Delivery-ReactNative-Mobile-App)

### 🌟 Star ⭐ this Repo

--- 

HumorVault is an engaging React Native mobile application designed for seamless delivery of curated jokes across various categories. Built with Expo, it provides a delightful user experience for instant entertainment and a quick laugh on the go, adhering to modern Cross-Platform standards.

## 🏛️ Architecture Overview

The application utilizes a modern React Native structure driven by Expo Modules, focusing on modularity, performance, and maintainability.

ascii
HumorVault
├── src/
│   ├── components/     # Reusable UI Primitives (Atom/Molecule Level)
│   ├── features/       # Feature Sliced Design (FSD) Modules (e.g., joke-listing, favorites)
│   ├── navigation/     # React Navigation Configuration
│   ├── state/          # State Management (e.g., Zustand/Redux Toolkit)
│   └── services/
│       └── api/
│           └── joke-fetcher.ts # Data layer abstraction
└── App.tsx


## 📜 Table of Contents

1.  [HumorVault-Joke-Delivery-ReactNative-Mobile-App](#humorvault-joke-delivery-reactnative-mobile-app)
    *   [Architecture Overview](#-architecture-overview)
    *   [Table of Contents](#-table-of-contents)
    *   [Core Technology Stack](#-core-technology-stack)
    *   [⚡ Installation & Setup](#-⚡-installation--setup)
    *   [🤖 AI Agent Directives (APEX Standard)](#--ai-agent-directives-apex-standard)
    *   [Development Principles](#-development-principles)
    *   [Contributing](#-contributing)
    *   [License](#-license)

## 🧩 Core Technology Stack

| Category | Technology | Rationale (2026 Standard) |
| :--- | :--- | :--- |
| **Framework** | React Native (Expo SDK 52+) | Maximum cross-platform reach with minimal native overhead. |
| **Language** | TypeScript 6.x (Strict Mode) | Enforcing strong typing across the entire codebase for zero-defect delivery. |
| **Styling** | StyleSheet / NativeWind (Tailwind for RN) | Utility-first styling for rapid, consistent UI development. |
| **Linting/Formatting** | Biome (1.8+) | Unified, high-speed linting and formatting engine. |
| **Testing** | Vitest & Playwright (E2E) | Fast unit testing via Vitest; robust E2E verification using Playwright for mobile interaction simulation. |

## ⚡ Installation & Setup

This project assumes Node.js (v20+) and Expo CLI are installed globally.

1.  **Clone the Repository:**
    bash
    git clone https://github.com/chirag127/HumorVault-Joke-Delivery-ReactNative-Mobile-App.git
    cd HumorVault-Joke-Delivery-ReactNative-Mobile-App
    

2.  **Environment & Dependency Management (Using `uv` approach philosophy via npm/yarn):**
    bash
    # Install project dependencies
    npm install
    # Alternatively, using yarn:
    # yarn install
    

3.  **Start Development Server:**
    bash
    npx expo start
    

### Scripts

| Command | Description |
| :--- | :--- |
| `npm run lint` | Run Biome check across all TS/TSX files. |
| `npm run format` | Automatically format code using Biome. |
| `npm run test` | Execute unit tests via Vitest. |
| `npm run test:e2e` | Run End-to-End Playwright scenarios. |
| `npx expo prebuild` | Generate native Android/iOS projects (if required for native modules). |

## 🤖 AI Agent Directives (APEX Standard)

<details>
<summary>Click to reveal Apex System Directives for Automated Maintenance (AGENTS.md Alignment)</summary>

# AGENTS.md: Automated Maintenance & Compliance Protocol

**System Context:** This repository adheres to FAANG-level standards for mobile application development, prioritizing performance, strict typing, and automated verification.

## 1. Architectural Alignment
*   **Pattern:** Strict adherence to **Feature-Sliced Design (FSD)** principles within the `/features` directory. Components must be strictly decoupled.
*   **Typing:** All TypeScript files **MUST** use `"strict": true` in `tsconfig.json`. No implicit `any` allowed.
*   **DRY Principle:** All presentation logic (styles, non-reusable components) must be collocated within the feature slice it serves.

## 2. Toolchain Enforcement (The 2026 Mobile Stack)
*   **Linter/Formatter:** **Biome** is the SSOT for code quality. Any failing lint check automatically fails CI checks.
*   **Dependency Management:** Use `npm` or `yarn` workspaces if project scales beyond a single codebase; otherwise, maintain a flat dependency structure managed by the package manager.
*   **Testing Mandate:** 
    *   Unit tests (`npm run test`) must achieve **>85% line coverage** on all business logic (services, state reducers).
    *   E2E testing (`npm run test:e2e`) must cover the critical paths: App Launch -> Category Selection -> Joke Display -> Favorite Action.

## 3. Security Posture (Mobile Focus)
*   **Credential Storage:** Never hardcode API keys directly in source code. Utilize Expo SecureStore or OS Keychains via appropriate wrappers.
*   **Data Ingress Validation:** All data received from the joke API **MUST** be validated against TypeScript interfaces immediately upon receipt from the network layer.

## 4. Verification Commands (For Automated Agents)
*   **Quality Gate Check:** `npm run lint && npm run test`
*   **Startup Test:** `npx expo start --no-tunnel` (to ensure local server initializes without network dependency interference)

</details>

## Development Principles

This project is maintained based on established Architectural Wisdom:

*   **SOLID:** Core services and data providers must demonstrate Single Responsibility and Dependency Inversion.
*   **DRY (Don't Repeat Yourself):** Utilize generic components heavily.
*   **YAGNI (You Ain't Gonna Need It):** Avoid premature abstraction or over-engineering for features not yet defined.

## Contributing

We welcome contributions that improve performance, stability, or user experience. Please adhere to the contribution guidelines outlined in `.github/CONTRIBUTING.md`.

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License**. See the [LICENSE](LICENSE) file for details.
