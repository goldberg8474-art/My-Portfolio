// src/i18n/index.ts
// Defines the Translation interface. Both en.ts and he.ts must satisfy
// this interface in full — no key may be absent or empty in either file.

export interface Translation {
  // ── Shared / Global ──────────────────────────────────────────────────────
  /** "Skip to main content" — first element in <body>, visible on keyboard focus */
  skipLink: string;
  /** Appended to aria-labels on external links: "(opens in new tab)" */
  newTabLabel: string;
  /** The shared email address rendered as visible text in Navbar, Footer, Contact */
  email: string;

  // ── Page Metadata ─────────────────────────────────────────────────────────
  meta: {
    home: {
      title: string;
      description: string;
    };
    about: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      description: string;
    };
    privacy: {
      title: string;
      description: string;
    };
  };

  // ── Navigation ────────────────────────────────────────────────────────────
  nav: {
    home: string;
    about: string;
    contact: string;
    /** aria-label for the email link in the navbar */
    emailAriaLabel: string;
    /** aria-label for the hamburger open button */
    menuOpenAriaLabel: string;
    /** aria-label for the hamburger close button */
    menuCloseAriaLabel: string;
  };

  // ── Language Toggle ───────────────────────────────────────────────────────
  languageToggle: {
    /** Label for the English locale option */
    en: string;
    /** Label for the Hebrew locale option */
    he: string;
    /** aria-label for the "switch to English" button */
    switchToEnAriaLabel: string;
    /** aria-label for the "switch to Hebrew" button */
    switchToHeAriaLabel: string;
  };

  // ── Footer ────────────────────────────────────────────────────────────────
  footer: {
    /** The name used in the copyright line: "© {year} {copyrightName}" */
    copyrightName: string;
    /** "All rights reserved." */
    allRightsReserved: string;
    /** Visible text for the privacy policy link */
    privacyPolicy: string;
    /** aria-label for the email link in the footer */
    emailAriaLabel: string;
    /** Visible text for the GitHub link */
    githubLinkText: string;
    /** aria-label for the GitHub link (communicates new-tab behaviour) */
    githubLinkAriaLabel: string;
  };

  // ── WhatsApp Floating Button ──────────────────────────────────────────────
  whatsapp: {
    /** aria-label for the floating WhatsApp button */
    ariaLabel: string;
  };

  // ── Hero Section ──────────────────────────────────────────────────────────
  hero: {
    /** Small eyebrow label above H1: "Web Developer · Tel Aviv, Israel" */
    eyebrow: string;
    /** H1: the developer's name */
    name: string;
    /** Tagline paragraph below the name */
    tagline: string;
    /** Primary CTA button: "See My Work" — scrolls to #projects */
    ctaPrimary: string;
    /** Secondary CTA button: "Get in Touch" — links to contact page */
    ctaSecondary: string;
  };

  // ── Projects Section ──────────────────────────────────────────────────────
  projects: {
    /** Section heading: "Selected Work" */
    sectionHeading: string;
    /** Small uppercase label above value text: "VALUE DELIVERED" */
    valueDeliveredLabel: string;
    /** Visible text of the external live-site link: "View Live Site" */
    viewLiveSite: string;
    /** Text rendered in placeholder card: "Preview coming soon — contact for details" */
    previewComing: string;

    voyager: {
      title: string;
      // TODO: Replace with Shimon's provided description for Voyager
      description: string;
      value: string;
      /** alt text for the screenshot image */
      screenshotAlt: string;
      /** aria-label for the live-site external link (communicates new-tab behaviour) */
      liveLinkAriaLabel: string;
    };

    sculptor: {
      title: string;
      description: string;
      value: string;
      screenshotAlt: string;
      liveLinkAriaLabel: string;
    };

    photography: {
      title: string;
      description: string;
      value: string;
      screenshotAlt: string;
      liveLinkAriaLabel: string;
    };
  };

  // ── About Teaser (Home page section) ─────────────────────────────────────
  aboutTeaser: {
    /** Short paragraph text */
    text: string;
    /**
     * "Read More" — the directional arrow (→ / ←) is added via CSS
     * on the .icon-directional span, not by duplicating text in this file.
     */
    readMore: string;
  };

  // ── About Page ────────────────────────────────────────────────────────────
  about: {
    /** H1 for the About page */
    pageHeading: string;
    bio1: string;
    bio2: string;
    bio3: string;
    /** "What I Work With" */
    skillsHeading: string;
    /**
     * Array of exactly 8 skill names rendered as SkillPill components.
     * Order: Astro, Tailwind CSS, HTML / CSS, JavaScript,
     *        Git / GitHub, Vercel, RTL / Hebrew Support, Responsive Design
     */
    skills: [string, string, string, string, string, string, string, string];
    /** "Ready to work together?" */
    ctaHeading: string;
    /** CTA button text linking to /contact */
    ctaButton: string;
    /** aria-label / SVG title for the Monogram component */
    monogramAriaLabel: string;
  };

  // ── Contact Page ──────────────────────────────────────────────────────────
  contact: {
    /** H1 for the Contact page */
    pageHeading: string;
    /** Short intro paragraph above the form */
    intro: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      /** Default submit button text */
      submitButton: string;
      /** Button text during async submission: "Sending…" */
      sendingButton: string;
      /** Heading of the success state */
      successHeading: string;
      /** Body copy of the success state */
      successMessage: string;
      /** Error message shown when the Formspree request fails */
      errorMessage: string;
    };
    /** Heading for the direct-contact block below the form */
    directHeading: string;
    /** aria-label for the email link on the contact page */
    emailAriaLabel: string;
    /** Visible text of the WhatsApp link on the contact page */
    whatsappLinkText: string;
    /** aria-label for the WhatsApp link (communicates new-tab behaviour) */
    whatsappLinkAriaLabel: string;
  };

  // ── Privacy Page ─────────────────────────────────────────────────────────
  privacy: {
    /** H1 for the Privacy Policy page */
    pageHeading: string;
    /** Body paragraph for the coming-soon stub */
    body: string;
  };
}
