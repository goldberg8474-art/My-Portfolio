import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const ALLOWED_EVENT_TYPES = [
  'portraits',
  'newborn',
  'editorial',
  'landscapes',
  'other',
] as const;

type EventType = typeof ALLOWED_EVENT_TYPES[number];

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isAllowedEventType(value: string): value is EventType {
  return (ALLOWED_EVENT_TYPES as readonly string[]).includes(value);
}

function formatTimestamp(): string {
  return new Date().toLocaleString('en-GB', {
    timeZone: 'Asia/Jerusalem',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

function buildHtmlEmail(
  name: string,
  email: string,
  eventType: string,
  message: string,
  locale: string,
  timestamp: string
): string {
  const isHebrew = locale === 'he';
  const langLabel     = isHebrew ? 'עברית' : 'English';
  const nameLabel     = isHebrew ? 'שם' : 'Name';
  const emailLabel    = isHebrew ? 'דוא"ל' : 'Email';
  const eventLabel    = isHebrew ? 'סוג הצילום' : 'Type of Shoot';
  const messageLabel  = isHebrew ? 'הודעה' : 'Message';
  const timeLabel     = isHebrew ? 'זמן שליחה' : 'Submitted';
  const dir           = isHebrew ? 'rtl' : 'ltr';

  return `<!DOCTYPE html>
<html lang="${locale}" dir="${dir}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New Inquiry — Yael Cohen Photography</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#f0ece4;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#0a0a0a;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;width:100%;background-color:#111111;border:1px solid #2a2a2a;border-radius:2px;">

          <!-- Header -->
          <tr>
            <td style="padding:40px 40px 24px;border-bottom:1px solid #2a2a2a;">
              <p style="margin:0;font-size:28px;font-weight:300;color:#f0ece4;letter-spacing:0.02em;">יעל כהן · Yael Cohen</p>
              <p style="margin:8px 0 0;font-size:13px;color:#c9a84c;letter-spacing:0.08em;text-transform:uppercase;">Photography · New Inquiry</p>
            </td>
          </tr>

          <!-- Language badge -->
          <tr>
            <td style="padding:24px 40px 0;">
              <span style="display:inline-block;padding:4px 12px;background-color:#1a1a1a;border:1px solid #2a2a2a;border-radius:2px;font-size:12px;color:#9e9a94;letter-spacing:0.06em;">${langLabel}</span>
            </td>
          </tr>

          <!-- Fields -->
          <tr>
            <td style="padding:24px 40px 8px;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">

                <tr>
                  <td style="padding-bottom:20px;">
                    <p style="margin:0 0 4px;font-size:11px;color:#9e9a94;letter-spacing:0.1em;text-transform:uppercase;">${nameLabel}</p>
                    <p style="margin:0;font-size:17px;color:#f0ece4;">${name}</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom:20px;">
                    <p style="margin:0 0 4px;font-size:11px;color:#9e9a94;letter-spacing:0.1em;text-transform:uppercase;">${emailLabel}</p>
                    <p style="margin:0;font-size:17px;color:#c9a84c;">
                      <a href="mailto:${email}" style="color:#c9a84c;text-decoration:none;">${email}</a>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom:20px;">
                    <p style="margin:0 0 4px;font-size:11px;color:#9e9a94;letter-spacing:0.1em;text-transform:uppercase;">${eventLabel}</p>
                    <p style="margin:0;font-size:17px;color:#f0ece4;">${eventType}</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom:20px;">
                    <p style="margin:0 0 8px;font-size:11px;color:#9e9a94;letter-spacing:0.1em;text-transform:uppercase;">${messageLabel}</p>
                    <p style="margin:0;font-size:16px;color:#f0ece4;line-height:1.7;white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:16px 40px 32px;border-top:1px solid #2a2a2a;">
              <p style="margin:0;font-size:12px;color:#9e9a94;">
                <span style="color:#2a2a2a;">—</span>
                ${timeLabel}: ${timestamp}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export const POST: APIRoute = async ({ request }) => {
  // ── Parse body ────────────────────────────────────────────────────────────
  let body: Record<string, unknown>;
  try {
    body = await request.json() as Record<string, unknown>;
  } catch {
    return new Response(
      JSON.stringify({ success: false, error: 'invalid_json' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const name      = typeof body.name      === 'string' ? body.name.trim()      : '';
  const email     = typeof body.email     === 'string' ? body.email.trim()     : '';
  const eventType = typeof body.eventType === 'string' ? body.eventType.trim() : '';
  const message   = typeof body.message   === 'string' ? body.message.trim()   : '';
  const locale    = typeof body.locale    === 'string' ? body.locale            : 'en';

  // ── Server-side validation ────────────────────────────────────────────────
  if (!name || !email || !eventType || !message) {
    return new Response(
      JSON.stringify({ success: false, error: 'validation_failed' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  if (!isValidEmail(email)) {
    return new Response(
      JSON.stringify({ success: false, error: 'validation_failed' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  if (!isAllowedEventType(eventType)) {
    return new Response(
      JSON.stringify({ success: false, error: 'validation_failed' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // ── Check API key ─────────────────────────────────────────────────────────
  const apiKey        = process.env.RESEND_API_KEY;
  const fromEmail     = process.env.RESEND_FROM_EMAIL;
  const recipientEmail = process.env.RESEND_RECIPIENT_EMAIL;

  if (!apiKey || !fromEmail || !recipientEmail) {
    return new Response(
      JSON.stringify({ success: false, error: 'server_configuration_error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // ── Build and send email ──────────────────────────────────────────────────
  const isHebrew  = locale === 'he';
  const subject   = isHebrew
    ? 'פנייה חדשה — יעל כהן צלמת'
    : 'New Inquiry — Yael Cohen Photography';
  const timestamp = formatTimestamp();
  const html      = buildHtmlEmail(name, email, eventType, message, locale, timestamp);

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from:    fromEmail,
      to:      recipientEmail,
      subject,
      html,
      replyTo: email,
    });

    if (error) {
      console.error('[contact] Resend API error:', error);
      return new Response(
        JSON.stringify({ success: false, error: 'send_failed' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'send_failed' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
