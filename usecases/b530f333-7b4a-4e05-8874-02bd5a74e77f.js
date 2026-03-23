// https://sharetext.io/d801ef85
// https://sharetext.io/61a75d31 - v2
// https://sharetext.io/dcc384d5 - v3
localStorage.setItem(
  "demo_baf886bf-b7cc-438f-89fa-7a6ed26a4d2d",
  JSON.stringify([
    {
      message:
        "Run Fairer Share Eligibility for YEAR 2024 and 2025 for Kasuni Bandara and Vijayshankar A. Provide a detailed breakdown covering normalisation, current account, savings and mortgage checks, exclusions, payment window validation, and the final eligibility outcome with reasons",
      response: `
🤖 **Supervisor is orchestrating...**

> Running DetermineFairerShareEligibility for YEAR = 2025. Routing through Normaliser → Current-Account Qualifier → Savings/Mortgage Qualifier → Eligibility Controller → (HITL if 2024→2025). 

---

🤖 **Profile & Dates Normaliser is processing...**

Aligning rules to 31 Mar 2025 snapshot and 18 Jun–4 Jul 2025 payout window; pulling brands, balances, and activity. 
| Customer (ID)            | Current Account (Brand/Type) | Status @ 31-Mar-2025 | Jan Activity            | Feb Activity            | Mar Activity | Savings (Mar)                                           | Mortgage @ 31-Mar-2025        | Exclusions (flags) | CA Open in Payout Window? |
| :----------------------- | :--------------------------- | :------------------- | :---------------------- | :---------------------- | :----------- | :------------------------------------------------------ | :---------------------------- | :----------------- | :------------------------ |
| Kasuni Bandara (CUST-KB-001) | Nationwide / FlexPlus        | OPEN                 | fee-paid                | fee-paid                | fee-paid     | Easy Saver (Nationwide)                                 | Nationwide Residential £176,000 | all false          | YES                       |
| Vijayshankar A (CUST-JR-002) | Nationwide / FlexDirect      | OPEN                 | £500+ in & ≥2 out       | £500+ in & ≥2 out       | —            | ISA transferred to Virgin (Subsidiary); Nationwide ~£50/day | none                          | all false          | YES                       |

---

🤖 **Current Account Qualifier is analysing...**

Evaluating account-type rules incl. FlexPlus fee and FlexDirect monthly thresholds (no mixing in 2025). 
| Customer       | CA Type    | Brand qualifies? | Activity rule met?                                          | CA Eligible (2025) |
|----------------|------------|------------------|------------------------------------------------------------|--------------------|
| Kasuni         | FlexPlus   | Nationwide    | fee-paid (Jan–Mar)                                       | YES                |
| Vijayshankar A | FlexDirect | Nationwide    | two months meet £500+ in & ≥2 out (single test type, no mixing) | YES                |

---

🤖 **Savings & Mortgage Qualifier is checking...**

Validating the Savings leg (≥ £100 on any March day — Nationwide only) and the Mortgage leg (≥ £100 owed on a Nationwide residential mortgage as of 31 Mar). Subsidiaries excluded in 2025. 
| Customer       | Savings (Mar)                                           | Provider Classification | Savings Leg | Mortgage (31-Mar) | Provider   | Mortgage Leg | Qualifying Leg                     |
|----------------|--------------------------------------------------------|-------------------------|-------------|-------------------|------------|--------------|------------------------------------|
| Kasuni         | Easy Saver (balances present)                          | Nationwide              | ✅          | £176,000 owed     | Nationwide | ✅           | CA + Mortgage (also passes CA + Savings) |
| Vijayshankar A | ≥ £100 held with Virgin after Feb transfer; Nationwide only ~£50/day | Subsidiary (excluded)   | ❌          | £0                | —          | ❌           | None                               |

---

🤖 **Eligibility & Exceptions Controller is finalising...**

Applying exclusions (death, fraud/illegal use, legal/closure/repo; 2025 also debt written-off) and confirming the current account is open during 18 Jun–4 Jul 2025 payout window. 
| Customer       | Exclusions Triggered? | CA Open in Payout Window? | Final Eligibility (2025) | Reasoning                                                                                             |
|----------------|-----------------------|---------------------------|--------------------------|-------------------------------------------------------------------------------------------------------|
| Kasuni         | No                    | YES                       | ✅ Eligible              | Qualifying CA + Nationwide residential mortgage ≥ £100 on 31-Mar; meets all rules.                   |
| Vijayshankar A | No                    | YES                       | ❌ Not Eligible          | Qualifying CA present, but no qualifying Nationwide savings ≥ £100 in March (subsidiary savings excluded) and no Nationwide mortgage. |

---

🤖 **Human-in-the-Loop (HITL) is triggered...**

**Triggered for Vijayshankar A** (eligible in 2024 via CA+Savings; not eligible in 2025 due to subsidiary savings)

### Evidence pack includes: 
- Provider lineage (Virgin/Clydesdale) 
- ISA transfer-out record (Feb 2025) 
- March daily balances 
- CA activity proof 

Reviewer records Upheld or Overridden with rationale. 

[Click here to review and approve eligibility decision](https://techlabsglobal.atlassian.net/browse/FS-1?target=_blank)

---

#### Final Eligibility Outcomes
- Kasuni Bandara (CUST-KB-001) — Eligible (2025) 
  - Basis: Qualifying current account + Nationwide residential mortgage. 
  - All exclusions clear; account open during payout window 18 Jun–4 Jul 2025. 

- Vijayshankar A (CUST-JR-002) — Not Eligible (2025)
  - Reason: Savings ≥ £100 were held with a subsidiary (Virgin/Clydesdale) in March 2025, which does not qualify under 2025 rules; no Nationwide mortgage. 
  - (HITL review prepared for 2024→2025 drop-off; approval link provided.) 
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
🤖 **Supervisor is orchestrating...**

> Pulling eligibility outcomes. Preparing member communications for review. 
Action: Confirm “Send” to dispatch the emails. 

<h5 class=" mt-4">Preview — Kasuni Bandara (Eligible 2025)</h5>

<div class="bg-gray-50 rounded-md border-2">

<div class="border-b-2 p-4 flex flex-col gap-y-2">
<p class="!mt-0"><strong>Subject :</strong> You’re receiving your £100 Fairer Share Payment</p>
<p class="!mt-0"><strong>To :</strong> Kasuni Bandara</p>
</div>


<div class="p-4 gap-y-6 max-w-[600px]">
<p class="mb-3">Dear Kasuni,</p>
<div>
<p>We’re pleased to let you know that you qualify for this year’s Fairer Share Payment. </p>
<p class="!my-3">As a member with a qualifying current account and a Nationwide residential mortgage, you’ll receive a £100 payment between 18 June and 4 July 2025. The payment will be made directly into your Nationwide current account, and it will appear on your statement as: </p>
<h3 class="!mt-3 !mb-0 !text-[18px]">Nationwide Fairer Share Payment</h3>
<p class="mt-3">There’s nothing you need to do — your payment will arrive automatically. </p>
<p class="mt-2">Thank you for being a valued member of Nationwide. </p>
</div>
</div>

<div class="border-t-2 p-4 gap-y-2">
<p class="!mt-0">Kind regards</p>
<p class="!mt-0">Nationwide Building Society</p>
</div>
</div>

---

<h5 class=" mt-4">Preview — Vijayshankar A (Not Eligible 2025)</h5>

<div class="bg-gray-50 rounded-md border-2">

<div class="border-b-2 p-4 flex flex-col gap-y-2">
<p class="!mt-0"><strong>Subject :</strong> Important update on your Fairer Share Payment eligibility</p>
<p class="!mt-0"><strong>To :</strong> Vijayshankar A</p>
</div>


<div class="p-4 gap-y-6 max-w-[600px]">
<p class="mb-3">Dear Vijayshankar, </p>
<div>
<p>We’re writing about this year’s Fairer Share Payment. </p>

<p class="!my-3">Although you hold a qualifying Nationwide current account, you do not meet the full eligibility criteria for 2025: </p>

<ul class="list-disc ml-8">
<li>Your savings balance of more than £100 in March 2025 was held with a subsidiary provider (Virgin/Clydesdale), which is excluded from the 2025 terms. </li>
<li>You did not have a Nationwide residential mortgage balance of at least £100 on 31 March 2025. </li>
</ul>

<p class="!my-3">This means you will not receive the £100 payment this year. </p>

<p >How to qualify next year: </p>
<ol class="list-decimal ml-8">
<li>Hold at least £100 in a Nationwide-branded savings account or cash ISA on any day in March, OR </li>
<li>Owe at least £100 on a Nationwide residential mortgage on 31 March.</li>
</ol>

<p>If you’d like more information on our savings or mortgage products, please visit our website or contact us in branch. </p>

<p class="!my-3">We appreciate your membership and hope to be able to share our future success with you. </p>

</div>
</div>

<div class="border-t-2 p-4 gap-y-2">
<p class="!mt-0">Kind regards</p>
<p class="!mt-0">Nationwide Building Society</p>
</div>
</div>

---

Reply “Send now” to dispatch both emails.
`,
    },
    {
      message: "Send now",
      response: `
🤖 **Notifications**

Emails queued and sent successfully.
- Kasuni Bandara — Sent ✓ (Subject: You’re receiving your £100 Fairer Share Payment) 
- Vijayshankar A — Sent ✓ (Subject: Important update on your Fairer Share Payment eligibility) 

**Delivery status:** Accepted by outbound mail gateway.
**Reference IDs:** MSG-KB-2025-ELIG-001, MSG-VA-2025-NELIG-001.
`,
      apiCalls: [
        {
          name: "sendEmailToKasuni",
          trigger: "before",
          buttonId: "sendEmailToKasuni",
          response: "Human approval initiated Successfully",
          method: "POST",
          url: "https://kaya-mock-api-938786674786.us-central1.run.app/health-first/email",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          bodyTemplate: `{"subject": "You’re receiving your £100 Fairer Share Payment","to": ["kasunib@kayatech.com"],"content": "<p>Dear Kasuni,</p><p>We’re pleased to let you know that you qualify for this year’s Fairer Share Payment.</p><p>As a member with a qualifying current account and a Nationwide residential mortgage, you’ll receive a £100 payment between 18 June and 4 July 2025. The payment will be made directly into your Nationwide current account, and it will appear on your statement as:</p><p><strong>Nationwide Fairer Share Payment</strong></p><p>There’s nothing you need to do — your payment will arrive automatically.</p><p>Thank you for being a valued member of Nationwide.</p><br/><p>Kind regards, <p>Nationwide Building Society</p></p>"}`,
        },
        {
          name: "sendEmailToVijayshankar",
          trigger: "before",
          buttonId: "sendEmailToVijayshankar",
          response: "Human approval initiated Successfully",
          method: "POST",
          url: "https://kaya-mock-api-938786674786.us-central1.run.app/health-first/email",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          bodyTemplate: `{"subject": "Important update on your Fairer Share Payment eligibility","to": ["vijay@kayatech.com"],"content": "<p>Dear Vijayshankar,</p><p>We’re writing about this year’s Fairer Share Payment.</p><p>Although you hold a qualifying Nationwide current account, you do not meet the full eligibility criteria for 2025:</p><ul><li>Your savings balance of more than £100 in March 2025 was held with a subsidiary provider (Virgin/Clydesdale), which is excluded from the 2025 terms.</li><li>You did not have a Nationwide residential mortgage balance of at least £100 on 31 March 2025.</li></ul><p>This means you will not receive the £100 payment this year.</p><p>How to qualify next year:</p><ol><li>Hold at least £100 in a Nationwide-branded savings account or cash ISA on any day in March, OR</li><li>Owe at least £100 on a Nationwide residential mortgage on 31 March.</li></ol><p>If you’d like more information on our savings or mortgage products, please visit our website or contact us in branch.</p><p>We appreciate your membership and hope to be able to share our future success with you.</p><br/><p>Kind regards,<br>Nationwide Building Society</p>"}`,
        },
      ],
    },
  ])
);
