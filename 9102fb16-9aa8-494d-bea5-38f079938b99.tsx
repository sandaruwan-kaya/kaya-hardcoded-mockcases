localStorage.setItem(
  "demo_9102fb16-9aa8-494d-bea5-38f079938b99",
  JSON.stringify([
    {
      message:
        "Consider the attached files. Identify the customer and generate a KYC summary report.",
      response: `
**🤖 Orchestrator Agent is thinking…**

<br>

*Accessing workflow engine…*  
*Retrieving knowledge bases…*  
*Initializing orchestration.*

**Workflow Triggered:** New corporate counterparty onboarding.  

### Documents Submitted & Verification:  
| **Document** | **File Name** | **Status** | **Key Findings** |  
|----------|-----------|--------|--------------|  
| Company Onboarding Request | company_onboarding_request.docx | Valid | Provided company details, directors, shareholders, source of funds |  
| Certificate of Incorporation | certificate_of_incorporation.pdf | Valid | Incorporated 2021; Reg. No. 2021/567890; Jurisdiction: Singapore |  
| Memorandum & Articles of Association | memorandum_articles_of_association.pdf | Valid | Confirms business scope, governance structure, shareholder rights |  
| Business License | business_license.pdf | Valid | License active; sector: Financial Services; exp. 2026 |  
| Certificate of Good Standing | certificate_good_standing.pdf | Valid | Issued Aug 2025; confirms company is in good standing |  
| Shareholder Register | shareholder_register.excel | Valid | John Smith (55%); Global Holdings BV (45%) |  

### Extracted Core Profile:  
| **Attribute** | **Value** |  
|-----------|-------|  
| Company Name | ABC Global Trading Ltd. |  
| Registration Number | 2021/567890 |  
| Country of Incorporation | Singapore |  
| Industry | Financial Services |  
| Registered Address | 12 Marina Boulevard, Singapore 018982 |  
| Directors | Jane Doe, Michael Tan |  
| Shareholders | John Smith — 55% (Passport No. XXXXX1234)<br>Global Holdings BV — 45% |  
| PEP / Sanctions | No / No |  
| Source of Funds | Trading revenues + parent capital injection |  




<br>

**🤖 Identity Validation Agent is thinking…**

<br>

*Querying corporate registries…*  
*Extracting records…*  
*Validating against knowledge bases.*  
**Vendor Call:** LexisNexis Corporate Registry  

### Validation Results:  
| **Attribute** | **Status** | **Notes** |  
|-----------|--------|-------|  
| Legal Name | Match | Confirmed across incorporation docs |  
| Registration Number | Mismatch | Provided: 2021/567890 vs ACRA: 567890/2021-XYZ |  
| Incorporation Date | Match | 2021-03-15 confirmed |  
| Address | ️ Partial | "12 Marina Blvd #21-01" vs "12 Marina Boulevard" |  
| Directors | Verified | Jane Doe, Michael Tan |  
| Shareholders | Verified | John Smith 55%, Global Holdings BV 45% |  

**Confidence:** 85%  
**Exceptions:**  
- Registration number mismatch → manual reverification needed  
- Address discrepancy → confirm full registered office  

**Status:** ️ Partial Validation — Escalation required.  


<br>

**🤖 Sanctions Agent is thinking…**  

<br>

*Accessing Refinitiv World-Check…*  
*Retrieving sanctions & PEP lists.*  

### Screening Results:  
| **Entity/Person** | **Status** | **Notes** |  
|---------------|--------|-------|  
| ABC Global Trading Ltd. | Clear | No matches |  
| Jane Doe | Clear | No sanctions/PEP |  
| Michael Tan | Clear | No sanctions/PEP |  
| John Smith (shareholder) | ️ Possible | Name collision with OFAC SDN "John A. Smith" |  
| Global Holdings BV | Clear | EU & UN cleared |  

**Confidence:** 90%  
**Exceptions:**  
- John Smith name collision → requires DOB/passport check  
- Registration number mismatch → unresolved from Identity Validation  

**Status:** ️ Partial Clearance — Escalation required.  


<br>

**🤖 AML Risk Agent is thinking…**  

<br>

*Accessing ComplyAdvantage…*  
*Applying AML scoring models…*  

### Risk Assessment:  
| **Factor** | **Value** | **Weight** | **Contribution** |  
|--------|-------|--------|--------------|  
| Jurisdiction Risk | Low (SG + NL) | 25% | 5.0 |  
| Industry Risk | Medium (Financial) | 15% | 4.5 |  
| Screening Results | Pending (OFAC hit) | 30% | 6.0 |  
| Document Integrity | Partial | 10% | 2.0 |  
| Social/Political Exp | None | 10% | 1.0 |  
| Corporate Links | Simple structure | 10% | 1.0 |  

**Final Risk Score: 19.5 / 100 → LOW**  
**Confidence:** 80% (pending resolution of mismatches)  
**Exceptions:** Reg. no. mismatch, John Smith OFAC collision  

**Status:** ️ Provisional Clearance — Escalation required.  


<br>

**🤖 Adverse Media Agent is thinking…**  

<br>

*Accessing smartKYC…*  
*Scanning global news & OSINT…*  

**Results:**  
- Entity → Clear  
- Directors → Clear  
- Shareholders → Clear  
- No litigation or negative coverage in last 7 years  

**Confidence:** 99%  
**Status:** All parties cleared in adverse media.  


<br>

**🤖 Critic / Validator Agent is thinking…**  

<br>

*Cross-comparing outputs…*  
*Aligning vendor responses…*  
*Normalizing data.*  

**Findings:**  
- Entity & Directors → Consistent  
- Shareholder John Smith → ️ Conflict: OFAC hit vs media clear  
- Registration Number → Mismatch persists  
- Address → ️ Minor formatting differences auto-corrected  

**Unresolved Conflicts:**  
- Registration No. mismatch  
- John Smith name collision  

**Status:** ️ Escalation required.  


<br>

**🤖 Policy & Guardrail Agent is thinking…**  

<br>

*Applying compliance policies…*  
*Enforcing guardrails…*  

- **PII Protection:** Passport masked → *1234  
- **Jurisdiction Routing:** EU-linked queries restricted to EU vendors → enforced  

- **Escalation Rules:**  
  - AML Risk >70 → Not triggered  
  - Sanctions hit → ️ Triggered  
  - Registry mismatch → ️ Triggered  

**Decision:** Escalation required.  
**Status:** ️ Escalated to Human Oversight.  


<br>

**🤖 Human Oversight Agent is thinking…**  

<br>

*Escalation queue triggered…*  
*Sending verification emails…*  

**Case ID:** CF-KYC-9021  

### Escalated Issues:  
| **Attribute** | **Conflict** | **Evidence Provided**  | **Resolution Method** | **Status** |  
|-----------|----------|-------------------|-------------------|--------|  
| Registration Number | Onboarding vs ACRA mismatch | Onboarding doc: 2021/567890 vs ACRA: 567890/2021-XYZ  | Email to ACRA | Awaiting approval |  
| John Smith | OFAC name collision | Refinitiv hit: "John A. Smith" on OFAC SDN list;<br> passport ending *1234 provided for disambiguation  | Passport verification via LexisNexis | Awaiting approval |  

**Status:** ️ Pending manual confirmation.  

**Reviewer Notes**   
- Compliance officer to reconcile registration number discrepancy with official ACRA registry email reply.   
- Confirm John Smith not linked to OFAC hit via LexisNexis confirmation email.   
- Once responses are received → system will update case and resume workflow.   

**Status:** ️ Case in **Human Oversight Queue**   
- **Automated emails sent** to registry and LexisNexis.   
- **Current status:** Awaiting Response.   
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
          waitingMessage: "Awaiting Email Responses",
          confirmationDelay: 10000,
          confirmationTrigger: "websocket",
          websocketUrl:
            "wss://kaya-mock-api-938786674786.us-central1.run.app/health-first/websocket",
          websocketEvent: "confirmation",
          confirmationMessage: "email updated",
        },
      ],
    },
    {
      message: "email updated",
      response: `
**🤖 Compilation Agent is thinking…**  

<br>

*Collating final results…*  
*Verifying manual resolutions…*  

### Escalation Outcomes:  
| **Conflict** | **Resolution** | **Source** | **Status** |  
|----------|------------|--------|--------|  
| Registration Number | Confirmed as 567890/2021-XYZ | ACRA | Cleared |  
| John Smith | Not OFAC match (Passport *1234) | LexisNexis | Cleared |  

**Final Compilation Results**   
- Identity: Verified (Name, Registration, Address, Directors, Shareholders)   
- Sanctions: Clear (Entity, Directors, Shareholders)   
- AML Risk Score: 27 / 100 (Low)   
- Adverse Media: Clear   
- Exceptions: None outstanding   
- Audit Lineage: Vendor calls + timestamps + escalation notes logged   
- Compliance Review: Completed with manual overrides recorded   

*Consolidating results into narrative and tabular report…*  
*Embedding monitoring cadence…*  
*Rendering final PDF…*  

**KYC Summary Report Generated** → <a href="https://drive.google.com/uc?export=download&id=1TMmrGDJn1hu3atFQ9I1MoPgk3KTYK1VJ" download="KYC_Summary_Report.pdf">Download Report (PDF)</a>


<br>

**🤖 Human Oversight Agent is thinking…**  

<br>

JIRA Ticket Raised for Human Review   
This ticket is auto-generated using KAYA's JIRA connector.   

<strong>View the JIRA ticket:</strong> 
<a href="https://techlabsglobal.atlassian.net/browse/FC-8" target="_blank" rel="noopener noreferrer">
  <strong>CF-KYC-9021</strong>
</a>  

**Important for Reviewer:**  
- Review the auto-generated KYC Summary Report attached in the JIRA.  
- Validate subject details, risk score, and embedded exceptions.  
- Amend or correct values if necessary.  
- Add comments for justification if overriding any recommendation. \

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
      response: `
**Human Review Received**

<br>

**🤖 Human Oversight Agent is thinking…**  

<br>

*Reviewer decision recorded (Approved).*  
*Approval rationale saved in compliance logs.*  


<br>

**🤖 Monitoring Agent is thinking…**  

<br>

*Enabling post-approval monitoring…*  
*Subscribing to feeds…*  

### Monitoring Configuration:  
| **Area** | **Frequency** | **Trigger** |  
|------|-----------|---------|  
| Sanctions / PEP | Daily | Refinitiv, ComplyAdvantage |  
| Adverse Media | Quarterly | smartKYC |  
| Registry Data | Semi-Annual | ACRA + EU Registries |  
| Risk Re-score | On Demand | Triggered by new alerts |
`,
    },
  ])
);
