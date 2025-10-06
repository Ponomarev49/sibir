import React from "react";
import { FaVk, FaTelegramPlane, FaYoutube, FaEnvelope, FaMedal } from "react-icons/fa";

export default function Contacts() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Левая колонка — текст и ссылки */}
        <div className="text-gray-800">
          <h2 className="text-[32px] font-extrabold text-blue-900">Президент</h2>
          <h2 className="text-[24px] font-extrabold text-blue-900">АНО «ОФлК «Сибирь»</h2>
          <h2 className="text-[24px] font-extrabold text-blue-900">
            ОРФСОО «Федерация флорбола Омской области»
          </h2>
          <p className="py-5 text-[32px] font-semibold">
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
              href="https://www.youtube.com/@floorballomsk55"
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

        {/* Правая колонка — фото + достижения */}
        <div className="flex flex-col items-center">
          <img
            src="assets/players/президент.jpg"
            alt="Брюханов Дмитрий Сергеевич"
            className="w-full max-w-[500px] rounded-lg shadow-lg hover:scale-105 transition duration-300 mb-6"
          />

          {/* Блок достижений */}
          <div className="w-full max-w-[400px] flex flex-col gap-3">
            <a
              href="assets/docs/president/UDOSTOVERENIE_MS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 h-full bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-xl shadow-md hover:from-yellow-200 hover:to-yellow-100 hover:scale-105 transition"
            >
              <FaMedal className="text-yellow-600 w-8 h-8 flex-shrink-0" />
              <span className="font-semibold text-base min-h-[20px] flex items-center">
                Мастер спорта России по флорболу
              </span>
            </a>

            <a
              href="assets/docs/president/UDOSTOVERENIE_SPORTIVNYI_774_SUD_Ya_VK.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 h-full bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl shadow-md hover:from-blue-200 hover:to-blue-100 hover:scale-105 transition"
            >
              <FaMedal className="text-blue-600 w-8 h-8 flex-shrink-0" />
              <span className="font-semibold text-base min-h-[20px] flex items-center">
                Спортивный судья всероссийской категории
              </span>
            </a>

            <a
              href="assets/docs/president/ZASLUZhENNYI_774_RABOTNIK_FK_OO.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 h-full bg-gradient-to-r from-green-100 to-green-50 rounded-xl shadow-md hover:from-green-200 hover:to-green-100 hover:scale-105 transition"
            >
              <FaMedal className="text-green-600 w-8 h-8 flex-shrink-0" />
              <span className="font-semibold text-base min-h-[20px] flex items-center">
                Заслуженный работник физической культуры Омской области
              </span>
            </a>

            <a
              href="assets/docs/president/YuBILEI_774_NAYa_MEDAL__100-letia_MINSPORTA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 h-full bg-gradient-to-r from-pink-100 to-pink-50 rounded-xl shadow-md hover:from-pink-200 hover:to-pink-100 hover:scale-105 transition"
            >
              <FaMedal className="text-pink-600 w-8 h-8 flex-shrink-0" />
              <span className="font-semibold text-base min-h-[20px] flex items-center">
                Юбилейная медаль
              </span>
            </a>

            <a
              href="assets/docs/president/POChETNAYa_GRAMOTA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 h-full bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl shadow-md hover:from-purple-200 hover:to-purple-100 hover:scale-105 transition"
            >
              <FaMedal className="text-purple-600 w-8 h-8 flex-shrink-0" />
              <span className="font-semibold text-base min-h-[20px] flex items-center">
                Почетная грамота
              </span>
            </a>

            <a
              href="assets/docs/president/BLAGODAR_PIS_MO_GUBERNATOR_OMSKOI_774_OBLASTI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 h-full bg-gradient-to-r from-orange-100 to-orange-50 rounded-xl shadow-md hover:from-orange-200 hover:to-orange-100 hover:scale-105 transition"
            >
              <FaMedal className="text-orange-600 w-8 h-8 flex-shrink-0" />
              <span className="font-semibold text-base min-h-[20px] flex items-center">
                Благодарственное письмо
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
