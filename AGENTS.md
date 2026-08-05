# AI Agent Development Guidelines (`equator-frontend`)

This repository is configured for an **AI-Native Stellar Development Workflow**.

---

## 🛠 Active AI Resources & Tools

### 1. Raven Remote MCP Server (`https://raven.stellar.buzz`)
This repository includes `.mcp.json` connecting your AI assistant to **Raven**, the remote Stellar Model Context Protocol (MCP) server.
* Use `search` to query live Stellar frontend patterns, wallet integration guides, and anchor specs.
* Use `execute` to test contract invocation XDRs against Stellar Testnet.

### 2. Stellar Developer Skills
Official Stellar developer skills are located in `.github/skills/`:
* 🧠 `dapp`: Guidelines for building dApps, `@stellar/freighter-api`, and transaction building.
* 🧠 `data`: Guidelines for querying Horizon and Soroban RPC endpoints from JavaScript/TypeScript.
* 🧠 `standards`: Guidelines for Stellar Ecosystem Proposals (SEP-24/SEP-31 Anchor flows).

### 3. Documentation Context (`llms.txt`)
AI assistants can reference the structured documentation index at:
* 🌐 `https://developers.stellar.org/llms.txt`

---

## 🤖 Rules for AI Assistants Working on Frontend

1. **Tailwind CSS & Shadcn UI:** Use Tailwind utility classes for all styling.
2. **Freighter Wallet Error Handling:** Always check `isConnected()` before attempting `getPublicKey()` or signing XDRs.
3. **Soroban Transaction Invocations:** Construct Soroban contract call XDRs using `@stellar/stellar-sdk` and handle simulated transaction fee estimation prior to signing.
