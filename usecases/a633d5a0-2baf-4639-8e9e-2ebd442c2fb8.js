localStorage.setItem(
  "demo_a633d5a0-2baf-4639-8e9e-2ebd442c2fb8",
  JSON.stringify([
    {
      message:
        "Analyze past transactions for 5 customers to build & execute a plan for July that boosts sales and retains customers.",
      response: "",
      apiCalls: [
        {
          name: "sendEmail",
          trigger: "before",
          buttonId: "email",
          response: "Human approval initiated Successfully",
          method: "POST",
          url: "https://kaya-mock-api-938786674786.us-central1.run.app/health-first/email",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          bodyTemplate:
            '{"subject":"Websocket Initiated","to":["kasunib@kayatech.com"],"content":"Websocket call initiated!"}',
 
          waitingConfirmation: true,
 
          // Message to display during waiting state
          waitingMessage: "Planner Agent Thinking…",
 
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
          confirmationMessage: "Plan agent response with plan",
        },
      ],
    },
    {
      message: "Plan agent response with plan",
      response: `🤖 <strong>Planner Agent Thinking...</strong>\n\n
<strong>Goal - </strong>Design and propose a targeted July engagement strategy for five customers—selected based on transaction history and behavioral patterns—to improve visit frequency, re-engage lapsed patrons, and increase average transaction value through personalized, event-driven promotions.
 
<strong>Key Performance Indicators (KPIs):</strong>
<ul  style="margin-top:0;">
  <li>Achieve ≥3 customer responses (booking, voucher redemption, or loyalty join)</li>
  <li>Re-engage at least one lapsed customer</li>
  <li>Drive ≥10% increase in average July spend for two active diners</li>
  <li>Collect data for re-trigger opportunities and customer preferences</li>
</ul>
 
 
<strong>Plan for Execution</strong>
 
| Step | Action                                                              | Reasoning                                                                                  |
|------|---------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| 1    | Ingest 6-month transaction data for a sample set of 5 customers     | Identify behavioral patterns: frequency, spend, preferences                                |
| 2    | Segment customers by visit pattern & interest                       | Tailor messaging and offers more effectively                                               |
| 3    | Detect event opportunities (e.g. birthdays)                         | Leverage time-sensitive engagement moments                                                 |
| 4    | Create personalized, high-relevance offers                          | Targeted promotions improve open and conversion rates                                      |
| 5    | Design content tone by customer type                                 | Ensure offers feel appropriate and curated                                                 |
| 6    | Submit all offer content for Human-In-The-Loop (HITL) approval      | Allow restaurant manager to review and customize before dispatch                           |
| 7    | Set conditions for reservation/response tracking                    | Enable re-triggerable action steps based on engagement                                     |
 
---
 
<strong>Plan Execution started... </strong>
 
---
 
<strong>Selected Customers & Behavioral Profiles</strong>
 
| Customer ID | Name          | Behavior Profile                               | Reason for Selection               |
|-------------|---------------|------------------------------------------------|-------------------------------------|
| C001        | Alex Morgan   | Regular diner, avg. spend £55, visits 3x/month | Ideal for upsell into premium menu  |
| C002        | Meera Shah    | Vegan diner, visited twice in last 60 days     | Target for special menu promotion   |
| C003        | Luis Gomez    | Lapsed customer, last visit 4 months ago       | Re-engagement opportunity           |
| C004        | Tanya Williams| Birthday on July 18, family diner              | Event-triggered campaign            |
| C005        | Omar Khalid   | Lunch-only customer, visits 1–2x/week          | Loyalty offer candidate             |
 
---
 
<strong>Personalized Offers for Approval</strong>
 
| Customer      | Offer Title                                | Description                                                              | Delivery Method |
|----------------|--------------------------------------------|--------------------------------------------------------------------------|-----------------|
| Alex Morgan   | “Chef’s Choice: Your July Preview Table”   | Invite to pre-launch summer prix-fixe menu, 2 free wine pairings         | WhatsApp & Email         |
| Meera Shah    | “Vegan Tasting Experience – Your Invite Inside” | New 5-course vegan menu with early access on July 8–12               | Email           |
| Luis Gomez    | “We Miss You, Luis – Come Back with 25% Off” | Limited-time comeback voucher valid weekdays in July                  | SMS & Email           |
| Tanya Williams| “Tanya’s Birthday Bash – Cake’s On Us”   | 20% off group table + complimentary dessert platter                     | WhatsApp           |
| Omar Khalid   | “Lunchtime Loyalty – Your 5th Meal is Free” | Trackable lunch loyalty stamp card + QR-based redemption                | SMS           |
 
---
 
<details class="w-full">
<summary><strong>Full Content Preview (For HITL Approval)</strong></summary>
 
## Alex Morgan – WhatsApp & Email  
 
**Message:**  
"Hi Alex!  
You’ve been one of our most loyal guests this year—thank you!  
We’d love to invite you to preview our new summer chef’s tasting menu launching this month.  
Reserve a table before July 14 and enjoy 2 complimentary wine pairings with your meal.  
Want us to hold your favorite table?"  
 
[Reserve Now]  
 
---  
 
## Meera Shah – Email  
 
**Subject:** Early Access to Our Vegan Tasting Event  
**Body:**  
Hi Meera,  
We know you love thoughtful, plant-based cuisine—and we’ve been working on something special.  
Join us between July 8–12 for an exclusive preview of our 5-course vegan tasting menu.  
Reserve now and get a complimentary mocktail of your choice.  
 
Let us know if you'd like to book your spot early!  
[Book Tasting Event]  
 
---  
 
## Luis Gomez – Email & SMS  
 
**SMS:**  
Luis! We've missed you. Come back in July with 25% off your meal.  
Tap here to claim your voucher → [Voucher Link]  
 
**Email Subject:** We Miss You, Luis – Dine With Us & Save 25%  
**Body:**  
Hey Luis,  
It’s been a while since we had the pleasure of serving you.  
To welcome you back, we’re offering 25% off your next visit—valid any weekday this July.  
We’d love to see you again. Ready to claim it?  
 
[Activate Your Offer]  
 
---  
 
## Tanya Williams – WhatsApp  
 
**Subject:** Celebrate Your Birthday With Us, Tanya!  
**Body:**  
Happy early birthday, Tanya!  
We’d love to help you celebrate with your loved ones.  
Enjoy 20% off your birthday dinner and a complimentary dessert platter for your table.  
Your birthday falls on July 18—want us to block a table for that weekend?  
 
[Book Your Birthday Table]  
 
---  
 
## Omar Khalid – SMS  
 
**Message:**  
Omar, thanks for being a regular at lunch!  
We’ve added you to our loyalty track—get your 5th lunch FREE in July.  
Scan this QR at checkout: [QR Link]  
Let us know if you want the loyalty tracker emailed too.  
 
</details>
 
---
 
<strong>Campaign Execution – Status Summary (Pending Approval)</strong>
 
| Phase             | Description                       | Status   |
|-------------------|-----------------------------------|----------|
| Customer Analysis | Behavioral segmentation completed | ✅ Done  |
| Offer Generation  | Personalized promotions crafted   | ✅ Done  |
| Message Drafting  | Full message content prepared     | ✅ Done  |
| Human Review  | Awaiting approval for content dispatch     | 🕒 Pending  |
| Response Triggers  | Configured: booking, voucher, loyalty     | 🕒 Pending  |
`,
      apiCalls: [
        {
          name: "sendEmail",
          trigger: "after",
          buttonId: "email",
          response: "Human approval initiated Successfully done",
          method: "POST",
          url: "https://kaya-mock-api-938786674786.us-central1.run.app/health-first/email",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          bodyTemplate: `{
  "subject": "Approval Required: Personalized July Campaign Offers for 5 Customers",
  "to": ["kasunib@kayatech.com"],
  "content": "<p>Hello James,</p><p>We’ve completed a targeted analysis of five high-value customers based on their transaction history and engagement patterns. Below are the personalized offer campaigns we propose to send as part of the July Sales Growth initiative.</p><p>Each message has been drafted for tone, content fit, and engagement intent. These messages are currently in <strong>Pending Approval</strong> status and will be dispatched only after your review.</p><h3>Offer Summary Table</h3><table border='1' cellspacing='0' cellpadding='6'><tr><th>Customer</th><th>Segment</th><th>Offer Summary</th><th>Channel(s)</th></tr><tr><td>Alex Morgan</td><td>Regular High-Spender</td><td>Invite to summer tasting menu + 2 wine pairings</td><td>WhatsApp & Email</td></tr><tr><td>Meera Shah</td><td>Vegan Enthusiast</td><td>Access to 5-course vegan tasting + mocktail</td><td>Email</td></tr><tr><td>Luis Gomez</td><td>Lapsed Guest</td><td>25% off comeback voucher</td><td>SMS & Email</td></tr><tr><td>Tanya Williams</td><td>Birthday (July 18)</td><td>20% off birthday meal + dessert platter</td><td>WhatsApp</td></tr><tr><td>Omar Khalid</td><td>Lunch Regular</td><td>Loyalty program – 5th meal free</td><td>SMS</td></tr></table><br><h3>Message Preview – For Review</h3><p><strong>1. Alex Morgan – WhatsApp & Email</strong><br>Hi Alex! You’ve been one of our most loyal guests this year—thank you!<br>We’d love to invite you to preview our new summer chef’s tasting menu launching this month.<br>Reserve a table before July 14 and enjoy 2 complimentary wine pairings with your meal.<br>Want us to hold your favorite table?<br><strong>Reserve Now</strong></p><p><strong>2. Meera Shah – Email</strong><br><strong>Subject:</strong> Early Access to Our Vegan Tasting Event<br><strong>Body:</strong><br>Hi Meera,<br>Join us between July 8–12 for an exclusive preview of our 5-course vegan tasting menu.<br>Reserve now and get a complimentary mocktail of your choice.<br><strong>[Book Tasting Event]</strong></p><p><strong>3. Luis Gomez – SMS & Email</strong><br><strong>SMS:</strong><br>Luis! We\'ve missed you. Come back in July with 25% off your meal. Tap here to claim your voucher → [Voucher Link]<br><strong>Email Subject:</strong> We Miss You, Luis – Dine With Us & Save 25%<br><strong>Body:</strong><br>Hey Luis,<br>It’s been a while since we had the pleasure of serving you.<br>To welcome you back, we’re offering 25% off your next visit—valid any weekday this July.<br><strong>[Activate Your Offer]</strong></p><p><strong>4. Tanya Williams – WhatsApp</strong><br><strong>Subject:</strong> Celebrate Your Birthday With Us, Tanya!<br><strong>Body:</strong><br>Happy early birthday, Tanya!<br>Enjoy 20% off your birthday dinner and a complimentary dessert platter for your table.<br>Your birthday falls on July 18—want us to block a table for that weekend?<br><strong>[Book Your Birthday Table]</strong></p><p><strong>5. Omar Khalid – SMS</strong><br>Omar, thanks for being a regular at lunch!<br>We’ve added you to our loyalty tracker—get your 5th lunch FREE in July.<br>Scan this QR at checkout: [QR Link]</p><h3>Next Steps</h3><p>Please review and approve or suggest modifications to the offers. You may reply to this email with your approval or proposed changes.</p><p>Once approved, the messages will be queued for dispatch, and customer engagement tracking will begin.</p><div style='margin-top:8px;'><button style='background-color: #3B82F6; color: white; padding: 8px 16px; border: none; border-radius: 4px; margin-right: 8px; cursor: pointer;'>Approve</button><button style='border: 1px solid #D1D5DB; color: #374151; background-color: white; padding: 8px 16px; border-radius: 4px; cursor: pointer;'>Not Approved</button></div><p>Thank you,<br>KAYA AI Platform</p>"
}`,
          waitingConfirmation: true,
 
          // Message to display during waiting state
          waitingMessage: "Awaiting approval for content dispatch",
 
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
          confirmationMessage: "response completed",
        },
        {
          name: "messageDoctor",
          trigger: "before",
          buttonId: "message",
          response: "Message invoked successfully!",
          method: "POST",
          url: "https://kaya-mock-api-938786674786.us-central1.run.app/health-first/message",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          bodyTemplate: `{
  "to_number": "+13322097900",
  "from_number": "+12185629800",
  "body": "Hi Alex! You’ve been one of our most loyal guests this year—thank you!We’d love to invite you to preview our new summer chef’s tasting menu launching this month.Reserve a table before July 14 and enjoy 2 complimentary wine pairings with your meal.Want us to hold your favorite table?",
  "content": ""
}`,
        },
      ],
    },
    {
      message: "response completed",
      response: ``,
      apiCalls: [
        {
          name: "sendEmail",
          trigger: "before",
          buttonId: "email",
          response: "Executing actions through dispatch channels Successfully",
          method: "POST",
          url: "https://kaya-mock-api-938786674786.us-central1.run.app/health-first/email",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          bodyTemplate:
            '{"subject":"Websocket Initiated","to":["kasunib@kayatech.com"],"content":"Websocket call initiated!"}',
 
          waitingConfirmation: true,
 
          // Message to display during waiting state
          waitingMessage:
            "Approval received. Executing actions through dispatch channels.",
 
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
          confirmationMessage: "dummy_another_response",
        },
      ],
    },
    {
      message: "dummy_another_response",
      response: `
<strong>Offer Dispatch Summary</strong>
 
| Customer ID | Customer Name | Channel(s) | Message Snippet                                                                 | Dispatch Status |
|-------------|----------------|-------------|----------------------------------------------------------------------------------|-----------------|
| C001        | Alex Morgan    | WhatsApp & Email         | “Hi Alex! You’ve been one of our most loyal guests… wine pairings…”             | ✅ Sent         |
| C002        | Meera Shah     | Email       | “Hi Meera, Join us between July 8–12 for an exclusive vegan tasting…”          | ✅ Sent         |
| C003        | Luis Gomez     | SMS & Email       | “Luis! We've missed you. Come back with 25% off…”                               | ✅ Sent         |
| C004        | Tanya Williams | WhatsApp       | “Happy early birthday, Tanya! Enjoy 20% off + dessert platter…”                 | ✅ Sent         |
| C005        | Omar Khalid    | SMS         | “Omar, thanks for being a regular at lunch! Your 5th lunch is free…”            | ✅ Sent         |
`,
    },
    { message: "dummy_another_response", response: "" },
    {
      message: "What are your capabilities?",
      response: `
My goal is to help increase sales by engaging and reactivating customers. I can do this automatically based on data insights, or follow your specific instructions—your choice.
 
<strong>Examples:</strong>
<ul  style="margin-top:0;">
  <li>Analyze past transactions and grow July sales</li>
  <li>Create personalized campaigns for loyal customers</li>
  <li>Identify lapsed diners and re-engage them with targeted offers</li>
</ul>
 
---
 
<strong>Customer Segmentation & Targeting</strong>
 
<strong>I help you identify the right customer segments based on:</strong>
<ul  style="margin-top:0;">
  <li>Visit frequency and spend history</li>
  <li>Loyalty tier</li>
  <li>Special event triggers (e.g., birthdays, anniversaries)</li>
  <li>Preference signals (e.g., vegan, group dining, lunch-only)</li>
</ul>
 
---
 
<strong>Personalized Content Generation</strong>
 
<strong>I can create customized outreach content, personalized email, WhatsApp, or SMS messages tailored to:</strong>
<ul  style="margin-top:0;">
  <li>Customer profiles and behavioral traits</li>
  <li>Time-sensitive offers</li>
  <li>Channel-specific tone (Email, WhatsApp, SMS)</li>
  <li>Promotional campaign objectives and seasonal events</li>
</ul>
 
---
 
<strong>Offer Dispatch & Campaign Automation</strong>
 
<strong>Once approved, I’ll:</strong>
<ul  style="margin-top:0;">
  <li>Dispatch content across preferred channels</li>
  <li>Monitor engagement (open, click, claim)</li>
  <li>Trigger follow-up steps (e.g., reservations, reminders or loyalty actions)</li>
</ul>
 
---
 
<strong>Human-in-the-Loop Control</strong>
<ul  style="margin-top:0;">
  <li>Every action I suggest can be routed for your review.</li>
  <li>You stay in control—approve, edit, or delay before I execute.</li>
</ul>
 
---
 
<strong>Tracking & Feedback Loops</strong>
<strong>Post-dispatch, I track:</strong>
<ul  style="margin-top:0;">
  <li>Who viewed or claimed offers</li>
  <li>Who made reservations</li>
  <li>Who needs a reminder</li>
</ul>
 
Then, I adjust actions accordingly.
        `,
    },
    {
      message:
        "Provide the status of the recent offer dispatched customer-wise.",
      response: `
<strong>Offer Claim Status – Customer-wise Summary</strong>  
<strong>Tracking Window:</strong> Last 72 hours  
 
| Customer Name  | Offer Sent                              | Dispatched Channel | Action Category    | Action Status       | Expected Follow-Up                                                                          |
|----------------|-----------------------------------------|--------------------|--------------------|---------------------|---------------------------------------------------------------------------------------------|
| Alex Morgan    | Summer tasting menu + wine pairings     | WhatsApp & Email           | Reservation        | Reservation pending | Send automated reminder with preferred date options                                         |
| Meera Shah     | Vegan tasting menu + mocktail           | Email              | Reservation        | Reservation pending | Send time-limited RSVP offer with lighter subject line                                      |
| Luis Gomez     | Comeback 25% off voucher                | SMS & Email        | Claimable Discount | Discount unclaimed  | Send reminder with redemption deadline and in-store locations                               |
| Tanya Williams | Birthday dinner + dessert platter       | WhatsApp              | Reservation        | Reservation pending | Follow-up with birthday countdown and group seating offer                                   |
| Omar Khalid    | Lunch loyalty offer                     | SMS                | Free Lunch         | Offer unclaimed     | Resend loyalty QR with usage steps; notify of reward tier                                   |
 
        `,
    },
    {
      message: "Provide the status of the recent offer dispatched.",
      response: `
<strong>Offer Claim Status – Customer-wise Summary</strong>  
<strong>Tracking Window:</strong> Last 72 hours  
 
| Customer Name  | Offer Sent                              | Dispatched Channel | Action Category    | Action Status       | Expected Follow-Up                                                                          |
|----------------|-----------------------------------------|--------------------|--------------------|---------------------|---------------------------------------------------------------------------------------------|
| Alex Morgan    | Summer tasting menu + wine pairings     | WhatsApp & Email           | Reservation        | Reservation Done | -                                         |
| Meera Shah     | Vegan tasting menu + mocktail           | Email              | Reservation        | Reservation pending | Send time-limited RSVP offer with lighter subject line                                      |
| Luis Gomez     | Comeback 25% off voucher                | SMS & Email        | Claimable Discount | Discount unclaimed  | Send reminder with redemption deadline and in-store locations                               |
| Tanya Williams | Birthday dinner + dessert platter       | WhatsApp              | Reservation        | Reservation pending | Follow-up with birthday countdown and group seating offer                                   |
| Omar Khalid    | Lunch loyalty offer                     | SMS                | Free Lunch         | Offer unclaimed     | Resend loyalty QR with usage steps; notify of reward tier                                   |
 
        `,
    },
  ])
);
