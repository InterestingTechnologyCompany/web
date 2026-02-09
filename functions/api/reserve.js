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
            lang: lang || 'ko',
        }));

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
