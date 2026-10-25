import { useEffect } from "react";
import LogoIcon from "../assets/kannizcon-icon.svg";
import FullLogo from "../assets/kannizcon-full-logo.svg";
import EnquiryForm from "./EnquiryForm";
import ServiceArtwork from "./ServiceArtwork";
import { setPageSeo } from "../seo";

const PAGE_CONTENT = {
  "/about": {
    key: "about",
    title: "About Kannizcon",
    heading: "Your Technology Partner for a Smarter Tomorrow",
    description:
      "Registered in 2012, Kannizcon IT Enabling Services brings more than a decade of business operations together with founder Dhanasekaran N’s 20+ years of enterprise operations, technology, and digital transformation experience.",
    image: "custom",
    eyebrow: "ABOUT US",
    capabilities: [
      "Business-focused solution planning",
      "Tailored software rather than one-size-fits-all approaches",
      "Web, mobile, AI, cloud, and data capabilities",
      "Clear project scope and deliverables",
      "Scalable architecture based on project requirements",
      "Support from planning through deployment",
      "Maintainability, reliability, and value",
    ],
    sections: [
      {
        title: "Company profile",
        text: "Kannizcon IT Enabling Services was entered in the Register of Firms on 7 May 2012. Since then, the business has focused on practical technology and operations work, bringing together custom software, AI-powered solutions, mobile applications, cloud technology, SaaS platforms, digital content, and data services.",
      },
      {
        title: "How we work",
        text: "We begin by understanding business objectives, users, workflows, constraints, and budget. From there, we define a practical scope and technical approach, develop with regular progress reviews, test agreed requirements, and prepare the solution for deployment and support.",
      },
      {
        title: "Our values",
        text: "Clear communication, fit-for-purpose technology, thoughtful implementation, and maintainable outcomes guide our work. Technology choices are made according to the project—not simply because a tool is new or popular.",
      },
    ],
  },
  "/services": {
    key: "services",
    title: "IT Services",
    heading: "Comprehensive IT Services for Your Business Growth",
    description:
      "Whether you are launching a product, modernizing an existing system, or streamlining business operations, Kannizcon provides solutions tailored to your goals, workflows, and budget.",
    image: "ecosystem",
    eyebrow: "OUR SERVICES",
    capabilities: [
      "Custom web application development",
      "Android and iOS mobile app development",
      "AI tools and business automation",
      "SaaS product development",
      "Cloud infrastructure and database solutions",
      "eBook publishing and digital content services",
      "Data processing, conversion, and migration",
      "IT consulting and digital transformation",
      "Software maintenance and technical support",
    ],
    sections: [
      {
        title: "A connected set of capabilities",
        text: "Bring together product planning, frontend and backend development, mobile applications, cloud services, AI integrations, databases, digital publishing, and data workflows as your project requires.",
      },
      {
        title: "A practical fit for each project",
        text: "We discuss functionality, users, budget, performance, security, and long-term maintenance before finalizing scope, technology choices, milestones, and deliverables.",
      },
    ],
  },
  "/ai-solutions": {
    key: "ai",
    title: "AI Solutions",
    heading: "AI Solutions and AI Tool Development",
    description:
      "Build AI-powered applications, assistants, and workflow automation around real business needs, useful knowledge, and responsible data handling.",
    image: "ai",
    eyebrow: "AI SOLUTIONS",
    capabilities: [
      "Custom AI tools and intelligent assistants",
      "AI-enabled web and mobile applications",
      "AI workflow automation",
      "Knowledge-based assistants and document workflows",
      "AI-powered content and productivity tools",
      "Multi-tool AI platforms and subscription-based products",
      "Usage controls and API integrations",
    ],
    sections: [
      {
        title: "AI connected to useful workflows",
        text: "Plan AI features around the tasks they support, the information they use, and when people should review or approve the result. Integrate assistants into web or mobile products and existing workflows where appropriate.",
      },
      {
        title: "Knowledge and document experiences",
        text: "Explore document search, knowledge assistants, and retrieval workflows that use your selected sources to help answer user questions. Access control, data separation, and provider choices should be agreed as part of the design.",
      },
      {
        title: "Practical controls",
        text: "Consider usage tracking, quotas, cost management, monitoring, and human review according to product requirements. AI output can be inaccurate; important decisions should retain appropriate oversight.",
      },
    ],
  },
  "/software-saas": {
    key: "software",
    title: "Software & SaaS Development",
    heading: "Software and SaaS Product Development",
    description:
      "Turn a business requirement or product idea into an online application, mobile experience, or SaaS platform designed for the people who will use it.",
    image: "custom",
    eyebrow: "SOFTWARE & SAAS",
    capabilities: [
      "SaaS architecture and product development",
      "Multi-user and multi-tenant application design",
      "Subscription plans and premium access",
      "Payment gateway integration",
      "Usage tracking, credits, and quota management",
      "Admin dashboards, reporting, and user management",
      "Custom web and mobile business applications",
      "Workflow automation and legacy modernization",
    ],
    sections: [
      {
        title: "From product idea to usable software",
        text: "Define target users, essential workflows, integrations, access levels, and an initial release scope. Develop the product in stages so priorities and feedback remain visible.",
      },
      {
        title: "SaaS foundations",
        text: "Plan account management, tenant boundaries, subscriptions, billing integrations, usage rules, administration, and reporting according to your product model and legal requirements.",
      },
      {
        title: "Ownership and handover",
        text: "Source-code ownership, licenses, third-party services, and handover expectations should be described in the project agreement before work begins.",
      },
    ],
  },
  "/cloud-data": {
    key: "cloud",
    title: "Cloud & Data Solutions",
    heading: "Cloud, Database and Data Services",
    description:
      "Build dependable data foundations and deployment workflows with cloud, database, backend, and data-processing services suited to your product.",
    image: "cloud",
    eyebrow: "CLOUD & DATA",
    capabilities: [
      "AWS cloud integration and deployment",
      "Firebase application services",
      "MongoDB database design and integration",
      "Neon PostgreSQL database solutions",
      "Data modeling and query optimization",
      "Backend APIs and third-party integrations",
      "Database migration and data management",
      "Data conversion, validation, and processing",
      "Deployment automation and operational support",
    ],
    sections: [
      {
        title: "Cloud and deployment",
        text: "Select hosting and cloud services around application requirements. Support may include environment configuration, release preparation, monitoring, backups, and performance improvements.",
      },
      {
        title: "Database and backend",
        text: "Design data models and APIs for application needs, with attention to access rules, query performance, integration, migration, and maintainable data operations.",
      },
      {
        title: "Data processing",
        text: "Convert, validate, organize, and migrate data using repeatable workflows. Agree on formats, validation rules, and quality checks before processing.",
      },
    ],
  },
  "/ebook-publishing": {
    key: "publishing",
    title: "eBook & Digital Publishing",
    heading: "eBook Publishing and Digital Content Services",
    description:
      "Prepare digital publications for modern reading devices and publishing workflows through formatting, conversion, structured content processing, and quality checks.",
    image: "publishing",
    eyebrow: "EBOOK & PUBLISHING",
    capabilities: [
      "EPUB eBook creation and conversion",
      "MOBI and legacy Kindle-format workflow support",
      "eBook formatting and quality checks",
      "XML conversion and structured content processing",
      "Document formatting and content transformation",
      "Digital publishing production support",
    ],
    sections: [
      {
        title: "Publication-ready workflows",
        text: "Discuss source files, target formats, reading-device requirements, layout needs, and quality expectations before choosing the conversion and review process.",
      },
      {
        title: "Structured content",
        text: "Support may include XML conversion, document transformation, formatting, and validation to help make content consistent across publishing workflows.",
      },
    ],
  },
  "/portfolio": {
    key: "portfolio",
    title: "Portfolio",
    heading: "Selected Product and Project Areas",
    description:
      "Explore Kannizcon's areas of product and delivery capability across AI software, eBook production, and custom digital solutions.",
    image: "custom",
    eyebrow: "PORTFOLIO",
    capabilities: [],
    sections: [
      {
        title: "Cookly App",
        text: "A global food-sharing platform designed to connect people through food and community.",
      },
      {
        title: "Staffly App",
        text: "A staff-operations and workforce-coordination platform with SaaS management capabilities.",
      },
      {
        title: "CodeVerse AI",
        text: "GPT and AI tools within an AI-enabled enterprise workflow and automation ecosystem.",
        href: "https://www.aicodeverse.com/",
      },
      {
        title: "Kingdon Quest",
        text: "A Kannizcon digital product in the company’s product portfolio.",
      },
      {
        title: "TaxMastry",
        text: "A compliance-automation platform designed to support CA operations.",
      },
      {
        title: "eBook production",
        text: "Digital publishing workflows covering eBook formatting, EPUB conversion, structured content, and production quality checks.",
      },
      {
        title: "Custom business software",
        text: "Business application and SaaS work can include web interfaces, mobile experiences, integrations, dashboards, and workflow improvements. Client case studies should only be added with permission and verified project details.",
      },
    ],
  },
};

const PAGE_SEO = {
  "/about": ["About Kannizcon IT Enabling Services", "Learn about Kannizcon IT Enabling Services, our capabilities, values, and practical approach to digital product delivery.", "Kannizcon IT services India, technology partner Tamil Nadu, software company India"],
  "/services": ["IT Services | Kannizcon", "Explore custom web and mobile apps, AI, SaaS, cloud, database, eBook publishing, data services, and IT consulting by Kannizcon.", "IT services India, web application development, custom software development, mobile app development, AI tools, SaaS, cloud, database, ebook publishing, IT consulting"],
  "/ai-solutions": ["AI Solutions & AI Tool Development | Kannizcon", "Custom AI tools, assistants, AI-enabled apps, knowledge workflows, and business automation by Kannizcon IT Enabling Services.", "AI tool development India, AI assistants, AI workflow automation, knowledge assistant, AI-enabled apps"],
  "/software-saas": ["Software & SaaS Development | Kannizcon", "Web applications, mobile apps, SaaS products, subscriptions, integrations, and custom business software by Kannizcon.", "SaaS development India, custom software development, React development, Flutter app development, React Native apps, Node.js development, Python development"],
  "/cloud-data": ["Cloud & Data Solutions | Kannizcon", "AWS, Firebase, MongoDB, Neon PostgreSQL, backend, integrations, migration, and data processing services.", "AWS cloud services India, Firebase development, MongoDB, Neon PostgreSQL, backend API development, data migration, XML data services"],
  "/ebook-publishing": ["eBook & Digital Publishing | Kannizcon", "EPUB conversion, eBook formatting, XML processing, and digital publishing production support.", "EPUB conversion, eBook publishing services, MOBI workflow, XML conversion, digital publishing India"],
  "/portfolio": ["Portfolio | Kannizcon IT Enabling Services", "Explore selected product areas and project capabilities in AI software, eBook production, and custom digital solutions.", "Kannizcon portfolio, CodeVerse AI OS, eBook production, software project case studies"],
};

const founderExpertise = [
  {
    title: "Enterprise & manufacturing operations",
    items: [
      "Project and product management",
      "Enterprise digital transformation",
      "ERP and business-process automation",
      "Operational excellence and process optimization",
      "Vendor, supply, procurement, and stakeholder management",
      "Inventory and resource planning",
      "Team, workforce, and plant-operations coordination",
      "Compliance, audit, and financial planning coordination",
      "Production workflow digitization and operational quality",
      "KPI monitoring, SLA monitoring, and performance reporting",
      "Cross-functional operations and facility administration",
      "Business-process improvement and enterprise software adoption",
      "Staff training, SOP development, and resource allocation",
      "Administrative operations, strategic planning, and execution",
    ],
  },
  {
    title: "AI & emerging technologies",
    items: [
      "Artificial intelligence applications",
      "Generative AI and prompt engineering",
      "AI automation and business-process optimization",
      "GPT system architecture",
    ],
  },
  {
    title: "Digital & technical",
    items: [
      "React.js, Vite, Node.js, and Firebase",
      "Python and API integration",
      "Cloud computing and AWS",
      "SaaS web and mobile platforms",
      "UI/UX fundamentals and cybersecurity awareness",
      "Data analytics and reporting",
    ],
  },
  {
    title: "Finance & compliance",
    items: [
      "Budgeting and forecasting",
      "GST compliance and taxation",
      "Balance sheet and profit-and-loss analysis",
      "Audit coordination and financial documentation",
      "Compliance operations",
    ],
  },
  {
    title: "ERP & operations tools",
    items: [
      "ERP systems and CRM platforms",
      "Tally ERP and Tally Prime",
      "Workflow automation and enterprise software deployment",
      "Advanced Excel-based operational reporting",
      "Zoho, Power BI, and MIS reporting",
      "Documentation management and inventory coordination",
    ],
  },
  {
    title: "Leadership & soft skills",
    items: [
      "Leadership and team building",
      "Communication and negotiation",
      "Strategic and analytical thinking",
      "Problem solving",
    ],
  },
];

const NAV_ITEMS = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["AI Solutions", "/ai-solutions"],
  ["Software & SaaS", "/software-saas"],
  ["Cloud & Data", "/cloud-data"],
  ["eBook & Publishing", "/ebook-publishing"],
  ["Portfolio", "/portfolio"],
];

function SiteHeader({ currentPath, isContact }) {
  return (
    <>
      <header className="header">
        <a className="brand" href="/" aria-label="Kannizcon home">
          <img
            src={isContact ? FullLogo : LogoIcon}
            className={`logo-img${isContact ? " logo-img--full" : ""}`}
            alt={isContact ? "Kannizcon IT Enabling Services" : ""}
          />
        </a>
        <a className="header-cta" href="/contact">Get a Free Consultation <span aria-hidden="true">→</span></a>
      </header>
      <nav className="nav business-nav" aria-label="Primary navigation">
        <div className="nav-left">
          {NAV_ITEMS.map(([label, href]) => (
            <a
              href={href}
              key={href}
              aria-current={currentPath === href ? "page" : undefined}
            >
              {label}
            </a>
          ))}
        </div>
        <a className="nav-contact" href="/contact">Contact</a>
      </nav>
    </>
  );
}

function SiteFooter({ isContact }) {
  return (
    <footer className="footer business-footer">
      <a className="footer-brand" href="/" aria-label="Kannizcon home">
        <img
          src={isContact ? FullLogo : LogoIcon}
          className={`footer-logo${isContact ? " footer-logo--full" : ""}`}
          alt={isContact ? "Kannizcon IT Enabling Services" : ""}
        />
      </a>
      <p>Kannizcon IT Enabling Services — Your Partner in Digital Transformation.</p>
      <nav className="footer-links" aria-label="Site and legal">
        {NAV_ITEMS.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
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

export default function BusinessPage({ path }) {
  const page = PAGE_CONTENT[path];
  const isContact = path === "/contact";
  const seo = PAGE_SEO[path];

  useEffect(() => {
    if (isContact) {
      setPageSeo({
        title: "Contact & Project Quote | Kannizcon IT Enabling Services",
        description: "Contact Kannizcon IT Enabling Services to discuss your project requirements, timeline, and budget. Request a project quote or free consultation.",
        keywords: "Kannizcon contact, IT project quote India, software consultation, project enquiry",
        path,
      });
      return;
    }

    setPageSeo({
      title: seo[0],
      description: seo[1],
      keywords: seo[2],
      path,
    });
  }, [isContact, path, seo]);

  return (
    <div className="business-site">
      <SiteHeader currentPath={path} isContact={isContact} />
      <main className="business-page">
        <section className="business-hero">
          <div>
            <p className="section-eyebrow">{isContact ? "CONTACT & QUOTE" : page.eyebrow}</p>
            <h1>{isContact ? "Let’s discuss your next project" : page.heading}</h1>
            <p>{isContact
              ? "Tell us about your idea, business challenge, or existing application. We will discuss your requirements and help identify a practical next step."
              : page.description}</p>
            {!isContact && (
              <a className="business-primary-cta" href="/contact">Get a Free Consultation <span aria-hidden="true">→</span></a>
            )}
          </div>
          {!isContact && <ServiceArtwork type={page.image} />}
        </section>

        {path === "/about" && (
          <section className="founder-profile" aria-labelledby="founder-title">
            <div className="founder-intro">
              <p className="section-eyebrow">FOUNDER & LEADERSHIP</p>
              <h2 id="founder-title">DHANASEKARAN N</h2>
              <h3>Enterprise Operations &amp; Digital Transformation Leader</h3>
              <p>Enterprise operations and digital transformation leader with 20+ years of experience across IT services, manufacturing support operations, ERP workflow optimization, compliance management, SaaS platforms, and AI-driven business-process automation. Experienced in cross-functional leadership, enterprise operations, vendor coordination, and operational improvement across domestic and international engagements.</p>
              <p>His work brings together finance operations, audits, ERP systems, cloud technologies, AI product strategy, GPT systems, project management, global client engagements, and scalable SaaS platforms.</p>
            </div>
            <div className="founder-expertise-grid">
              {founderExpertise.map((group) => (
                <article key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </section>
        )}

        {isContact ? (
          <section className="business-contact-content">
            <div className="business-contact-details">
              <p className="section-eyebrow">KANNIZCON IT ENABLING SERVICES</p>
              <h2>Tell us what you’re looking to build</h2>
              <p>Share your goals, preferred timeline, and any key requirements. A rough idea is enough to start the conversation.</p>
              <a href="mailto:dhanasekaransjh6@gmail.com">dhanasekaransjh6@gmail.com</a>
              <a href="mailto:codeverseteam@aicodeverse.com">codeverseteam@aicodeverse.com</a>
              <a href="https://www.aicodeverse.com/" target="_blank" rel="noreferrer">www.aicodeverse.com</a>
              <a href="tel:+919600887711">+91 96008 87711</a>
              <a href="https://wa.me/919600887711" target="_blank" rel="noreferrer">WhatsApp Kannizcon</a>
              <span>Tamil Nadu, India · India and international projects, subject to project requirements.</span>
            </div>
            <div className="business-contact-form">
              <h2>Project enquiry</h2>
              <EnquiryForm />
            </div>
          </section>
        ) : (
          <>
            {page.capabilities.length > 0 && (
              <section className="business-capabilities">
                <div className="section-heading">
                  <p className="section-eyebrow">HOW WE CAN HELP</p>
                  <h2>{page.key === "services" ? "Our core capabilities" : "Capabilities"}</h2>
                </div>
                <ul>{page.capabilities.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            )}
            <section className="business-details">
              {page.sections.map((section) => (
                <article key={section.title}>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                  {section.href && (
                    <a className="business-product-link" href={section.href} target="_blank" rel="noreferrer">
                      Visit CodeVerse AI <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </article>
              ))}
            </section>
            {path === "/services" && (
              <section className="business-service-links">
                <a href="/ai-solutions">AI Solutions <span aria-hidden="true">→</span></a>
                <a href="/software-saas">Software & SaaS <span aria-hidden="true">→</span></a>
                <a href="/cloud-data">Cloud & Data <span aria-hidden="true">→</span></a>
                <a href="/ebook-publishing">eBook & Publishing <span aria-hidden="true">→</span></a>
              </section>
            )}
          </>
        )}

        <section className="business-bottom-cta">
          <div>
            <p className="section-eyebrow">LET’S BUILD TOGETHER</p>
            <h2>Ready to talk through your requirements?</h2>
            <p>Contact Kannizcon to discuss scope, timelines, and a suitable next step.</p>
          </div>
          <a className="business-primary-cta" href="/contact">Request a Project Quote <span aria-hidden="true">→</span></a>
        </section>
      </main>
      <SiteFooter isContact={isContact} />
    </div>
  );
}
