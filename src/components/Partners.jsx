import React from "react";
import { partners } from "../data/partners";

export default function Partners() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">
          Наши партнёры
        </h2>

        {/* Главный партнёр */}
        {partners
          .filter((p) => p.main)
          .map((partner, i) => (
            <div key={i} className="mb-12">
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-black-500 rounded-lg p-4 transition transform hover:scale-105 hover:shadow-lg"
              >
                <img
                  src={partner.img}
                  alt={partner.alt}
                  className="mx-auto h-28 md:h-36 object-contain"
                />
              </a>
            </div>
          ))}

        {/* Остальные партнёры */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners
            .filter((p) => !p.main)
            .map((partner, i) => (
              <a
                key={i}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-black-100 rounded-lg p-4 transition transform hover:scale-105 hover:shadow-md"
              >
                <img
                  src={partner.img}
                  alt={partner.alt}
                  className="mx-auto h-16 object-contain"
                />
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
