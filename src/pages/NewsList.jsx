import React from "react";
import { news } from "../data/newsData";
import { Link } from "react-router-dom";

export default function NewsList() {
  return (
    <section className="bg-gray-50 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-800 mb-12 text-center">
          Новости
        </h2>

        <div className="flex flex-col gap-8">
          {news.slice().reverse().map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="group flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              {/* Фото слева */}
              <div className="md:w-1/3 h-64 md:h-auto overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Текст справа */}
              <div className="p-6 flex flex-col justify-center md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-700 transition">
                  {item.title}
                </h3>
                <p className="text-gray-500 mt-2">{item.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
