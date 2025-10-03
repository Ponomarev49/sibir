import React, { useState } from "react";

export default function Documents() {
  // Сюда добавляем файлы PDF
  const [documents] = useState([
    { name: "Свидельство федерации флорбола Омской Области", url: "assets/docs/SVIDETEL_STVO_FEDERATsIYa_FLORBOLA_OMSKOI_774_OBLASTI.pdf" },
    { name: "Сибирь", url: "assets/docs/Sibir.pdf" }
  ]);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-6">
      <h1 className="text-4xl font-extrabold text-blue-800 drop-shadow-md text-center">
        Документы команды
      </h1>

      {/* Список документов в колонку */}
      <div className="flex flex-col gap-4">
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