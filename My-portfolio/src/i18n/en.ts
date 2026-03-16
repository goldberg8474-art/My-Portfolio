// src/i18n/en.ts
// English translations. Every key defined in the Translation interface
// must be present here with a non-empty, production-quality value.

import type { Translation } from './index';

export const t: Translation = {
  // ── Shared / Global ──────────────────────────────────────────────────────
  skipLink: 'Skip to main content',
  newTabLabel: '(opens in new tab)',
  email: 'goldberg8474@email.com',

  // ── Page Metadata ─────────────────────────────────────────────────────────
  meta: {
    home: {
      title: 'Shimon Goldberg — Web Developer Tel Aviv',
      description:
        'Freelance web developer based in Israel, building clean and fast bilingual websites for small businesses and independent artists.',
    },
    about: {
      title: 'About — Shimon Goldberg',
      description:
        'Self-taught web developer based in Israel. Clean code, genuine bilingual support, and sites that are actually easy to maintain.',
    },
    contact: {
      title: 'Contact — Shimon Goldberg',
      description:
        'Have a project in mind? Get in touch with Shimon Goldberg, freelance web developer based in Tel Aviv, Israel.',
    },
    privacy: {
      title: 'Privacy Policy — Shimon Goldberg',
      description:
        'Privacy policy for shimongoldberg.vercel.app — how contact form submissions are handled and what data is retained.',
    },
  },

  // ── Navigation ────────────────────────────────────────────────────────────
  nav: {
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    emailAriaLabel: 'Send an email to Shimon Goldberg',
    menuOpenAriaLabel: 'Open navigation menu',
    menuCloseAriaLabel: 'Close navigation menu',
  },

  // ── Language Toggle ───────────────────────────────────────────────────────
  languageToggle: {
    en: 'EN',
    he: 'HE',
    switchToEnAriaLabel: 'Switch site language to English',
    switchToHeAriaLabel: 'Switch site language to Hebrew',
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  footer: {
    copyrightName: 'Shimon Goldberg',
    allRightsReserved: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    emailAriaLabel: 'Send an email to Shimon Goldberg',
    githubLinkText: 'GitHub',
    githubLinkAriaLabel: 'Shimon Goldberg on GitHub (opens in new tab)',
  },

  // ── WhatsApp Floating Button ──────────────────────────────────────────────
  whatsapp: {
    ariaLabel: 'Contact Shimon Goldberg on WhatsApp (opens in new tab)',
  },

  // ── Hero Section ──────────────────────────────────────────────────────────
  hero: {
    eyebrow: 'Web Developer · Tel Aviv, Israel',
    name: 'Shimon Goldberg',
    tagline:
      'I build websites that work for small businesses and independent artists. Clean, fast, bilingual.',
    ctaPrimary: 'See My Work',
    ctaSecondary: 'Get in Touch',
  },

  // ── Projects Section ──────────────────────────────────────────────────────
  projects: {
    sectionHeading: 'Selected Work',
    valueDeliveredLabel: 'Value Delivered',
    viewLiveSite: 'View Live Site',
    previewComing: 'Preview coming soon — contact for details',

    voyager: {
      title: 'Voyager',
      // TODO: Replace with Shimon's provided description for Voyager
      description:
        'A clean, animated web experience built with Astro and Tailwind. Smooth page transitions, fast load times, and a clear visual hierarchy — designed to guide visitors toward a single conversion goal.',
      value:
        'Delivered a polished, performance-optimised web presence with a clear conversion path for visitors.',
      screenshotAlt: 'Screenshot of the Voyager website',
      liveLinkAriaLabel: 'View Voyager live site (opens in new tab)',
    },

    sculptor: {
      title: 'Jerusalem Sculptor Portfolio',
      description:
        'A bilingual digital gallery for a Jerusalem-based sculptor working in stone and metal. The site features a filterable catalogue of eighteen works with individual detail pages and lightbox viewing, a commission inquiry flow, collector testimonials, and a full press kit — all in English and Hebrew with complete RTL layout support.',
      value:
        'A museum-quality online presence that serves both the gallery function and the commission sales pipeline, with bilingual support built for an international collector audience.',
      screenshotAlt: 'Screenshot of the Jerusalem Sculptor Portfolio website',
      liveLinkAriaLabel:
        'View Jerusalem Sculptor Portfolio live site (opens in new tab)',
    },

    photography: {
      title: 'Yael Cohen Photography',
      description:
        'A photography portfolio for Tel Aviv-based photographer Yael Cohen. Designed around full-bleed imagery and an editorial, minimal aesthetic that keeps the work front and centre.',
      value:
        'A distinctive online presence for an emerging photographer, optimised for visual impact across all screen sizes.',
      screenshotAlt: 'Screenshot of the Yael Cohen Photography website',
    },
  },

  // ── About Teaser ──────────────────────────────────────────────────────────
  aboutTeaser: {
    text: "I'm a self-taught web developer based in Israel. What started as a passion project in 2025 became a career — building digital presences for the small businesses and independent artists who need them most.",
    // The directional arrow (→ / ←) is rendered via a .icon-directional span
    // and mirrored in RTL with CSS — it is not part of this string.
    readMore: 'Read More',
  },

  // ── About Page ────────────────────────────────────────────────────────────
  about: {
    pageHeading: 'Shimon Goldberg',
    bio1: "I'm a self-taught web developer based in Israel. I discovered web development in 2025 and haven't stopped building since. What started as nights and weekends turned into a full-time focus — and then a career.",
    bio2: "I specialise in websites for small businesses and independent artists. Clean code, genuine bilingual support, and sites that are actually easy to maintain. No bloat, no magic, no secrets.",
    bio3: 'Based in Tel Aviv. Available for projects across Israel.',
    skillsHeading: 'What I Work With',
    skills: [
      'Astro',
      'Tailwind CSS',
      'HTML / CSS',
      'JavaScript',
      'Git / GitHub',
      'Vercel',
      'RTL / Hebrew Support',
      'Responsive Design',
    ],
    ctaHeading: 'Ready to work together?',
    ctaButton: 'Get in Touch',
    monogramAriaLabel: 'Shimon Goldberg monogram',
  },

  // ── Contact Page ──────────────────────────────────────────────────────────
  contact: {
    pageHeading: 'Get in Touch',
    intro:
      "Have a project in mind? I'd love to hear about it. Fill in the form below, or reach out directly.",
    form: {
      nameLabel: 'Your Name',
      namePlaceholder: 'Jane Smith',
      emailLabel: 'Your Email',
      emailPlaceholder: 'jane@example.com',
      messageLabel: 'Your Message',
      messagePlaceholder:
        "Tell me about your project — what you need, your timeline, and any details that will help me understand the brief.",
      submitButton: 'Send Message',
      sendingButton: 'Sending…',
      successHeading: 'Message sent!',
      successMessage:
        "Thank you for reaching out. I'll get back to you as soon as possible — usually within one business day.",
      errorMessage:
        'Something went wrong. Please try again, or email me directly.',
    },
    directHeading: 'Or reach out directly',
    emailAriaLabel: 'Send an email to Shimon Goldberg',
    whatsappLinkText: 'Chat on WhatsApp',
    whatsappLinkAriaLabel:
      'Chat with Shimon Goldberg on WhatsApp (opens in new tab)',
  },

  // ── Privacy Page ─────────────────────────────────────────────────────────
  privacy: {
    pageHeading: 'Privacy Policy',
    body: 'This page is coming soon. The privacy policy for this site will outline how contact form submissions are handled and what data is retained. For any privacy-related questions in the meantime, please contact us at goldberg8474@email.com.',
  },
};
