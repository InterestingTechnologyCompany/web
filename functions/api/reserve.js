export async function onRequestPost(context) {
    const { request, env } = context;

    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    try {
        const { email, source, lang } = await request.json();

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            return new Response(
                JSON.stringify({ ok: false, code: 'INVALID_EMAIL' }),
                { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
            );
        }

        const normalizedEmail = email.trim().toLowerCase();
        const userLang = lang || 'ko';

        // Check duplicate
        const existing = await env.RESERVATIONS.get(normalizedEmail);
        if (existing) {
            return new Response(
                JSON.stringify({ ok: true, code: 'ALREADY_REGISTERED' }),
                { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
            );
        }

        // Store in KV
        await env.RESERVATIONS.put(normalizedEmail, JSON.stringify({
            email: normalizedEmail,
            timestamp: new Date().toISOString(),
            source: source || 'unknown',
            lang: userLang,
        }));

        // Send confirmation email (non-blocking)
        if (env.RESEND_API_KEY) {
            context.waitUntil(sendConfirmationEmail(env.RESEND_API_KEY, normalizedEmail, userLang));
        }

        return new Response(
            JSON.stringify({ ok: true, code: 'SUCCESS' }),
            { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
        );
    } catch (e) {
        return new Response(
            JSON.stringify({ ok: false, code: 'SERVER_ERROR' }),
            { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
        );
    }
}

export async function onRequestOptions() {
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}

async function sendConfirmationEmail(apiKey, toEmail, lang) {
    const isKo = lang === 'ko';

    const subject = isKo
        ? 'Planty 사전 예약이 완료되었습니다!'
        : "You're on the Planty waitlist!";

    const html = buildEmailHtml(lang);

    try {
        await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Planty <noreply@planty.farm>',
                to: [toEmail],
                subject: subject,
                html: html,
            }),
        });
    } catch (e) {
        // Email failure should not break the reservation
        console.error('Email send failed:', e);
    }
}

function buildEmailHtml(lang) {
    const isKo = lang === 'ko';

    const t = isKo ? {
        preheader: 'Planty 사전 예약 확인',
        greeting: '반갑습니다!',
        title: '사전 예약이 완료되었습니다',
        desc: '당신만의 원격 텃밭, Planty에 관심을 가져주셔서 감사합니다.',
        highlight: '첫 가입 혜택',
        benefit1: '첫 작물 무료',
        benefit2: '배송비 1회 무료',
        nextTitle: '다음 단계는?',
        next1: '서비스 출시 시 가장 먼저 알려드립니다',
        next2: '얼리버드 혜택이 자동 적용됩니다',
        next3: '별도로 할 일은 없어요. 기다려주세요!',
        closing: '신선한 즐거움을 곧 만나보세요.',
        team: 'Planty 팀 드림',
        footer: '본 메일은 planty.farm 사전 예약을 통해 발송되었습니다.',
        unsubNote: '더 이상 수신을 원치 않으시면 이 메일에 회신해주세요.',
    } : {
        preheader: 'Planty Pre-order Confirmation',
        greeting: 'Welcome!',
        title: "You're on the list",
        desc: 'Thank you for your interest in Planty — your own remote garden.',
        highlight: 'Early Bird Benefits',
        benefit1: 'Free first crop',
        benefit2: 'Free shipping (once)',
        nextTitle: "What's next?",
        next1: "We'll notify you first when we launch",
        next2: 'Your early bird benefits will be applied automatically',
        next3: 'Nothing to do — just sit tight!',
        closing: "Fresh joy is on its way.",
        team: 'The Planty Team',
        footer: 'This email was sent because you pre-ordered at planty.farm.',
        unsubNote: "If you'd like to unsubscribe, simply reply to this email.",
    };

    return `<!DOCTYPE html>
<html lang="${lang}">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#FAFAF6;font-family:'Helvetica Neue',Arial,sans-serif;color:#1a1a1a;">
<span style="display:none;font-size:1px;color:#FAFAF6;max-height:0;overflow:hidden;">${t.preheader}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAFAF6;">
<tr><td align="center" style="padding:40px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

<!-- Header -->
<tr><td style="background:linear-gradient(135deg,#1B5E20 0%,#2E7D32 50%,#388E3C 100%);padding:48px 40px;text-align:center;">
    <div style="font-size:32px;margin-bottom:12px;">&#127793;</div>
    <h1 style="margin:0;font-size:28px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">Planty</h1>
    <p style="margin:8px 0 0;font-size:14px;color:#C8E6C9;">${t.preheader}</p>
</td></tr>

<!-- Body -->
<tr><td style="padding:40px;">
    <p style="margin:0 0 8px;font-size:15px;color:#66BB6A;font-weight:600;">${t.greeting}</p>
    <h2 style="margin:0 0 16px;font-size:24px;font-weight:700;color:#1B5E20;">${t.title}</h2>
    <p style="margin:0 0 32px;font-size:15px;line-height:1.7;color:#555;">${t.desc}</p>

    <!-- Benefits Card -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#E8F5E9;border-radius:16px;margin-bottom:32px;">
    <tr><td style="padding:24px 28px;">
        <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:#2E7D32;text-transform:uppercase;letter-spacing:1px;">${t.highlight}</p>
        <table role="presentation" cellpadding="0" cellspacing="0">
        <tr>
            <td style="padding:4px 0;font-size:15px;color:#1B5E20;">&#10003;&nbsp;&nbsp;${t.benefit1}</td>
        </tr>
        <tr>
            <td style="padding:4px 0;font-size:15px;color:#1B5E20;">&#10003;&nbsp;&nbsp;${t.benefit2}</td>
        </tr>
        </table>
    </td></tr>
    </table>

    <!-- Next Steps -->
    <h3 style="margin:0 0 12px;font-size:16px;font-weight:700;color:#333;">${t.nextTitle}</h3>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
    <tr><td style="padding:6px 0;font-size:14px;line-height:1.6;color:#555;">1. ${t.next1}</td></tr>
    <tr><td style="padding:6px 0;font-size:14px;line-height:1.6;color:#555;">2. ${t.next2}</td></tr>
    <tr><td style="padding:6px 0;font-size:14px;line-height:1.6;color:#555;">3. ${t.next3}</td></tr>
    </table>

    <!-- Closing -->
    <div style="border-top:1px solid #E8E4C9;padding-top:24px;">
        <p style="margin:0 0 4px;font-size:15px;color:#555;">${t.closing}</p>
        <p style="margin:0;font-size:15px;font-weight:600;color:#2E7D32;">${t.team}</p>
    </div>
</td></tr>

<!-- Footer -->
<tr><td style="background:#F5F5DC;padding:24px 40px;text-align:center;border-top:1px solid #E8E4C9;">
    <p style="margin:0 0 4px;font-size:12px;color:#8D6E63;">${t.footer}</p>
    <p style="margin:0;font-size:11px;color:#A1887F;">${t.unsubNote}</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}
