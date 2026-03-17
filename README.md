# Agentic Context Syphon ⚡
**Engineered for MLH Global Hack Week**

## Executive Overview
The Agentic Context Syphon is a high-performance, Manifest V3 compliant Chrome Extension designed to eliminate friction between web research and Generative AI ingestion pipelines. Rather than manually copying and formatting data, this tool transforms the browser into an active telemetry sensor. With a single click, it extracts the active tab's metadata and structures it into a machine-readable prompt, injecting it directly into the system clipboard.

## Strategic Value & Use Cases
This architecture is built for advanced engineering workflows. It is specifically optimized for developers actively building AI agents with an Agent Development Kit (ADK). When running complex agentic projects in terminal environments, this extension allows you to instantly syphon live web context and feed it directly into your local or cloud-based AI models without breaking your development momentum or context window. 

## Core Capabilities
* **Zero-Latency Extraction:** Instantly parses the `chrome.tabs` API for real-time URL and title telemetry.
* **Pre-Structured Payloads:** Formats data with system-level prompt tags (`[SYSTEM: INGEST CONTEXT]`) strictly optimized for LLM and agentic comprehension.
* **Frictionless UI:** A hyper-minimalist, dark-mode execution terminal built for speed, not bloat.
* **Secure Architecture:** Operates entirely locally with zero external dependencies, strictly adhering to modern Chrome security mandates.

## Deployment Protocol (Local Execution)
To initialize this asset in your local environment:
1. Clone this repository to your secure local machine.
2. Navigate to `chrome://extensions/` in your Chromium-based browser.
3. Toggle **Developer mode** ON (top right corner).
4. Select **Load unpacked** and target the root directory of this repository.
5. Pin the extension to your toolbar. Navigate to any target web page and click "INITIATE SYPHON" to capture the payload.

## Technical Foundation
* **Frontend:** HTML5, CSS3 (Terminal Aesthetic)
* **Logic Engine:** Vanilla JavaScript (ES6+)
* **Infrastructure:** Chrome Extensions API (Manifest V3), Clipboard API

---
*Conceptualized and deployed for MLH Global Hack Week. Architecting the future of seamless human-AI workflow integration.*
