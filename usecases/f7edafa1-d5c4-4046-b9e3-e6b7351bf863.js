localStorage.setItem(
  "demo_f7edafa1-d5c4-4046-b9e3-e6b7351bf863",
  JSON.stringify([
    {
      message: "Trigger trade analysis",
      response: `
🤖 **Anomaly Agent is thinking...** 

> I’ve received a new order. Let’s check baselines and compute anomalies. 

### Baseline Retrieval
| Entity           | Feature                     | Observed Value | Baseline Value | Deviation        | Comments                     |
|------------------|-----------------------------|----------------|----------------|------------------|------------------------------|
| Trader T-A       | Order-to-trade ratio        | 1.0            | 1.4            | ↓ −0.4           | 28% lower                    |
|                  | Median resting time         | 95s            | 120s           | ↓ −25s           | -                            |
|                  | Directional bias (net buy)  | +18%           | +8%            | ↑ +10%           | more aggressive buying       |
| Desk EQD-1       | Participation rate (POV)    | 12.9%          | 7%             | ↑ +5.9%          | over baseline by ~84%        |
|                  | Portfolio symmetry          | +9%            | ±3%            | ↑ 12%            | tilt to buy-side             |
|                  | Volatility context σ5m/σ1d  | 0.88           | 0.60           | ↑ +0.28          | 47% higher                   |
| Instrument ACMX  | Slippage vs mid             | −8 bps         | ≤ 2 bps        | ↓ −10            | bps advantage                    |
|                  | Intraday volatility (5m)    | 1.2%           | 0.9%           | ↑ +0.3%          | 33% higher                   |

### Risk Score & SHAP 

- Weighted risk score = 88/100 (Threshold: 74) 
- Alert generated

| Rank | Feature                     | Residual vs Baseline      | SHAP Impact |
|------|-----------------------------|---------------------------|-------------|
| 1    | Price slippage vs mid       | -8 bps (vs ≤2bps)         | +0.31       |
| 2    | Desk participation (POV)    | 12.9% (vs 7%)             | +0.23       |
| 3    | Volatility context σ5m/σ1d  | 0.88 (vs 0.60)            | +0.19       |
| 4    | Sequencing anomaly detected | Yes                       | +0.11       |
| 5    | Trader order-to-trade ratio | 1.0 (vs 1.4)              | +0.07       |

### Agent Summary
| Input (Transaction)       | Baseline Deviation Highlights               | Models Applied                            | Risk Score | Alert | SHAP Drivers (Top 3)         |
|---------------------------|---------------------------------------------|-------------------------------------------|------------|-------|------------------------------|
| O-1004, BUY 300 @ $4.95 ACMX | POV ↑ to 12.9%, Slippage -8bps, Volatility ↑ 0.88 | Auto-encoder (rare), iForest (outlier), DBSCAN (noise) | 88/100     | Yes | Slippage, POV spike, Volatility shift |

---

🤖 **Context Agent is thinking...** 

> An alert has been raised. I’ll now gather supporting evidence from communications, news, and past cases.

### Vector Search over Communications

- Scope: ±15 minutes around the transaction (09:50–10:20) 
- Hits: 2 relevant communications 

| Msg ID    | Sender           | Receiver         | Timestamp | Extract                                              |
|-----------|------------------|------------------|-----------|------------------------------------------------------|
| CHAT-552  | Trader T-A       | Desk Head EQD-1  | 10:00:45  | “keep leaning on the offers, we’ll scoop it back later n square up. just push it thru for now.” |
| EMAIL-212 | External contact | Trader T-A       | 09:55:02  | “seeing acmx heavy, opp to grab cheap size.”       |

### Sentiment & Intent Classification
- **Classifier results:** 
    - CHAT-552 → flagged “spoof / layering tendency” 
    - EMAIL-212 → flagged “tip / opportunistic buy” 
- Confidence: 0.89 (high) 

### Market News Context 
- **Source:** Market news API 
- **Headline (09:58):** “ACMX quarterly results leak: revenue miss expected” 
- **Impact:** Negative sentiment → aligns with sell-side pressure in book 

### Prior Case Database Reference
- Match found: Case #MAR-2019-142 (“Layering & Spoofing in mid-cap tech stock”) 
- Similarities: rapid layering of sell orders, opportunistic buy at depressed mid-price

### Draft Narrative

**Narrative Draft:**
“Trader T-A placed multiple concentric sell orders at 10:01, followed by a BUY at $4.95 (ACMX). Communications indicate intent to spoof (‘lean on the offers… scoop it back’). Market news added pressure, exploited to gain favorable fill. Pattern consistent with probable layering/spoofing under MAR Article 12.” 

### Context Agent Summary
| Input (Alerted Trade)       | Evidence Sources Queried               | Key Findings                                      | Classification Outcome      |
|-----------------------------|----------------------------------------|---------------------------------------------------|-----------------------------|
| O-1004, BUY 300 @ $4.95 ACMX | Vector search: chat/email; Market news; Prior cases | Chat flagged spoof intent, email flagged tip, news showed negative drift, prior case matched layering | Context confirms suspicious intent |

---

🤖 **Decision-Policy Agent is thinking...** 

> This trade was flagged anomalous, enriched with context evidence, and linked to spoofing behavior. I now check against policy and regulatory frameworks.

### Inputs Consolidated 
- Anomaly Agent: Risk score 88/100 (slippage, POV spike, volatility shift) 
- Context Agent: Chat flagged spoof intent, email flagged tip, market news negative, prior case matched layering
- Case-Building Agent: Evidence payload (orders, comms, news, SHAP explanations) 

### Rule Evaluation
- **SEC Rule 10b-5 (Exchange Act, 1934):**
“It shall be unlawful to employ any device, scheme, or artifice to defraud… or engage in any act, practice, or course of business which operates as a fraud or deceit upon any person.” 

- The combination of layering spoof orders and benefitting buy constitutes a **manipulative and deceptive practice.** 
- Threshold checks:
    - Risk ≥ 80 
    - Comms flagged “spoof” intent 
    - Pattern similarity to prior spoofing case ≥ 70% 


### Decision Outcome
- **Classification:** Violation of SEC Rule 10b-5 (Manipulative/Deceptive Practice: Layering/Spoofing) 
- **Action:** Escalate to Compliance Tier-2 and Regulatory Reporting Queue 
- **Case ID:** CASE-ACMX-O1004-2025 
- **Routing:** Forward XML case package to SEC reporting interface 

### Decision Agent Summary (Tabular)
| Trade ID            | Anomaly Score | Context Evidence Strength       | Regulation Breached | Decision Outcome                     | Action Taken               |
|---------------------|--------------|---------------------------------|---------------------|--------------------------------------|----------------------------|
| O-1004              | 88/100       | High (chat + email + news + prior case) | SEC Rule 10b-5      | Probable Layering/Spoofing (Manipulative/Deceptive) | Escalated + XML report to SEC queue |

<details>
<summary> <h2>XML Report (Regulatory Case Package)</h2> </summary>
<pre><code>
&lt;TradeSurveillanceCase&gt;
  &lt;CaseID&gt;CASE-ACMX-O1004-2025&lt;/CaseID&gt;
  &lt;Timestamp&gt;2025-09-08T10:05:02Z&lt;/Timestamp&gt;
  &lt;Entity&gt;
    &lt;TraderID&gt;T-A&lt;/TraderID&gt; 
    &lt;DeskID&gt;EQD-1&lt;/DeskID&gt; 
    &lt;Instrument&gt;ACMX&lt;/Instrument&gt; 
    &lt;Venue&gt;NASDAQ&lt;/Venue&gt; 
  &lt;/Entity&gt; 
  &lt;Transaction&gt; 
    &lt;OrderID&gt;O-1004&lt;/OrderID&gt; 
    &lt;EventType&gt;NEW_ORDER&lt;/EventType&gt; 
    &lt;Side&gt;BUY&lt;/Side&gt; 
    &lt;Quantity&gt;300&lt;/Quantity&gt; 
    &lt;Price&gt;4.95&lt;/Price&gt; 
  &lt;/Transaction&gt; 
  &lt;AnomalyAnalysis&gt; 
    &lt;RiskScore&gt;88&lt;/RiskScore&gt; 
    &lt;Models&gt; 
      &lt;AutoEncoder&gt;Error=0.42&lt;/AutoEncoder&gt; 
      &lt;IsolationForest&gt;OutlierScore=0.76&lt;/IsolationForest&gt; 
      &lt;DBSCAN&gt;Cluster=Noise&lt;/DBSCAN&gt; 
    &lt;/Models&gt; 
    &lt;SHAPDrivers&gt; 
      &lt;Driver feature=&quot;SlippageVsMid&quot; value=&quot;-8bps&quot; impact=&quot;+0.31&quot;/&gt; 
      &lt;Driver feature=&quot;DeskParticipationPOV&quot; value=&quot;12.9%&quot; impact=&quot;+0.23&quot;/&gt; 
      &lt;Driver feature=&quot;VolatilityContext&quot; value=&quot;0.88&quot; impact=&quot;+0.19&quot;/&gt; 
    &lt;/SHAPDrivers&gt; 
  &lt;/AnomalyAnalysis&gt; 
  &lt;ContextEvidence&gt; 
    &lt;Communication id=&quot;CHAT-552&quot; intent=&quot;Spoof&quot; text=&quot;Layer those sells, then scoop it back at 4.95&quot;/&gt; 
    &lt;Communication id=&quot;EMAIL-212&quot; intent=&quot;Tip&quot; text=&quot;ACMX order book looks heavy, chance to pick up size cheap&quot;/&gt; 
    &lt;MarketNews timestamp=&quot;2025-09-08T09:58:00Z&quot; headline=&quot;ACMX quarterly results leak: revenue miss expected&quot;/&gt; 
    &lt;PriorCase match=&quot;MAR-2019-142&quot; similarity=&quot;78%&quot;/&gt; 
  &lt;/ContextEvidence&gt; 
  &lt;RegulatoryAssessment&gt; 
    &lt;Regulation&gt;SEC Rule 10b-5&lt;/Regulation&gt; 
    &lt;Finding&gt;Probable Layering/Spoofing&lt;/Finding&gt; 
  &lt;/RegulatoryAssessment&gt; 
  &lt;Decision&gt; 
    &lt;Outcome&gt;Escalate&lt;/Outcome&gt; 
    &lt;Routing&gt;Compliance Tier-2, SEC Reporting&lt;/Routing&gt; 
    &lt;Status&gt;Open&lt;/Status&gt; 
  &lt;/Decision&gt; 
&lt;/TradeSurveillanceCase&gt;
</code></pre>
</details>

<br>

**Final Output:** The Decision-Policy Agent has determined the transaction constitutes a probable **violation of SEC Rule 10b-5.** The case has been escalated to Compliance Tier-2, and an **XML regulatory report** has been generated for submission. 

**Download the Compliance Report** → <a href="https://drive.google.com/uc?export=download&id=16_fohO1n48uRF6khEHrdsLRSNrveCOsV" download="Compiliance_Report.pdf">Download Report (PDF)</a>

<br>

🤖 **Human Oversight Agent is thinking…**  

<br>

JIRA Ticket Raised for Human Review   
This ticket is auto-generated using KAYA's JIRA connector.   

<strong>View the JIRA ticket:</strong> 
<a href="https://techlabsglobal.atlassian.net/browse/TSRA-1" target="_blank" rel="noopener noreferrer">
  <strong>CF-KYC-9021</strong>
</a>  

**Attached:** Auto-generated Compliance Report  

**Important for Reviewer:**  
- Review and validate the attached Compliance Report.  
- Amend or correct values if necessary.  
- Add comments for justification if overriding any recommendation.  

**Once approved:**
- Mark the JIRA ticket as **"Accept", "Reject", or "Refer".**  

**Decision Options (System Decision = Breach):**  
- **Accept** → Confirms system decision. Transaction remains classified as a Breach; execution blocked.  
- **Reject** → Overrides system. Transaction accepted for execution despite system breach flag.  
- **Refer** → Escalates case for higher-level review.

`,
    apiCalls: [
    {
        name: "sendEmail",
        trigger: "after",
        buttonId: "email",
        response: "Human approval initiated Successfully",
        method: "POST",
        url: "https://kaya-mock-api-938786674786.us-central1.run.app/health-first/email",
        headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        },
        bodyTemplate:
        '{"subject":"Websocket Initiated","to":["sandaruwan@kayatech.com"],"content":"Websocket call initiated!"}',
        waitingConfirmation: true,
        waitingMessage: "Awaiting JIRA updates",
        confirmationDelay: 10000,
        confirmationTrigger: "websocket",
        websocketUrl:
        "wss://kaya-mock-api-938786674786.us-central1.run.app/health-first/websocket",
        websocketEvent: "confirmation",
        confirmationMessage: "JIRA updated",
    },
    ],
    },
    {
      message: "JIRA updated",
      response:`
**Human Review Received**

<br>

**🤖 Human Oversight Agent is thinking…**  

- Reviewer decision recorded (Approved).  
- Approval rationale saved in compliance logs.
`,
    },
  ])
);
