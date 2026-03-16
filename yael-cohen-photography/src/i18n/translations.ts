// ─────────────────────────────────────────────────────────────────────────────
// Yael Cohen Photography — Translations
// All visible strings in the application live here.
// No string literals appear in .astro, layout, or component files.
// ─────────────────────────────────────────────────────────────────────────────

export type Locale = 'he' | 'en';

export type TranslationKey =
  // Navigation
  | 'nav.home'
  | 'nav.portfolio'
  | 'nav.about'
  | 'nav.contact'
  | 'nav.langToggle.he'
  | 'nav.langToggle.en'
  // Site identity
  | 'site.photographerNameHe'
  | 'site.photographerNameEn'
  | 'site.taglineHe'
  | 'site.taglineEn'
  | 'site.location'
  // Home page
  | 'home.hero.cta'
  | 'home.about.heading'
  | 'home.about.readMore'
  | 'home.testimonials.heading'
  // Portfolio page
  | 'portfolio.heading'
  | 'portfolio.filter.all'
  | 'portfolio.category.portraits'
  | 'portfolio.category.newborn'
  | 'portfolio.category.editorial'
  | 'portfolio.category.landscapes'
  | 'portfolio.lightbox.close'
  | 'portfolio.lightbox.prev'
  | 'portfolio.lightbox.next'
  | 'portfolio.lightbox.ariaLabel'
  // About page
  | 'about.heading'
  | 'about.services.heading'
  // Contact page
  | 'contact.heading'
  | 'contact.form.name'
  | 'contact.form.namePlaceholder'
  | 'contact.form.email'
  | 'contact.form.emailPlaceholder'
  | 'contact.form.eventType'
  | 'contact.form.eventType.portraits'
  | 'contact.form.eventType.newborn'
  | 'contact.form.eventType.editorial'
  | 'contact.form.eventType.landscapes'
  | 'contact.form.eventType.other'
  | 'contact.form.message'
  | 'contact.form.messagePlaceholder'
  | 'contact.form.submit'
  | 'contact.form.submitLoading'
  | 'contact.form.success'
  | 'contact.form.error'
  | 'contact.whatsapp.label'
  // Footer
  | 'footer.copyright'
  | 'footer.instagram.aria'
  | 'footer.facebook.aria';

type Translations = Record<Locale, Record<TranslationKey, string>>;

export const translations: Translations = {
  he: {
    // ── Navigation ──────────────────────────────────────────────────────────
    'nav.home': 'בית',
    'nav.portfolio': 'פורטפוליו',
    'nav.about': 'אודות',
    'nav.contact': 'צור קשר',
    'nav.langToggle.he': 'עב',
    'nav.langToggle.en': 'EN',

    // ── Site Identity ────────────────────────────────────────────────────────
    'site.photographerNameHe': 'יעל כהן',
    'site.photographerNameEn': 'Yael Cohen',
    'site.taglineHe': 'אור. רגע. זיכרון.',
    'site.taglineEn': 'Light. Moment. Memory.',
    'site.location': 'תל אביב, ישראל',

    // ── Home Page ────────────────────────────────────────────────────────────
    'home.hero.cta': 'גלו את העבודות',
    'home.about.heading': 'על יעל',
    'home.about.readMore': 'קראו עוד',
    'home.testimonials.heading': 'מה אומרים הלקוחות',

    // ── Portfolio Page ───────────────────────────────────────────────────────
    'portfolio.heading': 'פורטפוליו',
    'portfolio.filter.all': 'הכל',
    'portfolio.category.portraits': 'פורטרטים',
    'portfolio.category.newborn': 'ניובורן ומשפחה',
    'portfolio.category.editorial': 'אדיטוריאל',
    'portfolio.category.landscapes': 'נופים',
    'portfolio.lightbox.close': 'סגור',
    'portfolio.lightbox.prev': 'הקודם',
    'portfolio.lightbox.next': 'הבא',
    'portfolio.lightbox.ariaLabel': 'תצוגת תמונה מוגדלת',

    // ── About Page ───────────────────────────────────────────────────────────
    'about.heading': 'אודות',
    'about.services.heading': 'תחומי צילום',

    // ── Contact Page ─────────────────────────────────────────────────────────
    'contact.heading': 'צרו קשר',
    'contact.form.name': 'שם מלא',
    'contact.form.namePlaceholder': 'הכניסו את שמכם המלא',
    'contact.form.email': 'כתובת דוא"ל',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.eventType': 'סוג הצילום',
    'contact.form.eventType.portraits': 'פורטרטים',
    'contact.form.eventType.newborn': 'ניובורן ומשפחה',
    'contact.form.eventType.editorial': 'אדיטוריאל ואופנה',
    'contact.form.eventType.landscapes': 'נופים ואמנות',
    'contact.form.eventType.other': 'אחר',
    'contact.form.message': 'הודעה',
    'contact.form.messagePlaceholder': 'ספרו לי על הצילום שחלמתם עליו — התאריך, המיקום, האווירה שמחפשים',
    'contact.form.submit': 'שלחו פנייה',
    'contact.form.submitLoading': 'שולח...',
    'contact.form.success': 'תודה! פנייתכם התקבלה. אחזור אליכם תוך 24 שעות.',
    'contact.form.error': 'אירעה שגיאה בשליחת הפנייה. אנא נסו שנית או פנו דרך WhatsApp.',
    'contact.whatsapp.label': 'שלחו הודעה ב-WhatsApp',

    // ── Footer ───────────────────────────────────────────────────────────────
    'footer.copyright': '© {year} יעל כהן צלמת. כל הזכויות שמורות.',
    'footer.instagram.aria': 'עמוד האינסטגרם של יעל כהן',
    'footer.facebook.aria': 'עמוד הפייסבוק של יעל כהן',
  },

  en: {
    // ── Navigation ──────────────────────────────────────────────────────────
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.langToggle.he': 'עב',
    'nav.langToggle.en': 'EN',

    // ── Site Identity ────────────────────────────────────────────────────────
    'site.photographerNameHe': 'יעל כהן',
    'site.photographerNameEn': 'Yael Cohen',
    'site.taglineHe': 'אור. רגע. זיכרון.',
    'site.taglineEn': 'Light. Moment. Memory.',
    'site.location': 'Tel Aviv, Israel',

    // ── Home Page ────────────────────────────────────────────────────────────
    'home.hero.cta': 'Explore the Work',
    'home.about.heading': 'About Yael',
    'home.about.readMore': 'Read More',
    'home.testimonials.heading': 'What Clients Say',

    // ── Portfolio Page ───────────────────────────────────────────────────────
    'portfolio.heading': 'Portfolio',
    'portfolio.filter.all': 'All',
    'portfolio.category.portraits': 'Portraits',
    'portfolio.category.newborn': 'Newborn & Family',
    'portfolio.category.editorial': 'Editorial',
    'portfolio.category.landscapes': 'Landscapes',
    'portfolio.lightbox.close': 'Close',
    'portfolio.lightbox.prev': 'Previous',
    'portfolio.lightbox.next': 'Next',
    'portfolio.lightbox.ariaLabel': 'Full-size image viewer',

    // ── About Page ───────────────────────────────────────────────────────────
    'about.heading': 'About',
    'about.services.heading': 'Areas of Practice',

    // ── Contact Page ─────────────────────────────────────────────────────────
    'contact.heading': 'Get in Touch',
    'contact.form.name': 'Full Name',
    'contact.form.namePlaceholder': 'Enter your full name',
    'contact.form.email': 'Email Address',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.eventType': 'Type of Shoot',
    'contact.form.eventType.portraits': 'Portraits',
    'contact.form.eventType.newborn': 'Newborn & Family',
    'contact.form.eventType.editorial': 'Editorial & Fashion',
    'contact.form.eventType.landscapes': 'Landscapes & Fine Art',
    'contact.form.eventType.other': 'Other',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Tell me about the shoot you have in mind — the date, location, and the mood you are looking for',
    'contact.form.submit': 'Send Inquiry',
    'contact.form.submitLoading': 'Sending…',
    'contact.form.success': 'Thank you! Your inquiry has been received. I will be in touch within 24 hours.',
    'contact.form.error': 'Something went wrong. Please try again or reach out via WhatsApp.',
    'contact.whatsapp.label': 'Send a WhatsApp Message',

    // ── Footer ───────────────────────────────────────────────────────────────
    'footer.copyright': '© {year} Yael Cohen Photography. All rights reserved.',
    'footer.instagram.aria': 'Yael Cohen on Instagram',
    'footer.facebook.aria': 'Yael Cohen on Facebook',
  },
};
