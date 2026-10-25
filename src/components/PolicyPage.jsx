import { useEffect } from "react";
import LogoIcon from "../assets/kannizcon-icon.svg";
import { setPageSeo } from "../seo";

const policySeo = {
  privacy: {
    description: "Read the Privacy Policy for websites, apps, custom GPTs, SaaS platforms, and related services.",
    keywords: "privacy policy, data privacy, information security, Kannizcon",
    path: "/privacy",
  },
  terms: {
    description: "Review the Terms and Conditions for software, AI, SaaS, and related services.",
    keywords: "terms and conditions, software services, AI services, Kannizcon",
    path: "/terms",
  },
  refund: {
    description: "Read the refund and cancellation policy for subscriptions, software services, and digital deliverables.",
    keywords: "refund policy, cancellation policy, software subscriptions, Kannizcon",
    path: "/refund",
  },
  "payment-gateways": {
    description: "Find payment gateway policy links and payment support information.",
    keywords: "payment gateway policies, Razorpay, Stripe, Paddle, payment support",
    path: "/payment-gateways",
  },
};

function ContactInformation({ purpose }) {
  return (
    <>
      {purpose}{" "}
      <a href="mailto:dhanasekaransjh6@gmail.com">dhanasekaransjh6@gmail.com</a>
      {" or "}
      <a href="mailto:codeverseteam@aicodeverse.com">codeverseteam@aicodeverse.com</a>.
      {" "}Website:{" "}
      <a href="https://www.aicodeverse.com/" target="_blank" rel="noreferrer">
        www.aicodeverse.com
      </a>
      .
    </>
  );
}

const policies = {
  privacy: {
    title: "Privacy Policy",
    intro:
      'This Privacy Policy explains how Kannizcon IT Enabling Services ("KANNIZCON", "we", "our", "us") collects, uses and protects information when you use our websites, apps, custom GPTs, SaaS platforms, and related services.',
    introContent: (
      <>
        This Privacy Policy explains how{" "}
        <strong>Kannizcon IT Enabling Services</strong> (&quot;KANNIZCON&quot;,
        &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) collects, uses and
        protects information when you use our websites, apps, custom GPTs, SaaS
        platforms, and related services.
      </>
    ),
    updated: "Effective date: February 22, 2026",
    sections: [
      {
        title: "1. Information We Collect",
        bullets: [
          "Contact details (name, email, phone, organization name).",
          "Account and usage data (device, logs, timestamps, IP).",
          "Project inputs and files you submit for service delivery.",
          "Billing status metadata from payment gateways.",
        ],
      },
      {
        title: "2. How We Use Data",
        bullets: [
          "To provide and improve products and services.",
          "To manage accounts, support, invoices, and security.",
          "To prevent abuse and comply with legal obligations.",
        ],
      },
      {
        title: "3. Third-Party Processors",
        paragraphs: [
          "We may use providers such as cloud hosts, analytics tools, AI providers, payment gateways, and email services. They process data under their own policies.",
        ],
      },
      {
        title: "4. Data Retention",
        paragraphs: [
          "We retain information for business, legal, and security purposes and delete/anonymize when no longer needed, subject to legal requirements.",
        ],
      },
      {
        title: "5. Your Rights",
        paragraphs: [
          "You may request access, correction, or deletion of your personal data, subject to applicable law.",
        ],
      },
      {
        title: "6. Security",
        paragraphs: [
          "We use reasonable safeguards, but no system can guarantee absolute security.",
        ],
      },
      {
        title: "7. Payment Gateway References",
        paragraphs: [
          <>
            For payment provider terms (Razorpay, Stripe, Paddle, and others),
            visit <a href="/payment-gateways">Payment Gateway Policies</a>.
          </>,
        ],
      },
      {
        title: "8. Contact",
        paragraphs: [
          <ContactInformation purpose="For privacy requests, contact" />,
        ],
      },
    ],
  },
  terms: {
    title: "Terms and Conditions",
    intro:
      "These Terms apply to all websites, apps, GPT tools, SaaS products, and software services offered by Kannizcon IT Enabling Services.",
    introContent: (
      <>
        These Terms apply to all websites, apps, GPT tools, SaaS products, and
        software services offered by{" "}
        <strong>Kannizcon IT Enabling Services</strong>.
      </>
    ),
    updated: "Effective date: February 22, 2026",
    sections: [
      {
        title: "1. Services",
        paragraphs: [
          "We provide software development, AI services, SaaS subscriptions, and consulting under project agreements or published plans.",
        ],
      },
      {
        title: "2. Accounts",
        bullets: [
          "You must provide accurate account information.",
          "You are responsible for account activity and credentials.",
        ],
      },
      {
        title: "3. Billing",
        paragraphs: [
          "Payments may be handled by third-party providers such as Razorpay, Stripe, Paddle, UPI apps, and app stores.",
        ],
      },
      {
        title: "4. Refund and Cancellation",
        paragraphs: [
          <>
            Refund and cancellation handling is defined in our dedicated policy
            at <a href="/refund">Refund</a>.
          </>,
        ],
      },
      {
        title: "5. Acceptable Use",
        bullets: [
          "No illegal, abusive, or fraudulent activity.",
          "No unauthorized access attempts or harmful code uploads.",
        ],
      },
      {
        title: "6. Liability",
        paragraphs: [
          "To the extent permitted by law, liability is limited as described in contract terms and applicable law.",
        ],
      },
      {
        title: "7. Governing Law",
        paragraphs: [
          "These terms are governed by the laws of India.",
        ],
      },
      {
        title: "8. Payment Gateway References",
        paragraphs: [
          <>
            For payment-provider-specific legal terms and verification links,
            visit <a href="/payment-gateways">Payment Gateway Policies</a>.
          </>,
        ],
      },
      {
        title: "9. Contact",
        paragraphs: [
          <ContactInformation purpose="For legal queries, contact" />,
        ],
      },
    ],
  },
  refund: {
    title: "Refund and Cancellation Policy",
    intro:
      "This policy applies to software services, subscriptions, and digital deliverables sold by Kannizcon IT Enabling Services.",
    updated: "Effective date: February 22, 2026",
    sections: [
      {
        title: "1. Scope",
        paragraphs: [
          "This policy applies to software services, subscriptions, and digital deliverables sold by Kannizcon IT Enabling Services.",
        ],
      },
      {
        title: "2. Subscription Billing",
        bullets: [
          "Subscription charges are generally billed in advance.",
          "Cancellation stops future renewals; already billed periods are normally non-refundable.",
        ],
      },
      {
        title: "3. One-Time Projects",
        bullets: [
          "Milestone payments are non-refundable once work has started unless otherwise stated in a signed agreement.",
          "If a refund is approved, it is processed to the original payment method where possible.",
        ],
      },
      {
        title: "4. Eligible Exceptions",
        bullets: [
          "Duplicate charge due to technical error.",
          "Charge made despite documented cancellation before billing cut-off.",
          "Other cases required by applicable law or gateway rules.",
        ],
      },
      {
        title: "5. Refund Timeline",
        paragraphs: [
          "Approved refunds are initiated promptly; final credit timing depends on your bank/payment network (typically 5-10 business days).",
        ],
      },
      {
        title: "6. Payment Gateway References",
        paragraphs: [
          <>
            For gateway-specific terms and chargeback rules (Razorpay, Stripe,
            Paddle, and others), see{" "}
            <a href="/payment-gateways">Payment Gateway Policies</a>.
          </>,
        ],
      },
      {
        title: "7. Contact",
        paragraphs: [
          <ContactInformation purpose="For refund requests, contact" />,
        ],
      },
    ],
  },
  "payment-gateways": {
    title: "Payment Gateway Policies",
    intro:
      "Payments for some services may be processed by external gateways and app stores. Their own terms, privacy, and refund rules apply in addition to our policies.",
    updated: "Updated: March 4, 2026",
    sections: [
      {
        title: "Gateway Policy Links",
        links: [
          { label: "Razorpay Terms", href: "https://razorpay.com/terms/" },
          { label: "Stripe Legal Terms", href: "https://stripe.com/legal/consumer" },
          { label: "Paddle Legal Policies", href: "https://www.paddle.com/legal" },
          { label: "PayPal User Agreement", href: "https://www.paypal.com/webapps/mpp/ua/useragreement-full" },
          { label: "Google Play Terms", href: "https://play.google.com/about/play-terms/" },
          { label: "Apple Media Services Terms", href: "https://www.apple.com/legal/internet-services/itunes/" },
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          <ContactInformation purpose="For invoice, payment, or verification support, contact" />,
        ],
      },
    ],
  },
};

function PolicyFooter() {
  return (
    <footer className="footer policy-footer">
      <a className="footer-brand" href="/" aria-label="Kannizcon home">
        <img src={LogoIcon} className="footer-logo" alt="" />
      </a>
      <p>Kannizcon IT Enabling Services — Your Partner in Digital Transformation.</p>
      <p className="policy-company-site">
        <a href="https://www.aicodeverse.com/" target="_blank" rel="noreferrer">www.aicodeverse.com</a>
      </p>
      <nav className="footer-links" aria-label="Site and legal">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/ai-solutions">AI Solutions</a>
        <a href="/software-saas">Software &amp; SaaS</a>
        <a href="/cloud-data">Cloud &amp; Data</a>
        <a href="/ebook-publishing">eBook &amp; Publishing</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact Us</a>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/refund">Refunds</a>
        <a href="/payment-gateways">Payment gateways</a>
        <a href="https://www.aicodeverse.com/" target="_blank" rel="noreferrer">CodeVerse AI</a>
      </nav>
      <span>© {new Date().getFullYear()} Kannizcon IT Enabling Services. All rights reserved.</span>
    </footer>
  );
}

export default function PolicyPage({ page }) {
  const policy = policies[page] || policies.privacy;
  const seo = policySeo[page] || policySeo.privacy;

  useEffect(() => {
    setPageSeo({
      ...seo,
      title: `${policy.title} | KANNIZCON IT Enabling Services`,
    });
  }, [policy.title, seo]);

  return (
    <div className="policy-site">
      <header className="header policy-header">
        <a className="brand" href="/" aria-label="Kannizcon home">
          <img src={LogoIcon} className="logo-img" alt="" />
        </a>
        <nav aria-label="Page navigation">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <main className="policy-content">
        <a className="policy-back" href="/">← Back to Kannizcon</a>
        <article className="policy-card">
          <p className="policy-eyebrow">KANNIZCON IT ENABLING SERVICES · POLICIES</p>
          <h1>{policy.title}</h1>
          <p className="policy-updated">{policy.updated}</p>
          <p className="policy-intro">{policy.introContent || policy.intro}</p>
          <div className="policy-sections">
            {policy.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                {section.links && (
                  <ul className="gateway-links">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>
      </main>
      <PolicyFooter />
    </div>
  );
}
