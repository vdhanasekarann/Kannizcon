import { useEffect, useState } from "react";
import "./App.css";
import LogoIcon from "./assets/kannizcon-icon.svg";
import EnquiryForm from "./components/EnquiryForm";
import Chatbot from "./components/Chatbot";
import PolicyPage from "./components/PolicyPage";
import ServiceArtwork from "./components/ServiceArtwork";
import BusinessPage from "./components/BusinessPage";
import { setOrganizationStructuredData, setPageSeo } from "./seo";

const POLICY_ROUTES = {
  "/privacy": "privacy",
  "/terms": "terms",
  "/refund": "refund",
  "/payment-gateways": "payment-gateways",
};

const BUSINESS_ROUTES = new Set([
  "/about",
  "/services",
  "/ai-solutions",
  "/software-saas",
  "/cloud-data",
  "/ebook-publishing",
  "/portfolio",
  "/contact",
]);

const homeServices = [
  {
    title: "Web Application Development",
    description: "Responsive, scalable, and user-friendly applications built around business requirements.",
    capabilities: ["Modern frontend development", "Business dashboards and admin panels", "APIs, integrations, and access workflows"],
    route: "/services",
    artwork: "web",
    icon: "◫",
  },
  {
    title: "Mobile App Development",
    description: "Practical Android and iOS experiences designed for the way your customers work.",
    capabilities: ["Flutter and React Native", "Android and iOS applications", "Testing, release preparation, and maintenance"],
    route: "/software-saas",
    artwork: "mobile",
    icon: "▯",
  },
  {
    title: "AI Solutions & Automation",
    description: "AI-powered tools that support useful business workflows, knowledge, and productivity.",
    capabilities: ["Custom assistants and AI-enabled apps", "Knowledge and document workflows", "Workflow automation and integrations"],
    route: "/ai-solutions",
    artwork: "ai",
    icon: "✳",
  },
  {
    title: "SaaS Product Development",
    description: "Turn a product idea into an online service with the features your users need.",
    capabilities: ["SaaS architecture and development", "Accounts, plans, and premium access", "Admin dashboards and usage controls"],
    route: "/software-saas",
    artwork: "custom",
    icon: "▦",
  },
  {
    title: "Cloud, DevOps & Deployment",
    description: "Cloud services and deployment workflows selected to fit your application and operations.",
    capabilities: ["AWS and Firebase integration", "Environment and release management", "Deployment automation and operational support"],
    route: "/cloud-data",
    artwork: "cloud",
    icon: "☁",
  },
  {
    title: "Database & Backend Solutions",
    description: "Dependable data foundations, APIs, and backend services for business applications.",
    capabilities: ["MongoDB and Neon PostgreSQL", "Data modeling and query optimization", "Database migration and integration"],
    route: "/cloud-data",
    artwork: "data",
    icon: "◉",
  },
  {
    title: "eBook & Digital Content Services",
    description: "Prepare digital publications for modern reading devices and publishing workflows.",
    capabilities: ["EPUB creation and conversion", "eBook formatting and quality checks", "XML and structured content processing"],
    route: "/ebook-publishing",
    artwork: "publishing",
    icon: "▤",
  },
  {
    title: "Data & Document Processing",
    description: "Improve the consistency and usefulness of information across your business.",
    capabilities: ["Data conversion and validation", "XML and document processing", "Migration and repeatable workflows"],
    route: "/cloud-data",
    artwork: "processing",
    icon: "⌘",
  },
  {
    title: "Business Apps & Digital Transformation",
    description: "Use software and process improvements to help teams work with greater clarity.",
    capabilities: ["Custom business applications", "Workflow automation and reporting", "Requirements analysis and solution planning"],
    route: "/software-saas",
    artwork: "transformation",
    icon: "↗",
  },
  {
    title: "Maintenance & Technical Support",
    description: "Keep digital products useful and dependable as requirements change.",
    capabilities: ["Bug fixing and troubleshooting", "Application upgrades and enhancements", "Performance and compatibility improvements"],
    route: "/software-saas",
    artwork: "support",
    icon: "⚙",
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your business objectives, users, and requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Define scope, technical approach, milestones, and deliverables.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop and integrate the solution with regular progress reviews.",
  },
  {
    number: "04",
    title: "Test",
    description: "Validate functionality, usability, and agreed quality requirements.",
  },
  {
    number: "05",
    title: "Deploy",
    description: "Prepare and release the solution to the agreed environment.",
  },
  {
    number: "06",
    title: "Support",
    description: "Maintain and improve the product as your needs change.",
  },
];

const technologyGroups = [
  { label: "Frontend", items: ["React", "Vite", "HTML", "CSS", "JavaScript"] },
  { label: "Mobile", items: ["Flutter", "React Native", "Android", "iOS"] },
  { label: "Backend", items: ["Node.js", "Python", "REST APIs"] },
  { label: "Cloud & data", items: ["AWS", "Firebase", "MongoDB", "Neon PostgreSQL"] },
];

const industries = [
  "Startups & entrepreneurs",
  "Small & medium businesses",
  "Professional services",
  "Publishing & digital content",
  "Education & training",
  "Retail & e-commerce",
  "Manufacturing & operations",
  "Workflow-focused organizations",
];
export default function App() {
  const [active, setActive] = useState(() =>
    new URLSearchParams(window.location.search).has("contact")
      ? "contact"
      : "home"
  );

  useEffect(() => {
    if (window.location.pathname.replace(/\/+$/, "") !== "") return;

    setPageSeo({
      title: "Kannizcon IT Enabling Services | AI, Software & SaaS Development",
      description:
        "Custom software, AI tools, SaaS platforms, Flutter and React Native apps, cloud integration, database solutions, eBook publishing, and data services by Kannizcon IT Enabling Services.",
      keywords:
        "IT services India, AI tool development, SaaS development, Flutter app development, React development, React Native apps, Node.js development, Python development, AWS cloud services, Firebase development, MongoDB, Neon PostgreSQL, EPUB conversion, XML data services",
      path: "/",
    });
    setOrganizationStructuredData();
  }, []);

  const handleNavClick = (id) => {
    setActive(id);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (id === "services") {
      document.getElementById("services")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }
    window.requestAnimationFrame(() => {
      (document.getElementById(id) || document.querySelector(".content"))?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const openContact = () => handleNavClick("contact");

  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const policyPage = POLICY_ROUTES[currentPath];

  if (policyPage) {
    return <PolicyPage page={policyPage} />;
  }
  if (BUSINESS_ROUTES.has(currentPath)) {
    return <BusinessPage path={currentPath} />;
  }

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <a className="brand" href="/" aria-label="Kannizcon home">
          <img src={LogoIcon} className="logo-img" alt="" />
          <span className="company-info home-brand-info">
            <strong>Kannizcon</strong>
            <span>IT Enabling Services</span>
          </span>
        </a>
        <a className="header-cta" href="/contact">Get a Free Consultation <span aria-hidden="true">→</span></a>
      </header>

      <nav className="nav" aria-label="Primary navigation">
        <div className="nav-left">
          <a className={active === "home" ? "active" : ""} href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/ai-solutions">AI Solutions</a>
          <a href="/software-saas">Software &amp; SaaS</a>
          <a href="/cloud-data">Cloud &amp; Data</a>
          <a href="/ebook-publishing">eBook &amp; Publishing</a>
          <a href="/portfolio">Portfolio</a>
        </div>
        <a className="nav-contact" href="/contact">Contact</a>
      </nav>

      <section className="hero-banner">
        <div className="banner-inner">
          <div className="banner-content">
            <p className="hero-eyebrow"><span aria-hidden="true" /> IDEAS <span className="hero-eyebrow-divider">/</span> TECHNOLOGY <span className="hero-eyebrow-divider">/</span> AUTOMATION <span className="hero-eyebrow-divider">/</span> GROWTH</p>
            <h1>Transform your ideas into <span>powerful digital solutions.</span></h1>
            <p className="banner-highlight">
              We help businesses, startups, entrepreneurs, and publishers turn
              ideas into reliable digital products through custom software,
              AI-powered solutions, mobile apps, cloud technology, SaaS, and
              digital content services.
            </p>
            <p className="hero-supporting-copy">
              From planning and development to deployment and ongoing support,
              we bring technology and business goals together to help you work
              smarter, improve efficiency, and grow with confidence.
            </p>
            <div className="banner-cta">
              <button className="btn-primary" onClick={openContact}>
                Get a Free Consultation <span aria-hidden="true">→</span>
              </button>
              <button className="btn-outline" onClick={() => handleNavClick("services")}>
                Explore our services
              </button>
            </div>
            <p className="hero-promise">Your Technology Partner for a Smarter Tomorrow</p>
          </div>
          <ServiceArtwork type="ecosystem" />
        </div>
      </section>

      <section className="proof-strip" aria-label="How we help">
        <div><span className="proof-mark">01</span><p><strong>Built around your goals</strong><span>Solutions shaped to your needs</span></p></div>
        <div><span className="proof-mark">02</span><p><strong>One connected team</strong><span>Product, engineering, and delivery</span></p></div>
        <div><span className="proof-mark">03</span><p><strong>Ready to evolve</strong><span>Scalable foundations and support</span></p></div>
        <div><span className="proof-mark">04</span><p><strong>Clear collaboration</strong><span>Milestones and shared feedback</span></p></div>
      </section>

      <section className="company-story-strip" aria-label="Company experience">
        <div>
          <p className="section-eyebrow">ESTABLISHED EXPERIENCE</p>
          <h2>Operating since 2012. Focused on practical technology.</h2>
          <p>Registered in 2012, Kannizcon IT Enabling Services brings business-focused planning and technology delivery together for organizations, entrepreneurs, and publishers.</p>
        </div>
        <a href="/about">Learn about Kannizcon <span aria-hidden="true">→</span></a>
      </section>

      <section className="client-logos" aria-labelledby="client-logos-title">
        <div className="section-heading">
          <p className="section-eyebrow">SELECTED CLIENTS</p>
          <h2 id="client-logos-title">Organizations we’ve worked with</h2>
        </div>
        <div className="client-logo-row">
          <div className="client-logo-card client-logo-card--startprint">
            <img src="/client-logos/startprint.png" alt="Star Print" />
          </div>
          <div className="client-logo-card client-logo-card--bellmedia">
            <img src="/client-logos/bellmedia.png" alt="Bell Media" />
          </div>
          <div className="client-logo-card client-logo-card--benbella">
            <img src="/client-logos/benbella.svg" alt="BenBella Books" />
          </div>
          <div className="client-logo-card client-logo-card--sheet" role="img" aria-label="Simtech Visual Engineering">
            <span className="client-logo-sheet-crop client-logo-sheet-crop--simtech" aria-hidden="true" />
          </div>
          <div className="client-logo-card client-logo-card--sheet" role="img" aria-label="Neumann Steinberg Medical Research Institute">
            <span className="client-logo-sheet-crop client-logo-sheet-crop--neumann" aria-hidden="true" />
          </div>
          <div className="client-logo-card client-logo-card--sheet" role="img" aria-label="Undisker Technologies">
            <span className="client-logo-sheet-crop client-logo-sheet-crop--undisker" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="home-services" id="services">
        <div className="section-heading">
          <p className="section-eyebrow">OUR SERVICES</p>
          <h2>Comprehensive IT Services for Your Business Growth</h2>
          <p>Whether you are launching a product, modernizing a system, or streamlining operations, we tailor solutions to your goals, workflows, and budget.</p>
        </div>
        <div className="home-service-grid">
          {homeServices.map((service) => (
            <article className="home-service-card" key={service.title}>
              <span className="home-service-icon" aria-hidden="true">{service.icon}</span>
              <span className="home-service-title">{service.title}</span>
              <ServiceArtwork type={service.artwork} compact />
              <span className="home-service-description">{service.description}</span>
              <ul className="home-service-capabilities">
                {service.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
              </ul>
              <a className="home-service-link" href={service.route}>
                Explore service <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="home-products" aria-labelledby="home-products-title">
        <div className="section-heading">
          <p className="section-eyebrow">OUR PRODUCTS</p>
          <h2 id="home-products-title">Ideas shaped into useful digital products</h2>
          <p>Kannizcon product concepts span AI, workforce operations, food sharing, learning, and compliance workflows.</p>
        </div>
        <div className="home-products-grid">
          <article><h3>Cookly App</h3><p>A global food-sharing platform designed to bring people and food communities together.</p></article>
          <article><h3>Staffly App</h3><p>A SaaS platform for staff operations, workforce coordination, and operational management.</p></article>
          <article><h3>CodeVerse AI</h3><p>An AI-enabled enterprise workflow and automation ecosystem with GPT and AI tools.</p><a href="https://www.aicodeverse.com/" target="_blank" rel="noreferrer">Visit CodeVerse AI <span aria-hidden="true">↗</span></a></article>
          <article><h3>Kingdon Quest</h3><p>A digital product in Kannizcon’s portfolio.</p></article>
          <article><h3>TaxMastry</h3><p>A compliance automation platform designed to support CA operations.</p></article>
        </div>
      </section>

      <section className="why-kannizcon">
        <div className="section-heading">
          <p className="section-eyebrow">WHY KANNIZCON</p>
          <h2>Technology choices grounded in your goals</h2>
          <p>We combine technical implementation with practical business understanding to help find a solution that fits your needs.</p>
        </div>
        <div className="why-grid">
          <article><span>01</span><h3>Business-focused planning</h3><p>We start by understanding the problem and your priorities before shaping a solution.</p></article>
          <article><span>02</span><h3>Tailored implementation</h3><p>Choose a fit-for-purpose approach instead of forcing your process into a generic tool.</p></article>
          <article><span>03</span><h3>Connected capabilities</h3><p>Bring web, mobile, AI, cloud, and data work together when your project needs it.</p></article>
          <article><span>04</span><h3>Clear delivery</h3><p>Align on scope, deliverables, and feedback points from planning through deployment.</p></article>
          <article><span>05</span><h3>Maintainable foundations</h3><p>Consider reliability, security, performance, and ongoing maintenance in technical decisions.</p></article>
          <article><span>06</span><h3>Support beyond launch</h3><p>Plan for improvements and technical support as your product and business evolve.</p></article>
        </div>
      </section>

      <section className="technology-section">
        <div className="section-heading">
          <p className="section-eyebrow">OUR TECHNOLOGY STACK</p>
          <h2>The right tools for the right requirements</h2>
          <p>Technology choices are finalized according to functionality, budget, performance, security, and long-term maintenance needs.</p>
        </div>
        <div className="technology-groups">
          {technologyGroups.map((group) => (
            <div className="technology-group" key={group.label}>
              <h3>{group.label}</h3>
              <div>{group.items.map((item) => <span className="tech-badge" key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="industries-section" id="industries">
        <div className="section-heading">
          <p className="section-eyebrow">WHO WE SUPPORT</p>
          <h2>Solutions adaptable to your industry</h2>
          <p>We work with organizations at different stages and shape the approach around each project’s context.</p>
        </div>
        <ul className="industry-list">
          {industries.map((industry) => <li key={industry}>{industry}</li>)}
        </ul>
      </section>

      <section className="delivery-section">
        <div className="section-heading">
          <p className="section-eyebrow">OUR PROJECT APPROACH</p>
          <h2>From idea to launch, together</h2>
          <p>A collaborative process keeps the work focused, visible, and moving in the right direction.</p>
        </div>
        <ol className="delivery-grid">
          {deliverySteps.map((step) => (
            <li key={step.number}>
              <span className="delivery-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="home-cta">
          <div>
            <p className="section-eyebrow">LET’S BUILD TOGETHER</p>
            <h2>Ready to Build Your Next Project?</h2>
            <p>Tell us about your idea, business challenge, or existing application. We’ll discuss your requirements and help identify a practical next step.</p>
          </div>
          <button className="btn-primary" onClick={openContact}>Get a Free Consultation <span aria-hidden="true">→</span></button>
        </div>
      </section>

      <section className="contact-bar" aria-label="Contact information">
        <div>
          <p className="section-eyebrow">CONTACT KANNIZCON IT ENABLING SERVICES</p>
          <h2>Let’s discuss your requirements</h2>
          <p>India and international projects, subject to project requirements.</p>
        </div>
        <div className="contact-bar-links">
          <a href="mailto:dhanasekaransjh6@gmail.com">dhanasekaransjh6@gmail.com</a>
          <a href="mailto:codeverseteam@aicodeverse.com">codeverseteam@aicodeverse.com</a>
          <a href="https://www.aicodeverse.com/" target="_blank" rel="noreferrer">www.aicodeverse.com</a>
          <a href="tel:+919600887711">Call: +91 96008 87711</a>
          <a href="https://wa.me/919600887711" target="_blank" rel="noreferrer">WhatsApp: +91 96008 87711</a>
          <span>Tamil Nadu, India</span>
        </div>
      </section>

      <section className="home-faq" aria-labelledby="home-faq-title">
        <div className="section-heading">
          <p className="section-eyebrow">GOOD TO KNOW</p>
          <h2 id="home-faq-title">Questions before we get started?</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>What should I share in my first enquiry?</summary>
            <p>Tell us what you want to achieve, who the solution is for, and any important deadlines or constraints. A rough idea is enough to begin a conversation.</p>
          </details>
          <details>
            <summary>How do you estimate project cost and timing?</summary>
            <p>We first clarify the scope, required integrations, and priorities. Then we can discuss a proposal with the expected deliverables, milestones, and estimate.</p>
          </details>
          <details>
            <summary>Can you work with my existing product or technology?</summary>
            <p>We can review your current application and technology stack, understand the goals, and recommend an approach before proposing changes.</p>
          </details>
          <details>
            <summary>Can you continue supporting a product after launch?</summary>
            <p>Post-launch improvements and maintenance can be discussed as part of your project plan, based on the product and support you need.</p>
          </details>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className={`content ${active === "home" || active === "services" ? "content--empty" : ""}`}>
        {/* Web Development */}
        <section
          id="web"
          className={`service-detail ${active === "web" ? "active" : ""}`}
        >
          <div className="service-header service-header--with-art">
            <div className="service-header-copy">
              <h2>Web Development Services</h2>
              <p className="subtitle">
                Build responsive, scalable, and user-friendly web applications
                designed around your business requirements—from dashboards and
                admin panels to API integrations and modernized websites.
              </p>
              <button className="service-cta" onClick={openContact}>Discuss Your Web Project <span aria-hidden="true">→</span></button>
            </div>
            <ServiceArtwork type="web" />
          </div>

          <div className="tech-section">
            <h3>Technologies We Use</h3>
            <div className="tech-badges">
              <span className="tech-badge">React</span>
              <span className="tech-badge">Vite</span>
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Python</span>
              <span className="tech-badge">HTML</span>
              <span className="tech-badge">CSS</span>
              <span className="tech-badge">JavaScript</span>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <h4>Custom Web Applications</h4>
                <p>
                  Tailored web solutions designed specifically for your business
                  processes, ensuring maximum efficiency and user satisfaction.
                </p>
              </div>
              <div className="feature-card">
                <h4>Responsive Design</h4>
                <p>
                  Websites that work flawlessly across all devices - desktop,
                  tablet, and mobile - providing consistent user experience.
                </p>
              </div>
              <div className="feature-card">
                <h4>E-Commerce Platforms</h4>
                <p>
                  Complete online shopping solutions with secure payment
                  integration, inventory management, and analytics.
                </p>
              </div>
              <div className="feature-card">
                <h4>Content Management</h4>
                <p>
                  Easy-to-use CMS solutions that let you manage your website
                  content without technical knowledge.
                </p>
              </div>
              <div className="feature-card">
                <h4>API Integration</h4>
                <p>
                  Seamless integration with third-party services and APIs to
                  extend your application's functionality.
                </p>
              </div>
              <div className="feature-card">
                <h4>Performance Optimization</h4>
                <p>
                  Lightning-fast loading speeds and optimized code for better
                  user experience and SEO rankings.
                </p>
              </div>
            </div>
          </div>

          <div className="benefits-list">
            <h3>Why Choose Our Web Development Services</h3>
            <div className="benefit-item">
              <div className="benefit-icon">1</div>
              <div className="benefit-content">
                <h4>Modern Technology Stack</h4>
                <p>
                  We use the latest frameworks and tools like React and Vite to
                  build fast, scalable applications that meet current web
                  standards.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">2</div>
              <div className="benefit-content">
                <h4>Custom Solutions</h4>
                <p>
                  Every business is unique. We develop custom web applications
                  that align perfectly with your specific requirements and
                  workflows.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">3</div>
              <div className="benefit-content">
                <h4>Scalable Architecture</h4>
                <p>
                  Our applications are built to grow with your business,
                  handling increased traffic and functionality as your needs
                  evolve.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">4</div>
              <div className="benefit-content">
                <h4>Security First</h4>
                <p>
                  We implement industry-standard security practices to protect
                  your data and ensure compliance with regulations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Apps */}
        <section
          id="mobile"
          className={`service-detail ${active === "mobile" ? "active" : ""}`}
        >
          <div className="service-header service-header--with-art">
            <div className="service-header-copy">
              <h2>Mobile App Development</h2>
              <p className="subtitle">
                Bring your business to customers with practical mobile
                experiences. We build Android and iOS applications, connect them
                to your services, and help prepare releases and maintenance.
              </p>
              <button className="service-cta" onClick={openContact}>Build Your Mobile App <span aria-hidden="true">→</span></button>
            </div>
            <ServiceArtwork type="mobile" />
          </div>

          <div className="tech-section">
            <h3>Technologies We Use</h3>
            <div className="tech-badges">
              <span className="tech-badge">Flutter</span>
              <span className="tech-badge">React Native</span>
              <span className="tech-badge">Android</span>
              <span className="tech-badge">iOS</span>
              <span className="tech-badge">REST APIs</span>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <h4>Cross-Platform Apps</h4>
                <p>
                  Single codebase for both iOS and Android using Flutter,
                  reducing development time and costs significantly.
                </p>
              </div>
              <div className="feature-card">
                <h4>Native Performance</h4>
                <p>
                  Apps that feel native to each platform with smooth animations
                  and responsive user interfaces.
                </p>
              </div>
              <div className="feature-card">
                <h4>Offline Functionality</h4>
                <p>
                  Build apps that work even without internet connection, syncing
                  data when connectivity is restored.
                </p>
              </div>
              <div className="feature-card">
                <h4>Push Notifications</h4>
                <p>
                  Keep users engaged with timely notifications and updates
                  delivered directly to their devices.
                </p>
              </div>
              <div className="feature-card">
                <h4>Real-time Features</h4>
                <p>
                  Implement live chat, location tracking, and real-time data
                  synchronization for dynamic experiences.
                </p>
              </div>
              <div className="feature-card">
                <h4>App Store Deployment</h4>
                <p>
                  Complete support for publishing your app to Google Play Store
                  and Apple App Store.
                </p>
              </div>
            </div>
          </div>

          <div className="benefits-list">
            <h3>Mobile App Development Advantages</h3>
            <div className="benefit-item">
              <div className="benefit-icon">1</div>
              <div className="benefit-content">
                <h4>Flutter Expertise</h4>
                <p>
                  Our team specializes in Flutter development, creating
                  beautiful, natively compiled applications from a single
                  codebase.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">2</div>
              <div className="benefit-content">
                <h4>Cost-Effective Development</h4>
                <p>
                  Cross-platform development means you get apps for both
                  platforms at a fraction of the cost of native development.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">3</div>
              <div className="benefit-content">
                <h4>User-Centric Design</h4>
                <p>
                  We create intuitive interfaces that users love, following
                  platform-specific design guidelines for optimal experience.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">4</div>
              <div className="benefit-content">
                <h4>Ongoing Support</h4>
                <p>
                  Continuous maintenance and updates to keep your app running
                  smoothly and compatible with latest OS versions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Solutions */}
        <section
          id="cloud"
          className={`service-detail ${active === "cloud" ? "active" : ""}`}
        >
          <div className="service-header service-header--with-art">
            <div className="service-header-copy">
              <h2>Cloud Solutions</h2>
              <p className="subtitle">
                Plan cloud infrastructure and deployment workflows suited to
                your product, including application integration, environments,
                release support, and database foundations.
              </p>
              <button className="service-cta" onClick={openContact}>Plan Your Cloud Solution <span aria-hidden="true">→</span></button>
            </div>
            <ServiceArtwork type="cloud" />
          </div>

          <div className="tech-section">
            <h3>Technologies We Use</h3>
            <div className="tech-badges">
              <span className="tech-badge">AWS</span>
              <span className="tech-badge">Firebase</span>
              <span className="tech-badge">MongoDB</span>
              <span className="tech-badge">Neon PostgreSQL</span>
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Python</span>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <h4>Real-time Data Sync</h4>
                <p>
                  Instant data synchronization across all devices and platforms,
                  ensuring everyone has the latest information.
                </p>
              </div>
              <div className="feature-card">
                <h4>Scalable Infrastructure</h4>
                <p>
                  Cloud solutions that automatically scale based on demand,
                  handling traffic spikes without performance issues.
                </p>
              </div>
              <div className="feature-card">
                <h4>Database Management</h4>
                <p>
                  Expert database design and optimization for fast queries and
                  efficient data storage using Firestore and SQL.
                </p>
              </div>
              <div className="feature-card">
                <h4>Data Security</h4>
                <p>
                  Enterprise-grade security with encryption, authentication, and
                  access control to protect your sensitive data.
                </p>
              </div>
              <div className="feature-card">
                <h4>Backup &amp; Recovery</h4>
                <p>
                  Automated backup systems and disaster recovery plans to ensure
                  your data is never lost.
                </p>
              </div>
              <div className="feature-card">
                <h4>Cloud Migration</h4>
                <p>
                  Smooth transition of your existing systems to cloud
                  infrastructure with minimal downtime.
                </p>
              </div>
            </div>
          </div>

          <div className="benefits-list">
            <h3>Cloud Solutions Benefits</h3>
            <div className="benefit-item">
              <div className="benefit-icon">1</div>
              <div className="benefit-content">
                <h4>Firestore Integration</h4>
                <p>
                  Specialized expertise in Firestore for building real-time
                  applications with seamless data synchronization.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">2</div>
              <div className="benefit-content">
                <h4>Always Accessible</h4>
                <p>
                  Your data and applications are accessible from anywhere, on
                  any device, at any time.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">3</div>
              <div className="benefit-content">
                <h4>Cost Optimization</h4>
                <p>
                  Pay only for what you use with cloud services, reducing
                  infrastructure costs and eliminating hardware maintenance.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">4</div>
              <div className="benefit-content">
                <h4>High Availability</h4>
                <p>
                  Consider resilience, backups, and monitoring appropriate to
                  your application and its operational requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Solutions */}
        <section
          id="ai"
          className={`service-detail ${active === "ai" ? "active" : ""}`}
        >
          <div className="service-header service-header--with-art">
            <div className="service-header-copy">
              <h2>AI Integrations &amp; Development</h2>
              <p className="subtitle">
                Make workflows smarter with custom AI tools, assistants, and
                AI-enabled applications designed around real business use cases
                and your information workflows.
              </p>
              <button className="service-cta" onClick={openContact}>Explore AI Solutions <span aria-hidden="true">→</span></button>
            </div>
            <ServiceArtwork type="ai" />
          </div>

          <div className="tech-section">
            <h3>AI Technologies We Use</h3>
            <div className="tech-badges">
              <span className="tech-badge">OpenAI GPT</span>
              <span className="tech-badge">Custom GPTs</span>
              <span className="tech-badge">RAG (Retrieval-Augmented Gen)</span>
              <span className="tech-badge">
                Vector DBs (pgvector, Pinecone, etc.)
              </span>
              <span className="tech-badge">Node.js · TypeScript</span>
              <span className="tech-badge">Firebase &amp; Cloud Functions</span>
              <span className="tech-badge">Webhook &amp; API Integrations</span>
              <span className="tech-badge">AI Workflows / Orchestration</span>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <h4>AI Chatbots for Web &amp; Mobile</h4>
                <p>
                  Embed AI assistants on your website or inside your mobile apps
                  to answer FAQs, guide users, and collect leads in natural
                  language.
                </p>
              </div>
              <div className="feature-card">
                <h4>Domain-Specific GPT Assistants</h4>
                <p>
                  Custom GPTs trained on your documentation, SOPs, and knowledge
                  base – ideal for CA tools, internal support, or
                  industry-specific workflows.
                </p>
              </div>
              <div className="feature-card">
                <h4>RAG Systems on Your Data</h4>
                <p>
                  Build retrieval-augmented generation flows that search your
                  PDFs, spreadsheets, and databases before generating precise
                  answers.
                </p>
              </div>
              <div className="feature-card">
                <h4>AI Automation &amp; Back-Office Flows</h4>
                <p>
                  Use AI to summarize reports, draft emails, generate invoices,
                  and update CRMs or Firestore documents via APIs and Cloud
                  Functions.
                </p>
              </div>
              <div className="feature-card">
                <h4>AI for Mobile &amp; React Apps</h4>
                <p>
                  Integrate chatbots and AI features directly into React / React
                  Native frontends with secure token handling and usage limits.
                </p>
              </div>
              <div className="feature-card">
                <h4>Analytics &amp; Usage Controls</h4>
                <p>
                  Quota management, logging, and observability so you can track
                  token usage, user behavior, and performance over time.
                </p>
              </div>
            </div>
          </div>

          <div className="benefits-list">
            <h3>Why Add AI with Kannizcon</h3>
            <div className="benefit-item">
              <div className="benefit-icon">1</div>
              <div className="benefit-content">
                <h4>End-to-End Product Thinking</h4>
                <p>
                  We handle the entire stack – UI, backend, databases, and AI
                  layer – so your assistant feels like part of the product, not
                  a bolt-on widget.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">2</div>
              <div className="benefit-content">
                <h4>Secure Data Handling</h4>
                <p>
                  We design prompts, retrieval, and access rules carefully so
                  that sensitive documents and tenant data remain isolated and
                  protected.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">3</div>
              <div className="benefit-content">
                <h4>Optimized Costs</h4>
                <p>
                  Token usage optimization, caching, and batching so your AI
                  features stay fast without blowing up your monthly bill.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">4</div>
              <div className="benefit-content">
                <h4>Real Business Impact</h4>
                <p>
                  We focus on use-cases that save time, reduce errors, and
                  create new revenue – not just “playground demos”.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Software */}
        <section
          id="custom"
          className={`service-detail ${active === "custom" ? "active" : ""}`}
        >
          <div className="service-header service-header--with-art">
            <div className="service-header-copy">
              <h2>Custom Software Development</h2>
              <p className="subtitle">
                Create business applications, SaaS products, data workflows, and
                digital content tools shaped to your processes, users, and
                requirements.
              </p>
              <button className="service-cta" onClick={openContact}>Discuss Your Software Project <span aria-hidden="true">→</span></button>
            </div>
            <ServiceArtwork type="custom" />
          </div>

          <div className="tech-section">
            <h3>Technologies We Use</h3>
            <div className="tech-badges">
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Python</span>
              <span className="tech-badge">React</span>
              <span className="tech-badge">Flutter</span>
              <span className="tech-badge">MongoDB</span>
              <span className="tech-badge">Neon PostgreSQL</span>
              <span className="tech-badge">REST APIs</span>
              <span className="tech-badge">Microservices</span>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <h4>Business Applications</h4>
                <p>
                  Build custom applications around operational workflows,
                  reporting needs, and the people who use them.
                </p>
              </div>
              <div className="feature-card">
                <h4>Workflow Automation</h4>
                <p>
                  Automate repetitive tasks and streamline business processes to
                  save time and reduce human error.
                </p>
              </div>
              <div className="feature-card">
                <h4>Client Integration</h4>
                <p>
                  Seamless integration with your existing systems and databases,
                  allowing real-time status monitoring.
                </p>
              </div>
              <div className="feature-card">
                <h4>Custom Reporting</h4>
                <p>
                  Generate detailed reports and analytics tailored to your
                  specific business metrics and KPIs.
                </p>
              </div>
              <div className="feature-card">
                <h4>Enterprise Solutions</h4>
                <p>
                  Large-scale software systems designed to handle complex
                  business operations across departments.
                </p>
              </div>
              <div className="feature-card">
                <h4>Legacy Modernization</h4>
                <p>
                  Update and modernize your existing software systems with new
                  technologies and improved functionality.
                </p>
              </div>
            </div>
          </div>

          <div className="benefits-list">
            <h3>Custom Software Advantages</h3>
            <div className="benefit-item">
              <div className="benefit-icon">1</div>
              <div className="benefit-content">
                <h4>Requirements-led planning</h4>
                <p>
                  Start with your goals and constraints to define a suitable
                  scope, delivery approach, and technical direction.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">2</div>
              <div className="benefit-content">
                <h4>Process improvement</h4>
                <p>
                  Identify repetitive tasks and information bottlenecks that
                  could be improved with software or automation.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">3</div>
              <div className="benefit-content">
                <h4>Perfect Fit</h4>
                <p>
                  Shape features around your actual users and requirements,
                  rather than starting from a generic product template.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">4</div>
              <div className="benefit-content">
                <h4>Full Ownership</h4>
                <p>
                  Source-code ownership, licensing, and handover are defined
                  in the project agreement before development begins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className={`service-detail ${active === "pricing" ? "active" : ""}`}
        >
          <div className="service-header">
            <h2>Pricing &amp; Engagement Models</h2>
            <p className="subtitle">
              Flexible options to match your project size and timeline. All
              pricing is indicative – final quotes are shared after a quick
              discovery call.
            </p>
          </div>
          <div className="pricing-wrap">
            <div className="pricing-card">
              <div>
                <div className="pricing-tag">Starter</div>
                <div className="pricing-price">Ideal for MVPs &amp; small apps</div>
                <div className="pricing-note">Typical range: 2 – 4 weeks</div>
                <ul>
                  <li>Single web app (React + Vite)</li>
                  <li>Responsive UI, basic auth &amp; forms</li>
                  <li>Deployment to Vercel / Firebase Hosting</li>
                  <li>Email / WhatsApp support during build</li>
                </ul>
              </div>
              <div className="pricing-cta">
                <button onClick={openContact}>Enquire for Exact Quote</button>
              </div>
            </div>
            <div className="pricing-card">
              <div>
                <div className="pricing-tag">Growth</div>
                <div className="pricing-price">Web + Mobile + Cloud</div>
                <div className="pricing-note">Typical range: 4 – 8 weeks</div>
                <ul>
                  <li>Web app + React Native mobile app</li>
                  <li>Firebase Auth, Firestore, Cloud Functions</li>
                  <li>Production-ready CI/CD &amp; monitoring</li>
                  <li>App Store / Play Store submission help</li>
                </ul>
              </div>
              <div className="pricing-cta">
                <button onClick={openContact}>Schedule a Call</button>
              </div>
            </div>
            <div className="pricing-card">
              <div>
                <div className="pricing-tag">Enterprise</div>
                <div className="pricing-price">
                  Custom Software &amp; Integrations
                </div>
                <div className="pricing-note">Long-term / retainer friendly</div>
                <ul>
                  <li>Production management &amp; workflow systems</li>
                  <li>Multi-role access, analytics &amp; reporting</li>
                  <li>Legacy modernization &amp; system integration</li>
                  <li>Ongoing maintenance &amp; SLA-based support</li>
                </ul>
              </div>
              <div className="pricing-cta">
                <button onClick={openContact}>Discuss Enterprise Plan</button>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className={`service-detail ${active === "about" ? "active" : ""}`}
        >
          <div className="service-header">
            <h2>About Kannizcon</h2>
            <p className="subtitle">
              Your trusted partner in digital transformation and software
              innovation
            </p>
          </div>

          <div className="about-section">
            <h3>Who We Are</h3>
            <p>
              Kannizcon IT Enabling Services helps businesses, startups,
              entrepreneurs, and publishers turn ideas into useful digital
              products. We connect technology decisions to business goals,
              workflows, and the needs of the people who use each solution.
            </p>
            <p>
              Our work spans custom software, AI-powered tools, mobile
              applications, cloud technology, SaaS products, and digital
              publishing services—from planning and development to deployment
              and ongoing support.
            </p>
          </div>

          <div className="about-section">
            <h3>Our Expertise</h3>
            <p>
              We specialize in developing customized software solutions across a
              wide range of platforms and technologies:
            </p>
            <ul>
              <li>
                <strong>Programming Languages:</strong> C, Java, Python, .NET,
                Dart
              </li>
              <li>
                <strong>Web Technologies:</strong> React, Vite, HTML5, CSS3,
                JavaScript
              </li>
              <li>
                <strong>Mobile Development:</strong> Flutter for cross-platform
                applications
              </li>
              <li>
                <strong>Cloud Services:</strong> Firestore, Firebase, AWS, Azure
              </li>
              <li>
                <strong>Database Solutions:</strong> SQL, NoSQL, Firestore,
                Cloud Databases
              </li>
              <li>
                <strong>Enterprise Applications:</strong> Custom business
                software and workflow systems
              </li>
            </ul>
          </div>

          <div className="about-section">
            <h3>Our Approach</h3>
            <p>
              We believe in building long-term partnerships with our clients.
              Our development process is collaborative, transparent, and focused
              on delivering measurable results. We work closely with you to
              understand your business challenges and create solutions that
              address your specific needs.
            </p>
            <p>
              Our proprietary production management and tracking system,
              developed in-house, demonstrates our commitment to innovation and
              excellence. This web-based solution has proven its effectiveness
              in managing complex workflows and integrating seamlessly with
              client systems.
            </p>
          </div>

          <div className="about-section">
            <h3>Why work with Kannizcon?</h3>
            <ul>
              <li>
                Experienced team with diverse technical expertise across
                multiple platforms
              </li>
              <li>
                Proven track record of delivering high-quality software
                solutions
              </li>
              <li>
                Custom development tailored to your specific business
                requirements
              </li>
              <li>
                Transparent project management with real-time status monitoring
              </li>
              <li>
                Commitment to improving turnaround time and overall quality
              </li>
              <li>Comprehensive support throughout development and beyond</li>
              <li>
                Integration capabilities with existing client systems and
                databases
              </li>
              <li>Focus on scalable, maintainable, and secure solutions</li>
            </ul>
          </div>
        </section>

        {/* Terms & Conditions */}
        <section
          id="terms"
          className={`service-detail ${active === "terms" ? "active" : ""}`}
        >
          <div className="service-header">
    <h2>Terms &amp; Conditions</h2>
    <p className="subtitle">
      These Terms &amp; Conditions apply to all websites, mobile apps, custom GPTs,
      SaaS products and software development services offered by <strong>Kannizcon</strong> (“Kannizcon”, “we”, “our”, “us”).
      By accessing or using any of our services or making a payment, you agree to be
      bound by these Terms.
    </p>

    <h3>1. Services</h3>
    <p>
      Kannizcon provides software development, consulting, SaaS subscriptions,
      AI-based tools, mobile and web applications, and related IT services.
      Specific features, scope, timelines and deliverables will be defined in
      project proposals, statements of work, service orders, or subscription plans
      (collectively, “Service Agreements”).
    </p>

    <h3>2. Eligibility &amp; Accounts</h3>
    <ul>
      <li>You must be at least 18 years old and legally capable of entering into a binding contract.</li>
      <li>You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.</li>
      <li>You agree to provide accurate, current and complete information when creating or updating your account.</li>
    </ul>

    <h3>3. Payments &amp; Billing</h3>
    <p>
      Fees for our services may be charged as one-time project fees, retainers,
      or recurring subscriptions (monthly, annual, or otherwise) as agreed in
      the relevant Service Agreement.
    </p>
    <ul>
      <li>
        Payments may be processed through third-party payment gateways and platforms,
        including but not limited to Razorpay, Stripe, PayPal, UPI apps, credit/debit
        card processors, and app stores (Google Play, Apple App Store, etc.).
      </li>
      <li>
        By initiating a payment, you agree to be bound by the applicable terms and
        privacy policies of those payment providers in addition to these Terms.
      </li>
      <li>
        All fees are typically payable in advance and are non-refundable unless
        explicitly stated otherwise in a written agreement or in our separate
        Refund &amp; Cancellation Policy.
      </li>
      <li>
        You are responsible for any taxes, duties or government charges applicable
        to the services, except where we explicitly agree to collect and remit them.
      </li>
    </ul>

    <h3>4. Refund &amp; Cancellation</h3>
    <p>
      Refunds and cancellations are governed by Kannizcon’s <strong>Refund &amp; Cancellation Policy</strong>. In general, once a billing
      period or one-time project has started, fees are non-refundable except where:
    </p>
    <ul>
      <li>a written agreement specifically provides for a refund, or</li>
      <li>a refund is required under applicable law or payment-gateway rules.</li>
    </ul>
    <p>
      Any refund, if approved, will be processed through the original payment method
      where reasonably possible.
    </p>

    <h3>5. Use of Our Services</h3>
    <p>You agree that you will not:</p>
    <ul>
      <li>Use our services for any illegal, harmful, fraudulent or abusive activities.</li>
      <li>Attempt to gain unauthorized access to our systems or other users’ data.</li>
      <li>Copy, resell, sublicense or reverse-engineer our proprietary software, models or code, except where expressly permitted.</li>
      <li>Upload or transmit malicious code, spam or content that violates laws or third-party rights.</li>
    </ul>

    <h3>6. AI &amp; Automation Disclaimer</h3>
    <p>
      Some Kannizcon solutions use AI models and automation (including third-party
      AI providers). Outputs are generated based on patterns in data and may be
      incorrect, incomplete or out of date.
    </p>
    <ul>
      <li>All AI outputs are suggestions or drafts and must be reviewed by a qualified professional before being relied upon.</li>
      <li>Our tools do not constitute legal, tax, financial, medical or any other regulated professional advice.</li>
    </ul>

    <h3>7. Intellectual Property</h3>
    <p>
      Unless otherwise agreed in a written Service Agreement:
    </p>
    <ul>
      <li>Kannizcon retains ownership of all underlying source code, frameworks, libraries, models and tools developed by us.</li>
      <li>
        You retain ownership of your own brand assets, data, content and any
        confidential materials you provide to us.
      </li>
      <li>
        Custom software and deliverables may be licensed or assigned to you as
        per the project contract (for example, full source-code transfer, limited
        license, or SaaS usage rights).
      </li>
    </ul>

    <h3>8. Data Protection &amp; Privacy</h3>
    <p>
      Our handling of personal data is described in the <strong>Privacy Policy</strong>. By using our services, you consent to such
      processing. You are responsible for ensuring that any data you share with us
      from your clients or employees has been collected lawfully and with the
      necessary permissions.
    </p>

    <h3>9. Third-Party Services &amp; Integrations</h3>
    <p>
      Our solutions may integrate with external services (e.g. Firebase, Supabase,
      Razorpay, email providers, analytics tools, OpenAI, cloud platforms).
      We are not responsible for the availability, security or performance of
      third-party services and their own terms and policies will apply.
    </p>

    <h3>10. Limitation of Liability</h3>
    <p>
      To the maximum extent permitted by law, Kannizcon and
      its directors, employees and partners will not be liable for any indirect,
      incidental, special or consequential damages, loss of profits, loss of data,
      penalties or business interruption arising out of or related to your use of
      our services, even if we have been advised of the possibility of such damages.
    </p>
    <p>
      Our total aggregate liability for any claim relating to the services will be
      limited to the amount you paid for the services in the three (3) months
      immediately preceding the event giving rise to the claim, unless a different
      cap is specified in a signed agreement.
    </p>

    <h3>11. Governing Law &amp; Dispute Resolution</h3>
    <p>
      These Terms are governed by the laws of India. Any disputes will be subject
      to the exclusive jurisdiction of the courts located in Tamil Nadu, India,
      unless otherwise agreed in writing.
    </p>

    <h3>12. Changes to These Terms</h3>
    <p>
      We may update these Terms &amp; Conditions from time to time. The latest
      version will always be available on this page with an updated effective date.
      Continued use of our services after changes means you accept the revised Terms.
    </p>

    <h3>13. Contact</h3>
    <p>
      For questions about these Terms &amp; Conditions, please contact:<br />
      Please use the <a href="/contact" className="text-blue-600 underline">project enquiry form</a>.
    </p>
  </div>
        </section>

        {/* Shipping Policy */}
        <section
          id="shipping"
          className={`service-detail ${
            active === "shipping" ? "active" : ""
          }`}
        >
          <div className="service-header">
            <h2>Shipping &amp; Delivery Policy</h2>
            <p className="subtitle">
              Since Kannizcon provides digital software and IT services, no
              physical shipping applies.
            </p>
            <ul>
              <li>
                Deliverables are shared electronically via secure platforms.
              </li>
              <li>
                All project milestones and delivery timelines are defined in
                advance.
              </li>
              <li>
                Support and updates are provided through digital channels.
              </li>
            </ul>
          </div>
        </section>

        {/* Privacy Policy */}
        <section
          id="privacy"
          className={`service-detail ${active === "privacy" ? "active" : ""}`}
        >
          <div className="service-header">
    <h2>Privacy Policy</h2>
    <p className="subtitle">
      This Privacy Policy explains how <strong>Kannizcon</strong> (“Kannizcon”, “we”, “our”, “us”) collects, uses and protects information
      when you use our websites, apps, custom GPTs, SaaS platforms, and related
      services (collectively, the “Services”).
    </p>

    <h3>1. Information We Collect</h3>
    <p>Depending on which service you use, we may collect:</p>
    <ul>
      <li><strong>Contact Details:</strong> name, email address, phone number, organization name.</li>
      <li>
        <strong>Account &amp; Usage Data:</strong> login details, activity logs,
        device information, IP address, timestamps and technical diagnostics.
      </li>
      <li>
        <strong>Business &amp; Project Data:</strong> requirements, documents, files,
        prompts and inputs you provide so that we can deliver software or AI outputs.
      </li>
      <li>
        <strong>Payment Information:</strong> limited billing details and payment
        status. Card / bank details are processed directly by third-party payment
        gateways and are not stored by us.
      </li>
    </ul>

    <h3>2. How We Use Your Information</h3>
    <ul>
      <li>To provide, operate and improve our software, apps and AI tools.</li>
      <li>To create and manage user accounts and customer projects.</li>
      <li>To communicate with you about support, updates, invoices and security alerts.</li>
      <li>To configure and maintain integrations with third-party platforms (e.g. Firebase, Supabase, OpenAI, email services).</li>
      <li>To comply with legal obligations and prevent misuse or fraud.</li>
    </ul>
    <p>We do <strong>not sell</strong> your personal data to third parties.</p>

    <h3>3. Third-Party Services &amp; Payment Gateways</h3>
    <p>
      We may use third-party providers for hosting, databases, analytics, AI
      processing, communication and payments, including but not limited to
      Firebase, Supabase, Render, Vercel, OpenAI, Razorpay, Stripe, PayPal,
      Google Play, Apple App Store and email services.
    </p>
    <ul>
      <li>These providers process data on our behalf or as independent controllers under their own privacy policies.</li>
      <li>Payment gateways receive your payment details directly; Kannizcon does not ask you to send full card or bank information to us.</li>
    </ul>

    <h3>4. Data Retention</h3>
    <p>
      We retain data for as long as necessary to provide the Services, comply
      with legal obligations, resolve disputes and enforce agreements. Where an
      account or project is closed, we will delete or anonymize personal data
      within a reasonable period, subject to backup and legal retention requirements.
    </p>

    <h3>5. Your Rights</h3>
    <p>Subject to applicable law, you may have the right to:</p>
    <ul>
      <li>Request access to the personal data we hold about you.</li>
      <li>Request correction of inaccurate or incomplete data.</li>
      <li>Request deletion of your data, where legally permitted.</li>
      <li>Object to or restrict certain types of processing.</li>
    </ul>
    <p>
      To exercise these rights, use the <a href="/contact" className="text-blue-600 underline">project enquiry form</a>.
    </p>

    <h3>6. Security</h3>
    <p>
      We use reasonable technical and organizational measures (such as HTTPS,
      access controls and cloud-provider security features) to protect your data.
      However, no system is 100% secure, and you use our Services at your own risk.
    </p>

    <h3>7. Children’s Privacy</h3>
    <p>
      Our business-focused Services are not directed to children under 16, and we
      do not knowingly collect personal data from minors for these services. If you
      believe a minor has provided data to us, please contact us so we can delete it.
    </p>

    <h3>8. Changes to This Policy</h3>
    <p>
      We may update this Privacy Policy from time to time. The latest version will
      always be available on this page with an updated effective date. Continued use
      of the Services after changes means you accept the revised Policy.
    </p>

    <h3>9. Contact Us</h3>
    <p>
      For privacy questions, data requests or complaints, please contact:<br />
      Please use the <a href="/contact" className="text-blue-600 underline">project enquiry form</a>.
    </p>
  </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className={`service-detail ${active === "contact" ? "active" : ""}`}
        >
          <div className="service-header">
            <h2>Contact &amp; Project Enquiry</h2>
            <p className="subtitle">
              Have a project or idea? Share a few details and we'll get back
              with suggestions and a quote.
            </p>
            <p className="contact-email">
              Email us at{" "}
              <a href="mailto:dhanasekaransjh6@gmail.com">
                dhanasekaransjh6@gmail.com
              </a>
              {" · "}
              <a href="mailto:codeverseteam@aicodeverse.com">
                codeverseteam@aicodeverse.com
              </a>
              {" · "}
              <a href="https://www.aicodeverse.com/" target="_blank" rel="noreferrer">
                www.aicodeverse.com
              </a>
            </p>
            <p className="contact-email">
              Phone: <a href="tel:+919600887711">+91 96008 87711</a>
              {" · "}
              <a href="https://wa.me/919600887711" target="_blank" rel="noreferrer">WhatsApp</a>
              <span> · Tamil Nadu, India · India and international projects</span>
            </p>

            <div className="enquiry-wrapper">
              <div className="enquiry-card">
                <h3>Quick Project Enquiry</h3>
                <p style={{ fontSize: 12, color: "#555" }}>
                  Tell us what you’re building, and our team will follow up with next steps.
                </p>
                <EnquiryForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a className="footer-brand" href="/" aria-label="Kannizcon home">
          <img src={LogoIcon} className="footer-logo" alt="" />
        </a>
        <p>Kannizcon IT Enabling Services — Your Partner in Digital Transformation.</p>
        <nav className="footer-links" aria-label="Site and legal">
          <button onClick={() => handleNavClick("home")}>Home</button>
          <button onClick={() => handleNavClick("services")}>Services</button>
          <button onClick={() => handleNavClick("ai")}>AI Solutions</button>
          <button onClick={() => handleNavClick("about")}>About Us</button>
          <button onClick={openContact}>Contact Us</button>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/refund">Refunds</a>
          <a href="/payment-gateways">Payment gateways</a>
          <a href="https://www.aicodeverse.com/" target="_blank" rel="noreferrer">CodeVerse AI</a>
        </nav>
        <span>© {new Date().getFullYear()} Kannizcon IT Enabling Services. All rights reserved.</span>
      </footer>
      <Chatbot />
    </>
  );
}