localStorage.setItem(
  "demo_d3d1ff50-3327-4ea0-9edc-56793e24d57b",
  JSON.stringify([
    {
      message:
        "For BioTouch Global Solutions, Inc. ingest a Schedule of Values (SOV) file, map fields to our schema, deduplicate locations, perform basic compliance checks, then normalize addresses and geocode for placement.",
      response: `
🤖 **Parent Orchestrator is thinking...**

> Received empty SOV Excel + Company context... 

> Initializing workflow... 

> Spawning child agents in sequence

---

🤖 **Ingest & Geocode Agent is thinking...**

> Mapping incoming fields into standardized schema...

> Deduplicating sites using fuzzy matching... 

> Generating merge decisions with confidence tags...

> Running compliance checks...

> Preparing normalized dataset for downstream enrichment...

> Accessing SOV_Match_Criteria knowledge base...

---

### Schema Mapping & Deduplication Results
<table>
  <thead>
    <tr>
      <th>Original Column (SOV Template)</th>
      <th>Mapped Field in Schema</th>
      <th>Match Type</th>
      <th>Regulatory Sensitivity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Address City, State Zip</td>
      <td>Address City, State Zip</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Exact/Fuzzy</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Exact-only if legal/identity fields; otherwise follow tolerance guidance</td>
    </tr>
    <tr>
      <td>Facility Profile</td>
      <td>Facility Profile</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Broker match order for submissions: <ol><li>Canonical USPS-normalized address + ZIP9 + suite</li><li>zy address (Jaro–Winkler ≥0.92) + same city/state</li><li>Geo proximity ≤20m (rooftop) or ≤50m (parcel) Fail if only street centroid. Route ambiguous to HITL.</li></ol></td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&O risk: High; Privacy: Low (business address); Retention: 1y; Sources: Robots/ToS honored; Misbind risk if incorrect location; document geocoder accuracy tier</td>
    </tr>
    <tr>
      <td>Building Value</td>
      <td>Building Value</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Occupancy→Canonical mapping + NAICS 6-digit equivalence; synonyms allowed (e.g., Supermarket→Grocery). Do not auto-switch coverage class—route conflicts to HITL.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&O risk: High; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored; Impacts coverage form/markets; avoid restricted brand scraping</td>
    </tr>
    <tr>
      <td>Improvements & Betterments Value</td>
      <td>Improvements & Betterments Value</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Accept if within ±25% of replacement-cost benchmark by occupancy/class; flag if market value used; require HITL for overrides.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&O risk: High; Privacy: Financial; Retention: 1y; Sources: Robots/ToS honored; Export: Mask where client-facing; Underinsurance exposure</td>
    </tr>
    <tr>
      <td>Business Personal Property</td>
      <td>Business Personal Property</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Accept numeric ≥0; typical % bands by occupancy (Whse 2–10%, Retail 5–15%, Hotel 5–12%); outliers → HITL.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&O risk: High; Privacy: Financial; Retention: 1y; Sources: Robots/ToS honored; Export: Mask where client-facing</td>
    </tr>
    <tr>
      <td>Business Income / Extra Expense</td>
      <td>Business Income / Extra Expense</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Reconcile vs building value by occupancy; accept if within ±20% of benchmark or tax rolls (where allowed).</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&O risk: High; Privacy: Financial; Retention: 1y; Sources: Robots/ToS honored; Export: Mask where client-facing; Jurisdictional limits on tax rolls</td>
    </tr>
    <tr>
      <td>Total Insured Value</td>
      <td>Total Insured Value</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Check BI ≈ revenue×margin×months; deviation >20% → HITL; months indemnity 12–18 typical.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&O risk: High; Privacy: High (financial); Retention: 1y; Sources: Robots/ToS honored; Export: Aggregate only in exports; Do not retain raw financials longer than necessary</td>
    </tr>
    <tr>
      <td>Sq. Ft.</td>
      <td>Sq. Ft.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Computed = Building + IBT + BPP + BI; site and account rollups must reconcile within 5%.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&O risk: High; Privacy: Derived; Retention: 1y; Sources: Robots/ToS honored; Audit-critical; mismatches escalate</td>
    </tr>
    <tr>
      <td>Year Built</td>
      <td>Year Built</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Prefer assessor GBA; otherwise accept if within ±10% vs independent sources; sanity-check per-floor bands.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&O risk: Medium; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored; Feeds valuation; imagery licensing caution</td>
    </tr>
    <tr>
      <td>Fire & Burglar Alarms</td>
      <td>Fire & Burglar Alarms</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Exact 4-digit; allow Effective Year Built; if |assessor−listing| >3 years → HITL.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&O risk: Medium; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored; Rating factor; safety implications</td>
    </tr>
    <tr>
      <td>Construction Type</td>
      <td>Construction Type</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Enum {None, Local, Central, UL}; permits/UL docs take precedence; conflicts → HITL.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&O risk: Medium; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored; Avoid storing account/vendor IDs</td>
    </tr>
    <tr>
      <td>Stories</td>
      <td>Stories</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Map to ISO class; require class-confidence ≥0.75; else HITL with photo/assessor evidence.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&O risk: High; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored; Material rating factor; image ToS compliance</td>
    </tr>
    <tr>
      <td>Units</td>
      <td>Units</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Integer equality; tolerate ±1 only if mezzanine noted; cross-check SqFt.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&O risk: Low; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored</td>
    </tr>
    <tr>
      <td>Pool</td>
      <td>Pool</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Integer equality; required for hotels/multifamily; N/A otherwise.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&O risk: Medium; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored; Impacts rating for hospitality/multifamily</td>
    </tr>
    <tr>
      <td>Basement</td>
      <td>Basement</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Boolean; evidence via photos/amenities; indoor/outdoor ignored for match, noted for exposure.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&O risk: Medium; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored; Liability exposure; do not store images</td>
    </tr>
    <tr>
      <td>Sprinklered</td>
      <td>Sprinklered</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Boolean; confirm via assessor/listings; flood implication tag.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&O risk: Medium; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored</td>
    </tr>
    <tr>
      <td>Plumbing (Yr)</td>
      <td>Plumbing (Yr)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Enum {None, Partial, Full, ESFR}; permit precedence; if only listing mentions → confidence low.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&O risk: High; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored; Life-safety; rating</td>
    </tr>
    <tr>
      <td>Heating (Yr)</td>
      <td>Heating (Yr)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Type + last update year; match if type same and year within ±2.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&O risk: Medium; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored</td>
    </tr>
    <tr>
      <td>Electrical (Yr)</td>
      <td>Electrical (Yr)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Type + update year; flag solid-fuel or systems >25 years.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&O risk: Medium; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored</td>
    </tr>
    <tr>
      <td>Roof (Yr)</td>
      <td>Roof (Yr)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Service amps ±10% + panel type; flag K&T or aluminum branch wiring → HITL.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&O risk: High; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored; Safety-critical</td>
    </tr>
  </tbody>
</table>

---

🤖 **Ingest & Geocode Agent is thinking...**

> Accessing Google Maps Geocoding API / OSM Nominatim...

> Standardizing address formats, ensuring consistent casing and abbreviations...

> Applying geocoding with preference order: rooftop → parcel centroid → street interpolation...

> Recording geocode accuracy, provider, and confidence scores...

| Location | Normalized Address                        | Geo Result (Lat/Lng) | Confidence |
|----------|-------------------------------------------|----------------------|------------|
| CT       | 30 Railroad Ave, West Haven, CT 06516     | 41.27, -72.95        | 0.93       |
| ID       | 670 S Colorado Ave, Idaho Falls, ID 83402 | 43.48, -112.03       | 0.91       |
| GA       | 5101 Transport Blvd, Columbus, GA 31907   | 32.46, -84.93        | 0.92       |
| GA       | 5700 Old Brim Road, Midland, GA 31820     | 32.56, -84.83        | 0.90       |
| RI       | 25 Amflex Dr, Cranston, RI 02920          | 41.77, -71.48        | 0.94       |
| RI       | 30 Martin St, Cumberland, RI 02864        | 41.92, -71.43        | 0.92       |
`,
    },
    {
      message:
        "For each normalized location, gather property facts from permitted sources to corroborate and enrich SOV data.",
      response: `
🤖 **Data Sourcing Agent is thinking...**

> Accessing LoopNet, Trulia, Assessor APIs, Permit Portals...

> Extracting Total_SqFt, #Stories, Construction_Type, Sprinklers(Y/N), Roof_Type, Year_Built, Renovation_Years. 

> Accessing From county assessor/open data...

> Extracting APN, Land_Use/Occupancy, Improvements, Effective_Year_Built, roof, fire protection, electrical/MEP, refrigeration where applicable...

> Accessing SOV_Rule_Engine knowledge base...

> Accessing SOV_Source_Mapping knowledge base...

> Mapping all attributes to canonical schema...

### Schema Mapping
| Location           | Sq. Ft.  | Year Built | Stories | Construction     | Sprinklered | Roof Update | Electrical | Heating | Plumbing |
|-------------------|-----------|------------|---------|-----------------|-------------|-------------|------------|---------|----------|
| CT (West Haven)    | 48,000    | 2005       | 3       | Non-combustible | Yes         | 2019        | 2018       | 2017    | 2016     |
| ID (Idaho Falls)   | 36,000    | 1998       | 2       | Joisted Masonry | No          | 2015        | 2014       | 2013    | 2012     |
| GA (Columbus)      | 62,000    | 2010       | 4       | Steel Frame     | Yes         | 2020        | 2018       | 2018    | 2017     |
| GA (Midland)       | 41,500    | 2007       | 3       | Non-combustible | Yes         | 2018        | 2016       | 2016    | 2015     |
| RI (Cranston)      | 55,000    | 2002       | 4       | Fire Resistive  | Yes         | 2017        | 2016       | 2015    | 2015     |
| RI (Cumberland)    | 29,000    | 1995       | 2       | Joisted Masonry | No          | 2014        | 2012       | 2012    | 2011     |

---

🤖 **Data Sourcing Agent is thinking...**

> Accessing LinkedIn public, Company website, EDGAR/News...

> Deriving headcount from public signals (careers pages, LinkedIn ranges, press); sanity-check versus site sizes...

| Field             | Value                                   |
|------------------|-----------------------------------------|
| Employees (est.)  | 201–500 (as of Aug 2025)               |
| Leadership        | CEO: Jane Doe; CFO: John Smith         |
| Annual Revenue    | Not publicly disclosed (private company) |

(This enrichment applied globally to all rows; not address-specific.)
`,
    },
    {
      message:
        "Resolve conflicting attributes and emit a single canonical record per location + named insured with confidence and full lineage.",
      response: `
🤖 **Validation & Canonicalization Agent is thinking...**

> Accessing SOV_Data_Confidence knowledge base...

> Consolidating fields, resolving conflicts...

> Present only lowconfidence conflicts...

### Connecticut – 30 Railroad Ave, West Haven, CT
| Field         | Candidate Values                              | Value           | Rerouted to HITL |
|---------------|-----------------------------------------------|----------------|-----------------|
| Sq. Ft.       | 48,000 (Assessor 0.91), 47,500 (LoopNet 0.75) | 48,000         | No              |
| Year Built    | 2005 (Assessor 0.90), 2006 (Listing 0.78)    | 2005           | Yes             |
| Construction  | Non-combustible (Assessor 0.85)              | Non-combustible | No              |
| Sprinklered   | Yes (Permit 0.85)                             | Yes            | No              |
| Roof Update   | 2019 (Permit 0.88)                            | 2019           | No              |

### Idaho – 670 S Colorado Ave, Idaho Falls, ID 
| Field         | Candidate Values                              | Value            | Rerouted to HITL |
|---------------|-----------------------------------------------|-----------------|-----------------|
| Sq. Ft.       | 36,000 (Assessor 0.90), 35,500 (Trulia 0.72)| 36,000          | No              |
| Year Built    | 1998 (Assessor 0.93), 1999 (Listing 0.68)   | 1998            | Yes             |
| Construction  | Joisted Masonry (Assessor 0.80)             | Joisted Masonry | No              |
| Sprinklered   | No (Assessor 0.80)                           | No              | No              |
| Roof Update   | 2015 (Permit 0.85)                           | 2015            | No              |

### Georgia – 5101 Transport Blvd, Columbus, GA 
| Field         | Candidate Values                              | Value       | Rerouted to HITL |
|---------------|-----------------------------------------------|------------|-----------------|
| Sq. Ft.       | 62,000 (Assessor 0.92), 61,500 (LoopNet 0.75)| 62,000     | No              |
| Year Built    | 2010 (Assessor 0.94), 2011 (Listing 0.70)    | 2010       | No              |
| Construction  | Steel Frame (Assessor 0.83)                  | Steel Frame| No              |
| Sprinklered   | Yes (Permit 0.88)                             | Yes        | No              |
| Roof Update   | 2020 (Permit 0.89)                            | 2020       | No              |

### Georgia – 5700 Old Brim Road, Midland, GA
| Field         | Candidate Values                              | Value           | Rerouted to HITL |
|---------------|-----------------------------------------------|----------------|-----------------|
| Sq. Ft.       | 41,500 (Assessor 0.90), 42,000 (Trulia 0.73)| 41,500         | No              |
| Year Built    | 2007 (Assessor 0.91), 2008 (Listing 0.71)   | 2007           | No              |
| Construction  | Non-combustible (Assessor 0.82)             | Non-combustible| No              |
| Sprinklered   | Yes (Permit 0.84)                             | Yes            | No              |
| Roof Update   | 2018 (Permit 0.86)                            | 2018           | No              |

### Rhode Island – 25 Amflex Dr, Cranston, RI
| Field         | Candidate Values                              | Value        | Rerouted to HITL |
|---------------|-----------------------------------------------|-------------|-----------------|
| Sq. Ft.       | 55,000 (Assessor 0.93), 54,500 (LoopNet 0.76)| 55,000      | No              |
| Year Built    | 2002 (Assessor 0.95), 2003 (Listing 0.72)    | 2002        | No              |
| Construction  | Fire Resistive (Assessor 0.88)               | Fire Resistive | No           |
| Sprinklered   | Yes (Permit 0.86)                             | Yes         | No              |
| Roof Update   | 2017 (Permit 0.87)                            | 2017        | No              |

### Rhode Island – 30 Martin St, Cumberland, RI
| Field         | Candidate Values                              | Value            | Rerouted to HITL |
|---------------|-----------------------------------------------|-----------------|-----------------|
| Sq. Ft.       | 29,000 (Assessor 0.89), 28,500 (Trulia 0.70)| 29,000          | No              |
| Year Built    | 1995 (Assessor 0.92), 1996 (Listing 0.69)   | 1995            | No              |
| Construction  | Joisted Masonry (Assessor 0.81)             | Joisted Masonry | No              |
| Sprinklered   | No (Assessor 0.78)                           | No              | No              |
| Roof Update   | 2014 (Permit 0.84)                            | 2014            | No              |
`,
    },
    {
      message:
        "Present draft/material issues to a broker/underwriter; capture decisions with rationale; update canonical records.",
      response: `
🤖 **HITL Review & Decisioning Agent is thinking...**

#### JIRA Ticket Raised for Human Review

This ticket is auto-generated using **KAYA’s JIRA connector.**

**View the JIRA ticket:** [KAYA-LM-2047](https://techlabsglobal.atlassian.net/browse/FC-4?target=_blank)

### Important for Reviewer:
- Review the auto-filled Excel attached in the JIRA. 
- Fill in any missing fields, amend or correct values where necessary, or modify entries. 
- Reattach the updated Excel to the JIRA ticket. 

### Once approved: 
- Mark JIRA ticket as **“Approved/Rejected”.**
- This triggers Write-Back & Export Agent to generate the filled excel. 
`,
      apiCalls: [
        {
          trigger: "after",
          method: "POST",
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
Human Review Received 

🤖 **HITL Review & Decisioning Agent is thinking...**

- Reviewer approval received. 
- Updated approval and reasoning saved in compliance logs 
      `,
    },
    {
      message:
        "Package the final canonical data for placement, write back to broker systems, and emit a complete audit/lineage trail",
      response: `
🤖 **Write-Back, Export & Observability Agent is thinking...**

> Accessing: Excel Writer… 

> Writing final HITL-approved values into SOV Excel… 

> Drafting Email… 

> Sending Email to relevant parties… 

> Email sent successfully. 

### Filled SOV File Data
| Address                 | City, State Zip           | Facility Profile | Building Value | Improvements & Betterments Value | Business Personal Property | Business Income/ Extra Expense | Total Insured Value | Sq. Ft.  | Year Built | Fire & Burglar Alarms | Construction Type | Stories | Units | Pool | Basement | Sprinklered | Plumbing (Yr) | Heating (Yr) | Electrical (Yr) | Roof (Yr) |
|------------------------|--------------------------|-----------------|----------------|---------------------------------|---------------------------|-------------------------------|-------------------|-----------|------------|----------------------|-----------------|---------|-------|------|----------|-------------|---------------|-------------|----------------|-----------|
| 30 Railroad Ave        | West Haven, CT 06516     | Office          | —              | —                               | —                         | —                             | —                 | 48,000    | 2005       | Yes                  | Non-combustible  | 3       | —     | No   | No       | Yes         | 2016          | 2017        | 2018           | 2019      |
| 670 S Colorado Ave     | Idaho Falls, ID 83402    | Office/Warehouse| —              | —                               | —                         | —                             | —                 | 36,000    | 1998       | No                   | Joisted Masonry   | 2       | —     | No   | No       | No          | 2012          | 2013        | 2014           | 2015      |
| 5101 Transport Blvd    | Columbus, GA 31907       | Office          | —              | —                               | —                         | —                             | —                 | 62,000    | 2010       | Yes                  | Steel Frame       | 4       | —     | No   | No       | Yes         | 2017          | 2018        | 2018           | 2020      |
| 5700 Old Brim Road     | Midland, GA 31820        | Office          | —              | —                               | —                         | —                             | —                 | 41,500    | 2007       | Yes                  | Non-combustible  | 3       | —     | No   | No       | Yes         | 2015          | 2016        | 2016           | 2018      |
| 25 Amflex Dr           | Cranston, RI 02920       | Office          | —              | —                               | —                         | —                             | —                 | 55,000    | 2002       | Yes                  | Fire Resistive    | 4       | —     | No   | No       | Yes         | 2015          | 2015        | 2016           | 2017      |
| 30 Martin St           | Cumberland, RI 02864     | Office          | —              | —                               | —                         | —                             | —                 | 29,000    | 1995       | No                   | Joisted Masonry   | 2       | —     | No   | No       | No          | 2011          | 2012        | 2012           | 2014      |

**Download the excel file here:** <a href="https://kayatechxyz-my.sharepoint.com/:x:/g/personal/kasunib_kayatech_com/EQWYva-BafRNvKnvT28QbFIB53lXKNU_yNebHrDhsge0Dw?e=Tuxx1l&download=1" download="Filled_2025-26 Property Statement of Values (SOV).xlsx">Filled_2025-26 Property Statement of Values (SOV).xlsx</a>
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
          bodyTemplate: `{
  "subject": "SOV File for Review – BioTouch Global Solutions, Inc.",
  "to": ["vijay@kayatech.com" , "kasunib@kayatech.com" , "ammshathwan@kayatech.com"],
  "content": "<p>Dear Team,</p><p>Attached herewith is the <strong>2025–26 Property Statement of Values (SOV)</strong> for <strong>BioTouch Global Solutions, Inc.</strong></p><p>This file has been reviewed by our underwriting team. Kindly review the details and confirm if everything is accurate and acceptable.</p><p>If any adjustments are required, please reply to this email with your comments or an updated version of the file.</p><div style='margin-top:8px;'><button style='background-color: #3B82F6; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;'>Approve</button></div><p>Thank you for your time and cooperation.</p><p>Best Regards,<br>KAYA AI</p>",
  "attachments": [
    {
      "filename": "Filled_2025-26 Property Statement of Values (SOV).xlsx",
      "url": "https://docs.google.com/spreadsheets/d/18Is7dhlYGE4syFv6IrZW2pYngkofu_bE/export?format=xlsx"
    }
  ]
}`,
          waitingConfirmation: true,
          waitingMessage: "Awaiting Email Approval",
          confirmationDelay: 10000,
          confirmationTrigger: "websocket",
          websocketUrl:
            "wss://kaya-mock-api-938786674786.us-central1.run.app/health-first/websocket",
          websocketEvent: "confirmation",
          confirmationMessage: "Email Confirmation Received",
        },
      ],
    },
    {
      message: "Email Confirmation Received",
      response: `
Email Confirmation Received. 

🤖 **Write-Back, Export & Observability Agent is thinking...**

> Logging: API usage, reviewer IDs, timestamps, error metrics. 

> Exporting full audit trail + HITL log + customer confirmation
`,
    },
    {
      message: "What are the current rules in our rule engine?",
      response: `
🤖 **Parent Orchestrator is thinking...** 

- Accessing Knowledge Base SOV_Rule_Engine.

<table class="w-full border-collapse border border-gray-300">
<thead>
<tr class="bg-gray-100">
<th class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Field</th>
<th class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Validation Rules</th>
<th class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Top-up/Completion Approach</th>
<th class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Associated Sources</th>
<th class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Compliance Validation Step</th>
<th class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Client Approval Required</th>
</tr>
</thead>
<tbody>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">#</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">N/A</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">N/A</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">N/A</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">N/A</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">N/A</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Address<br>City, State Zip</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Address must be parsable (Address1, City, State/Prov, ZIP/PC). Reject PO Boxes for property coverage; require geocode accuracy ≥ rooftop or parcel; ZIP format valid; country present.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Standardize via USPS; expand abbreviations; preserve suite/unit. Geocode with rooftop priority then parcel/street; backfill missing city/state from geocode. Flag multiple candidates or low accuracy for HITL.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">USPS + commercial geocoder (rooftop>parcel>street); County Assessor (APN, improvements, eff. year built)</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Y if multiple matches or geocode accuracy < parcel</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Facility<br>Profile</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Occupancy must map to canonical list (e.g., Grocery, Warehouse/Distribution, Hotel, Food Processing, Office). NAICS required; seasonal flags where applicable.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Derive occupancy/NAICS from client info, company site, listings text, permits. If ambiguous, pick top two candidates and send to HITL.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Company site/brand pages, press/news, GMB/Yelp imagery; LoopNet/CRE listings (facts & photos); City permit/inspection portals (roof, fire, MEP)</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Y if occupancy or NAICS changed</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Building<br>Value</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Numeric > 0; within replacement cost band vs SqFt×cost/ft² (industry benchmark). Variance tolerance ±25% before exception.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Estimate via replacement cost model (construction, sqft, year built); do NOT use market value. If missing, compute median of peer band and mark low confidence.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Replacement cost tool (licensed) or internal benchmark; Assessor improvements (context only)</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">If using licensed cost tools, confirm license coverage; otherwise use internal benchmarks only. Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Always Y for changes or estimates</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Improvements<br>& Betterments Value</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">≥ 0; for tenants typically 5–20% of building value (industry dependent). If owner-occupied, may be 0 unless recent renovations.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Derive from leases or recent permits; otherwise estimate as % of building value by occupancy (Warehouse 2–10%, Retail 5–15%, Hotel 5–12%). Mark low confidence if estimated.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">City permit/inspection portals (roof, fire, MEP); Leases (client-provided)</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Y if estimated or >10% change</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Business<br>Personal<br>Property</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">≥ 0; consistency with occupancy (Manufacturing/Retail higher than Office). Check ratio vs building value; tolerance ±20%.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Infer from photos/listings and personal property tax rolls where public; fallback heuristic by occupancy (Warehouse 5–20%, Retail 15–35%, Manufacturing 25–60%).</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Personal property tax rolls (where public/allowed); LoopNet/CRE listings (facts & photos); Company site/brand pages, press/news, GMB/Yelp imagery</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Y if derived or variance >10%</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Business Income/<br>Extra Expense</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Present and > 0; months of indemnity documented (12–18 typical). Cross-check BI value ≈ revenue × margin × indemnity months.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Use client financials when provided; else estimate revenue via public signals and margin by industry; default 12 months if absent, mark low confidence.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Client financials/EDGAR (public), revenue proxies (private)</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Do not retain private financials beyond need; mask sensitive figures in exports; Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Always Y</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Total<br>Insured<br>Value</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">TIV = Building + IBT + BPP + BI (as applicable); row- and account-level rollups must reconcile within 5%.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Compute from component values; if mismatch, raise exception and propose corrected TIV.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Internal calculation from component fields</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">N/A beyond general audit logging</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Y if mismatch corrected</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Sq. Ft.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">> 0; cross-check vs assessor/listings; bands by occupancy; sanity with Stories (SqFt per story reasonable).</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Prefer assessor GBA; if missing, use listings/photos; if still missing, estimate from footprint via maps.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">County Assessor (APN, improvements, eff. year built); LoopNet/CRE listings (facts & photos)</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Y if change >10%</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Year Built</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">4-digit; ≤ current year; if Effective Year Built available, store both; variance > ±3 years triggers exception.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Pull Effective Year Built from assessor; confirm via permits and listings; record renovation years.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">County Assessor (APN, improvements, eff. year built); City permit/inspection portals (roof, fire, MEP); LoopNet/CRE listings (facts & photos)</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Y if change ≥3 years</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Fire & Burglar Alarms</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Categorical: {None, Local, Central Station, UL}. Fire alarm presence aligns with sprinkler/permit records.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Use listings, permits, inspection tags; confirm central-station provider if stated.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">City permit/inspection portals (roof, fire, MEP); LoopNet/CRE listings (facts & photos)</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Y</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Construction Type</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Map to ISO classes {Frame, Joisted Masonry, Noncombustible, Masonry Noncombustible, Modified Fire Resistive, Fire Resistive}. If unclear, choose top 2 candidates for HITL.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Derive from assessor materials & listings photos; cross-check permits (structural).</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">County Assessor (APN, improvements, eff. year built); LoopNet/CRE listings (facts & photos); City permit/inspection portals (roof, fire, MEP)</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Y</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Stories</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Integer ≥1; SqFt ÷ Stories must be within reasonable per-floor bands by occupancy.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Prefer assessor; else listings/street imagery; infer from photos if necessary.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">County Assessor (APN, improvements, eff. year built); LoopNet/CRE listings (facts & photos)</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Y if change >1 story</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Units</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Integer ≥0; required for hotels/multifamily; optional otherwise.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Pull from brand/company site and listings; if occupancy not unit-based, set N/A.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Company site/brand pages, press/news, GMB/Yelp imagery; LoopNet/CRE listings (facts & photos)</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Y if occupancy unit-based</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Pool</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Boolean {Y/N}; if Y, ensure liability endorsements addressed; indoor/outdoor tag optional.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Listings photos, amenities pages, permits for pool/spa.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">LoopNet/CRE listings (facts & photos); City permit/inspection portals (roof, fire, MEP)</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Y if Y</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Basement</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Boolean {Y/N}; if Y, capture finished/unf. and flood relevance.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Assessor records and listings; imagery where available.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">County Assessor (APN, improvements, eff. year built); LoopNet/CRE listings (facts & photos)</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Y if Y</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Sprinklered</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Categorical: {None, Partial, Full, ESFR}. Must be consistent with permits; affects rating.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Pull from fire permits and listings photos; if unknown, set Unknown and route to HITL.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">City permit/inspection portals (roof, fire, MEP); LoopNet/CRE listings (facts & photos)</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Y</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Plumbing</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Type and last major update year; flag galvanized or very old systems.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Look for plumbing permits; otherwise listings/inspection notes.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">City permit/inspection portals (roof, fire, MEP); LoopNet/CRE listings (facts & photos)</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Y if original/old or unknown</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Heating</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Type (e.g., Gas FAU, Electric, Oil, Solid Fuel) and update year; flag solid-fuel or old systems.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Permits and listings; photos to confirm equipment.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">City permit/inspection portals (roof, fire, MEP); LoopNet/CRE listings (facts & photos)</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Y if solid fuel/old or changed</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Electrical</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Service size (amps), panel type, update year; flag knob-and-tube or aluminum branch wiring.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Electrical permits; listings/inspection summaries if any.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">City permit/inspection portals (roof, fire, MEP); LoopNet/CRE listings (facts & photos)</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Y if outdated or changed</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Roof</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Type (BUR, TPO, EPDM, Metal, Tile, Shingle), last replacement year; flag roofs >25 years (shingle) or >20 (flat) for exception.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Roof permits and listings; aerial imagery notes (no storing imagery).</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">City permit/inspection portals (roof, fire, MEP); LoopNet/CRE listings (facts & photos)</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Respect Robots/ToS of external sites; store only necessary fields; log URLs/timestamps; mark uncertain in conflict log; no licensed data unless explicitly licensed.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Y if age thresholds exceeded or changed</td>
</tr>
</tbody>
</table>
`,
    },
    {
      message:
        "What are the field-wise matching rules and acceptance thresholds?",
      response: `
🤖 **Parent Orchestrator is thinking...** 

- Accessing Knowledge Base SOV_Match_Criteria.

<table class="w-full border-collapse border border-gray-300">
<thead>
<tr class="bg-gray-100">
<th class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Field</th>
<th class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Match Type</th>
<th class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Notes</th>
<th class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Regulatory Sensitivity</th>
</tr>
</thead>
<tbody>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">#</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Exact/Fuzzy</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300"></td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Exact-only if legal/identity fields; otherwise follow tolerance guidance</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Address<br>City, State Zip</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Broker match order for submissions:<br>1) Canonical USPS-normalized address + ZIP9 + suite<br>2) Fuzzy address (Jaro–Winkler ≥0.92) + same city/state<br>3) Geo proximity ≤20m (rooftop) or ≤50m (parcel)<br>Fail if only street centroid. Route ambiguous to HITL.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300"></td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">E&O risk: High; Privacy: Low (business address); Retention: 1y; Sources: Robots/ToS honored; Misbind risk if incorrect location; document geocoder accuracy tier</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Facility<br>Profile</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Occupancy→Canonical mapping + NAICS 6-digit equivalence; synonyms allowed (e.g., Supermarket→Grocery). Do not auto-switch coverage class—route conflicts to HITL.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300"></td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">E&O risk: High; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored; Impacts coverage form/markets; avoid restricted brand scraping</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Building<br>Value</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Accept if within ±25% of replacement-cost benchmark by occupancy/class; flag if market value used; require HITL for overrides.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300"></td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">E&O risk: High; Privacy: Financial; Retention: 1y; Sources: Robots/ToS honored; Export: Mask where client-facing; Underinsurance exposure</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Improvements<br>& Betterments Value</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Accept numeric ≥0; typical % bands by occupancy (Whse 2–10%, Retail 5–15%, Hotel 5–12%); outliers → HITL.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300"></td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">E&O risk: High; Privacy: Financial; Retention: 1y; Sources: Robots/ToS honored; Export: Mask where client-facing</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Business<br>Personal<br>Property</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Reconcile vs building value by occupancy; accept if within ±20% of benchmark or tax rolls (where allowed).</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300"></td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">E&O risk: High; Privacy: Financial; Retention: 1y; Sources: Robots/ToS honored; Export: Mask where client-facing; Jurisdictional limits on tax rolls</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Business Income/<br>Extra Expense</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Check BI ≈ revenue×margin×months; deviation >20% → HITL; months indemnity 12–18 typical.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">If revenue is estimated, mark BI confidence 'med' and route to HITL.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">E&O risk: High; Privacy: High (financial); Retention: 1y; Sources: Robots/ToS honored; Export: Aggregate only in exports; Do not retain raw financials longer than necessary</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Total<br>Insured<br>Value</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Computed = Building + IBT + BPP + BI; site and account rollups must reconcile within 5%.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300"></td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">E&O risk: High; Privacy: Derived; Retention: 1y; Sources: Robots/ToS honored; Audit-critical; mismatches escalate</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Sq. Ft.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Prefer assessor GBA; otherwise accept if within ±10% vs independent sources; sanity-check per-floor bands.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300"></td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">E&O risk: Medium; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored; Feeds valuation; imagery licensing caution</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Year Built</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Exact 4-digit; allow Effective Year Built; if |assessor−listing| >3 years → HITL.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300"></td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">E&O risk: Medium; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored; Rating factor; safety implications</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Fire & Burglar Alarms</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Enum {None, Local, Central, UL}; permits/UL docs take precedence; conflicts → HITL.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300"></td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">E&O risk: Medium; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored; Avoid storing account/vendor IDs</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Construction Type</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Map to ISO class; require class-confidence ≥0.75; else HITL with photo/assessor evidence.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">If class-confidence <0.75, do not auto-canonicalize.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">E&O risk: High; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored; Material rating factor; image ToS compliance</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Stories</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Integer equality; tolerate ±1 only if mezzanine noted; cross-check SqFt.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300"></td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">E&O risk: Low; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Units</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Integer equality; required for hotels/multifamily; N/A otherwise.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300"></td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">E&O risk: Medium; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored; Impacts rating for hospitality/multifamily</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Pool</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Boolean; evidence via photos/amenities; indoor/outdoor ignored for match, noted for exposure.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300"></td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">E&O risk: Medium; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored; Liability exposure; do not store images</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Basement</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Boolean; confirm via assessor/listings; flood implication tag.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300"></td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">E&O risk: Medium; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Sprinklered</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Enum {None, Partial, Full, ESFR}; permit precedence; if only listing mentions → confidence low.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">ESFR claims must be verified via permits or clear head photos.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">E&O risk: High; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored; Life-safety; rating</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Plumbing</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Type + last update year; match if type same and year within ±2.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300"></td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">E&O risk: Medium; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Heating</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Type + update year; flag solid-fuel or systems >25 years.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300"></td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">E&O risk: Medium; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Electrical</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Service amps ±10% + panel type; flag K&T or aluminum branch wiring → HITL.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">If source mentions 'aluminum branch wiring', force HITL regardless of confidence.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">E&O risk: High; Privacy: Low; Retention: 1y; Sources: Robots/ToS honored; Safety-critical</td>
</tr>
<tr>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Roof</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">Type + last replacement year; match if same type and year within ±2; flat roofs >20 years → exception.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">For flat roofs, treat >20 years without replacement as high-risk exception.</td>
<td class="p-2 max-w-[400px] whitespace-normal break-words align-top border border-gray-300">E&O risk: High; Privacy:Low; Retention: 1y; Sources: Robots/ToS honored; Water ingress risk; imagery licensing</td>
</tr>
</tbody>
</table>
    `,
    },
    {
      message:
        "What are the compliant primary and fallback sources, and what actions are taken in case of fallout?",
      response: `
🤖 **Parent Orchestrator is thinking...** 

- Accessing Knowledge Base SOV_Source_Mapping.

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th class="p-2 max-w-[400px] whitespace-normal break-words align-top">Primary Source</th>
      <th class="p-2 max-w-[400px] whitespace-normal break-words align-top">Alternative Sources</th>
      <th class="p-2 max-w-[400px] whitespace-normal break-words align-top">Compliance Acceptability</th>
      <th class="p-2 max-w-[400px] whitespace-normal break-words align-top">Escalation Rule (If Source Fails)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>#</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top"></td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top"></td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top"></td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top"></td>
    </tr>
    <tr>
      <td>Address City, State Zip</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">USPS standardizer + commercial geocoder (rooftop&gt;parcel&gt;street)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">County Assessor/Parcel (APN, GBA, effective year built, improvements)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Public record or clientprovided; acceptable with ToS/Robots honored; no licensed content stored</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Try assessor address → Else broker HITL</td>
    </tr>
    <tr>
      <td>Facility Profile</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Client SOV / intake form (attested)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Company/brand site &amp; amenities pages (non-restricted); CRE listings (LoopNet/CoStar/etc.) for factual attributes &amp; photos</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Public record or clientprovided; acceptable with ToS/Robots honored; no licensed content stored; avoid restricted brand scraping</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">If conflicting occupancy/NAICS → Broker HITL review (maker–checker)</td>
    </tr>
    <tr>
      <td>Building Value</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Client SOV / intake form (attested)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Licensed replacement-cost tool/internal benchmark (no market value)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Clientprovided financials acceptable; redact in exports; EDGAR public OK; Licensed tool OK for derived values; do not expose proprietary tables</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">If ±25% outside benchmark → Licensed replacement-cost tool/internal benchmark (no market value). Route to HITL if still outofband</td>
    </tr>
    <tr>
      <td>Improvements &amp; Betterments</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Client SOV / intake form (attested)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">City permits/inspections (roof, fire, electrical/MEP, refrigeration); leases (clientprovided)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Clientprovided financials acceptable; redact in exports; EDGAR public OK; Public record or clientprovided; acceptable with ToS/Robots honored; no licensed content stored</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">If missing → Estimate % by occupancy → Broker HITL review (maker–checker)</td>
    </tr>
    <tr>
      <td>Business Personal Property</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Client SOV / intake form (attested)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Personal property tax rolls (where public and allowed); CRE listings (LoopNet/CoStar/etc.) for factual attributes &amp; photos</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Clientprovided financials acceptable; redact in exports; EDGAR public OK; Use only where public and allowed; respect jurisdictional limits; Factual extraction from listings/imagery OK; do not store or redistribute images</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">If ratio vs building value out of band → Broker HITL review (maker–checker)</td>
    </tr>
    <tr>
      <td>Business Income/Extra Expense</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Client financials; EDGAR (10K/10Q) if public; broker notes</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Revenue×margin×months model (internal)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Clientprovided financials acceptable; redact in exports; EDGAR public OK</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">If deviation &gt;20% vs model → Broker HITL review (maker–checker). Mask sensitive figures in client exports</td>
    </tr>
    <tr>
      <td>Total Insured Value</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Internal calculation from component fields</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Client rollup (attested)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Derived; acceptable</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">If mismatch &gt;5% vs client rollup → Broker HITL review (maker–checker)</td>
    </tr>
    <tr>
      <td>Sq. Ft.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">County Assessor/Parcel (APN, GBA, effective year built, improvements)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">CRE listings (LoopNet/CoStar/etc.) for factual attributes &amp; photos; Aerial/street imagery metadata (no image storage)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Public record or clientprovided; acceptable with ToS/Robots honored; no licensed content stored; Factual extraction from listings/imagery OK; do not store or redistribute images</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">If variance &gt;10% across sources → Broker HITL review (maker–checker)</td>
    </tr>
    <tr>
      <td>Year Built</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">County Assessor/Parcel (APN, GBA, effective year built, improvements) (Effective Year Built)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">City permits/inspections (roof, fire, electrical/MEP, refrigeration); CRE listings (LoopNet/CoStar/etc.) for factual attributes &amp; photos</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Public record or clientprovided; acceptable with ToS/Robots honored; no licensed content stored</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">If |assessor−listing| &gt;3 years → Broker HITL review (maker–checker)</td>
    </tr>
    <tr>
      <td>Fire &amp; Burglar Alarms</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">City permits/inspections (roof, fire, electrical/MEP, refrigeration)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">CRE listings (LoopNet/CoStar/etc.) for factual attributes &amp; photos; inspection certificates (client)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Public record or clientprovided; acceptable with ToS/Robots honored; no licensed content stored; Factual extraction from listings/imagery OK; do not store or redistribute images</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">If centralstation status unclear → Broker HITL review (maker–checker)</td>
    </tr>
    <tr>
      <td>Construction Type</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">County Assessor/Parcel (APN, GBA, effective year built, improvements) (materials)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">CRE listings (LoopNet/CoStar/etc.) for factual attributes &amp; photos (photos)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Public record or clientprovided; acceptable with ToS/Robots honored; no licensed content stored; Factual extraction from listings/imagery OK; do not store or redistribute images</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">If class-confidence &lt;0.75 → Broker HITL review (maker–checker)</td>
    </tr>
    <tr>
      <td>Stories</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">County Assessor/Parcel (APN, GBA, effective year built, improvements)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">CRE listings (LoopNet/CoStar/etc.) for factual attributes &amp; photos; Aerial/street imagery metadata (no image storage)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Public record or clientprovided; acceptable with ToS/Robots honored; no licensed content stored; Factual extraction from listings/imagery OK; do not store or redistribute images</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">If SqFt÷Stories unreasonable → Broker HITL review (maker–checker)</td>
    </tr>
    <tr>
      <td>Units</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Company/brand site &amp; amenities pages (non-restricted) (hotels/multifamily)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">CRE listings (LoopNet/CoStar/etc.) for factual attributes &amp; photos; client census</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Public record or clientprovided; acceptable with ToS/Robots honored; no licensed content stored</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">If unit count missing or conflicting → Broker HITL review (maker–checker)</td>
    </tr>
    <tr>
      <td>Pool</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">CRE listings (LoopNet/CoStar/etc.) for factual attributes &amp; photos (amenities)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Company/brand site &amp; amenities pages (non-restricted); permits</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Factual extraction from listings/imagery OK; do not store or redistribute images; Public record or clientprovided; acceptable with ToS/Robots honored; no licensed content stored</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">If ambiguous → Broker HITL review (maker–checker)</td>
    </tr>
    <tr>
      <td>Basement</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">County Assessor/Parcel (APN, GBA, effective year built, improvements)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">CRE listings (LoopNet/CoStar/etc.) for factual attributes &amp; photos</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Public record or clientprovided; acceptable with ToS/Robots honored; no licensed content stored; Factual extraction from listings/imagery OK; do not store or redistribute images</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">If floodrelevant or unclear → Broker HITL review (maker–checker)</td>
    </tr>
    <tr>
      <td>Sprinklered</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">City permits/inspections (roof, fire, electrical/MEP, refrigeration) (fire)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">CRE listings (LoopNet/CoStar/etc.) for factual attributes &amp; photos (interior photos)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Public record or clientprovided; acceptable with ToS/Robots honored; no licensed content stored; Factual extraction from listings/imagery OK; do not store or redistribute images</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">If only listing claims ESFR → Broker HITL review (maker–checker)</td>
    </tr>
    <tr>
      <td>Plumbing</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">City permits/inspections (roof, fire, electrical/MEP, refrigeration)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">CRE listings (LoopNet/CoStar/etc.) for factual attributes &amp; photos</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Public record or clientprovided; acceptable with ToS/Robots honored; no licensed content stored; Factual extraction from listings/imagery OK; do not store or redistribute images</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">If original/unknown → Broker HITL review (maker–checker)</td>
    </tr>
    <tr>
      <td>Heating</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">City permits/inspections (roof, fire, electrical/MEP, refrigeration)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">CRE listings (LoopNet/CoStar/etc.) for factual attributes &amp; photos</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Public record or clientprovided; acceptable with ToS/Robots honored; no licensed content stored; Factual extraction from listings/imagery OK; do not store or redistribute images</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">If solidfuel or &gt;25 yrs → Broker HITL review (maker–checker)</td>
    </tr>
    <tr>
      <td>Electrical</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">City permits/inspections (roof, fire, electrical/MEP, refrigeration) (electrical)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">CRE listings (LoopNet/CoStar/etc.) for factual attributes &amp; photos; inspection summaries (client)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Public record or clientprovided; acceptable with ToS/Robots honored; no licensed content stored; Factual extraction from listings/imagery OK; do not store or redistribute images</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">If K&amp;T or aluminum branch wiring suspected → Broker HITL review (maker–checker)</td>
    </tr>
    <tr>
      <td>Roof</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">City permits/inspections (roof, fire, electrical/MEP, refrigeration) (roof)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">CRE listings (LoopNet/CoStar/etc.) for factual attributes &amp; photos; Aerial/street imagery metadata (no image storage) notes</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Public record or clientprovided; acceptable with ToS/Robots honored; no licensed content stored; Factual extraction from listings/imagery OK; do not store or redistribute images</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">If type/age unclear or &gt; thresholds → Broker HITL review (maker–checker)</td>
    </tr>
  </tbody>
</table>
`,
    },
    {
      message:
        "What is the confidence scoring, and what evidence needs to be retained for audit and compliance?",
      response: `
🤖 **Parent Orchestrator is thinking...** 

- Accessing Knowledge Base SOV_Data_Confidence.
<table>
  <thead>
    <tr>
      <th>Field</th>
      <th class="p-2 max-w-[400px] whitespace-normal break-words align-top">Confidence Metric</th>
      <th class="p-2 max-w-[400px] whitespace-normal break-words align-top">Description</th>
      <th class="p-2 max-w-[400px] whitespace-normal break-words align-top">Compliance Relevance</th>
      <th class="p-2 max-w-[400px] whitespace-normal break-words align-top">Audit Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>#</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top"></td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top"></td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top"></td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top"></td>
    </tr>
    <tr>
      <td>Address City, State Zip</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Tiered address confidence: Rooftop geocode=High; Parcel=Med; Interpolated=Low; -penalty for Jaro–Winkler&lt;0.92 or multi-candidate</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">USPS-normalized address with ZIP9 and suite; favor rooftop match within ≤20m; log geocoder tier and candidate set size.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&amp;O risk: High; Privacy: Low; Retention: 1y; Mislocation drives misbind; document geocoder provider &amp; accuracy</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Store normalized string, lat/long, accuracy tier, candidates, and reason if downgraded</td>
    </tr>
    <tr>
      <td>Facility Profile</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Occupancy/NAICS confidence = taxonomy match score × source authority (brand&gt;listing&gt;news)</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Canonical occupancy with NAICS6; synonyms allowed; lower score if inferred from marketing text only.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&amp;O risk: High; Privacy: Low; Retention: 1y; Impacts coverage class and market appetite</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Keep mapping path, synonyms used, and sources ranked by authority</td>
    </tr>
    <tr>
      <td>Building Value</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">High if within ±25% of replacement-cost benchmark; Medium if estimated from peer band; Low if market value or missing drivers</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Replacement cost only (not market); compare vs occupancy/class benchmark; flag out-of-band.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&amp;O risk: High; Privacy: Financial; Retention: 1y; Underinsurance exposure; mask in client exports</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Record model inputs (class, sqft), benchmark id, and variance vs client value</td>
    </tr>
    <tr>
      <td>Improvements &amp; Betterments Value</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">High with lease/permit evidence; Medium if % of building by occupancy; Low if unknown</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Typical ranges by occupancy; prefer client lease or recent renovation permits.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&amp;O risk: High; Privacy: Financial; Retention: 1y</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Capture evidence links (permit/lease) and assumed % if estimated</td>
    </tr>
    <tr>
      <td>Business Personal Property</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">High with tax roll or inventory support; Medium via ratio vs building by occupancy; Low if inferred from photos only</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Cross-check ratio vs building value by occupancy; jurisdictional constraints for tax rolls.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&amp;O risk: High; Privacy: Financial; Retention: 1y; Respect tax roll access rules</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Log ratio used, jurisdiction, and whether tax roll access was permissible</td>
    </tr>
    <tr>
      <td>Business Income/Extra Expense</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">High with client financials; Medium if model-based (revenue×margin×months); Low if proxies only</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Validate months of indemnity (12–18 typical); compute deviation vs model; route &gt;20% to HITL.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&amp;O risk: High; Privacy: High (financial); Retention: 1y; Minimize retention; export aggregates only</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Redact raw financials in exports; store only derived metrics and variance</td>
    </tr>
    <tr>
      <td>Total Insured Value</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">High if component sum matches account rollup within 5%; Medium if site-level complete but account mismatch; Low if components missing</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">TIV = Building + IBT + BPP + BI; reconcile row and account totals.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&amp;O risk: High; Privacy: Low; Retention: 1y; Audit-critical reconciliation</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Store component values, computed TIV, client-declared TIV, and delta</td>
    </tr>
    <tr>
      <td>Sq. Ft.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">High with assessor GBA; Medium with two agreeing external sources (±10%); Low if imagery-derived estimate only</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Prefer assessor; sanity-check per-floor band using Stories.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&amp;O risk: Medium; Privacy: Low; Retention: 1y; Feeds valuation; imagery ToS compliance</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Record sources, agreement %, and per-floor sanity check result</td>
    </tr>
    <tr>
      <td>Year Built</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">High with assessor Effective Year Built; Medium with permit corroboration; Low if listing-only or conflict &gt;3 years</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Capture both Year Built and Effective Year Built where available; consider major renovation years.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&amp;O risk: Medium; Privacy: Low; Retention: 1y</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Keep assessor parcel/APN ref and last renovation permit dates</td>
    </tr>
    <tr>
      <td>Fire &amp; Burglar Alarms</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">High with permits/UL doc; Medium with credible listing; Low if ambiguous text</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Enum {None, Local, Central, UL}; central-station status requires evidence.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&amp;O risk: Medium; Privacy: Low; Retention: 1y; Do not store vendor account IDs</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Link to permit/UL evidence; store enum only</td>
    </tr>
    <tr>
      <td>Construction Type</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Class-confidence score: photo+assessor fusion ≥0.75=High; 0.5–0.74=Med; &lt;0.5=Low</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Map to ISO class (Frame/JM/NC/MNC/MFR/FR); penalize conflicting signals.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&amp;O risk: High; Privacy: Low; Retention: 1y; Rating factor; respect imagery ToS</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Persist class probabilities, evidence snippets, and rule version</td>
    </tr>
    <tr>
      <td>Stories</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">High with assessor; Medium with two concurring sources; Low if inferred</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Cross-validate with SqFt; mezzanines allow ±1 tolerance.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&amp;O risk: Low; Privacy: Low; Retention: 1y</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Store assessor citation or listing URLs; note mezzanine flag</td>
    </tr>
    <tr>
      <td>Units</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">High with brand/company site or client census; Medium with listings; Low if inferred</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Required for hospitality/multifamily; N/A otherwise.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&amp;O risk: Medium; Privacy: Low; Retention: 1y</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Record brand page URL/screenshot ref; mark N/A when not unit-based</td>
    </tr>
    <tr>
      <td>Pool</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">High with permits/brand amenity; Medium with listing photos; Low if unclear</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Boolean exposure; indoor/outdoor optional.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&amp;O risk: Medium; Privacy: Low; Retention: 1y; Liability exposure; avoid storing images</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Log evidence source and date; store boolean only</td>
    </tr>
    <tr>
      <td>Basement</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">High with assessor; Medium with listings; Low if inferred from imagery only</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Flag flood implications if Y.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&amp;O risk: Medium; Privacy: Low; Retention: 1y</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Store assessor field and flood tag computation</td>
    </tr>
    <tr>
      <td>Sprinklered</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">High with fire permits or inspection certs; Medium with interior photos; Low if listing text only</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Enum {None, Partial, Full, ESFR}; ESFR requires explicit evidence.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&amp;O risk: High; Privacy: Low; Retention: 1y; Life-safety and rating</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Attach permit reference; keep enum and evidence pointer</td>
    </tr>
    <tr>
      <td>Plumbing</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">High with permit specifying material/update year; Medium with listing detail; Low if unknown/old</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Capture type and last major update year; flag galvanized/original.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&amp;O risk: Medium; Privacy: Low; Retention: 1y</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Store permit id/date; keep flags for outdated materials</td>
    </tr>
    <tr>
      <td>Heating</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">High with permit; Medium with listing; Low if solid-fuel or &gt;25 yrs without docs</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Type and update year; solid-fuel triggers exception.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&amp;O risk: Medium; Privacy: Low; Retention: 1y</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Record equipment type and last update permit</td>
    </tr>
    <tr>
      <td>Electrical</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">High with permit/inspection; Medium with listing; Low if K&amp;T/aluminum suspected without docs</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Service amps and panel type; safety-critical exceptions elevate HITL.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&amp;O risk: High; Privacy: Low; Retention: 1y; Safety-critical; do not store full inspection PDFs</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Store amps/panel metadata and hazard flags; reference inspection id</td>
    </tr>
    <tr>
      <td>Roof</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">High with roof permit &amp; year; Medium with listing photos + assessor; Low if unknown or &gt;threshold age without proof</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Type and last replacement year; flat roofs &gt;20 yrs → exception.</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">E&amp;O risk: High; Privacy: Low; Retention: 1y; Water ingress risk</td>
      <td class="p-2 max-w-[400px] whitespace-normal break-words align-top">Keep permit id/date, type enum, and age computation</td>
    </tr>
  </tbody>
</table>
`,
    },
  ])
);

localStorage.setItem(
  "demo_kb_d3d1ff50-3327-4ea0-9edc-56793e24d57b",
  JSON.stringify([
    {
      agentName: "Parent Orchestrator Agent",
      knowledgeBaseData: [
        {
          id: "kb-202",
          name: "SOV_Rule_Engine KB",
          description:
            "Defines how each SOV field should be validated and enriched to meet broker standards.",
          dataSourceType: "RAG",
          connector: "JIRA Cloud",
          language: "en",
          status: "enabled",
          lastIndexedAt: "2025-05-25T10:00:00Z",
          documentCount: 120,
          embeddingModel: "text-embedding-3-small",
          retrievalMode: "semantic",
          tags: ["intake", "rules", "policy"],
        },
        {
          id: "kb-203",
          name: "SOV_Data_Confidence KB",
          description:
            "Provides logic to assign confidence levels and route uncertain data to HITL.",
          dataSourceType: "RAG",
          connector: "JIRA Cloud",
          language: "en",
          status: "enabled",
          lastIndexedAt: "2025-05-25T10:00:00Z",
          documentCount: 120,
          embeddingModel: "text-embedding-3-small",
          retrievalMode: "semantic",
          tags: ["intake", "rules", "policy"],
        },
        {
          id: "kb-204",
          name: "SOV_Source_Mapping KB",
          description:
            "Maps each SOV attribute to its trusted external/internal data sources.",
          dataSourceType: "RAG",
          connector: "JIRA Cloud",
          language: "en",
          status: "enabled",
          lastIndexedAt: "2025-05-25T10:00:00Z",
          documentCount: 120,
          embeddingModel: "text-embedding-3-small",
          retrievalMode: "semantic",
          tags: ["intake", "rules", "policy"],
        },
        {
          id: "kb-205",
          name: "SOV_Match_Criteria KB",
          description:
            "Establishes criteria for merging duplicates and resolving entity conflicts.",
          dataSourceType: "RAG",
          connector: "JIRA Cloud",
          language: "en",
          status: "enabled",
          lastIndexedAt: "2025-05-25T10:00:00Z",
          documentCount: 120,
          embeddingModel: "text-embedding-3-small",
          retrievalMode: "semantic",
          tags: ["intake", "rules", "policy"],
        },
      ],
    },
  ])
);
