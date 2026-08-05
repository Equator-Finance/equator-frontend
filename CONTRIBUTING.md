# Contributing to Equator Frontend (`equator-frontend`)

Thank you for contributing to the web user interface for **Equator Finance**!

---

## 🛠 Local Setup

### 1. Prerequisites
* **Node.js:** Version 20+
* **Package Manager:** `npm` or `pnpm`
* **Stellar Wallet:** [Freighter Browser Extension](https://www.freighter.app/)

### 2. Getting Started
```bash
# Clone the repository
git clone https://github.com/Equator-Finance/equator-frontend.git
cd equator-frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

Open `http://localhost:3000` in your browser to view the app.

---

## 📜 Development Guidelines

### 1. UI Principles & Styling
* Use Vanilla CSS / CSS Modules for custom styling.
* Design for institutional quality: modern typography, dark mode contrast, responsive layouts, clear error/loading states.

### 2. Component Guidelines
* Keep components focused, reusable, and modular (e.g. separate `ImporterPortal` from `DeskTerminal`).
* Ensure all interactive wallet features gracefully handle disconnected states.

### 3. Submitting a Pull Request
* Run `npm run lint` and `npm run test` before opening a PR.
* Provide screenshots or screen recordings of UI changes in your PR description.
