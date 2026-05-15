"use client";

import { useState } from "react";
import { projects, PageHero } from "../components/RjcShared";

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="page active">
      <PageHero
        tag="Portfolio"
        title="Past Projects"
        text="A selection of civil engineering and concrete construction projects completed by the RJC Contracting team."
      />

      <section>
        <div className="container">
          <div className="projects-full-grid">
            {projects.map((project) => (
              <button
                className="proj-full-item"
                key={project.image}
                type="button"
                onClick={() => setSelectedImage(project.image)}
              >
                <img
                  src={project.image}
                  alt="RJC Contracting concrete construction project in Arizona"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="photo-modal"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="photo-modal-close"
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <img
            className="photo-modal-img"
            src={selectedImage}
            alt="Expanded RJC Contracting project photo"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}