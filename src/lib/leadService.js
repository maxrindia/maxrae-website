/**
 * Lead Submission Service for MaxR Technology
 * Delivers contact form submissions to:
 * 1. Email notification directly to maxrindia29@gmail.com (via FormSubmit)
 * 2. Google Apps Script / Google Sheets backup
 */

export const NOTIFICATION_EMAIL = "maxrindia29@gmail.com";
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzNv7oaosVQ2kh9wkIXPNLiGeCg-eeKFxgJv9uJ_4a2mG4qVexS-q4Hlzyi4mNHTIgTrg/exec";

export async function sendLeadSubmission(data) {
  const {
    name = "",
    email = "",
    phone = "",
    mobile = "",
    company = "",
    service = "",
    message = "",
    source = "Website Form"
  } = data;

  const contactPhone = phone || mobile || "Not provided";
  const clientCompany = company || "Not specified";
  const requestedService = service || "General Inquiry";
  const timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" });

  // 1. Email Dispatch Payload for FormSubmit
  const emailPayload = {
    "Name": name,
    "Email": email,
    "Phone / WhatsApp": contactPhone,
    "Company": clientCompany,
    "Service": requestedService,
    "Message": message || "No message provided",
    "Source": source,
    "Timestamp (UAE Time)": timestamp,
    "_subject": `New Lead from MaxR Website: ${name} (${requestedService})`,
    "_replyto": email,
    "_template": "table",
    "_captcha": "false"
  };

  // Dispatch email notification and Google Sheet backup in parallel
  const emailPromise = fetch(`https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(emailPayload)
  }).then(async (res) => {
    try {
      const json = await res.json();
      return json;
    } catch {
      return { success: res.ok };
    }
  }).catch((err) => {
    console.warn("FormSubmit email notification warning:", err);
    return { success: false, error: err };
  });

  // 2. Google Sheet Backup Dispatch
  const sheetPromise = fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify({
      name,
      email,
      mobile: contactPhone,
      company: clientCompany,
      service: requestedService,
      message,
      source,
      timestamp: new Date().toISOString()
    }),
    mode: "no-cors"
  }).catch((err) => {
    console.warn("Google Sheet backup warning:", err);
  });

  // Wait for email dispatch
  const emailResult = await emailPromise;
  await sheetPromise;

  return emailResult;
}
