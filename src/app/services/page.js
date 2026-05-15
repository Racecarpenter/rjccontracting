import {
  serviceDetails,
  PageHero,
  CallToAction,
} from "../components/RjcShared";

export const metadata = {
  title: "Services & Capabilities | RJC Contracting",
  description:
    "Explore the civil engineering and concrete construction services offered by RJC Contracting in Arizona.",
};

export default function ServicesPage() {
  return (
    <main className="page active">
      <PageHero
        tag="Our Expertise"
        title="Services & Capabilities"
        text="RJC Contracting specializes in civil engineering and concrete construction services that demand experience, precision, and professional accountability."
      />

      <section className="services-detail">
        <div className="container">
          {serviceDetails.map((service) => (
            <article className="service-row" key={service.title}>
              <div className="service-row-num">{service.num}</div>

              <div>
                <h3>{service.title}</h3>

                {service.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CallToAction
        title="Have a Project in Mind?"
        text="Contact us to discuss scope, timeline, and how RJC can help."
      />
    </main>
  );
}