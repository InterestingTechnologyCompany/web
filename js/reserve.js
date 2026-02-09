/* Reserve Form Handler */
document.addEventListener('DOMContentLoaded', function() {
    var forms = document.querySelectorAll('.reserve-form');
    forms.forEach(function(form) {
        form.addEventListener('submit', handleReserve);
    });
});

function handleReserve(e) {
    e.preventDefault();
    var form = e.target;
    var input = form.querySelector('input[type="email"]');
    var btn = form.querySelector('button[type="submit"]');
    var msg = form.nextElementSibling;

    if (!msg || !msg.classList.contains('reserve-msg')) {
        msg = null;
    }

    var email = input.value.trim();

    // Client-side validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        showMsg(msg, getText('reserveInvalidEmail'), 'error');
        return;
    }

    // Loading state
    var originalText = btn.textContent;
    btn.disabled = true;
    btn.style.opacity = '0.6';

    var source = location.pathname.replace(/\//g, '').replace('.html', '') || 'index';
    var lang = (window.currentLang || document.documentElement.lang || 'ko');

    fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, source: source, lang: lang })
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
        if (data.ok) {
            if (data.code === 'ALREADY_REGISTERED') {
                showMsg(msg, getText('reserveDuplicate'), 'info');
            } else {
                showMsg(msg, getText('reserveSuccess'), 'success');
                input.value = '';
            }
        } else if (data.code === 'INVALID_EMAIL') {
            showMsg(msg, getText('reserveInvalidEmail'), 'error');
        } else {
            showMsg(msg, getText('reserveError'), 'error');
        }
    })
    .catch(function() {
        showMsg(msg, getText('reserveError'), 'error');
    })
    .finally(function() {
        btn.disabled = false;
        btn.style.opacity = '1';
    });
}

function showMsg(el, text, type) {
    if (!el) return;
    el.textContent = text;
    el.className = 'reserve-msg text-sm mt-3 text-center transition-opacity duration-300';
    if (type === 'success') el.classList.add('text-planty-green-700');
    else if (type === 'info') el.classList.add('text-blue-600');
    else el.classList.add('text-red-500');
    el.style.opacity = '1';

    if (type !== 'error') {
        setTimeout(function() { el.style.opacity = '0'; }, 5000);
    }
}

function getText(key) {
    var lang = (window.currentLang || document.documentElement.lang || 'ko');
    var t = window.translations;
    if (t && t[lang] && t[lang].common && t[lang].common[key]) {
        return t[lang].common[key];
    }
    // Fallback
    var fallback = {
        reserveSuccess: '사전 예약이 완료되었습니다!',
        reserveDuplicate: '이미 등록된 이메일입니다.',
        reserveInvalidEmail: '올바른 이메일을 입력해주세요.',
        reserveError: '오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
    };
    return fallback[key] || '';
}
