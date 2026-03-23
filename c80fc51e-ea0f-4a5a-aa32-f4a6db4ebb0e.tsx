localStorage.setItem(
  "demo_c80fc51e-ea0f-4a5a-aa32-f4a6db4ebb0e",
  JSON.stringify([
    {
      message: "Generate a technology risk assessment questionnaire.",
      response: `
🤖 **Crosswalk Matrix Generator Agent is thinking...**

Presenting the tabulated application readiness view to user for selection. 

**Application Assessment Status**
| Application / Process Name                 | Current Assessment State |
|--------------------------------------------|-------------------------|
| KAYA AI Assistant                          | Pending Assessment      |
| HR Onboarding Application                  | Pending Assessment      |
| Finance Process Automation                 | Assessment Initiated    |
| Employee Background Check Automation       | Assessment Initiated    |

To initiate the correct RCM Process, please choose one application from the list below: 

- KAYA AI Assistant
- HR Onboarding Application
- Finance Process Automation
- Employee Background Check Automation

Please select the application you want to initiate the RCM process for.
`,
    },
    {
      message: "KAYA AI Assistant",
      response: `
🤖 **Crosswalk Matrix Generator Agent is thinking...**

**Applicable RCM Process Options**
| RCM Process Name                     | Description (Internal Summary)                             |
|-------------------------------------|------------------------------------------------------------|
| RCM_AI_Application_Go_Live          | For deploying AI/ML applications to production    |
| RCM_Application_Maintainance        | Ongoing operational controls for system upkeep            |
| RCM_HR_Application_Development      | HR-aligned systems development lifecycle controls         |
| RCM_Finance_Application_Migration   | Controls for finance systems transition/migration        |

To continue generating the Technology Risk Assessment Questionnaire, please choose one of the following RCM processes: 

- RCM_AI_Application_Go_Live 
- RCM_Application_Maintainance 
- RCM_HR_Application_Development 
- RCM_Finance_Application_Migration 

Please select the RCM process to proceed.
`,
    },
    {
      message: "RCM_AI_Application_Go_Live",
      response: `
🤖 **Crosswalk Matrix Generator Agent is thinking...**

Application & RCM confirmed: 

**KAYA AI Assistant** → **RCM_AI_Application_Go_Live**

> Initiating crosswalk generation workflow… 

**Retrieving authoritative control frameworks:**

- COBIT 2019 – DSS, BAI, APO domains 
- NIST 800-53 Rev5 – AC, AU, CM, IR, CP, etc. 
- ISO 27001:2022 Annex A controls 
- NYDFS 23 NYCRR 500 cybersecurity rules 
- Internal NYL SOP catalog 

> Normalizing terminology… 

> Harmonizing taxonomy (Objective → Control → Evidence → Frequency → Owner)… 

> Performing control de-duplication & equivalence mapping… 

> Overlaying NYL RCM structure… 

> Master crosswalk synthesis completed. 

### Populating RCM_AI_Application_Go_Live with unified mappings.
| Control Area        | Control Objective          | Control Description                         | Control Owner     | Frequency     | Evidence               | Risk Rating | Underlying Sources                                             | COBIT        | NIST 800-53       | ISO 27001         | NYDFS 500  | Internal SOP     |
|--------------------|---------------------------|--------------------------------------------|-----------------|--------------|----------------------|------------|----------------------------------------------------------------|--------------|-----------------|-----------------|------------|----------------|
| Access Management   | Ensure least-privilege access | Access provisioning, deprovisioning, periodic reviews | IAM Lead        | Quarterly    | Access review reports | High       | COBIT DSS06.03; NIST 800-53 AC-2, AC-3, AC-6; ISO 27001 A.9.2.3, A.9.4.1 | DSS06.03     | AC-2, AC-3, AC-6 | A.9.2.3, A.9.4.1 | 500.07     | SOP-ACC-001    |
| Privileged Access   | Monitor privileged activities | PAM system logs & approvals                 | Security Lead    | Daily        | PAM logs, SIEM alerts | High       | COBIT DSS06.03; ISO 27001 A.9.4.3; NYDFS 500.07                   | DSS06.03     | AC-5, AC-6       | A.9.4.3          | 500.07     | SOP-PAM-001    |
| Log Monitoring      | Identify anomalies         | Centralized logging & alerting              | AppOps Lead      | Daily        | Log dashboards        | Medium     | COBIT DSS05.04; NIST AU-6, AU-12; ISO 27001 A.12.4.1; NYDFS 500.02(f) | DSS05.04     | AU-6, AU-12      | A.12.4.1         | 500.02(f)  | SOP-LOG-001    |
| Incident Management | Timely detection & closure | Incident triage, SLA tracking               | Service Manager  | Ongoing      | Ticket logs, RCA      | High       | COBIT DSS02.01; NIST IR-4, IR-5; ISO 27001 A.16.1.5; NYDFS 500.16   | DSS02.01     | IR-4, IR-5       | A.16.1.5         | 500.16     | SOP-INC-004    |
| Change Management   | Ensure controlled deployments | CAB approval, rollback validation          | Release Manager  | Per Release  | Change tickets        | Medium     | COBIT BAI06.01; NIST CM-3, CM-4; ISO 27001 A.12.1.2; NYDFS 500.03  | BAI06.01     | CM-3, CM-4       | A.12.1.2         | 500.03     | SOP-CHG-002    |
| Vulnerability Mgmt  | Identify & remediate vulns | Scanning, patching, prioritization         | Cyber Lead       | Monthly      | Scan results          | High       | COBIT DSS05.01; NIST RA-5, SI-2; ISO 27001 A.12.6.1; NYDFS 500.05 | DSS05.01     | RA-5, SI-2       | A.12.6.1         | 500.05     | SOP-VULN-001  |
| Data Quality        | Maintain data integrity    | DQ rules, reconciliation checks            | Data Steward     | Weekly       | DQ dashboards         | Medium     | COBIT BAI03.05; ISO A.14.2.5; NYDFS 500.04(b)                      | BAI03.05, DSS06.01 | SI-12            | A.14.2.5         | 500.04(b)  | SOP-DQ-001    |
| Backup & Recovery   | Ensure recoverability      | Backup success checks                       | Infra Lead       | Daily        | Backup reports        | High       | COBIT DSS04.03; ISO A.12.3.1; NYDFS 500.02(b)                      | DSS04.03     | CP-9, CP-10      | A.12.3.1         | 500.02(b)  | SOP-BR-001    |
| BCP/DR             | Ensure resilience          | DR test outcomes                            | Resilience Lead  | Annual       | DR repor              |     -       | -                                                                   |        -      |    -             |             -    |          -  |         -       |

---

🤖 **Questionnaire Generator Agent is thinking...**

> Parsing controls, policies, SOPs, regulatory mappings, and the RCM… 

> Extracting relevant compliance requirements for KAYA AI Assistant… 

> Generating tailored risk assessment questionnaire… 

> Applying version control… 

<span class="flex flex-col gap-y-1"><span class="font-semi-bold">Creating SharePoint folder using naming convention: </span><span class="font-semi-bold">EP-TR-001_KAYA_AI_Assistant</span></span>

> Uploading questionnaire to the newly created assessment folder…

<span class="flex flex-col gap-y-1"><span class="font-semi-bold">Questionnaire saved in SharePoint folder:</span><span class="font-semi-bold">EP-TR-001_KAYA_AI_Assistant</span></span>

[SharePoint Location](https://kayatechxyz-my.sharepoint.com/:x:/g/personal/ishan_kayatech_com/IQBaWwcyMgBTRbFuiQwxCj_6AbAxDzUIvsxwdnbJ9ZvQS08?e=5X4ID7?target=_blank)
`,
      apiCalls: [
        {
          name: "sendEmail",
          trigger: "after",
          buttonId: "email",
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          waitingConfirmation: true,
          waitingMessage: "Pending RCM Team Member review…",
          confirmationDelay: 10000,
          confirmationTrigger: "websocket",
          websocketUrl:
            "wss://kaya-mock-api-938786674786.us-central1.run.app/health-first/websocket",
          websocketEvent: "confirmation",
          confirmationMessage: "RCM Team Member approval received.",
        },
      ],
    },
    {
      message: "RCM Team Member approval received.",
      response: `
### RCM Team Member approval received.

> Proceeding to notify the Process Owner.

---

🤖 **Questionnaire Communication & Response Collation Agent is thinking...**

Preparing outbound communication to: **vijay@kayatech.com**

CC: **Tech Risk Group**

> Attaching questionnaire package and instructions…


Including SharePoint access path: **EP-TR-001_KAYA_AI_Assistant/questionnaire.xlsx**


> Providing guidance for evidence upload and link insertion.

Automated email dispatched with: 
- Direct link to the questionnaire 
- Instructions to upload supporting evidence to the Evidence subfolder 
- Instructions to paste SharePoint evidence URLs into the questionnaire fields 
`,
      apiCalls: [
        {
          name: "sendEmail",
          trigger: "after",
          buttonId: "email",
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          url: "https://kaya-mock-api-938786674786.us-central1.run.app/health-first/email",
          bodyTemplate: ` {\"subject\":\"Action Required – Technology Risk Assessment Questionnaire for KAYA AI Assistant\",\"to\":[\"vijay@kayatech.com\"],\"content\":\"<p>Dear Vijay,</p><p>The Technology Risk Assessment for <strong>KAYA AI Assistant</strong> (Assessment ID: <strong>EP-TR-001</strong>) has been initiated.</p><p>Your input is required to complete the assessment.</p><hr><h3>1. Questionnaire Access</h3><p>The tailored questionnaire for this assessment has been prepared and stored in the designated SharePoint folder:</p><p><strong>SharePoint Folder:</strong><br><a href=\\\"https://kayatechxyz-my.sharepoint.com/personal/ishan_kayatech_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fishan%5Fkayatech%5Fcom%2FDocuments%2FNYL%5FTechnology%5FRisk%5FAssessments&ct=1763376209624&or=Teams%2DHL&ga=1&LOF=1\\\" target=\\\"_blank\\\" style=\\\"color:blue;text-decoration:underline;\\\">EP-TR-001_KAYA_AI_Assistant</a></p><p><strong>Questionnaire File:</strong><br>questionnaire.xlsx<br>(Available inside the folder above.)</p><hr><h3>2. Evidence Submission Instructions</h3><p>Please review each question and provide supporting evidence as required.</p><p>You are requested to:</p><ul><li>Upload all evidence files to the folder below:</li></ul><p><strong>SharePoint Path:</strong><br><a href=\\\"https://kayatechxyz-my.sharepoint.com/personal/ishan_kayatech_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fishan%5Fkayatech%5Fcom%2FDocuments%2FNYL%5FTechnology%5FRisk%5FAssessments&ct=1763376209624&or=Teams%2DHL&ga=1&LOF=1\\\" target=\\\"_blank\\\" style=\\\"color:blue;text-decoration:underline;\\\">EP-TR-001_KAYA_AI_Assistant/Evidence/</a></p><p>Insert the links to each evidence file in the corresponding fields inside <strong>questionnaire.xlsx</strong>.</p><p>Ensure that:</p><ul><li>Evidence is complete and clearly labeled</li><li>Timestamped logs, screenshots, RCAs, approvals, and dashboards are included where applicable</li><li>All uploaded files follow NYL documentation standards</li></ul><hr><h3>3. Timeline</h3><p>Kindly complete the questionnaire and evidence submission within the required SLA to proceed to the next stage of the risk review process.</p><p>If you have any questions or need clarifications on evidence expectations or control requirements, please feel free to reach out.</p><p>Thank you,</p><p><strong>KAYA AI – Automated Risk Workflow</strong></p>\"}`,
          waitingConfirmation: true,
          waitingMessage:
            "Pending Process Owner response & evidence submission…",
          confirmationDelay: 10000,
          confirmationTrigger: "websocket",
          websocketUrl:
            "wss://kaya-mock-api-938786674786.us-central1.run.app/health-first/websocket",
          websocketEvent: "confirmation",
          confirmationMessage: "Process Owner responses and evidence received.",
        },
      ],
    },
    {
      message: "Process Owner responses and evidence received.",
      response: `
### Process Owner responses and evidence received.

🤖 **Evidence Intake Agent is thinking...**

> Normalizing file formats… 

> Extracting insights via OCR/LLM… 

> Tagging metadata across all submitted items… 

> Compiling structured evidence bundle. 

### Evidence Extracted
| Control Area              | Extracted Evidence                                      | Evidence Link |
|---------------------------|----------------------------------------------------------|---------------|
| Access Management         | Access review reports, exception logs, approval evidence | [AccessManagement_AccessReviewReports.pdf](https://kayatechxyz-my.sharepoint.com/.../Evidence/AccessManagement_AccessReviewReports.pdf?target=_blank) |
| Privileged Access         | Privileged access logs, SIEM alerts                      | [PrivilegedAccess_SIEMAlerts.pdf](https://kayatechxyz-my.sharepoint.com/.../Evidence/PrivilegedAccess_SIEMAlerts.pdf?target=_blank) |
| Data Retention            | Retention policy, storage snapshots                      | [DataRetention_StorageSnapshots.pdf](https://kayatechxyz-my.sharepoint.com/.../Evidence/DataRetention_StorageSnapshots.pdf?target=_blank) |
| Log Monitoring            | Log dashboards, export files                             | [LogMonitoring_Dashboards.pdf](https://kayatechxyz-my.sharepoint.com/.../Evidence/LogMonitoring_Dashboards.pdf?target=_blank) |
| Incident Management       | Incident tickets, RCA documents                          | [IncidentManagement_RCA_Documents.pdf](https://kayatechxyz-my.sharepoint.com/.../Evidence/IncidentManagement_RCA_Documents.pdf?target=_blank) |
| SLA Monitoring            | SLA dashboard, ticket timestamps                         | [SLA_Dashboard_Timestamps.pdf](https://kayatechxyz-my.sharepoint.com/.../Evidence/SLA_Dashboard_Timestamps.pdf?target=_blank) |
| Change Management         | Change records, CAB approvals                            | [ChangeManagement_CABApprovals.pdf](https://kayatechxyz-my.sharepoint.com/.../Evidence/ChangeManagement_CABApprovals.pdf?target=_blank) |
| Release & Rollback        | Rollback logs, test results                              | [Rollback_TestResults.pdf](https://kayatechxyz-my.sharepoint.com/.../Evidence/Rollback_TestResults.pdf?target=_blank) |
| Monitoring & Observability| Monitoring dashboards, BI extracts                       | [Monitoring_Dashboards.pdf](https://kayatechxyz-my.sharepoint.com/.../Evidence/Monitoring_Dashboards.pdf?target=_blank) |
| Anomaly Detection         | Anomaly detection logs, alerts                           | [AnomalyDetection_Alerts.pdf](https://kayatechxyz-my.sharepoint.com/.../Evidence/AnomalyDetection_Alerts.pdf?target=_blank) |
| SOP Compliance            | Checklists, deviation logs                               | [SOPCompliance_Checklists.pdf](https://kayatechxyz-my.sharepoint.com/.../Evidence/SOPCompliance_Checklists.pdf?target=_blank) |
| Process Walkthroughs      | Walkthrough logs, sign-offs                              | [ProcessWalkthroughs_Signoffs.pdf](https://kayatechxyz-my.sharepoint.com/.../Evidence/ProcessWalkthroughs_Signoffs.pdf?target=_blank) |
| Endpoint Security         | EDR/SIEM alerts                                          | [EndpointSecurity_EDR_SIEMAlerts.pdf](https://kayatechxyz-my.sharepoint.com/.../Evidence/EndpointSecurity_EDR_SIEMAlerts.pdf?target=_blank) |
| Vulnerability Management  | Scan reports, remediation logs                           | [VulnerabilityMgmt_ScanReports.pdf](https://kayatechxyz-my.sharepoint.com/.../Evidence/VulnerabilityMgmt_ScanReports.pdf?target=_blank) |
| Data Quality              | DQ dashboards, reconciliation logs                       | [DataQuality_DQDashboards.pdf](https://kayatechxyz-my.sharepoint.com/.../Evidence/DataQuality_DQDashboards.pdf?target=_blank) |


---

🤖 **Risk Analyzer Agent is thinking...**

Evaluating control design quality, operating effectiveness, evidence adequacy, and risk severity using the weighted scoring rubric. 

Benchmarking evidence against NIST, COBIT, ISO 27001, and NYDFS 500 expectations. 

Running anomaly detection on missing evidence, timing inconsistencies, and incomplete RCA submissions. 

Preparing weighted scores and aligned risk labels.

### Scoring Model Definition 
| Dimension             | Weight | Evaluation Criteria                                                      |
|-----------------------|--------|--------------------------------------------------------------------------|
| Control Design Quality| 30%    | Alignment with NIST/COBIT/ISO, clarity of roles, completeness of objective |
| Operating Effectiveness| 30%   | Timeliness, deviations, historical consistency                            |
| Evidence Adequacy     | 20%    | Authenticity, traceability, verifiability, NYDFS compliance              |
| Risk Severity         | 20%    | Customer impact, regulatory exposure, financial impact                   |

### Scoring Scale Mapping
| Score Range | Interpretation                      |
|-------------|------------------------------------|
| 90–100      | Highly Effective (Low Risk)        |
| 70–89       | Effective (Medium Risk)            |
| 50–69       | Partially Effective (Notable Risk)|
| 30–49       | Ineffective (High Risk)            |
| 0–29        | Critically Ineffective (Severe Risk) |

### Weighted Score Breakdown per Control
| Control Area       | Design (30%) | Effectiveness (30%) | Evidence Adequacy (20%) | Risk Severity (20%) | Total Score | Mapped Label |
|-------------------|--------------|-------------------|------------------------|-------------------|-------------|--------------|
| Log Monitoring     | 12           | 12                | 4                      | 12                | 40          | High Risk    |
| Change Management  | 6            | 0                 | 0                      | 8                 | 14 → Rounded to 0 | Severe Risk  |
| Incident Management| 18           | 12                | 8                      | 12                | 50          | Notable Risk |

### Preliminary Risk Observations 
| Control Area        | Issue Description                                   | Severity | Root Cause                                        | Required Remediation                                                  | Owner           | Planned Start Date | Planned End Date | Status       | Round 1 Score |
|--------------------|----------------------------------------------------|---------|-------------------------------------------------|----------------------------------------------------------------------|----------------|-----------------|----------------|-------------|---------------|
| Log Monitoring      | Missing 30-day log trend & SIEM correlation evidence | High    | Incomplete evidence capture process             | Automate Splunk exports; daily review logs; include SIEM summary     | AppOps Lead     | 2025-11-16      | 2025-12-16      | In Progress | 40            |
| Change Management   | No rollback validation evidence for last 3 releases | Severe  | SOP gap: rollback validation not consistently documented | Formalize rollback validation SOP; attach pipeline logs & CAB approvals | Release Manager | 2025-11-16      | 2025-12-31      | Not Started | 0             |
| Incident Management | Only 2 out of 5 RCAs submitted; missing approvals  | Medium  | Manual RCA workflow; inconsistent submission discipline | Automate RCA workflow reminders; enforce approval timestamps         | Service Manager | 2025-11-16      | 2026-01-15      | In Progress | 50            |

---

🤖 **HITL Orchestrator Agent is thinking...**

> Compiling review package for human oversight. 

> Preparing summary of triggers, severities, reviewers, and SLAs for the Process Owner. 

> Routing observation set and risk items for manual validation and evidence updates. 

### Review Summary Sent to Process Owner
| Trigger                  | Severity | Reviewer         | SLA        | Escalation Path  |
|---------------------------|----------|-----------------|-----------|-----------------|
| Missing Evidence          | Medium   | Control Owner   | 48 hours  | Compliance Lead |
| High-Risk Observation     | High     | Risk Manager    | 24 hours  | CISO            |
| Customer-Impact Incident  | Critical | Service Manager | 4 hours   | CTO             |

Package shared with the Process Owner for clarification, additional evidence, or remediation confirmation.

[Explanatory Avatar Deployed](https://www.youtube.com/watch?v=ecVfWgHsCqw?target=_blank)
`,
      apiCalls: [
        {
          name: "sendEmail",
          trigger: "after",
          buttonId: "email",
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          url: "https://kaya-mock-api-938786674786.us-central1.run.app/health-first/email",
          bodyTemplate:
            '{"subject":"Round 1 Review Complete – Action Required on Identified Risk Items (KAYA AI Assistant)","to":["vijay@kayatech.com"],"content":"<p>Dear Vijay,</p><p>Thank you for submitting the initial set of evidence for the Technology Risk Assessment of <strong>KAYA AI Assistant</strong> (Assessment ID: <strong>EP-TR-001</strong>).</p><p>Our automated Risk Analyzer has completed Round 1 evaluation based on the provided evidence. Several control areas have outstanding issues that require your attention to proceed to the next stage of the assessment.</p><hr><h3>Summary of Identified Risk Items (Round 1)</h3><table border=\\"1\\" cellspacing=\\"0\\" cellpadding=\\"5\\"><tr><th>Control Area</th><th>Issue Summary</th><th>Score</th><th>Risk Classification</th></tr><tr><td>Log Monitoring</td><td>Missing 30-day log trend analysis and SIEM correlation evidence</td><td>40</td><td>Ineffective (High Risk)</td></tr><tr><td>Change Management</td><td>No rollback validation evidence for previous releases</td><td>0</td><td>Critically Ineffective (Severe Risk)</td></tr><tr><td>Incident Management</td><td>Incomplete RCA submissions (2 of 5) and missing approvals</td><td>50</td><td>Partially Effective (Notable Risk)</td></tr></table><hr><p><strong>Action Required</strong></p><p>Please review the identified gaps and upload additional or corrected evidence to address the outstanding items.</p><p>Required next steps:</p><ul><li>Upload missing or updated evidence to the SharePoint Evidence folder:<br><a href=\\"https://kayatechxyz-my.sharepoint.com/:f:/g/personal/ishan_kayatech_com/IgDe3IhfXkP7RabhIcgj99-FAWC3C8DIZPscpNaeb5HI-g8?e=jSIQbY\\" target=\\"_blank\\" style=\\"color:blue;text-decoration:underline;\\">EP-TR-001_KAYA_AI_Assistant/Evidence/</a></li><li>Insert updated evidence links into the corresponding fields in <strong>questionnaire.xlsx</strong>.</li></ul><p>Ensure the following for each upload:</p><ul><li>Evidence is timestamped and verifiable</li><li>Screenshots/logs include complete paths where relevant</li><li>Approvals, RCAs, rollback logs, and monitoring exports are attached where applicable</li></ul><p>Once completed, please notify us via reply so the workflow can proceed to Round 2 validation.</p><hr><p>If you need clarification on control expectations, acceptable evidence formats, or how the scoring model is applied, feel free to contact the Tech Risk Group.</p><p>Thank you,</p><p><strong>KAYA AI – Automated Risk Workflow</strong></p>"}',
          waitingConfirmation: true,
          waitingMessage:
            "Pending updated evidence and acknowledgements from Process Owner…",
          confirmationDelay: 10000,
          confirmationTrigger: "websocket",
          websocketUrl:
            "wss://kaya-mock-api-938786674786.us-central1.run.app/health-first/websocket",
          websocketEvent: "confirmation",
          confirmationMessage: "Owner acknowledgement received.",
        },
      ],
    },
    {
      message: "Owner acknowledgement received.",
      response: `
### Owner acknowledgement received. 

### Initializing continuous monitoring for this assessment. 

🤖 **Monitoring & Alerts Agent is thinking...**

> Ingesting event logs, control outputs, and baseline thresholds
 
> Round 2 evidence received. 

> Reassessing control performance trends and validating improvements based on updated submissions. 

> Updating monitoring thresholds and recalibrating anomaly baselines. 

> Recording score progression across key dimensions. 

### Updated Monitoring Summary (Post Round 2)
| Aspect                 | Round 2 Score | Comments                               |
|------------------------|---------------|----------------------------------------|
| Control Design Quality | 85            | Improved significantly after Round 2. |
| Operating Effectiveness| 78            | Needs formal SOP update.               |
| Evidence Adequacy      | 92            | Process stabilized in Round 2.        |

Dashboards refreshed with new scoring outcomes. 

Alert thresholds updated to reflect the improved baseline. 

### Outputs prepared:  
- Alert notifications for threshold breaches 
- Recurrence reports for repeated anomalies 
- Updated monitoring dashboards for oversight teams 
`,
    },
  ])
);
