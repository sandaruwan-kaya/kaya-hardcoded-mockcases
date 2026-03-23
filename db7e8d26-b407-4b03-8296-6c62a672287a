localStorage.setItem(
  "demo_db7e8d26-b407-4b03-8296-6c62a672287a",
  JSON.stringify([
    {
      message: "Consider the attached files. Identify the customer and generate a KYC summary report.",
      response: `
**🤖 Supervisor Agent is thinking...**  
> Initiating full KYC verification sequence for the client.  
> Orchestrating all supporting agents for document validation, data extraction, screening, and risk scoring.  
> Starting with client-submitted documents and CRM profile.  

**🤖 Data Intake & Profile Integration Agent is thinking...**  
> Accessing OCR engine…  
> Parsing submitted files…  
> Normalizing identity fields…  
> Cross-checking against CRM & Gov APIs…  

### Data Mapping Table  
| **Field** | **Submitted** | **Verified Source** | **Status** |  
|-----------|---------------|---------------------|------------|  
| Name | Sarah Williams | CRM | Match |  
| DOB | 15-Apr-1990 | Passport API | Match |  
| Address | 12 Elm Street | Utility Bill API | Match |  
| Income | £3,750/month | Bank Statement API | Verified |  

**Actions:**  
- Mapping extracted info into CRM profile  
- Checking for inconsistencies  
- Cleaning OCR text  
- Preparing unified Customer Profile Snapshot  

Forwarding → Verification Agent.  

**🤖 Verification Agent is thinking...**  
> Authenticating templates & security markers…  
> Performing OCR extraction + facial similarity…  
> Cross-verifying documents against Gov APIs…  
> Checking document timestamps + expiry…  

### Document Validation Table  
| **Document** | **Result** |  
|--------------|------------|  
| Passport | Valid |  
| NIC | Valid |  
| Utility Bill | Valid |  
| Bank Statement | Valid |  

Forwarding validated data → Screening Agent.  

**🤖 Screening Agent is thinking...**  
> Scanning global watchlists…  
> Checking political exposure…  
> Scanning media sources for negative mentions…  

### Screening Results Table  
| **Screening Type** | **Result** |  
|--------------------|------------|  
| Sanctions | No Match |  
| PEP | No Match |  
| Adverse Media | Clean |  

Forwarding → Risk Assessment Agent.  

**🤖 Risk Assessment Agent is thinking...**  
> Accessing JIRA API…  
> Applying risk weights…  
> Calculating composite risk score…  

### Scoring Criteria Table  
| **Factor** | **Weight** |  
|------------|------------|  
| Sanctions & PEP | 0% |  
| Document Verification | 20% |  
| Income/Occupation | 15% |  
| Address Stability | 15% |  

### Final Score Breakdown Table  
| **Factor** | **Weight** | **Score** |  
|------------|------------|-----------|  
| Sanctions & PEP | 0% | 0 |  
| Document Verification | 20% | 20 |  
| Income/Occupation | 15% | 15 |  
| Address Stability | 15% | 15 |  
| **Total Score** | **50%** | **50 → LOW RISK** |  

**Decision:** Score < 70 → Auto-Approved  
**Approval rationale saved in compliance logs.**  

Forwarding decision → Audit & Compliance Agent.  

**🤖 Audit & Compliance Agent is thinking...**  
> Logging:  
> - Document validation results  
> - Screening results  
> - Risk scoring  
> - Automated approval decision  
> - Attached PDF report ID  
> - Time-stamped audit trail  

> Audit trail updated successfully.  
> Forwarding final outcome → Supervisor Agent.  

**🤖 Supervisor Agent is thinking...**  
> KYC workflow completed.  
> Low-risk client approved automatically.  

**Final Status:** CLIENT APPROVED — ACCOUNT CREATED SUCCESSFULLY.  
> Final status distributed to downstream systems.  
`,
    },
    {
      message: "Review the attached documents and produce the customer’s KYC verification report.",
      response: ` 
**🤖 Supervisor Agent is thinking...**  
> Initiating full KYC verification sequence for the client.  
> Routing tasks across all supporting agents.  

**🤖 Data Intake & Profile Integration Agent is thinking...**  
> Accessing OCR engine…  
> Parsing submitted files…  
> Normalizing identity fields…  
> Cross-checking against CRM & Gov APIs…  

### Data Mapping Table  
| **Field** | **Uploaded** | **Verified** | **Status** |  
|-----------|--------------|--------------|------------|  
| Name | Michael Black | Verified | Match |  
| DOB | 03-Jan-1985 | Verified | Match |  
| Address | Lagos | Verified | Match |  
| Income | $10,000/month | Verified | Match |  

Forwarding unified profile → Verification Agent.  

**🤖 Verification Agent is thinking...**  
> Authenticating templates & security markers…  
> Checking expiry…  
> OCR + biometric face match…  
> Validating identity fields…  

### Document Validation Table  
| **Document** | **Extracted Info** | **Verified Against API** | **Status** |  
|--------------|-------------------|--------------------------|------------|  
| Passport | Name + DOB + Passport No. | Verified | Valid |  
| National ID | Name + DOB + NIC No. | Verified | Valid |  
| Utility Bill | Address | Verified | Valid |  
| Bank Statement | Monthly Income | Verified | Valid |  

Cross-mapping document data → customer profile…  
Forwarding → Screening Agent.  

**🤖 Screening Agent is thinking...**  
> Retrieving open web + social signals…  
> Accessing political exposure database…  
> Querying sanctions engines…  
> Querying corporate registries & watchlists…  

### Screening Results Table  
| **Screening Type** | **Result** |  
|--------------------|------------|  
| Sanctions | Match Found |  
| PEP | PEP Positive |  
| Adverse Media | Negative Media Found |  

Flags compiled → Forwarding → Risk Assessment Agent.  

**🤖 Risk Assessment Agent is thinking...**  
> Accessing scoring model…  
> Applying screening weights…  
> Calculating composite risk scoring…  

### Scoring Criteria  
| **Factor** | **Weight** |  
|------------|------------|  
| Sanctions & PEP | 50% |  
| Document Verification | 10% |  
| Income | 10% |  
| Address Stability | 10% |  

### Threshold Table  
| **Score Range** | **Classification** |  
|-----------------|-------------------|  
| 0–39 | Low Risk |  
| 40–69 | Medium Risk |  
| 70+ | High Risk |  

### Final Score Breakdown  
| **Factor** | **Weight** | **Score** |  
|------------|------------|-----------|  
| Sanctions & PEP | 50% | 50 |  
| Document Verification | 10% | 10 |  
| Income | 10% | 10 |  
| Address Stability | 10% | 10 |  
| **Total Score** | **80%** | **80 → HIGH RISK** |  

**Decision:** Score ≥ 70 → Human Review Required  
Forwarding results → Human Review Agent.  

**🤖 Human Review Agent is thinking...**  
> Generating Pre-Review Summary  
> Access JIRA API…  
> Summarizing risk factors…  
> Preparing narrative + tabular summary…  
> Rendering final PDF KYC report…  

### Summary of Findings  
| **Category** | **Result / Notes** |  
|--------------|-------------------|  
| Identity Match | All fields consistent |  
| Document Authenticity | All validated |  
| Sanctions | Match Found (Critical) |  
| PEP | Positive (High-Risk Trigger) |  
| Adverse Media | Negative signals detected |  
| System Decision | High Risk → Requires Human Review |  

**KYC Summary Report Generated → PDF Ready**    
**Download PDF Here:** <a href="https://docs.google.com/document/d/1V7DYLQdwFLlM-Sf9IKLsv16FaGo_igUM/export?format=pdf" download="KYC_Report.pdf ">KYC_Report.pdf</a>  

**Raising JIRA Ticket**  
> JIRA ticket created automatically via KAYA's JIRA connector.  
> KYC report attached.  

<strong>JIRA ticket:</strong> 
<a href="https://techlabsglobal.atlassian.net/browse/KAP-2037" target="_blank" rel="noopener noreferrer">
  <strong>KAP-2037</strong>
</a>  

**Instructions for Reviewer**  
- Review the auto-generated KYC summary report  
- Validate risk score, breaches, screening flags  
- Adjust values if needed  
- Add justification notes if overriding system recommendation  

**Decision Options:**  
✔ Approve  
✖ Reject  
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
**🤖 Human Review Agent is thinking… (Decision Received)**  
> Human review completed.  
> Reviewer Decision Recorded: APPROVED (System Assessment Confirmed)  
> Reviewer confirms the system's high-risk classification.  
> Approval rationale saved in compliance logs.  
> Forwarding decision → Audit & Compliance Agent.  

**🤖 Audit & Compliance Agent is thinking...**  
> Logging:  
> - High-risk classification  
> - Human reviewer approval of high-risk assessment  
> - Rationale supporting rejection  
> - JIRA ticket ID  
> - Attached PDF report ID  
> - Time-stamped audit trail  

> Audit trail updated successfully.  
> Forwarding final outcome → Supervisor Agent.  

**🤖 Supervisor Agent is thinking...**  
> KYC workflow completed.  
> Human reviewer has approved the HIGH-RISK decision.  

**Final Status:** CLIENT REJECTED — ACCOUNT WILL NOT BE CREATED.  
> Final disposition shared with downstream systems.  
`,
    },
  ])
);
