import React from "react";
import { news } from "../data/newsData";
import { Link } from "react-router-dom";

export default function LatestNews() {
  const latestNews = news.slice().reverse().slice(0, 3);

  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-8 text-center">
          Последние новости
        </h2>

        <div className="flex flex-col gap-4">
          {latestNews.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="group flex flex-row bg-gray-50 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition transform hover:-translate-y-0.5"
            >
              {/* Фото слева */}
              <div className="w-1/3 h-30 sm:h-40 md:h-48 flex-shrink-0 bg-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Текст справа */}
              <div className="p-3 sm:p-4 flex flex-col justify-center w-2/3 sm:w-3/4 text-left">
                <h3 className="text-[15px] sm:text-[17px] md:text-[20px] font-semibold text-gray-800 group-hover:text-blue-700 transition">
                  {item.title}
                </h3>
                <p className="text-gray-500 mt-1 text-sm md:text-base">
                  {item.date}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Кнопка "Все новости" */}
        <div className="text-center mt-6">
          <Link
            to="/news"
            className="inline-block px-5 py-2 md:px-6 md:py-3 bg-[#0046AD] text-white text-lg md:text-xl font-bold rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            Все новости
          </Link>
        </div>
      </div>
    </section>
  );
}
