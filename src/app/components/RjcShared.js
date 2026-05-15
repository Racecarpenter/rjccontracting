import Link from "next/link";

export const ASSET_BASE_URL = process.env.NEXT_PUBLIC_RJC_ASSET_BASE_URL || "";

export function assetPath(filename) {
  const cleanBase = ASSET_BASE_URL.replace(/\/$/, "");
  const encodedFilename = filename
    .split("/")
    .map(encodeURIComponent)
    .join("/");

  return `${cleanBase}/${encodedFilename}`;
}

export const ASSETS = {
  logo: assetPath("RJC_Logo.png"),
  hero: assetPath("logo-2.png"),
  project1: assetPath("1607 Day 1 Photo 2.jpg"),
  project2: assetPath("2012-08-27 08.51.04.jpg"),
  project3: assetPath("2012-08-27 09.17.15.jpg"),
  project4: assetPath("2012-10-18 11.05.47.jpg"),
  project5: assetPath("DSC04380.jpg"),
  project6: assetPath("Feb 24 2016 3.jpg"),
  project7: assetPath("IMG_3540.jpg"),
  project8: assetPath("IMG_6169.jpg"),
  project9: assetPath("Sky Harbor Security Wall.jpg"),
  project10: assetPath("Liberty Parking Garage Phase III.jpg"),
  project11: assetPath("BCS Demo Fascia Removal Sky Harbor.jpg"),
  project12: assetPath("2015-04-16_07-46-16_166.jpg"),
  project13: assetPath("2014-12-16_14-15-32_958.jpg"),
  project14: assetPath("IMG_4609.jpeg"),
  project15: assetPath("IMG_6185 (3).jpeg"),
  project17: assetPath("Liberty Parking Garage Phase III.jpg"),
  project18: assetPath("IMG_3022.jpeg"),
  about: assetPath("about.jpg"),
};

export const services = [
  {
    title: "Concrete Structures",
    text:
      "Bridges, retaining walls, culverts, tilt-up panels, and complex formed structures. We handle the full scope — form, pour, and finish.",
  },
  {
    title: "Onsite Supervision",
    text:
      "Experienced project supervision providing quality control, schedule management, and daily oversight for civil and structural construction.",
  },
  {
    title: "Engineering Consulting",
    text:
      "Technical consulting services including reviews, plans, project troubleshooting, and expert guidance for public and private clients.",
  },
];

export const serviceDetails = [
  {
    num: "01",
    title: "Concrete Structures",
    paragraphs: [
      "RJC has built a reputation across Arizona and the Southwest for delivering high-complexity concrete structures on time and to spec. Our crews have the experience to tackle challenging pours, complex formwork systems, and precision-critical structural elements that other contractors avoid.",
      "From transportation infrastructure to commercial and public facilities, we bring the tools, workforce, and engineering knowledge to deliver results.",
    ],
    tags: [
      "Bridge Structures",
      "Architectural & Civil Precast Structure Erecting",
      "Culverts & Drainage",
      "Stadium Seating",
      "Formed Concrete",
      "Foundation Systems",
    ],
  },
  {
    num: "02",
    title: "Onsite Supervision",
    paragraphs: [
      "Experienced field leadership is the difference between a project that stays on schedule and one that doesn’t. RJC provides seasoned superintendents and foremen available for embedded project support — whether as owner’s representatives, construction managers, or subcontractor oversight.",
      "Our supervisors have decades of hands-on experience with large public works, transportation, and vertical construction projects throughout Arizona.",
    ],
    tags: [
      "Project Superintendents",
      "Quality Control",
      "Schedule Management",
      "Safety Oversight",
      "Owner’s Representative",
      "Subcontractor Coordination",
    ],
  },
  {
    num: "03",
    title: "Engineering Consulting",
    paragraphs: [
      "Drawing on decades of civil engineering and hands-on construction experience, RJC provides technical consulting services to contractors, developers, municipalities, and engineers of record. We bring practical field knowledge to projects that need more than just paper solutions.",
    ],
    tags: [
      "Constructability Reviews",
      "Sequencing & Scheduling",
      "Expert Witness",
      "Project Troubleshooting",
      "Value Engineering",
      "Technical Documentation",
    ],
  },
];

export const projects = [
  { image: ASSETS.project1 },
  { image: ASSETS.project2 },
  { image: ASSETS.project3 },
  { image: ASSETS.project4 },
  { image: ASSETS.project5 },
  { image: ASSETS.project6 },
  { image: ASSETS.project7 },
  { image: ASSETS.project8 },
  { image: ASSETS.project9 },
  { image: ASSETS.project10 },
  { image: ASSETS.project11 },
  { image: ASSETS.project12 },
  { image: ASSETS.project13 },
  { image: ASSETS.project14 },
  { image: ASSETS.project15 },
  { image: ASSETS.project17 },
  { image: ASSETS.project18 },
];

export const projectPreview = [
  { image: ASSETS.project1, label: "Concrete Experts", tall: true },
  { image: ASSETS.project2, label: "30 Years of Excellence" },
  { image: ASSETS.project3, label: "Professionals in the Field" },
];

export const values = [
  {
    title: "Integrity",
    text: "We say what we’ll do and do what we say. Every estimate, every schedule, every promise.",
  },
  {
    title: "Precision",
    text: "Civil engineering demands zero tolerance for error. Our field experience means we get it right the first time.",
  },
  {
    title: "Experience",
    text: "Decades of complex project history give our team insight that no textbook can provide.",
  },
  {
    title: "Partnership",
    text: "We treat clients as partners, not transactions. Long-term relationships are how we measure success.",
  },
];

export function SectionHeader({ tag, title, light = false, children }) {
  return (
    <>
      <span className="section-tag">{tag}</span>
      <h2 className={`section-title ${light ? "light" : ""}`}>{title}</h2>
      <div className="divider" />
      {children}
    </>
  );
}

export function PageHero({ tag, title, text }) {
  return (
    <div className="page-hero">
      <div className="container">
        <span className="section-tag page-hero-tag">{tag}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}

export function CallToAction({
  title = "“Engineered Excellence”",
  text = "Ready to bring your project to life? Let’s talk about what RJC can do for you.",
}) {
  return (
    <div className="cta-band">
      <div className="container">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>

        <Link className="btn-dark" href="/contact">
          Request a Free Quote
        </Link>
      </div>
    </div>
  );
}

export function FormInput({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}

export function ContactItem({ icon, label, text }) {
  return (
    <div className="contact-item">
      <div className="contact-icon">{icon}</div>
      <div className="contact-item-text">
        <h4>{label}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

export function Footer() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Request a Quote", href: "/contact" },
  ];

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <img
              className="footer-logo"
              src={ASSETS.logo}
              alt="RJC Contracting logo"
            />
            <p className="footer-tagline">
              Civil engineering, concrete construction, and consulting services
              delivered with precision and professionalism.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:kristi@rjccontracting.com">
                  kristi@rjccontracting.com
                </a>
              </li>
              <li>Mesa, Arizona</li>
              <li>Licensed &amp; Insured</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            © 2025 RJC Contracting, Inc. All rights reserved.
          </span>

          <span className="footer-loc">
            Website built by{" "}
            <a href="mailto:racecarpenter@gmail.com?subject=Build%20my%20website">
              Race Carpenter
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}