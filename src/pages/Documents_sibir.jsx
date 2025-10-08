import React, { useState } from "react";

export default function Documents_sibir() {
  // Сюда добавляем файлы PDF
  const [documents] = useState([
    { name: "Благодарность", url: "assets/docs/sibir/Sibir.pdf" },
    { name: "Правительство", url: "assets/docs/sibir/PRAVITEL_STVO.pdf" },
    { name: "Реквизиты АНО «ОФлК Сибирь»", url: "assets/docs/sibir/Rekvizity_ANO_OFlK_Sibir.pdf" },
    { name: "Устав АНО «ОФлК Сибирь»", url: "assets/docs/sibir/Ustav_ANO_OFK_Sibir.pdf" }
  ]);

  return (
    <div className="max-w-4xl mx-auto px-4 pt-18 pb-12 min-h-screen flex flex-col">
      <h1 className="text-[36px] font-bold text-blue-900 mb-8 text-center">
        Документы
      </h1>

      {/* Список документов в колонку */}
      <div className="flex flex-col gap-4 flex-grow">
        {documents.map((doc, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-lg border border-gray-200 p-4 flex justify-between items-center"
          >
            <span className="text-lg font-semibold text-gray-800">{doc.name}</span>
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Просмотр
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
