localStorage.setItem(
            'demo_bedc1fc1-0449-4dee-8860-caeb6a599e6c',
            JSON.stringify([
                {
                    message: 'review the uploaded files.',
                    response: '',
                    hideUserInput: true,
                    apiCalls: [
                        {
                            name: 'sendEmail',
                            trigger: 'after',
                            buttonId: 'email',
                            response: 'Human approval initiated Successfully',
                            method: 'POST',
                            url: 'https://kaya-mock-api-938786674786.us-central1.run.app/health-first/email',
                            headers: {
                                accept: 'application/json',
                                'Content-Type': 'application/json',
                            },
                            bodyTemplate:
                                '{"subject":"Websocket Initiated","to":["ammshathwan@kayatech.com"],"content":"Websocket call initiated!"}',

                            waitingConfirmation: true,

                            // Message to display during waiting state
                            waitingMessage:
                                'Awaiting upload of SPAC disclosure documents for compliance validation and internal audit review.',

                            // Delay in milliseconds (used for timeout fallback)
                            confirmationDelay: 10000,

                            // Trigger mechanism: 'websocket' or 'timeout'
                            confirmationTrigger: 'websocket',

                            // WebSocket URL for real-time communication
                            websocketUrl: 'wss://kaya-mock-api-938786674786.us-central1.run.app/health-first/websocket',

                            // Event type to listen for on the WebSocket
                            websocketEvent: 'confirmation',

                            // Message to display after confirmation is received
                            confirmationMessage: 'User has uploaded 4 new assets: 2 videos and 2 graphics.',

                            // Show multiple response one after another
                            showMultiResponse: true,
                        },
                    ],
                },
                {
                    message: 'User has uploaded 4 new assets: 2 videos and 2 graphics.',
                    response: `📂 Analyzing uploaded disclosure...`,
                },
                {
                    message: 'User has uploaded 4 new assets: 2 videos and 2 graphics.',
                    response: `🤖 Supervisor Agent is thinking...

The user has uploaded a draft SPAC IPO disclosure for review.

Triggering the appropriate agents to ensure the filing aligns with internal deal records, legal standards, and regulatory policies.`,
                },
                {
                    message: 'Filing Summary Agent',
                    response: `🤖 Filing Summary Agent is thinking...

Extracting key assertions and statements from the uploaded SPAC IPO draft disclosure.

Extracted Disclosure Statements:

"As of the date of this filing, we have not initiated or engaged in any discussions with potential business combination targets."

"There are no definitive agreements or letters of intent currently in place."

"We intend to focus our acquisition efforts on the technology sector."

Disclosure Summary:

Entity: CF Acquisition Corp. V  
Filing Date: June 10, 2024  
Claimed Status: No active merger talks  
Sector Focus: Technology

Triggering Internal Activity Audit Agent...`,
                },
                {
                    message: 'Internal Activity Audit Agent',
                    response: `🤖 Internal Activity Audit Agent is thinking...

Scanning internal systems (email, calendar, Zoom transcripts, data room logs, and shared drives) for merger-related activity.

Findings:

May 5: Zoom meeting – Preliminary Due Diligence with View Inc.  
May 12: NDA signed with Satellogic, Inc.  
May 14–Jun 6: Data room logs show consistent downloads by View Inc.  
May 29: Internal meeting – Negotiation Committee Brief – View Inc.

📊 Generated Internal Activity Timeline:

| Date         | Event                                 | Entity          |
|--------------|----------------------------------------|-----------------|
| May 5, 2024  | Preliminary diligence meeting (Zoom)   | View Inc.       |
| May 12, 2024 | NDA executed                           | Satellogic, Inc.|
| May 14–Jun 6 | Data room access                       | View Inc.       |
| May 29, 2024 | Internal negotiation meeting           | View Inc.       |

Triggering Disclosure Integrity Agent...`,
                },
                {
                    message: 'Disclosure Integrity Agent',
                    response: `🤖 Disclosure Integrity Agent is thinking...

Comparing internal activity with the statements in the SEC filing.

Inconsistencies Detected:

• Filing says "no merger talks" — but internal activity clearly contradicts.  
• No mention of NDAs or diligence.

Risk Score: 🔴 Critical

Triggering Legal Review Assistant Agent...`,
                },
                {
                    message: 'Legal Review Assistant Agent',
                    response: `🤖 Legal Review Assistant Agent is thinking...

Disclosure contains false/misleading language.

⚠️ Suggested Replacement Disclosure Statement:

<div id="review-section">
  <textarea name="test" id="test" readonly rows="5" class="w-full border rounded p-2 text-sm font-mono bg-gray-100 resize-none">
While no definitive agreements have been signed, preliminary discussions have occurred with select potential targets, including View Inc. and Satellogic, Inc. These discussions have included early-stage diligence and NDA execution.
  </textarea>

  


  <button style="color:white;background:#1DB954;margin-top:10px;">
    Reviewed and Approved
  </button>
</div>
`,
                    apiCalls: [
                        {
                            name: 'sendEmails',
                            trigger: 'after',
                            buttonId: 'email',
                            response: 'Human approval initiated Successfully',
                            method: 'POST',
                            url: 'https://kaya-mock-api-938786674786.us-central1.run.app/health-first/email',
                            headers: {
                                accept: 'application/json',
                                'Content-Type': 'application/json',
                            },
                            bodyTemplate:
                                '{"subject":"Websocket Initiated","to":["ammshathwan@kayatech.com"],"content":"Websocket call initiated!"}',

                            waitingConfirmation: true,

                            // Message to display during waiting state
                            waitingMessage: 'Waiting for approval...',

                            // Delay in milliseconds (used for timeout fallback)
                            confirmationDelay: 10000,

                            // Trigger mechanism: 'websocket' or 'timeout'
                            confirmationTrigger: 'websocket',

                            // WebSocket URL for real-time communication
                            websocketUrl: 'wss://kaya-mock-api-938786674786.us-central1.run.app/health-first/websocket',

                            // Event type to listen for on the WebSocket
                            websocketEvent: 'confirmation',

                            // Message to display after confirmation is received
                            confirmationMessage: 'final report',
                        },
                    ],
                },
                {
                    message: 'final report',
                    response: ``,
                },
                {
                    message: 'final report summary',
                    response: `<div id="governance-agent">
  🤖 Governance Tracker Agent is thinking...

  Logging audit trail and preparing Jira submission.

  


  <strong>Audit Snapshot:</strong>

  Document Version: v1.3

  Redlined Disclosure Sections: 2

  Linked Internal Evidence: 4

  Status: Awaiting approval




  ✅ Jira Ticket Created

  Ticket ID: <strong>COMPLIANCE-2478</strong>

  Title: SPAC Disclosure Inconsistency – Preliminary Merger Discussions

  Status: Submitted to Compliance Tracker

  🔗 <a href="https://techlabsglobal.atlassian.net/jira/software/projects/FC/boards/320" target="_blank" class="text-blue-600 underline">Click here to view ticket in Jira</a>
</div>`,
                },
            ])
        );
