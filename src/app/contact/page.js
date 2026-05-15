"use client";

import { useState } from "react";
import { PageHero, ContactItem, FormInput } from "../components/RjcShared";

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `RJC Quote Request — ${data.get("firstName") || ""} ${
        data.get("lastName") || ""
      }`
    );

    const body = encodeURIComponent(
      "QUOTE REQUEST FROM WEBSITE\n" +
        "================================\n\n" +
        `Name: ${data.get("firstName")} ${data.get("lastName")}\n` +
        `Email: ${data.get("email")}\n` +
        `Phone: ${data.get("phone") || "Not provided"}\n` +
        `Company: ${data.get("company") || "Not provided"}\n` +
        `Service Needed: ${data.get("service")}\n` +
        `Project Location: ${data.get("location") || "Not provided"}\n\n` +
        "PROJECT DESCRIPTION:\n" +
        data.get("description")
    );

    window.location.href = `mailto:kristi@rjccontracting.com?subject=${subject}&body=${body}`;
    setFormSent(true);
  }

  return (
    <main className="page active">
      <PageHero
        tag="Contact"
        title="Request a Quote"
        text="Tell us about your project and we’ll get back to you promptly to discuss how RJC can help."
      />

      <section>
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <h2>Let’s Talk About Your Project</h2>
              <p>
                Whether you have a fully scoped project or just an early
                concept, we’re happy to have a conversation. RJC Contracting
                brings decades of civil engineering experience to every inquiry
                — no project is too complex.
              </p>

              <ContactItem
                icon="✉️"
                label="Email"
                text={
                  <a href="mailto:kristi@rjccontracting.com">
                    kristi@rjccontracting.com
                  </a>
                }
              />

              <ContactItem
                icon="🗓️"
                label="Response Time"
                text="We aim to respond to all inquiries within 1–2 business days."
              />

              <div className="quote-note">
                <p>
                  <strong>“Engineered Excellence”</strong>
                  <br />
                  RJC Contracting, Inc. has built its reputation on technical
                  precision, field experience, and honest communication. We look
                  forward to hearing from you.
                </p>
              </div>
            </div>

            <div className="quote-form">
              <h3 className="form-title">Project Quote Request</h3>
              <p className="form-subtitle">
                Fill out the form below and we’ll be in touch shortly.
              </p>

              {!formSent ? (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <FormInput
                      label="First Name *"
                      name="firstName"
                      required
                      placeholder="Jane"
                    />

                    <FormInput
                      label="Last Name *"
                      name="lastName"
                      required
                      placeholder="Smith"
                    />
                  </div>

                  <div className="form-row">
                    <FormInput
                      label="Email *"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                    />

                    <FormInput
                      label="Phone"
                      name="phone"
                      type="tel"
                      placeholder="(480) 555-0100"
                    />
                  </div>

                  <FormInput
                    label="Company / Organization"
                    name="company"
                    placeholder="Your company name"
                  />

                  <div className="form-group">
                    <label htmlFor="service">Service Needed *</label>
                    <select id="service" name="service" required defaultValue="">
                      <option value="" disabled>
                        — Select a service —
                      </option>
                      <option>Concrete Structures</option>
                      <option>Onsite Supervision</option>
                      <option>Engineering Consulting</option>
                      <option>Multiple / Unsure</option>
                    </select>
                  </div>

                  <FormInput
                    label="Project Location"
                    name="location"
                    placeholder="City, State"
                  />

                  <div className="form-group">
                    <label htmlFor="description">
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      placeholder="Please describe your project, scope, and any relevant details..."
                    />
                  </div>

                  <p className="form-note">
                    * Required fields. Submitting this form will open an email
                    addressed to kristi@rjccontracting.com.
                  </p>

                  <button type="submit" className="submit-btn">
                    Send Quote Request
                  </button>
                </form>
              ) : (
                <div className="form-success show">
                  <h3>✓ Message Ready</h3>
                  <p>
                    Your email app should open with the quote request filled
                    out.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}