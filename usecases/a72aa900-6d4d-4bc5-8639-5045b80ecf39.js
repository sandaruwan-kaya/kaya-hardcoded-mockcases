localStorage.setItem(
  "demo_a72aa900-6d4d-4bc5-8639-5045b80ecf39",
  JSON.stringify([
    {
      message:
        "Please analyze this transaction batch for any anomalies or compliance risks",
      response: `
### **Supervisor Agent is thinking...**

The uploaded transaction file containing **30 equity and bond trade entries** has been successfully ingested. Initiating the **multi-agent surveillance workflow** to evaluate potential anomalies, cross-reference institutional profiles, and assess transaction-level risks. The system is leveraging both **real-time signals and historical context** via the **KAYA AI Platform’s internal knowledge bases**.

### **Agent Execution Overview**

| Agent                   | Function                                                        |
| ----------------------- | --------------------------------------------------------------- |
| Context Agent           | Gathers client metadata and KYC history from MCP Knowledge Base |
| Pattern Discovery Agent | Identifies deviations from historical trading behavior          |
| Risk Insight Agent      | Assigns risk scores using Instrument Risk DB and STOR history   |
| Decision-Policy Agent   | Finalizes disposition using Explainable Risk Engine (XRE)       |

### **Context Agent is thinking...**

Client context was retrieved from the **MCP Knowledge Base**, which houses real-time KYC data, historical activity summaries, and past compliance notes. The agent also accessed the **Communication History Vault** to review any explanatory PM notes or override instructions.

| Client ID | Entity Name         | Risk Tier       | Prior Compliance Flags | Trading Profile Summary                          |
| --------- | ------------------- | --------------- | ---------------------- | ------------------------------------------------ |
| CF-2191   | Astra Macro Fund    | Tier 3 – Low    | 0 STORs                | Macro fund focused on ETF derivatives in Asia    |
| CF-7624   | Baylight Holdings   | Tier 2 – Medium | 1 STOR (Mar 2024\)     | High-yield bond trader with moderate risk        |
| CF-9910   | North Ridge Capital | Tier 1 – High   | 3 alerts in 2 quarters | High-frequency equity trading desk with leverage |

---

### **Pattern Discovery Agent is thinking...**

Used **trade timestamp, volume, counterparties, and instruments** to compare each transaction to the client’s **90-day behavioral signature**.

| Transaction ID | Pattern Score (0–10) | Deviation Flag | Noted Anomalies                                   |
| -------------- | -------------------- | -------------- | ------------------------------------------------- |
| TXN-1024       | 8.9                  | YES            | Off-hour EM ETF trade with volume spike           |
| TXN-1042       | 9.4                  | YES            | Unusual counterparty in offshore jurisdiction     |
| TXN-1051       | 8.6                  | YES            | Repeated equity block trades within tight windows |

### **Risk Insight Agent is thinking...**

Mapped each transaction against the **Instrument Risk Matrix**, **Historical STOR Index**, and **Counterparty Watchlist** to assign a **weighted compliance risk score**.

| TXN ID | Instrument       | Risk Level | Counterparty Flag | Related STORs          | Risk Score |
| ------ | ---------------- | ---------- | ----------------- | ---------------------- | ---------- |
| 1024   | EM ETF           | High       | No                | None                   | 8.5        |
| 1042   | Corp Bond        | Medium     | YES               | 1 (Mar 2024\)          | 9.1        |
| 1051   | Large-Cap Equity | High       | No                | Similar flagged trades | 7.8        |

### **Important:** Review the attached JIRA tickets and "Approve" or "Reject" to escalate the process.

- <strong>[TXN-1024](https://techlabsglobal.atlassian.net/browse/TXN-2?target=_blank)</strong>
- <strong>[TXN-1051](https://techlabsglobal.atlassian.net/browse/TXN-3?target=_blank)</strong>
- <strong>[TXN-1042](https://techlabsglobal.atlassian.net/browse/TXN-1?target=_blank)</strong>

<details>

<summary><strong>Final Decision Reasoning (Click to Expand)</strong></summary>

**TXN-1042 – REJECTED & Escalated for STOR Filing**

-   **Offshore Routing Pattern:** Executed via a Cayman Islands entity with no prior transaction history with Baylight Holdings — breaching internal counterparty policy

-   **Historical Correlation:** Strong similarity to a **March 2024 STOR** involving layered bond trades through a similar routing channel

-   **Time Deviation:** Placed outside standard operating hours (executed at 00:43 UTC vs. 09:00–18:00 UTC)

-   **No PM Override Found:** No communication or justification found in PM Comms Vault

-   **Explainable Risk Engine (XRE):** Triggered due to cumulative score \>9.0 and match with escalation policy 7.3.2

-   **Action Taken:** Transaction Rejected and STOR auto-generated

**TXN-1024 – SOFT APPROVAL with PENDING APPROVER INTERVENTION**

-   **Volume Spike:** 3.2x higher than Astra Macro Fund’s usual average trade size

-   **Time Anomaly:** Executed during Asia market overlap, outside US standard hours

-   **Context Recovery:** PM note found referencing pre-cleared macro hedge strategy dated 2024-05-15

-   **Behavior Match:** Similar execution pattern seen in Q4 2023 rebalancing activity

-   **Conclusion:** Validated using MCP \+ Comms Vault context. Logged with cautionary tag for oversight

**TXN-1051 – SOFT APPROVAL with PENDING APPROVER INTERVENTION**

-   **Repetitive Block Trades:** Detected 3 consecutive large-cap equity trades in rapid succession

-   **Strategy Crosscheck:** Matches "Volatility Dip Buy" pattern pre-approved for North Ridge Capital

-   **Source Validation:** Confirmed against Behavioral Pattern Archive – identical to December 2023 example

-   **Override Match:** MCP Compliance Profile shows clearance for this tactic within $300K range (this set was $220K)

-   **Conclusion:** Within pre-cleared range. Logged to compliance watch for follow-up

### **Decision Compliance Mapping**

| Decision | Basis for Approval/Rejection              | Internal System Used                     |
| -------- | ----------------------------------------- | ---------------------------------------- |
| TXN-1024 | PM justification \+ risk profile          | MCP \+ Comms Vault \+ XRE                |
| TXN-1042 | Offshore counterparty \+ STOR correlation | Counterparty Lookup \+ STOR Index \+ XRE |
| TXN-1051 | Matches known equity strategy pattern     | Pattern Archive \+ MCP \+ XRE            |

</details>
`,
      apiCalls: [
        {
          name: "sendEmail",
          trigger: "after",
          buttonId: "email",
          response: "✅ Email sent successfully!",
          method: "POST",
          url: "https://kaya-mock-api-938786674786.us-central1.run.app/health-first/email",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          bodyTemplate:
            '{\n  "subject": "STOR Submission – TXN-1042 | Falconridge Partners LP | Official Notification of Suspicious Transaction",\n  "to": ["kasunib@kayatech.com"],\n  "content": "<div style=\\"font-family: Arial, sans-serif; color: #333; line-height: 1.5; max-width: 700px;\\"><p>Dear Compliance Officer,</p><p>This communication serves as an <strong>official notification and submission of a Suspicious Transaction Order Report (STOR)</strong> pursuant to <strong>Article 16 of the EU Market Abuse Regulation (MAR)</strong>. The transaction detailed below has been formally <strong>flagged, reviewed, and logged into our surveillance system</strong> and has been submitted to the Central Bank of Ireland for further regulatory action.</p><h3>Transaction Details</h3><table border=\\"1\\" cellpadding=\\"6\\" cellspacing=\\"0\\" style=\\"border-collapse: collapse; width: 100%;\\"><tr><td><strong>Entity</strong></td><td>Falconridge Partners LP</td></tr><tr><td><strong>Transaction ID</strong></td><td>TXN-1042</td></tr><tr><td><strong>Instrument</strong></td><td>High-Yield Corporate Bond</td></tr><tr><td><strong>Trade Value</strong></td><td>$1,200,000</td></tr><tr><td><strong>Timestamp (UTC)</strong></td><td>2025-06-14T14:32:07Z</td></tr></table><h3>Flagging Criteria & Rationale</h3><ul><li>Executed <strong>5 minutes prior to market close</strong>, with <strong>volume significantly above standard thresholds</strong></li><li><strong>No associated portfolio manager comment or trader justification</strong> present in communications log</li><li><strong>Strong behavioral correlation</strong> with a January 2025 transaction previously escalated under STOR-CF-895</li><li>Trade <strong>breaches internal pattern anomaly thresholds</strong>, triggering Explainable Risk Engine (XRE) escalation</li></ul><h3>Vault-Based Contextual Enrichment</h3><ul><li><strong>Counterparty</strong> classified as <strong>\\"Watchlist – Liquidity Risk\\"</strong> since Q3 2024</li><li><strong>Trader involved</strong> had prior surveillance alerts in unrelated ETF trades</li><li><strong>Communication Vault</strong> yielded no override memo or internal clearance on record</li></ul><h3>Final Determination</h3><ul><li><strong>Transaction Status:</strong> Rejected</li><li><strong>Disposition:</strong> Marked as Suspicious</li><li><strong>Regulatory Filing:</strong> STOR successfully submitted to the <strong>Central Bank of Ireland</strong> via Compliance Submission API</li><li><strong>Internal Logging:</strong> All system interactions and enrichment trails recorded in the compliance audit trail</li></ul><h3>Session Summary Dashboard</h3><table border=\\"1\\" cellpadding=\\"6\\" cellspacing=\\"0\\" style=\\"border-collapse: collapse; width: 100%;\\"><tr><td><strong>Total Transactions Reviewed</strong></td><td>30</td></tr><tr><td><strong>Flagged by AI</strong></td><td>3</td></tr><tr><td><strong>Approved</strong></td><td>2</td></tr><tr><td><strong>Rejected</strong></td><td>1</td></tr><tr><td><strong>STOR Filed</strong></td><td>1</td></tr><tr><td><strong>PM Overrides Retrieved</strong></td><td>1</td></tr><tr><td><strong>Counterparty Issues Found</strong></td><td>1</td></tr></table><p>Please consider this report part of our <strong>formal STOR communication framework</strong>, aligned with <strong>internal surveillance obligations and Article 16 MAR guidelines</strong>.</p><p>For any queries or to request supplementary documentation, please contact the undersigned system compliance point.</p><p>Best regards,<br/><strong>KAYA AI Surveillance Agent</strong><br/>Surveillance Automation Platform<br/>Internal Reference: XRE-Flag-Threshold 9.1+</p></div>"\n}',
          waitingConfirmation: true,

          // Message to display during waiting state
          waitingMessage:
            "🚨 Awaiting approval on flagged transactions.\nTXN-1024, TXN-1042, and TXN-1051 require review.\nPlease approve or reject each transaction to proceed with settlement or escalation.",

          // Delay in milliseconds (used for timeout fallback)
          confirmationDelay: 5000,

          // Trigger mechanism: 'websocket' or 'timeout'
          confirmationTrigger: "websocket",

          // WebSocket URL for real-time communication
          websocketUrl: `wss://kaya-mock-api-938786674786.us-central1.run.app/health-first/websocket`,

          // Event type to listen for on the WebSocket
          websocketEvent: "confirmation",

          // Message to display after confirmation is received
          confirmationMessage: "email_confirmation_summary_response",
        },
      ],
    },
    {
      message: "email_confirmation_summary_response",
      response: `
**🔍 Review complete.**

- TXN-1024: ✅ Approved
- TXN-1051: ✅ Approved
- TXN-1042: ❌ Rejected (STOR filed and compliance escalation triggered)

Settlement initiated for approved trades. Surveillance logs have been updated accordingly.
`,
    },
  ])
);
