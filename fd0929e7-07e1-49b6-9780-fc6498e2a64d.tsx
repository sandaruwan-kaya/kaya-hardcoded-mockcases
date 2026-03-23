localStorage.setItem(
  "demo_fd0929e7-07e1-49b6-9780-fc6498e2a64d",
  JSON.stringify([
    {
      message: "Consider the attached files for CD14546. Execute KYC/CDD.",
      response: `
🤖 **Orchestrator Agent is thinking…**  
> Case has been created, SLA timers initialized, and orchestration queues set for downstream agents.  
> MCP calls: mcp:core-banking.get_customer_profile, mcp:crm.create_case_note  
> Regulatory ref: UK MLR 2017 – Regulation 28 (Customer Due Diligence)

**Case ID: EP-A-001**  

<br>

🤖 **Document Collection & OCR Agent is thinking…**  
> Accessing OCR engine…  
> MCP calls: mcp:ocr-extract.classify_form and mcp:ocr-extract.extract_key_values…  
> Parsing submitted files and authenticating templates/security markers…  
> Acceptable document quality confirmed against thresholds stored in the knowledge base (per JMLSG Part I, Section 5)…  

### Document Intake & Extraction  
| **File Name** | **Status** | **Document Quality** | **Key Findings** |  
|-----------|--------|------------------|--------------|  
| Jane_Doe_Driving_Licence.jpg | **Valid** | High (no glare/blur; sharp text; biometric photo clear) | ID not expired (exp. 2030-07-10); MRZ/barcode checksum OK; face match verified |  
| utility_bill_aug2025.png | **Valid** | High (well-scanned; date and address legible) | Issue date 2025-08-15; address extracted and normalized to CRM format |  
| Jane_Doe_KYC_Form.pdf | **Valid** | High (native PDF, schema fields machine-readable) | Schema recognized (v3.2); all mandatory fields captured with high confidence |  

🤖 **Data Gather & Reconciliation Agent is thinking…**  
> Cross-mapping document data into customer profile…  
MCP calls: mcp:cra.verify_identity, mcp:core-banking.get_customer_profile  
> Accessing authoritative KB (FCA Consumer Duty PS22/9, FG22/5) for consistency checks…  

> Validating identity fields…

| **Field** | **Extracted Value** | **Verified?** | **Source of Verification** |  
|-------|----------------|-----------|------------------------|  
| Full Name | **Jane Q. Doe** | Yes | Driving Licence OCR + Utility Bill OCR |  
| Date of Birth | **1990-04-12 (Age: 35)** | Yes | DL MRZ + internal doc store |  
| Nationality | **United Kingdom** | Yes | DL MRZ |  
| Residential Address | **221B Example Road, London, UK** | Yes | Utility Bill OCR + internal doc store |  
| Document IDs | **DL No. (UK1234567)** | Yes | Driving Licence OCR + internal store |  


🤖 **Comms Agent is thinking…**  
> Checking contact preferences via mcp:crm.search_contact…  
> - Ask-list: **None required** (all fields present).  
> - Customer outreach: **Not triggered.**  

🤖 **External Screening Agent is thinking…**  
> Retrieving open web + social media signals…  
> Accessing political exposure databases…  
MCP calls: mcp:screening.list_alerts, mcp:screening.triage_hit  

| **Check Type** | **Result** | **Sources Checked** | **Notes** |  
|------------|--------|-----------------|-------|  
| Social Media Footprint | Normal | Facebook, Instagram, LinkedIn, Twitter/X | Standard consumer activity; no extremist content |  
| Adverse Mentions | None | LexisNexis, Dow Jones Factiva | No negative press in last 5 years |  
| Political Exposure (PEP) | Not a PEP | StartKYC API, Gov Registry APIs | No role in politics, no donations detected |  
| Watchlist Name Collisions | One (cleared) | OFAC Consolidated List, UK HMT Watchlist | "Jane Doe" match resolved by DOB/Nationality |  

Regulatory Ref: JMLSG Part I – Section 5.5.25 (PEP Screening).  

> Querying company registries and corporate databases…  
MCP calls: mcp:companies-house.get_company_profile  
APIs: Companies House, Orbis, Insolvency Service  

| **Registry Searched** | **Result** | **Notes** |  
|-------------------|--------|-------|  
| UK Companies House | None | No director roles found |  
| Orbis / Bureau van Dijk | None | No active or dissolved roles |  
| Insolvency / Bankruptcy DB | None | No affiliations |  

🤖 **Risk Scoring Agent is thinking…**  
> Accessing scoring model…  
getting latest thresholds from knowledge base (per FCA FCG & PS24/17).  
MCP calls: mcp:event-bus.publish_event (metrics & audit trail).  

### Scoring Criteria  
| **Factor** | **Weight** |  
|--------|--------|  
| Jurisdiction Risk | 25% |  
| Client Type | 15% |  
| Screening Results | 30% |  
| Document Integrity | 10% |  
| Social/Political Exposure | 10% |  
| Corporate Links | 10% |  
| **Total Score** | **100%** |  

### Scoring Thresholds  
| **Risk Band** | **Score Range** | **Interpretation** |  
|-----------|-------------|----------------|  
| **Low** | 0–30 | Client presents minimal risk; no escalation required |  
| **Medium** | 31–60 | Moderate risk; enhanced due diligence may apply |  
| **High** | 61–100 | Significant risk; escalate to compliance staff |  

### Final Score Calculation Breakdown  
| **Factor** | **Value / Condition** | **Assigned Value (0–10)** | **Weight** | **Weighted Contribution** |  
|--------|-------------------|----------------------|--------|----------------------|  
| Jurisdiction Risk | Low (UK) | 2 | 25% | **5.0** |  
| Client Type | Low (Individual) | 1 | 15% | **1.5** |  
| Screening Results | Neutral (No hits) | 0 | 30% | **0.0** |  
| Document Integrity | High (authentic) | 1 | 10% | **1.0** |  
| Social/Political Exposure | None detected | 1 | 10% | **1.0** |  
| Corporate Links | None | 2 | 10% | **2.0** |  
| Total | — | — | 100% | **10.5 / 100** |  

**Final Risk Score: 10.5 / 100**  
**Risk Level: LOW**  

Regulatory Ref: FCA Handbook – Financial Crime Guide (FCG).  

<br>

🤖 **Decision Agent is thinking…**  
> Re-evaluating findings…  
> Verifying audit trail…  
> Cross-checking risk score…  
- All identity fields consistent  
- Risk score stable at **10.5/100 (LOW)**  
- Exceptions: Minor address format adjustment (non-blocking)  
- System Decision: **APPROVE**  
- Escalation Need: None  

Regulatory Ref: FCA PS22/9 Consumer Duty – Principle of acting in good faith.  

<br>

🤖 **Write-Back & Closure Agent is thinking…**  
> Performing atomic updates via MCP (mcp:core-banking.upsert_kyc_status, mcp:doc-store.put_evidence_pack).  
> - Idempotent upsert to Core/CRM  
> - SLA timer stopped

**Case EP-A-001 Status: Closed**

Regulatory Ref: UK MLR 2017 – Reg. 40 (Record keeping)  
`,
    },
    {
      message: "Consider the attached files for CD32454. Execute KYC/CDD.",
      response: `
**🤖 Orchestrator Agent is thinking…**  
> Case has been created, SLA timers initialized, and orchestration queues set for downstream agents.  
> MCP calls: mcp:core-banking.get_customer_profile, mcp:crm.create_case_note  
> Regulatory ref: UK MLR 2017 – Regulation 28 (Customer Due Diligence)  

**Case ID: EP-A-002**  

<br>

**🤖 Document Collection & OCR Agent is thinking…**  
> Accessing OCR engine…  
> MCP calls: mcp:ocr-extract.classify_form and mcp:ocr-extract.extract_key_values…  
> Parsing submitted files and authenticating templates/security markers…  
> Acceptable document quality confirmed against thresholds stored in the knowledge base (per JMLSG Part I, Section 5)…  

### Document Intake & Extraction  
| **File Name** | **Status** | **Document Quality** | **Key Findings** |  
|-----------|--------|------------------|--------------|  
| John_Smith_Passport.jpg | **Valid** | High (bio page clear; MRZ legible) | Passport not expired (exp. 2031-03-18); MRZ checksum OK; UK nationality |  
| John_Smith_Bank_Statement.pdf | **Valid** | High (native PDF; official header/stamp visible) | Statement date **2025-09-18;** address: **44 King Street, SW1A 2AA** |  
| John_Smith_KYC_Form.pdf | **Valid** | High (schema v3.2; all fields extracted) | Name/DOB matched; all mandatory fields complete |  

**🤖 Data Gather & Reconciliation Agent is thinking…**  
> Cross-mapping document data into customer profile…  
> MCP calls: mcp:cra.verify_identity, mcp:core-banking.get_customer_profile  
> Accessing authoritative KB (FCA Consumer Duty PS22/9, FG22/5) for consistency checks…  

### Validating identity fields…  
| **Field** | **Extracted Value** | **Verified?** | **Source of Verification** |  
|-------|----------------|-----------|------------------------|  
| Full Name | John Smith | Yes | Passport MRZ + KYC form |  
| Date of Birth | 1980-11-02 (Age 44) | Yes | Passport MRZ |  
| Nationality | United Kingdom | Yes | Passport MRZ |  
| Residential Address | 44 King Street, SW1A 2AA, London, UK | Yes | Bank statement OCR + Equifax CRA |  
| Document IDs | Passport No. (UKxxxxxxx) | Yes | Passport MRZ + internal doc store |  

<br>

**🤖 Comms Agent is thinking…**  
> Checking contact preferences via mcp:crm.search_contact…  
> - Ask-list: **None required** (core info present).  
> - Customer outreach: **Not triggered.**  

**🤖 External Screening Agent is thinking…**  
> Retrieving open web + social media signals…  
> Accessing political exposure databases…  
> MCP calls: mcp:screening.list_alerts, mcp:screening.triage_hit  

### Screening Results  
| **Check Type** | **Result** | **Sources Checked** | **Notes** |  
|------------|--------|-----------------|-------|  
| Social Media Footprint | Normal | LinkedIn, X, FB | No extremist content |  
| Adverse Mentions | **Material** | Factiva, LexisNexis | Articles alleging improper financial conduct (unresolved) |  
| Political Exposure (PEP) | **Likely PEP** | Refinitiv / Gov registries | High-likelihood match (MatchScore = 0.86) with aligned demographic identifiers to a listed official |  
| Sanctions | None | OFAC, HMT | No matches |  
| Watchlist Collisions | Several, triaged | OFAC, HMT | Duplicates ruled out except PEP hit |  
| Electoral Roll / CRA | Match confirmed | Equifax API | Address corroborated (UK MLR 2017 Reg.28) |  

Regulatory Ref: JMLSG Part I – Section 5.5.25 (PEP Screening).  

<br>

> Querying company registries and corporate databases…  
> MCP calls: mcp:companies-house.get_company_profile  
> APIs: Companies House, Orbis, Insolvency Service  

### Corporate Registry Search  
| **Registry** | **Result** | **Notes** |  
|----------|--------|-------|  
| Companies House | **Director role** | Dormant consultancy listed |  
| Orbis / BvD | Offshore affiliate | Historic shareholder link in higher-risk jurisdiction |  
| Insolvency DB | None | — |  

**🤖 Risk Scoring Agent is thinking…**  
> Accessing scoring model…  
> getting latest thresholds from knowledge base (per FCA FCG & PS24/17).  
> MCP calls: mcp:event-bus.publish_event (metrics & audit trail).  

### Scoring Criteria  
| **Factor** | **Weight** |  
|--------|--------|  
| Jurisdiction Risk | 25% |  
| Client Type | 15% |  
| Screening Results | 30% |  
| Document Integrity | 10% |  
| Social/Political Exposure | 10% |  
| Corporate Links | 10% |  
| **Total Score** | **100%** |  

### Scoring Thresholds  
| **Risk Band** | **Score Range** | **Interpretation** |  
|-----------|-------------|----------------|  
| **Low** | 0–30 | Client presents minimal risk; no escalation required |  
| **Medium** | 31–60 | Moderate risk; enhanced due diligence may apply |  
| **High** | 61–100 | Significant risk; escalate to compliance staff |  

### Final Score Calculation Breakdown  
| **Factor** | **Value / Condition** | **Assigned Value (0–10)** | **Weight** | **Weighted Contribution** |  
|--------|-------------------|----------------------|--------|----------------------|  
| Jurisdiction Risk | UK + offshore affiliate | 7 | 25% | 17.5 |  
| Client Type | Individual, non-retail | 4 | 15% | 6.0 |  
| Screening Results | PEP hit + adverse media | 9 | 30% | 27.0 |  
| Document Integrity | High | 1 | 10% | 1.0 |  
| Social/Political Exposure | Likely PEP | 8 | 10% | 8.0 |  
| Corporate Links | Director + offshore | 7 | 10% | 7.0 |  
| **Total** | — | — | 100% | **66.5/100** |  

**Final Risk Score: 66.5 / 100**  
**Risk Level: HIGH**  

Regulatory Ref: FCA Handbook – Financial Crime Guide (FCG). 

<br>

**🤖 Decision Agent is thinking…**  
> Re-evaluating findings…  
> Verifying audit trail…  
> - Identity: consistent  
> - Screening: PEP hit confirmed  
> - Risk Score: **66.5 → HIGH**  
> - Decision: **ROUTE TO HITL**

> **EDD Triggered:** 
> - 100% QA sampling  
> - Senior manager approval required (per High-Risk Escalation SOP v2.1)  

Regulatory ref: MLR 2017 Reg.33 (EDD required for PEPs).  

<br>

**🤖 Human Oversight Agent is thinking…**  

JIRA Ticket Raised for Human Review  
This ticket is auto-generated using KAYA's JIRA connector.  

<strong>View the JIRA ticket:</strong> 
<a href="https://techlabsglobal.atlassian.net/browse/FC-9" target="_blank" rel="noopener noreferrer">
  <strong>CF-KYC-8721</strong>
</a>  

**Important for Reviewer:**  
- Review the auto-generated KYC Summary Report attached in the JIRA.  
- Validate subject details, risk score, and embedded exceptions.  
- Amend or correct values if necessary.  
- Add comments for justification if overriding any recommendation.  

**Once approved:** 
- Mark the JIRA ticket as **"Approved"** or **"Rejected".**  


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
> - Reviewer decision recorded (Approved).  
> - Approval rationale saved in compliance logs.  

**🤖 Write-Back & Closure Agent is thinking…**  
> Performing atomic updates via MCP (mcp:core-banking.upsert_kyc_status, mcp:doc-store.put_evidence_pack).  
> Core/CRM updated: status=Human Reviewed, risk=HIGH  
> - Evidence pack archived  
> - SLA adjusted for EDD policy  

**Case EP-A-002 Status: Closed.** (Compliance Officer Reviewed.)  

Regulatory ref: UK MLR 2017 Reg.40 (Record keeping).  
`,
    },
  ])
);
