const SITE_URL = "https://www.kannizconites.com";

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export function setPageSeo({ title, description, keywords, path = "/" }) {
  const canonical = new URL(path, SITE_URL).toString();
  document.title = title;
  document.documentElement.lang = "en";

  setMeta("name", "description", description);
  setMeta("name", "keywords", keywords);
  setMeta("name", "robots", "index, follow, max-image-preview:large");
  setMeta("property", "og:type", "website");
  setMeta("property", "og:site_name", "KANNIZCON");
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("property", "og:url", canonical);
  setMeta("property", "og:image", `${SITE_URL}/kannizcon-icon.svg`);
  setMeta("name", "twitter:card", "summary");
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);
  setLink("canonical", canonical);
}

export function setOrganizationStructuredData() {
  let script = document.getElementById("kannizcon-structured-data");
  if (!script) {
    script = document.createElement("script");
    script.id = "kannizcon-structured-data";
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kannizcon IT Enabling Services",
    alternateName: "KANNIZCON",
    url: SITE_URL,
    logo: `${SITE_URL}/kannizcon-icon.svg`,
    description:
      "Kannizcon IT Enabling Services provides custom software, web and mobile apps, AI tools, SaaS, cloud and database solutions, digital publishing, and data services.",
    email: ["dhanasekaransjh6@gmail.com", "codeverseteam@aicodeverse.com"],
    telephone: "+919600887711",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Custom software development",
      "Web application development",
      "Mobile app development",
      "SaaS product development",
      "Cloud solutions",
      "Database solutions",
      "Artificial intelligence",
      "DevOps",
      "eBook publishing",
      "Data processing",
      "IT consulting",
    ],
  });
}
