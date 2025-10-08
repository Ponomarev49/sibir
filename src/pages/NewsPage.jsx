import React from "react";
import { useParams, Link } from "react-router-dom";
import { news } from "../data/newsData";

export default function NewsPage() {
  const { id } = useParams();
  const item = news.find((n) => n.id === parseInt(id));

  if (!item) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold">Новость не найдена</h2>
        <Link
          to="/news"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Назад к новостям
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 pt-18 pb-16 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <Link
          to="/news"
          className="inline-block mb-6 text-blue-700 hover:underline"
        >
          ← Назад к новостям
        </Link>

        <h1 className="text-4xl font-bold text-blue-800 mb-6">{item.title}</h1>
        <p className="text-gray-500 mb-4">{item.date}</p>

        <div className="w-[500px] h-auto mb-8 overflow-hidden rounded-xl shadow-lg">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div
        className="text-lg leading-relaxed text-gray-800"
        dangerouslySetInnerHTML={{ __html: item.content }}
        ></div>
      </div>
    </section>
  );
}
