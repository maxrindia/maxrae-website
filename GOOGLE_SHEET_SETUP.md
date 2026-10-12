# Google Sheet Setup

## Step 1 — Create Google Sheet
- Go to sheets.google.com
- Create new sheet named "MaxR Leads"
- Add these headers in Row 1:
  Timestamp | Name | Email | Mobile | Service | Message | Source

## Step 2 — Create Apps Script
- In the Google Sheet: Extensions → Apps Script
- Paste this code:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    data.timestamp,
    data.name,
    data.email,
    data.mobile,
    data.service,
    data.message,
    data.source
  ]);
  return ContentService
    .createTextOutput(JSON.stringify({status:"ok"}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Step 3 — Deploy
- Click Deploy → New Deployment
- Type: Web App
- Execute as: Me
- Who has access: Anyone
- Copy the deployment URL

### Active Deployment
- **Web App URL:**
  `https://script.google.com/macros/s/AKfycbzNv7oaosVQ2kh9wkIXPNLiGeCg-eeKFxgJv9uJ_4a2mG4qVexS-q4Hlzyi4mNHTIgTrg/exec`
- **Deployment ID:**
  `AKfycbzNv7oaosVQ2kh9wkIXPNLiGeCg-eeKFxgJv9uJ_4a2mG4qVexS-q4Hlzyi4mNHTIgTrg`

Connected and active in:
- `src/components/ChatBot.jsx`
- `src/pages/ContactPage.jsx`
- `src/components/ContactModal.jsx`
