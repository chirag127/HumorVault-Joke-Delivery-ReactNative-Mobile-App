# HumorFlow: AI-Powered Joke Generator React Native Application

[![Build Status](https://img.shields.io/github/actions/workflow/status/chirag127/HumorFlow-AI-Powered-Joke-Generator-React-Native-App/ci.yml?style=flat-square)](https://github.com/chirag127/HumorFlow-AI-Powered-Joke-Generator-React-Native-App/actions/workflows/ci.yml)
[![Code Coverage](https://img.shields.io/codecov/c/github/chirag127/HumorFlow-AI-Powered-Joke-Generator-React-Native-App?style=flat-square)](https://codecov.io/gh/chirag127/HumorFlow-AI-Powered-Joke-Generator-React-Native-App)
[![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-blue?style=flat-square)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/chirag127/HumorFlow-AI-Powered-Joke-Generator-React-Native-App?style=flat-square)](https://github.com/chirag127/HumorFlow-AI-Powered-Joke-Generator-React-Native-App)
[![Tech Stack: React Native](https://img.shields.io/badge/Tech%20Stack-React%20Native%20%7C%20Expo-367278?style=flat-square)]()
[![Linter/Formatter: Biome](https://img.shields.io/badge/Linter%2FFormatter-Biome-6C69D1?style=flat-square)]()

--- 

**HumorFlow is a cutting-edge mobile application developed using React Native and Expo that harnesses the power of generative AI to deliver an endless stream of fresh, contextually relevant jokes on demand.** This repository encapsulates the complete client-side logic for a seamless, cross-platform comedic experience.

> ⭐ **Star this Repo** if you appreciate leveraging modern mobile development patterns with AI integration!

---

## 📐 Architecture Overview

This project adheres to modern mobile development best practices, emphasizing separation of concerns using a variant of Feature-Sliced Design (FSD) adapted for React Native projects, ensuring high cohesion and low coupling between presentation, business logic, and data layers.

mermaid
graph TD
    A[User Input/Interaction] --> B(Presentation Layer: UI Components);
    B --> C{Business Logic/State Management: Hooks/Redux Toolkit};
    C --> D[Data Layer: API Service (Axios/Fetch)];
    D -- External Call --> E(AI Joke Generation API - e.g., Gemini/OpenAI);
    E --> D;
    D --> C;
    C --> B;
    subgraph Mobile Client (React Native + Expo)
        A
        B
        C
        D
    end


## 📋 Table of Contents

1.  [HumorFlow: AI-Powered Joke Generator React Native Application](#humorflow-ai-powered-joke-generator-react-native-application)
2.  [Architecture Overview](#-architecture-overview)
3.  [Table of Contents](#-table-of-contents)
4.  [Key Features](#-key-features)
5.  [Technology Stack (Apex 2025 Standard)](#-technology-stack-apex-2025-standard)
6.  [🤖 AI Agent Directives (The Blueprint)](#-ai-agent-directives-the-blueprint)
7.  [Development & Setup](#-development--setup)
8.  [Contributing Guidelines](#-contributing-guidelines)
9.  [License](#-license)

## ✨ Key Features

*   **AI-Driven Comedy:** Generates unique jokes utilizing an external LLM API.
*   **Cross-Platform Compatibility:** Built with Expo for seamless deployment across iOS and Android.
*   **Modern UI/UX:** Utilizing high-performance rendering principles for snappy interaction.
*   **State Management:** Robust state handling ensuring jokes load asynchronously without UI freezing.

## 🛠️ Technology Stack (Apex 2025 Standard)

| Category | Technology | Rationale |
| :--- | :--- | :--- |
| **Core Framework** | React Native, Expo SDK 51+ | Maximum velocity and cross-platform reach. |
| **Language** | TypeScript 6.x (Strict Mode) | Enforcing compile-time safety across the codebase. |
| **Styling** | StyleSheet/NativeWind (Tailwind for RN) | Consistent, utility-first styling for rapid iteration. |
| **Linting/Formatting** | Biome (Linter/Formatter) | Ultra-fast, unified tooling for code quality enforcement. |
| **Testing** | Vitest (Unit/Component) & Playwright (E2E via EAS Build) | Comprehensive verification suite. |
| **Architecture** | Feature-Sliced Design (FSD Adaptation) | Strict module boundaries for maintainability. |

## 🤖 AI Agent Directives (The Blueprint)

<details><summary><strong>View Apex Architectural Mandates for Future Agents</strong></summary>

# SYSTEM: APEX TECHNICAL AUTHORITY & ELITE ARCHITECT (DECEMBER 2025 EDITION)

## 1. IDENTITY & PRIME DIRECTIVE
**Role:** You are a Senior Principal Software Architect and Master Technical Copywriter with **40+ years of elite industry experience**. You operate with absolute precision, enforcing FAANG-level standards and the wisdom of "Managing the Unmanageable."
**Context:** Current Date is **December 2025**. You are building for the 2026 standard.
**Output Standard:** Deliver **EXECUTION-ONLY** results. No plans, no "reporting"—only executed code, updated docs, and applied fixes.
**Philosophy:** "Zero-Defect, High-Velocity, Future-Proof."

---

## 2. INPUT PROCESSING & COGNITION
*   **SPEECH-TO-TEXT INTERPRETATION PROTOCOL:**
    *   **Context:** User inputs may contain phonetic errors (homophones, typos).
    *   **Semantic Correction:** **STRICTLY FORBIDDEN** from executing literal typos. You must **INFER** technical intent based on the project context.
    *   **Logic Anchor:** Treat the `README.md` as the **Single Source of Truth (SSOT)**.
*   **MANDATORY MCP INSTRUMENTATION:**
    *   **No Guessing:** Do not hallucinate APIs. Use `linkup`/`brave` to search for **December 2025 Industry Standards**.
    *   **Validation:** Use `docfork` to verify *every* external API signature (specifically the AI provider's endpoint).
    *   **Reasoning:** Engage `clear-thought-two` to architect complex flows *before* writing code.

---

## 3. CONTEXT-AWARE APEX TECH STACKS (LATE 2025 STANDARDS)
**Directives:** Detect the project type and apply the corresponding **Apex Toolchain**.

*   **PRIMARY SCENARIO: WEB / APP / GUI (Modern Frontend/Mobile)**
    *   **Stack:** This project, `HumorFlow-AI-Powered-Joke-Generator-React-Native-App`, mandates **TypeScript 6.x (Strict)**, **Vite 7** (for tooling compatibility/e.g., Babel replacements), **TailwindCSS v4 (via NativeWind)**, and **EAS Build (Expo)**.
    *   **Lint/Test:** **Biome** (Speed Linter/Formatter) + **Vitest** (Unit) + **Playwright** (E2E).
    *   **Architecture:** Feature-Sliced Design (FSD) adapted for React Native Modules.
    *   **AI Integration:** All AI service wrappers MUST implement exponential backoff and request throttling logic adhering to the provider's documented limits.

## 4. ARCHITECTURAL PRINCIPLES ENFORCEMENT

*   **SOLID:** Paramount. Specifically, the `ApiService` module must adhere to the **Single Responsibility Principle** (SRP) by only handling transport, leaving parsing and business validation to the Service/Feature layer.
*   **DRY:** Logic for loading states, error toasts, and retry mechanisms must be centralized in reusable hooks or context providers.
*   **YAGNI:** Avoid implementing complex features (e.g., user accounts, persistent storage) unless directly required for joke fetching/display functionality.

## 5. VERIFICATION & EXECUTION COMMANDS

*   **Setup & Bootstrap:**
    bash
    git clone https://github.com/chirag127/HumorFlow-AI-Powered-Joke-Generator-React-Native-App
    cd HumorFlow-AI-Powered-Joke-Generator-React-Native-App
    npx create-expo-app . --template blank-typescript # (If structure needed re-initialization)
    npm install # (or uv/yarn equivalent based on package manager)
    
*   **Quality Gates:**
    *   `npm run lint`: Execute Biome check.
    *   `npm run format`: Execute Biome format.
    *   `npm run test:unit`: Run Vitest suite.
    *   `npm run build:dev`: Start development server via Expo.

</details>

## 🚀 Development & Setup

Follow these steps to establish the development environment and run the application locally.

### Prerequisites

1.  Node.js (LTS or higher)
2.  npm/Yarn/pnpm
3.  Expo Go App installed on your mobile device or an active emulator/simulator.

### Installation Steps

bash
git clone https://github.com/chirag127/HumorFlow-AI-Powered-Joke-Generator-React-Native-App.git
cd HumorFlow-AI-Powered-Joke-Generator-React-Native-App
npm install
# Set environment variables (e.g., .env file) for your AI_API_KEY


### Execution Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| **Start Dev** | `npm run start` | Launches the Expo development server. |
| **Lint Check** | `npm run lint` | Runs Biome against all source files. |
| **Format Fix** | `npm run format` | Auto-formats files using Biome. |
| **Unit Tests** | `npm run test:unit` | Executes Vitest unit tests. |
| **E2E Test** | `npm run test:e2e` | Runs Playwright end-to-end verification. |

## 🤝 Contributing Guidelines

Please refer to the comprehensive contribution guide for standards on code quality, pull request structure, and issue reporting.

[CONTRIBUTING.md](./.github/CONTRIBUTING.md)

## 🛡️ Security

For vulnerability reports or security concerns, please consult our dedicated security policy.

[SECURITY.md](./.github/SECURITY.md)

## 📜 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License**. See the [LICENSE](./LICENSE) file for details.
