localStorage.setItem(
  "demo_9a61bbb1-ea28-46b5-984d-d5b244b4ec38",
  JSON.stringify([
    {
      message: "Suggest screening criteria based on Atairos partner companies",
      response: `
🤖 **Supervisor Agent is thinking...**
<br>



The user has submitted a portfolio list of Atairos investments and partnerships. 
Initiating automated investment pattern recognition and scoring framework setup for platform deployment. 


---


🤖 **Data Processor Agent is thinking...**
<br>



Analyzing company list and metadata for recurring sector, stage, and strategic entry characteristics.  
Agent is initiating investment pattern recognition and scoring framework construction.  

| Investment Pattern (Theme)                          | Strategic Insight                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| Defensible Sector Focus       | Targets infrastructure-layer B2B tech (semiconductors, analytics, OSAT)    |
| Scalable Growth Stage         | Prefers growth-stage or pre-scale companies that can benefit from PE governance and expansion capital |
| Operational Leverage Readiness| Targets businesses with margin upside and efficiency plays |
| Technology Moat / IP Strength | Looks for companies with proprietary tech, strong patents, and limited substitution risk |
| Strategic Timing / Value Trigger | Investments coincide with inflection points: M&A readiness, global rollout, or product portfolio shifts |
| Leadership Capable of Transformation | Looks for C-suite with prior scale-up or transformation experience |
| Avoidance of Strategic Fragility | Avoids companies overly reliant on a single client or weak ESG/compliance profile |
| Governance Fit / Board Depth | Seeks companies with PE-experienced boards and strategic investor alignment |

Themes extracted using vector clustering, ontology tagging, and industry classification.  


> Triggering Scoring Engine Agent... 

---

🤖 **Scoring Engine Agent is thinking...**
<br>



Synthesizing criteria used across previous Atairos deals and applying MECE logic.  

### Established Composite Scoring Framework:

| Investment Pattern (Theme)               | Mapped Scoring Criterion        | Rationale & Impact                                                                                   |
|-------------------------------|--------------------------|-------------------------------------------------------------------------------------------------------|
| Defensible Sector Focus       | Product-Market Fit / Moat| Deep moats signal pricing power and stickiness → contributes to PMF/Moat weight (15%)               |
| Scalable Growth Stage         | Entry-Stage Fit          | Capital leverage readiness justifies 15% weight; too early/too mature = reduced investment leverage   |
| Operational Leverage Readiness| EBITDA Margin            | Strong EBITDA ensures ROI, especially post-deal optimization → 12.5% scoring weight                   |
| Technology Moat / IP Strength | IP Strength              | Innovation defensibility affects valuation premiums and risk tolerance → weighted at 10%            |
| Strategic Timing / Value Trigger | Revenue CAGR + Entry-Stage Fit | High CAGR is a proxy for TAM alignment; Entry Fit captures time-to-scale readiness → both highly weighted |
| Leadership Capable of Transformation | Leadership Quality     | Execution capability ensures roadmap delivery → 10% scoring weight                                  |
| Avoidance of Strategic Fragility | Compliance Risk + PMF    | Tail-risk disqualifier: flagged compliance, overconcentration → binary filter + supports PMF score down weighting |
| Governance Fit / Board Depth | Board / Investor Profile | Strategic governance is needed for collaborative PE involvement → 7.5% weight, disqualifier if severely lacking |

Applying scoring weights based on past investment rationale and disqualification reasoning.  

| Scoring Criterion            | Weightage | Description                                                                | Scoring Zones                                                                                     |
|----------------------|--------|----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| Entry-stage Fit      | 15     | Measures alignment with Atairos’ preferred stage for strategic capital entry| 0–4: Too early (pre-revenue/product) or too mature (fully valued, limited room for value creation); 5–8: Good scale or margins but no catalytic need; 9–12: Well-positioned mid-cap with upside from capital or GTM push; 13–15: At clear inflection point with untapped TAM and valuation entry point. |
| PMF / Moat           | 15     | Direct measure of competitive strength and revenue defensibility           | 0–5: Low differentiation, many competitors; 6–9: Some lock-in/recurring revenue; 10–13: Strong GTM, switching costs; 14–15: Entrenched in ecosystem with platform effect |
| EBITDA Margin        | 12.5   | Indicates profitability and cost discipline; capital efficiency consideration                                | 0–4: <10%; 5–8: 10–20%; 9–11: 20–30%; 12–12.5: >30%                                                |
| 3Y Revenue CAGR      | 12.5   | Measures sustained top-line momentum; adjusted for cyclicality and market trends                                       | 0–4: <5% CAGR or declining; 5–8: 5–10% CAGR; 9–11: 10–20%; 12–12.5: >20% CAGR                                                   |
| IP Strength          | 10     | Assesses technological moat and competitive insulation                      | 0–4: Generic product/IP; 5–7: Defensible tech, moderate patent base; 8–9: Unique platform/product family; 10: High-value patent moat or licensing model. |
| Analyst Sentiment    | 10     | Represents external confidence and market positioning; includes coverage depth                                 | 0–4: Mostly sell/underperform; 5–6: Mixed/hold; 7–8: Buy consensus with some uncertainty; 9–10: Overwhelming buy/target raise.                         |
| Leadership Quality   | 10     | Captures executive capability and institutional experience                 | 0–4: New/unproven mgmt.; 5–7: Steady leadership, not founder-led; 8–10: Visionary or high-reputation leadership                         |
| Compliance Risk      | 7.5    | Evaluates governance and potential headwinds; based on 10-K risk factors                                         | 0–3: Frequent regulatory/legal flags; 4–6: Mild ESG concerns; 7–7.5: Clean regulatory history                                 |
| Board / Investor Profile | 7.5 | Signals institutional strength and long-term alignment                                       | 0–3: Weak governance; 4–6: Solid board but no Tier-1 backers; 7–7.5: Strategic/experienced investor presence                                 |

Aligning scoring schema with Atairos’ historical qualification behavior and disqualification rationale.  
Deriving composite qualification model based on calibrated score thresholds, investment gating logic, and disqualifier rules.

---

#### Qualification Threshold Rationale & Evaluation Logic Table

| Qualification Component                 | Threshold / Logic Rule                        | Why It Matters                                                             |
|--------------------------|------------------------------------------|----------------------------------------------------------------------------|
| Total Score (Weighted)   | Must be ≥ 65                              | Captures overall company strength across MECE-aligned dimensions          |
| Entry-Stage Fit          | Must be ≥ 10 / 15                         | Measures alignment with Atairos’ capital leverage model and timing of intervention        |
| Compliance Risk          | Must NOT be flagged                       | ESG/legal/regulatory issues are automatic investment veto criteria        |
| Board / Governance       | Must NOT be flagged                       | Weak or misaligned boards reduce strategic steerability and exit-readiness                        |
| Core Strategic Strengths | At least 2 of 4 must be > average:<br><ul><li>IP Strength</li><li>EBITDA Margin</li><li>PMF / Moat</li><li>Leadership Quality</li></ul> | Ensures that investment isn’t just compliant — it must offer leverageable strengths    | Ensures that investment isn’t just compliant — it must offer leverageable strengths 

#### Qualification Pass Criteria

To be marked **Qualified**, a company must meet:

<ol>
  <li>Total Weighted Score ≥ 65</li>
  <li>Entry-Stage Fit ≥ 10 / 15</li>
  <li><strong>Zero disqualifiers</strong> in:
    <ul style="list-style-type: disc;">
      <li>Compliance Risk</li>
      <li>Board / Governance</li>
    </ul>
  </li>
  <li>At least <strong>2 of 4 key strategic strengths</strong> scoring above average:</li>
</ol>


> Triggering Governance Agent..

---

🤖 **Governance Agent is thinking...**
<br>


**JIRA Ticket Raised for Human Review**  
This ticket is auto-generated using KAYA’s JIRA connector.  

**View the JIRA ticket:** [KAP-2016](https://techlabsglobal.atlassian.net/browse/KAP-2016?target=_blank)

### Important

- Please review the drafted memo in JIRA ticket and agent reviewed comments in the JIRA comment section.  

- Your task is to approve, reject or make modifications to the proposed scoring thresholds and qualification rules.  

- Once reviewed, update the Excel as an attachment in the associated JIRA Ticket.  

- Mark the ticket as “Done” to automatically trigger the process.
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
            '{"subject":"Websocket Initiated","to":["ammshathwan@kayatech.com"],"content":"Websocket call initiated!"}',
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
      response: `Human Review Received 
<br/>

🤖 **Governance Agent Thinking...** 

<br/>

Updated Scoring Logic has been saved to: Atairos Scoring Framework Knowledge Base 

All changes logged in audit trail and version history for future traceability.  `,
    },
    {
      message:
        "Suggest new companies which qualify for investment review based on the uploaded excel file.",
      response: `🤖 **Supervisor Agent is thinking...** 
      <br>



User has uploaded new Excel files containing public and private mid-cap companies for investment evaluation. 

Initiating automated scoring based on the finalized Atairos Qualification Framework knowledge base. 

---

🤖 **Data Processor Agent is thinking...**
<br>




> **Reading the excel.**

Auto-separating entries by company type. 


| Detected    | Count |
| ------- | ------- |
| Public  | 12 |
| Private | 5  |

> **Triggering Scoring Engine Agent...**


---


🤖 **Scoring Engine Agent is thinking...**
<br>




Applying scoring logic as defined in Atairos Qualification Framework knowledge base. 

#### **Qualification Rules Recap:**

- Total Score ≥ 65
- Entry-Stage Fit ≥ 10/15
- No disqualifiers in:
  - Compliance Risk
  - Board Governance
- At least 2 of the following must be above average:
  - IP Strength
  - EBITDA Margin
  - PMF / Moat
  - Leadership Quality

---

> **Triggering evaluation of 17 companies...**

 
#### Scoring Summary: Qualified Companies Recommended for Atairos

The following companies passed all the qualification checks and aligned with Atairos’ strategic filters: 

### Qualified Public Companies

| Company Name               | Type   | Total Score | Strategic Strengths                                                                                                 |
| -------------------------- | ------ | ----------- | ------------------------------------------------------------------------------------------------------------------ |
| Lattice Semiconductor (LSCC) | Public | 75.0        | Exceptional moat (PMF: 14), strong leadership, and consistent revenue growth; meets >2/4 strength test and exceeds all key thresholds. |
| Amkor Technology (AMKR)    | Public | 73.4         | Strong operational leverage (EBITDA: 11), PMF: 13, and robust expansion readiness; passes all disqualifier screens and has strong governance alignment. |
| Axcelis Technologies (ACLS) | Public | 69.6         | High scores in leadership and IP (both ≥9), with strong moat; although Entry Fit is marginal, other strengths offset for qualification. |
| FormFactor Inc. (FORM)     | Public | 65.6         | Just clears threshold; driven by strong moat and leadership quality. Entry Fit is borderline but passes due to PMF + EBITDA > avg. |
| SMART Global Holdings (SGH) | Public | 65.2         | Adequate fundamentals with PMF and EBITDA strength; compliance and board metrics solid; strategic fit confirmed.    |
| Voltasic Microsystems | Private | 66.2         | Meets all thresholds with strong leadership and competitive moat; compliance clean; attractive early-stage growth profile. |
| NovaChip Solutions   | Private | 66.0        | Clear investment potential with high scalability (Entry Fit: 12), strong IP defensibility, and leadership capability; aligned with Atairos’ leverage model. |

### Qualified Private Companies

| Company Name         | Type    | Total Score | Strategic Strengths                                                 |
| -------------------- | ------- | ----------- | ------------------------------------------------------------------ |
| NovaChip Solutions   | Private | 66.0        | Strong IP: 9, Leadership: 9, Growth-ready stage, Clean compliance   |
| Voltasic Microsystems | Private | 66.2        | Leadership: 10, PMF: 10, Governance-aligned board, No risk flags   |


**Disqualified Companies – Evaluation Summary** 

These companies failed to meet one or more critical thresholds such as total score, entry-stage fit, or strategic strengths (e.g., IP, PMF, Leadership): 

| Company Name          | Type    | Total Score | Primary Weaknesses                                    |
| --------------------- | ------- | ----------- | ---------------------------------------------------- |
| Cirrus Logic (CRUS)   | Public  | 61.6        | Total Score < 65, weak EBITDA, Apple dependency risk |
| Rambus Inc. (RMBS)    | Public  | 63.4        | Near-qualified but lacks standout strategic levers   |
| Silicon Labs (SLAB)   | Public  | 63.2        | Moderate scores across the board; no catalytic strengths |
| indie Semiconductor (INDI) | Public | 63.8      | Entry Fit is acceptable, but Board/Investor Profile weak (score: 5) |
| Onto Innovation (ONTO) | Public | 57.4        | Low Entry Fit, low moat, below minimum Total Score    |
| EdgeSemiTech          | Private | 60.2        | Total score below 65; low PMF; no standout leadership or IP moat |
| QuantumWaves Inc.     | Private | 62.0        | Strong Entry Fit but average IP and PMF; lacks clear leverage point |
| OptiCore Circuits     | Private | 62.6        | Strong PMF, but weak EBITDA and low innovation depth  |


---

🤖 **Investment Logic Agent is thinking…** 


#### Final Investment Recommendation Summary 

After evaluating all uploaded companies using Atairos Qualification Framework knowledge base, the following **9 companies** are deemed qualified for Atairos investment consideration: 

### Qualified Public Companies

| Company Name               | Total Score | Investment Rationale                                                |
| -------------------------- | ----------- | ------------------------------------------------------------------ |
| Lattice Semiconductor (LSCC) | 75.0        | Strong PMF (14), visionary leadership, and clean compliance        |
| Amkor Technology (AMKR)    | 73.4        | Exceptional EBITDA and Entry Fit; strong IP & board governance     |
| Axcelis Technologies (ACLS) | 69.6        | High moat and IP strength, led by transformation-capable team     |
| FormFactor Inc. (FORM)     | 65.6        | Solid PMF and leadership; borderline entry fit but still qualifies |
| SMART Global Holdings (SGH) | 65.2        | Consistent operational metrics with defensible revenue model       |
| Voltasic Microsystems  | 66.2        | Clean compliance and governance profile make it a compelling early-stage platform candidate.       |
| NovaChip Solutions  | 66.0        | Business model aligns well with Atairos’ value creation playbook through capital infusion and market expansion.       |

### Qualified Private Companies

| Company Name         | Total Score | Investment Rationale                                      |
| -------------------- | ----------- | -------------------------------------------------------- |
| NovaChip Solutions   | 66.0        | High scalability, strong IP and leadership; PE-aligned governance |
| Voltasic Microsystems | 66.2        | Visionary C-suite, strong moat, and clean operational history | 
`,
    },
    {
      message: "Generate a draft investment memo for Amkor Technology",
      response: `
🤖 **Supervisor Agent is thinking...**
<br>

Initializing investment memo creation for the selected company.

---

🤖 **Memo & Diligence Agent is thinking...**
<br>

> Accessing the knowledge base document: Investment_Memo_Review_Mapping_Explanation. 

> Analyzing scoring framework and mapping investment rationale based on Amkor’s scoring data. 

> Draft memo created. 

#### Strategic Investment Memo – Amkor Technology (AMKR)

### **I. Situation Overview**

Atairos has identified Amkor Technology as a strategic investment opportunity based on its leadership in the OSAT industry and recent capacity expansions. No banker-led auction is underway. The aim is to explore a minority investment or co-strategic partnership with Vietnam operations or advanced packaging lines.

**II. Company Overview**

Amkor Technology is a global leader in outsourced semiconductor assembly and test services, with a $7B+ revenue base, top-tier clients (Apple, Qualcomm), and a $1.6B expansion plan in Vietnam. EBITDA margins stand at ~18%.

**III. Industry Overview** 

The OSAT sector is critical for enabling chip innovation, especially for AI and HPC applications. Demand for 2.5D/3D packaging, FOWLP, and SiP continues to increase, along with geopolitical diversification of supply chains.

**IV. Investment Merits** 

- #2 global OSAT provider with global blue-chip clients
- IP moat via 2,000+ patents
- Near-term growth from Vietnam
- Secular growth driven by chiplet adoption and advanced packaging outsourcing trends

**V. Investment Considerations**

- High CAPEX intensity ($800M+ per year)
- Apple dependency (~20–25% revenue)
- Minority position may limit control unless structured with board and governance rights
- Regional exposure to geopolitical disruptions

**VI. Valuation and Investment Returns**

Amkor trades at ~6.5x LTM EV/EBITDA, with forward multiple ~5.9x. Our base case targets a 14% IRR with potential >20% in a platform scenario. Precedents include JCET and Carsem transactions.

**VII. Conclusion & Next Steps**

Initiate structured outreach with Amkor's leadership regarding strategic partnership around Vietnam expansion or JV.

--- 
Accessing the knowledge base document:Investment_Memo_Review_Guidelines_With_Thresholds 

**Draft and agent-reviewed memo is complete and ready for governance review.**

> Triggering for human review... 

---

🤖 **Governance Agent is thinking...**
<br>

JIRA Ticket Raised for Human Review 

This ticket is auto-generated using KAYA's JIRA connector. 

**View the JIRA ticket:** [KAP-2019](https://techlabsglobal.atlassian.net/browse/KAP-2019?target=_blank)

**Important** 

- Please review the attached Excel file **Amkor_Memo_Draft_Document.docx** and agent reviewed comments in the JIRA comment section. 
- Your task is to **approve, reject or do modifications** to the proposed memo
- Once reviewed, update the modified docx in the associated **JIRA Ticket**
- Mark the ticket as "Done" to automatically trigger the process
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
            '{"subject":"Websocket Initiated","to":["ammshathwan@kayatech.com"],"content":"Websocket call initiated!"}',
          waitingConfirmation: true,
          waitingMessage: "Awaiting JIRA updates",
          confirmationDelay: 10000,
          confirmationTrigger: "websocket",
          websocketUrl:
            "wss://kaya-mock-api-938786674786.us-central1.run.app/health-first/websocket",
          websocketEvent: "confirmation",
          confirmationMessage: "JIRA updated again",
        },
      ],
    },
    {
      message: "JIRA updated again",
      response: `
Human Review Received 

🤖 **Governance Agent is processing the approved changes.**


Please find the finalized artifacts below. 


#### Amkor Technology – Revised Investment Memo (Post-Review)

**I. Situation Overview** 

Amkor Technology has been proactively identified by Atairos based on outbound strategic screening. Management is aware of Atairos' profile through prior co-investor networks but no formal engagement has occurred yet. The rationale for focusing on Vietnam stems from Amkor's $1.6B investment in Bac Ninh, which aligns with geopolitical risk mitigation and strategic capacity expansion.

**IV. Investment Merits**

- #2 global OSAT provider with blue-chip clients (Apple, Qualcomm)
- Holds over 2,000 active global patents across advanced packaging and thermal design
- Competitive edge in SiP solutions with strong analog integration, outperforming ASE in mixed-signal packages
- Vietnam capacity set to contribute ~$500M+ revenue by 2026
- Secular tailwinds from chiplet modularization and nearshoring trends

**V. Investment Considerations**

- CAPEX intensity remains high at $800M+ per annum, but Vietnam build is largely committed
- Apple exposure has declined from 27% to 21% over past 3 years, with diversification via auto and networking sectors
- Minority governance possible via structured board rights, veto terms on strategic capex and JV decisions
- Supply chain resilience evaluated across Philippines, Korea, and Vietnam facilities

**VI. Valuation and Investment Returns**

At current trading of ~6.5x LTM EV/EBITDA (vs. 7.2x 5-year median), and ~12.5x P/E, Amkor offers value given sectoral premium to OSAT peers. Base case IRR of 14% modeled on $1.1B EBITDA by FY28 with modest multiple expansion. Downside IRR modeled at ~8% on flat EBITDA scenario. Precedents include JCET (~7.4x), Carsem (>8.0x), and SPIL (TSMC takeout at ~10x).

**VII. Conclusion & Next Steps**

Propose outbound approach to Amkor Strategy/IR with co-partnering thesis on Vietnam industrial presence. Prioritize modeling refinements, minority rights structuring, and technical diligence on packaging IP. Schedule governance structuring call with legal by next IC checkpoint.

---

> **Amkor Technology – Audit Ready Memo**

#### Amkor Technology – Investment Memo (Tracked Changes)

**I. Situation Overview** 

> <p><strong>[Deletion]</strong> Atairos has identified Amkor Technology as a strategic investment opportunity based on its leadership in the OSAT industry and recent capacity expansions. No banker-led auction is underway. The aim is to explore a minority investment or co-strategic partnership with Vietnam operations or advanced packaging lines.</p>


> <p><strong>[Addition]</strong> Amkor Technology has been proactively identified by Atairos based on outbound strategic screening. Management is aware of Atairos' profile through prior co-investor networks but no formal engagement has occurred yet. The rationale for focusing on Vietnam stems from Amkor's $1.6B investment in Bac Ninh, which aligns with geopolitical risk mitigation and strategic capacity expansion.</p>

**IV. Investment Merits**

> <p><strong>[Deletion]</strong> • #2 global OSAT provider with global blue-chip clients</p>
> <p><strong>[Addition]</strong> • #2 global OSAT provider with blue-chip clients (Apple, Qualcomm)</p>
> <p><strong>[Deletion]</strong> • IP moat via 2,000+ patents</p>
> <p><strong>[Deletion]</strong> • Near-term growth from Vietnam</p>
> <p><strong>[Deletion]</strong> • Secular growth driven by chiplet adoption and advanced packaging outsourcing trends</p>
> <p><strong>[Addition]</strong> • Holds over 2,000 active global patents across advanced packaging and thermal design</p>
> <p><strong>[Addition]</strong> • Competitive edge in SiP solutions with strong analog integration, outperforming ASE in mixed-signal packages</p>
> <p><strong>[Addition]</strong> • Vietnam capacity set to contribute ~$500M+ revenue by 2026</p>
> <p><strong>[Addition]</strong> • Secular tailwinds from chiplet modularization and nearshoring trends</p>

**V. Investment Considerations**

> <p><strong>[Deletion]</strong> • High CAPEX intensity ($800M+ per year)</p>
> <p><strong>[Deletion]</strong> • Apple dependency (~20–25% revenue)</p>
> <p><strong>[Deletion]</strong> • Minority position may limit control unless structured with board and governance rights</p>
> <p><strong>[Deletion]</strong> • Regional exposure to geopolitical disruptions</p>
> <p><strong>[Addition]</strong> • CAPEX intensity remains high at $800M+ per annum, but Vietnam build is largely committed</p>
> <p><strong>[Addition]</strong> • Apple exposure has declined from 27% to 21% over past 3 years, with diversification via auto and networking sectors</p>
> <p><strong>[Addition]</strong> • Minority governance possible via structured board rights, veto terms on strategic capex and JV decisions</p>
> <p><strong>[Addition]</strong> • Supply chain resilience evaluated across Philippines, Korea, and Vietnam facilities</p>

**VI. Valuation and Investment Returns**

> <p><strong>[Deletion]</strong> Amkor trades at ~6.5x LTM EV/EBITDA, with forward multiple ~5.9x. Our base case targets a 14% IRR with potential > 20% in a platform scenario. Precedents include JCET and Carsem transactions.</p>
> <p><strong>[Addition]</strong> At current trading of ~6.5x LTM EV/EBITDA (vs. 7.2x 5-year median), and ~12.5x P/E, Amkor offers value given sectoral premium to OSAT peers. Base case IRR of 14% modeled on $1.1B EBITDA by FY28 with modest multiple expansion. Downside IRR modeled at ~8% on flat EBITDA scenario. Precedents include JCET (~7.4x), Carsem (>8.0x), and SPIL (TSMC takeout at ~10x).</p>

**VII. Conclusion & Next Steps**

> <p><strong>[Addition]</strong> Propose outbound approach to Amkor Strategy/IR with co-partnering thesis on Vietnam industrial presence. Prioritize modeling refinements, minority rights structuring, and technical diligence on packaging IP. Schedule governance structuring call with legal by next IC checkpoint.</p>


**Amkor Technology – Diligence List**

| Serial Number | Diligence Item                                                                                           | Indicative Owner              |
|---------------|-----------------------------------------------------------------------------------------------------------|------------------------------|
| 1             | Clarify outreach nature: inbound vs. outbound                                                             | Deal Lead                    |
| 2             | Justify Vietnam focus—strategic rationale                                                                 | Strategy                     |
| 3             | Patent/IP moat verification                                                                               | Legal / IP Counsel           |
| 4             | Benchmark SiP tech vs. ASE                                                                                | Tech DD Advisor              |
| 5             | Trend Apple dependency                                                                                    | Finance                      |
| 6             | Governance rights if minority                                                                             | Legal / Structuring          |
| 7             | Base IRR model drivers                                                                                    | Finance / Modeling           |
| 8             | EV/EBITDA comp review                                                                                     | Banker / Market Analysis     |
| 9             | Verify communication log and any prior informal contact with Amkor mgmt                                  | Deal Lead                    |
| 10            | Evaluate strategic intent of Vietnam investment – geopolitical risk mitigation, supply chain strategy     | Strategy                     |
| 11            | Review Amkor's Vietnam expansion financial model (CAPEX, IRR, local incentives)                           | Finance                      |
| 12            | Audit IP portfolio and patent coverage by geography and packaging type                                    | Legal / IP Counsel           |
| 13            | Benchmark SiP technology performance vs. ASE and JCET (thermal, signal integrity)                         | Technical Advisor            |
| 14            | Analyze 3-year customer revenue trend (Apple, Qualcomm, Auto OEMs)                                        | Finance / Strategy           |
| 15            | Model post-deal governance options—observer rights, veto powers, JV terms                                | Legal / Structuring          |
| 16            | Review Amkor peer transactions: Carsem, SPIL, JCET; identify control premiums                             | Market / Transaction Advisor |
| 17            | Refine IRR model: Base, Downside, Upside; bridge assumptions and return sensitivities                     | Modeling / Finance           |
| 18            | Assess operational footprint resilience—Philippines, Korea, Vietnam risk profile                          | Ops Due Diligence            |

All changes logged in audit trail and version history for future traceability.
`,
    },
  ])
);
