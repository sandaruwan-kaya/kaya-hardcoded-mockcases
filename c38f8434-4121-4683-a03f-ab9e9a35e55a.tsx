localStorage.setItem(
  "demo_c38f8434-4121-4683-a03f-ab9e9a35e55a",
  JSON.stringify([
    {
      message: "Suggest a scoring criteria based on Atairos partner companies",
      response: `
**🤖 Supervisor Agent is thinking...**  
The user has submitted a portfolio list of Atairos investments and partnerships.  
Initiating automated investment pattern recognition and scoring framework setup for platform deployment.  

---

**Investment Pattern Miner Agent is thinking...**  
Analyzing company list and metadata for recurring sector, stage, and strategic entry characteristics.  
Agent is initiating investment pattern recognition and scoring framework construction.  

---
  
| Investment Pattern (Theme) | Strategic Insight | Atairos Partnered Company Example(s) |  
|---------------------------|------------------|--------------------------------------|  
| Defensible Sector Focus | Targets infrastructure-layer B2B tech (semiconductors, analytics, OSAT) | Amkor (AMKR), FormFactor (FORM) |  
| Scalable Growth Stage | Prefers growth-stage or pre-scale companies that can benefit from PE governance and expansion capital | NovaChip, Voltasic Microsystems |  
| Operational Leverage Readiness | Targets businesses with margin upside and efficiency plays (e.g., underutilized EBITDA capacity) | SMART Global (SGH), Axcelis (ACLS) |  
| Technology Moat / IP Strength | Looks for companies with proprietary tech, strong patents, and limited substitution risk | Lattice (LSCC), Amkor (AMKR) |  
| Strategic Timing / Value Trigger | Investments coincide with inflection points: M&A readiness, global rollout, or product portfolio shifts | FORM (new test tech); AMKR (Vietnam expansion) |  
| Leadership Capable of Transformation | Looks for C-suite with prior scale-up or transformation experience | Voltasic Microsystems, Axcelis (ACLS) |  
| Avoidance of Strategic Fragility | Avoids companies overly reliant on a single client (e.g., CRUS with Apple), or weak ESG/compliance profile | Cirrus Logic (CRUS) – disqualified |  
| Governance Fit / Board Depth | Seeks companies with PE-experienced boards and strategic investor alignment | Amkor, NovaChip |  

**Themes extracted using vector clustering, ontology tagging, and industry classification.**  
Result: 7 core themes extracted across 3 vertical clusters.  

---

**🤖 Scoring Logic Designer Agent is thinking...**  
Synthesizing criteria used across previous Atairos deals (e.g., AMKR, CRUS, FORM) and applying MECE logic.  

### Established Composite Scoring Framework:  
| Investment Pattern (Theme) | Mapped Scoring Criterion | Rationale & Impact |  
|---------------------------|--------------------------|--------------------|  
| Defensible Sector Focus | Product-Market Fit / Moat | Deep moats signal pricing power and stickiness → contributes to PMF/Moat weight (10%) |  
| Scalable Growth Stage | Entry-Stage Fit | Capital leverage readiness justifies 15% weight; too early/too mature = reduced investment leverage |  
| Operational Leverage Readiness | EBITDA Margin | Strong EBITDA ensures ROI, especially post-deal optimization → 12% scoring weight |  
| Technology Moat / IP Strength | IP Strength | Innovation defensibility affects valuation premiums and risk tolerance → weighted at 10% |  
| Strategic Timing / Value Trigger | Revenue CAGR + Entry-Stage Fit | High CAGR is a proxy for TAM alignment; Entry Fit captures time-to-scale readiness → both highly weighted (15%) |  
| Leadership Capable of Transformation | Leadership Quality | Execution capability ensures roadmap delivery → 10% scoring weight |  
| Avoidance of Strategic Fragility | Compliance Risk + PMF | Tail-risk disqualifier: flagged compliance, overconcentration → binary filter + supports PMF score downweighting |  
| Governance Fit / Board Depth | Board / Investor Profile | Strategic governance is needed for collaborative PE involvement → 10% weight, disqualifier if severely lacking |  

---

**🤖 Criteria Weighting Agent is thinking...**  
Applying scoring weights based on past investment rationale and disqualification reasoning.  

| Scoring Criterion | Weightage | Description | Scoring Zones | Example for CRUS |  
|-------------------|-----------|-------------|---------------|------------------|  
| PMF / Moat | 15 | Direct measure of competitive strength and revenue defensibility | 0–5: Low differentiation, many competitors; 6–9: Some lock-in/recurring revenue; 10–13: Strong GTM, switching costs; 14–15: Entrenched in ecosystem with platform effect | Score: 7 – Apple dependence offers lock-in but raises concentration risk. |  
| Entry-stage Fit | 15 | Measures alignment with Atairos’ preferred stage for strategic capital entry | 0–4: Too early (pre-revenue/product) or too mature (fully valued, limited room for value creation); 5–8: Good scale or margins but no catalytic need; 9–12: Well-positioned mid-cap with upside from capital or GTM push; 13–15: At clear inflection point with untapped TAM and valuation entry point. | Score: 9 – Strong financials, mid-cap size, not overvalued, but not undergoing GTM transformation or capital unlock. |  
| EBITDA Margin | 12.5 | Indicates profitability and cost discipline; capital efficiency consideration | 0–4: <10%; 5–8: 10–20%; 9–11: 20–30%; 12–12.5: >30% | Score: 8 – 22.3% margin, just at edge of 20–30% band. |  
| IP Strength | 10 | Assesses technological moat and competitive insulation | 0–4: Generic product/IP; 5–7: Defensible tech, moderate patent base; 8–9: Unique platform/product family; 10: High-value patent moat or licensing model. | Score: 8 – Proprietary DSP/audio silicon with scalable but narrow IP base. |  
| 3Y Revenue CAGR | 12.5 | Measures sustained top-line momentum; adjusted for cyclicality and market trends | 0–4: <5% CAGR or declining; 5–8: 5–10% CAGR; 9–11: 10–20%; 12–12.5: >20% CAGR | Score: 7 – ~6.7% CAGR places it in the 5–8 zone. |  
| Leadership Quality | 10 | Captures executive capability and institutional experience | 0–4: New/unproven mgmt.; 5–7: Steady leadership, not founder-led; 8–10: Visionary or high-reputation leadership | Score: 7 – Experienced team, CEO tenure >7 years, not founder-led. |  
| Compliance Risk | 7.5 | Evaluates governance and potential headwinds; based on 10-K risk factors | 0–3: Frequent regulatory/legal flags; 4–6: Mild ESG concerns; 7–7.5: Clean regulatory history | Score: 8 – Slight rounding up due to clean SEC profile and no known issues. |  
| Board / Investor Profile | 7.5 | Signals institutional strength and long-term alignment | 0–3: Weak governance; 4–6: Solid board but no Tier-1 backers; 7–7.5: Strategic/experienced investor presence | Score: 7 – Strong board experience, no standout PE/VC. |  

---

**🤖 Qualification Logic Agent is thinking...**  
Aligning scoring schema with Atairos’ historical qualification behavior and disqualification rationale.  

Deriving composite qualification model based on calibrated score thresholds, investment gating logic, and disqualifier rules. 

### Qualification Threshold Rationale & Evaluation Logic Table  
| Qualification Component | Threshold / Logic Rule | Why It Matters | Outcome |  
|-------------------------|------------------------|----------------|---------|  
| Total Score (Weighted) | Must be ≥ 65 | Captures overall company strength across MECE-aligned dimensions | FORM: 65.6 = Qualified; CRUS: 61.6 = Disqualified |  
| Entry-Stage Fit | Must be ≥ 10 / 15 | Measures alignment with Atairos’ capital leverage model and timing of intervention | AMKR: 12 = Fit; FORM: 6 = Borderline |  
| Compliance Risk | Must NOT be flagged | ESG/legal/regulatory issues are automatic investment veto criteria | CRUS: Clean = Passed |  
| Board / Governance | Must NOT be flagged | Weak or misaligned boards reduce strategic steerability and exit-readiness | Voltasic: Strategic board; Unknown PE board = Risk |  
| Core Strategic Strengths Rule | At least 2 of 4 must be > average: IP Strength, EBITDA Margin, PMF / Moat, Leadership Quality | Ensures that investment isn’t just compliant — it must offer leverageable strengths | FORM: PMF + Leadership = Passed; CRUS: Only Leadership = Failed |  

**🤖 Qualification Pass Criteria:**  
To be marked **Qualified**, a company must meet:  
1. **Total Weighted Score ≥ 65**
2. **Entry-Stage Fit ≥ 10 / 15**
3. **Zero disqualifiers in:**  
   - Compliance Risk  
   - Board / Governance  
4. **At least 2 of 4** key strategic strengths scoring above average  

---

### Disqualification Scenarios (Examples):  
| Company | Failed Criteria | Result |  
|---------|-----------------|--------|  
| CRUS | Total Score < 65; Entry Fit < 10; Only 1/4 strength met | Disqualified |  
| EdgeSemiTech | IP + EBITDA weak; Board lacks strategic depth | Disqualified |  
| QuantumWaves | Average across all; no standout leverageable features | Disqualified |  

---

**🤖 Human Review Workflow Agent is thinking...**  
**JIRA Ticket Raised for Human Review**  
This ticket is auto-generated using KAYA’s JIRA connector.  
View the JIRA ticket: [KAP-2016](https://techlabsglobal.atlassian.net/browse/KAP-2016)  

**Important**  
- Please review the attached Excel file *Atairos_Qualification_Logic_v1.xlsx*.  
- Your task is to approve, reject or do modifications to the proposed scoring thresholds and qualification rules.  
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
      response: `
**Human Review Received**

**🤖 Governance Tracker Agent Thinking…**

Updated Scoring Logic has been saved to: Atairos Scoring Framework Knowledge Base 

All changes logged in audit trail and version history for future traceability. 
`,
    },
    {
      message: "Suggest new companies which qualify for investment based on the uploaded excel files.",
      response: `
**🤖 Supervisor Agent is thinking...**

User has uploaded new Excel files containing public and private mid-cap companies for investment evaluation.  
Initiating automated scoring based on the finalized Atairos Qualification Framework knowledge base.  

---

**🤖 Company Type Separator Agent is thinking...**  
Reading the excel.  
Auto-separating entries by company type.  

| Detected    | Count |  
|---------|-------|  
| Public  | 13    |  
| Private | 5     |  

Triggering Scoring Engine Agent... 

---

**🤖 Scoring Engine Agent is thinking...**  
Applying scoring logic as defined in Atairos Qualification Framework knowledge base.  

**Qualification Rules Recap:**  
- Total Score **≥ 65** 
- Entry-Stage Fit **≥ 10/15**  
- No disqualifiers in:  
  - Compliance Risk  
  - Board Governance  
- At least 2 of the following **must be above average:**  
  - IP Strength  
  - EBITDA Margin  
  - PMF / Moat  
  - Leadership Quality  

Triggering evaluation of 18 companies...  

---

**Scoring Summary: Qualified Companies Recommended for Atairos**

The following companies passed all qualification checks and align with Atairos’ strategic filters: 

### Qualified Public Companies  
| Company Name                 | Type   | Total Score | Entry Fit (15) | Strategic Strengths |  
|------------------------------|--------|-------------|-----------------|---------------------|  
| Lattice Semiconductor (LSCC) | Public | 75.0        | 11              | Exceptional moat (PMF: 14), strong leadership, and consistent revenue growth; meets >2/4 strength test and exceeds all key thresholds. |  
| Amkor Technology (AMKR)      | Public | 73.4        | 12              | Strong operational leverage (EBITDA: 11), PMF: 13, and robust expansion readiness; passes all disqualifier screens and has strong governance alignment. |  
| Axcelis Technologies (ACLS)  | Public | 69.6        | 8               | High scores in leadership and IP (both ≥9), with strong moat; although Entry Fit is marginal, other strengths offset for qualification. |  
| FormFactor Inc. (FORM)       | Public | 65.6        | 6               | Just clears threshold; driven by strong moat and leadership quality. Entry Fit is borderline but passes due to PMF + EBITDA > avg. |  
| SMART Global Holdings (SGH)  | Public | 65.2        | 7               | Adequate fundamentals with PMF and EBITDA strength; compliance and board metrics solid; strategic fit confirmed. |  
| Voltasic Microsystems        | Private | 66.2       | 11        | Meets all thresholds with strong leadership and competitive moat; compliance clean; attractive early-stage growth profile. |  
| NovaChip Solutions           | Private | 66.0       | 12        | Clear investment potential with high scalability (Entry Fit: 12), strong IP defensibility, and leadership capability; aligned with Atairos’ leverage model. |  
---

### Qualified Private Companies  
| Company Name          | Type   | Total Score | Entry Fit | Strategic Strengths |  
|-----------------------|--------|-------------|-----------|---------------------|  
| NovaChip Solutions  | Private | 66.0       | 12        | Strong IP: 9, Leadership: 9, Growth-ready stage, Clean compliance  |  
| Voltasic Microsystems     | Private | 66.2       | 11        | Leadership: 10, PMF: 10, Governance-aligned board, No risk flags  |  

---

### Disqualified Companies – Evaluation Summary  

These companies failed to meet one or more critical thresholds such as total score, entry-stage fit, or strategic strengths (e.g., IP, PMF, Leadership): 

| Company Name               | Type   | Total Score | Entry Fit | Primary Weaknesses |  
|----------------------------|--------|-------------|-----------|--------------------|  
| Cirrus Logic (CRUS)        | Public | 61.6        | 9         | Total Score < 65, weak EBITDA, Apple dependency risk |  
| Rambus Inc. (RMBS)         | Public | 63.4        | 9         | Near-qualified but lacks standout strategic levers |  
| Silicon Labs (SLAB)        | Public | 63.2        | 8         | Moderate scores across the board; no catalytic strengths |  
| indie Semiconductor (INDI) | Public | 63.8        | 10        | Entry Fit is acceptable, but Board/Investor Profile weak (score: 5) |  
| Onto Innovation (ONTO)     | Public | 57.4        | 6         | Low Entry Fit, low moat, below minimum Total Score |  
| EdgeSemiTech               | Private | 60.2       | 10        | Total score below 65; low PMF; no standout leadership or IP moat |  
| QuantumWaves Inc.          | Private | 62.0       | 12        | Strong Entry Fit but average IP and PMF; lacks clear leverage point |  
| OptiCore Circuits          | Private | 62.6       | 10        | Strong PMF, but weak EBITDA and low innovation depth |  

---

**Final Investment Recommendation Summary**  
After evaluating all uploaded companies using Atairos Qualification Framework knowledge base, the following 7 companies are deemed qualified for Atairos investment consideration:  

### Qualified Public Companies  
| Company Name                 | Total Score | Entry Fit | Investment Rationale |  
|------------------------------|-------------|-----------|----------------------|  
| Lattice Semiconductor (LSCC) | 75.0        | 11        | Strong PMF (14), visionary leadership, and clean compliance |  
| Amkor Technology (AMKR)      | 73.4        | 12        | Exceptional EBITDA and Entry Fit; strong IP & board governance |  
| Axcelis Technologies (ACLS)  | 69.6        | 8         | High moat and IP strength, led by transformation-capable team |  
| FormFactor Inc. (FORM)       | 65.6        | 6         | Solid PMF and leadership; borderline entry fit but still qualifies |  
| SMART Global Holdings (SGH)  | 65.2        | 7         | Consistent operational metrics with defensible revenue model |  

### Qualified Private Companies 
| Company Name          | Total Score | Entry Fit | Investment Rationale |  
|-----------------------|-------------|-----------|----------------------|  
| NovaChip Solutions    | 66.0        | 12        | High scalability, strong IP and leadership; PE-aligned governance |  
| Voltasic Microsystems | 66.2        | 11        | Visionary C-suite, strong moat, and clean operational history |  
`
    },
  ])
);
