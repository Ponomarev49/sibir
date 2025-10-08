import React from "react";
import { partners } from "../data/partners";

export default function Partners() {
  const mainPartner = partners.find((p) => p.main);
  const featuredPartners = partners.filter((p) => !p.main).slice(0, 4); // первые 4 больших
  const otherPartners = partners.filter((p) => !p.main).slice(4); // остальные маленькие

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">
          Наши партнёры
        </h2>

        {/* Главный партнёр */}
        {mainPartner && (
          <div className="mb-12">
            <a
              href={mainPartner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-black-500 rounded-lg p-4 transition transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={mainPartner.img}
                alt={mainPartner.alt}
                className="mx-auto h-28 md:h-36 object-contain"
              />
            </a>
          </div>
        )}

        {/* Средние партнёры (только на md+) */}
        {featuredPartners.length > 0 && (
          <div className="hidden md:grid grid-cols-4 gap-8 mb-12">
            {featuredPartners.map((partner, i) => (
              <a
                key={i}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 block border border-black-100 rounded-lg p-4 transition transform hover:scale-105 hover:shadow-md"
              >
                <img
                  src={partner.img}
                  alt={partner.alt}
                  className="mx-auto h-32 object-contain"
                />
              </a>
            ))}
          </div>
        )}

        {/* Все маленькие партнёры */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {/* На мобильных показываем все, кроме главного */}
          {[...featuredPartners, ...otherPartners].map((partner, i) => (
            <a
              key={i}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-black-100 rounded-lg p-4 transition transform hover:scale-105 hover:shadow-md md:hidden"
            >
              <img
                src={partner.img}
                alt={partner.alt}
                className="mx-auto h-16 object-contain"
              />
            </a>
          ))}

          {/* На md+ показываем только остальные маленькие */}
          {otherPartners.map((partner, i) => (
            <a
              key={i + 100} // чтобы key был уникальным
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block border border-black-100 rounded-lg p-4 transition transform hover:scale-105 hover:shadow-md"
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
