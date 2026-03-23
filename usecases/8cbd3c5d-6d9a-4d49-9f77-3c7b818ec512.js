localStorage.setItem(
  "demo_8cbd3c5d-6d9a-4d49-9f77-3c7b818ec512",
  JSON.stringify([
    {
      message: "review the uploaded files.",
      response: "",
      hideUserInput: true,
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

          // Message to display during waiting state
          waitingMessage:
            "Awaiting upload of advertising content to Google Drive for regulatory compliance analysis.",

          // Delay in milliseconds (used for timeout fallback)
          confirmationDelay: 10000,

          // Trigger mechanism: 'websocket' or 'timeout'
          confirmationTrigger: "websocket",

          // WebSocket URL for real-time communication
          websocketUrl:
            "wss://kaya-mock-api-938786674786.us-central1.run.app/health-first/websocket",

          // Event type to listen for on the WebSocket
          websocketEvent: "confirmation",

          // Message to display after confirmation is received
          confirmationMessage:
            "User has uploaded 4 new assets: 2 videos and 2 graphics.",

          // Show multiple response one after another
          showMultiResponse: true,
        },
      ],
    },
    {
      message: "User has uploaded 4 new assets: 2 videos and 2 graphics.",
      response: `📂 User has uploaded 4 new assets: 2 videos and 2 graphics.`,
    },
    {
      message: "📂 User has uploaded 4 new assets: 2 videos and 2 graphics.",
      response: `🤖 Supervisor Agent is thinking...\n\nInitiating asset ingestion and activating content validation based on the Insurance Advertisement Review Protocol.`,
    },
    {
      message: "Newly detected files list",
      response: `🤖 Ingest Agent is thinking...\n\nNewly detected files:\n\n| File Type | File Name       | Status    |\n|-----------|-----------------|-----------|\n| Video     | video_ad_01.mp4 | Retrieved |\n| Video     | video_ad_02.mp4 | Retrieved |\n| Graphic   | banner_01.png   | Retrieved |\n| Graphic   | banner_02.png   | Retrieved |\n\nAll assets successfully queued for multimodal compliance validation.`,
    },
    {
      message: "Review compliance validation logs",
      response: `🤖 Compliance Agent is thinking...\n\n <details class="w-full">
  <summary><strong>Compliance Agent Logs</strong></summary>

## Accessing MCP Server...  

## Retrieving Compliance Framework v1.4 documentation...  

## Verifying asset ingestion status from Ingest Agent...  

## Initiating Graphic Media Compliance Module...  

## Running OCR and text disclosure checks...  

## Validating license visibility and disclaimer presence...  

## Performing contrast and accessibility checks...  

## Switching to Video Compliance Module...  

## Extracting frames at 5-second intervals from video files...  

## Running anomaly detection across extracted frames...  

## Transcribing audio and matching with visual elements...  

## Checking LUFS levels and verifying visual overlays...  

## Compliance framework validation completed.  

</details>
`,
    },
    {
      message: "Compliance validation results",
      response: `🧾 Compliance Validation Summary

🖼️ Graphic Content Review

| Graphic File    | Status           | Issues Detected                                                                                                                                         | Rule Reference                         | Severity |
|-----------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|----------|
| banner_01.png   | ✅ Compliant     | None – all required elements present                                                                                                                    | –                                        | –        |
| banner_02.png   | ❌ Non-Compliant | • “Guaranteed approval” claim without qualification 
 • Missing license ID and disclaimer 
 • Font size of disclaimers too small (<10pt) 
 • Insufficient color contrast between text and background. | FTC §255.3(b), KB §2.1, WCAG 2.1 AA §1.4.3 | Critical |

📸 Detected Anomaly Snapshot: banner_02.png  
<img src="/mocks/mock-banner.png" alt="Non-compliant banner example" width="400" height="200" class="object-cover rounded-[6px] mb-[6px]" style="margin-bottom:6px;">
<img src="/mocks/mock-banner-2.png" alt="Non-compliant banner example" width="400" height="200" class="object-cover rounded-[6px] mb-[6px]" style="margin-bottom:6px;">
<img src="/mocks/mock-banner-3.png" alt="Non-compliant banner example" width="400" height="200" class="object-cover rounded-[6px] mb-[6px]">
`,
    },
    {
      message: "Video compliance results",
      response: `🎞️ Video Content Review

| Video File       | Status           | Snapshot Review Intervals               | Issues Detected                                                                                                                                      | Rule Reference                             | Severity |
|------------------|------------------|-----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|----------|
| video_ad_01.mp4  | ✅ Compliant     | 00:00, 00:05, 00:10, 00:15, 00:20, 00:25 | No anomalies – overlays and disclaimers present, LUFS –22.8 within approved range                                                                  | –                                          | –        |
| video_ad_02.mp4  | ❌ Non-Compliant | 00:00, 00:05, 00:10, 00:15, 00:20       | • Misleading chart at 00:10 without baseline comparison  
 • No visual or audio disclaimer present  
 • LUFS measured at –14.2 (exceeds permitted audio level)  
 • Unsubstantiated claim: “Lowest premiums in the state” at 00:15 | NAIC §7, KB §3.4, FTC §255.1, LUFS Policy §1.2 | Critical |

📸 Detected Anomaly Snapshot: video_ad_02.mp4 at 00:10  
<img src="/mocks/mock-video.png" alt="Non-compliant banner example" width="400" height="200" class="object-cover rounded-[6px] mb-[6px]" style="margin-bottom:6px;">
<img src="/mocks/mock-video-2.png" alt="Non-compliant banner example" width="400" height="200" class="object-cover rounded-[6px] mb-[6px]">
`,
    },
    {
      message: "Jira ticket status",
      response: `🤖 Jira Agent is thinking...

Issues logged for follow-up in the compliance remediation queue. Use the links below to track status and view remediation guidelines:

| Asset           | Jira Ticket                                                                 | Issue Summary                         |
|-----------------|---------------------------------------------------------------------------|----------------------------------------|
| banner_02.png   | <a href="https://techlabsglobal.atlassian.net/browse/INS-1" target="_blank">🔗 JIRA-INS-1</a> | Missing disclaimers, unqualified claim |
| video_ad_02.mp4 | <a href="https://techlabsglobal.atlassian.net/browse/INS-2" target="_blank">🔗 JIRA-INS-2</a> | Misleading chart without baseline      |
`,
    },
    {
      message: "Compliance review completion",
      response: `🤖 Report Agent is thinking...

✅ Compliance review successfully completed.

Summary:
Out of the 4 submitted assets:

• 2 are fully compliant  
• 2 have been flagged for regulatory violations and logged for remediation

All relevant issues have been raised in Jira and assigned to the content compliance team for action.  
Please monitor the ticket links above for updates, or request assistance if escalation is needed.`,
    },
  ])
);
