/* Planty i18n - Internationalization System */

(function() {
    'use strict';

    const STORAGE_KEY = 'planty-lang';
    const DEFAULT_LANG = 'ko';
    const SUPPORTED_LANGS = ['ko', 'en'];

    // Get user's preferred language
    function detectLanguage() {
        // 1. Check localStorage for saved preference
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && SUPPORTED_LANGS.includes(saved)) {
            return saved;
        }

        // 2. Check browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang) {
            const langCode = browserLang.split('-')[0].toLowerCase();
            if (SUPPORTED_LANGS.includes(langCode)) {
                return langCode;
            }
        }

        // 3. Default to Korean
        return DEFAULT_LANG;
    }

    // Save language preference
    function setLanguage(lang) {
        if (!SUPPORTED_LANGS.includes(lang)) {
            console.warn('Unsupported language:', lang);
            return;
        }
        localStorage.setItem(STORAGE_KEY, lang);
        applyTranslations(lang);
        updateLangToggle(lang);
        document.documentElement.lang = lang;
    }

    // Get current language
    function getLanguage() {
        return localStorage.getItem(STORAGE_KEY) || detectLanguage();
    }

    // Apply translations to all elements with data-i18n attribute
    function applyTranslations(lang) {
        if (typeof window.translations === 'undefined') {
            console.warn('Translations not loaded');
            return;
        }

        const t = window.translations[lang];
        if (!t) {
            console.warn('Translations not found for:', lang);
            return;
        }

        // Update elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            const key = el.getAttribute('data-i18n');
            const translation = getNestedValue(t, key);
            if (translation !== undefined) {
                el.textContent = translation;
            }
        });

        // Update elements with data-i18n-placeholder attribute
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
            const key = el.getAttribute('data-i18n-placeholder');
            const translation = getNestedValue(t, key);
            if (translation !== undefined) {
                el.placeholder = translation;
            }
        });

        // Update elements with data-i18n-html attribute (for HTML content)
        document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
            const key = el.getAttribute('data-i18n-html');
            const translation = getNestedValue(t, key);
            if (translation !== undefined) {
                el.innerHTML = translation;
            }
        });

        // Update meta tags
        updateMetaTags(t);
    }

    // Get nested object value by dot notation (e.g., "nav.home")
    function getNestedValue(obj, path) {
        return path.split('.').reduce(function(acc, part) {
            return acc && acc[part];
        }, obj);
    }

    // Update meta tags for SEO
    function updateMetaTags(t) {
        const pageKey = getPageKey();
        const meta = t.meta && t.meta[pageKey];

        if (meta) {
            // Update title
            if (meta.title) {
                document.title = meta.title;
            }

            // Update description
            const descMeta = document.querySelector('meta[name="description"]');
            if (descMeta && meta.description) {
                descMeta.content = meta.description;
            }

            // Update OG tags
            const ogTitle = document.querySelector('meta[property="og:title"]');
            if (ogTitle && meta.title) {
                ogTitle.content = meta.title;
            }

            const ogDesc = document.querySelector('meta[property="og:description"]');
            if (ogDesc && meta.description) {
                ogDesc.content = meta.description;
            }
        }
    }

    // Get current page key from filename
    function getPageKey() {
        const path = window.location.pathname;
        const filename = path.split('/').pop() || 'index.html';
        return filename.replace('.html', '') || 'index';
    }

    // Update language toggle button state
    function updateLangToggle(lang) {
        const toggleBtns = document.querySelectorAll('[data-lang-toggle]');
        toggleBtns.forEach(function(btn) {
            const btnLang = btn.getAttribute('data-lang-toggle');
            if (btnLang === lang) {
                btn.classList.add('font-bold', 'text-planty-green-700');
                btn.classList.remove('text-gray-500');
            } else {
                btn.classList.remove('font-bold', 'text-planty-green-700');
                btn.classList.add('text-gray-500');
            }
        });
    }

    // Toggle language between ko and en
    function toggleLanguage() {
        const current = getLanguage();
        const next = current === 'ko' ? 'en' : 'ko';
        setLanguage(next);
    }

    // Initialize i18n on DOM ready
    function init() {
        const lang = detectLanguage();
        document.documentElement.lang = lang;

        // Wait for translations to load, then apply
        if (typeof window.translations !== 'undefined') {
            applyTranslations(lang);
            updateLangToggle(lang);
        } else {
            // Retry after a short delay if translations not loaded yet
            setTimeout(function() {
                applyTranslations(lang);
                updateLangToggle(lang);
            }, 100);
        }

        // Add click handlers to language toggle buttons
        document.addEventListener('click', function(e) {
            const toggle = e.target.closest('[data-lang-toggle]');
            if (toggle) {
                e.preventDefault();
                const lang = toggle.getAttribute('data-lang-toggle');
                setLanguage(lang);
            }
        });
    }

    // Expose API
    window.i18n = {
        init: init,
        setLanguage: setLanguage,
        getLanguage: getLanguage,
        toggleLanguage: toggleLanguage,
        applyTranslations: applyTranslations
    };

    // Auto-init on DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
