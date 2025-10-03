import React from "react";
import { FaVk, FaTelegramPlane, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Contacts() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      {/* Контент */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Левая колонка — текст и ссылки */}
        <div className="space-y-6 text-gray-800">
          <h2 className="text-[34px] font-extrabold text-blue-900">
            Президент АНО «ОФлК «Сибирь» и ОРФСОО «Федерация флорбола Омской области»
          </h2>
          <p className="text-[32px] font-semibold">
            Брюханов Дмитрий Сергеевич
          </p>

          <div className="space-y-4">
            <a
              href="https://vk.com/floorballomsk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-100 rounded-xl shadow-md hover:bg-blue-50 hover:scale-105 transition transform"
            >
              <FaVk className="text-blue-600 text-4xl" />
              <span className="font-medium text-lg">Официальная страница в VK</span>
            </a>

            <a
              href="https://vk.com/ffoo55?from=groups"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-100 rounded-xl shadow-md hover:bg-blue-50 hover:scale-105 transition transform"
            >
              <FaVk className="text-blue-800 text-4xl" />
              <span className="font-medium text-lg">Официальная группа в VK</span>
            </a>

            <a
              href="https://t.me/Siberia_Omsk_Region_FFOO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-100 rounded-xl shadow-md hover:bg-blue-50 hover:scale-105 transition transform"
            >
              <FaTelegramPlane className="text-sky-500 text-4xl" />
              <span className="font-medium text-lg">Официальная страница в Telegram</span>
            </a>

            <a
              href="https://youtube.com/XXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-100 rounded-xl shadow-md hover:bg-blue-50 hover:scale-105 transition transform"
            >
              <FaYoutube className="text-red-600 text-4xl" />
              <span className="font-medium text-lg">Официальный YouTube-канал</span>
            </a>

            <a
              href="mailto:ffoo55@mail.ru"
              className="flex items-center gap-3 p-4 bg-gray-100 rounded-xl shadow-md hover:bg-blue-50 hover:scale-105 transition transform"
            >
              <FaEnvelope className="text-orange-500 text-4xl" />
              <span className="font-medium text-lg">Почта: ffoo55@mail.ru</span>
            </a>
          </div>
        </div>

        {/* Правая колонка — фото */}
        <div className="flex justify-center">
          <img
            src="../players/президент.jpg"
            alt="Брюханов Дмитрий Сергеевич"
            className="w-full max-w-[600px] rounded-lg shadow-lg hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
}
