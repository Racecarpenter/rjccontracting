import Link from "next/link";
import {
  ASSETS,
  PageHero,
  SectionHeader,
  values,
} from "../components/RjcShared";

export const metadata = {
  title: "About Us | RJC Contracting",
  description:
    "Learn about RJC Contracting's history, values, and commitment to excellence in civil engineering and concrete construction in Arizona.",
};

export default function AboutPage() {
  return (
    <main className="page active">
      <PageHero
        tag="Our Story"
        title="About RJC Contracting"
        text="A Mesa, Arizona-based civil engineering and construction firm built on integrity, technical expertise, and a commitment to engineered excellence."
      />

      <section>
        <div className="container">
          <div className="about-layout">
            <div className="about-img-wrap">
              <img
                src={ASSETS.project2}
                alt="RJC Contracting project work"
              />
            </div>

            <div className="about-text">
              <span className="section-tag">Who We Are</span>

              <h2>Decades of Experience. Built Right.</h2>

              <h2>City of Phoenix Certified SBE</h2>

              <div className="divider" />

              <p>
                RJC Contracting, Inc. was founded on the belief that
                great construction starts with great engineering — and
                that the two should never be separated. Based in Mesa,
                Arizona, we have spent decades building some of the most
                technically demanding concrete and civil structures in
                the Southwest.
              </p>

              <p>
                Our motto is simple: do it right the first time. From
                major transportation projects to complex vertical
                construction, RJC has earned its reputation one project
                at a time.
              </p>

              <p>
                We work with public agencies, general contractors,
                developers, and engineers who need a partner they can
                trust — someone who shows up, knows the work, and
                delivers what was promised.
              </p>

              <Link className="btn-primary" href="/contact">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="values-grid">
        <div className="container">
          <SectionHeader
            tag="Our Foundation"
            title="What We Stand For"
            light
          />

          <div className="values-cards">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <h4>{value.title}</h4>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}