import React from "react";
import { FaVk, FaTelegramPlane, FaYoutube, FaEnvelope, FaMedal } from "react-icons/fa";
import { FaVk, FaTelegramPlane, FaYoutube, FaEnvelope, FaMedal } from "react-icons/fa";

export default function Contacts() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-8">
        {/* Левая колонка: Президент, Фото, Достижения */}
        <div className="flex flex-col items-center md:items-start md:w-2/3 gap-6">
          {/* Заголовки */}
          <div className="text-center md:text-left">
            <h2 className="text-[32px] font-extrabold text-blue-900">Президент</h2>
            <h2 className="text-[24px] font-extrabold text-blue-900">АНО «ОФлК «Сибирь»</h2>
            <h2 className="text-[24px] font-extrabold text-blue-900">ОРФСОО «Федерация флорбола Омской области»</h2>
          </div>

          {/* Фото */}
          <img
            src="assets/players/президент.jpg"
            alt="Брюханов Дмитрий Сергеевич"
            className="w-full max-w-[400px] md:max-w-[500px] rounded-lg shadow-lg hover:scale-105 transition duration-300"
          />
          {/* Фото */}
          <img
            src="assets/players/президент.jpg"
            alt="Брюханов Дмитрий Сергеевич"
            className="w-full max-w-[400px] md:max-w-[500px] rounded-lg shadow-lg hover:scale-105 transition duration-300"
          />

          {/* Достижения */}
          <div className="w-full grid grid-cols-1 gap-4 mt-4">
            <Award
              color="from-yellow-100 to-yellow-50"
              iconColor="text-yellow-600"
              text="Мастер спорта России по флорболу"
              link="assets/docs/president/UDOSTOVERENIE_MS.pdf"
            />
            <Award
              color="from-blue-100 to-blue-50"
              iconColor="text-blue-600"
              text="Спортивный судья всероссийской категории"
              link="assets/docs/president/UDOSTOVERENIE_SPORTIVNYI_774_SUD_Ya_VK.pdf"
            />
            <Award
              color="from-green-100 to-green-50"
              iconColor="text-green-600"
              text="Заслуженный работник физической культуры Омской области"
              link="assets/docs/president/ZASLUZhENNYI_774_RABOTNIK_FK_OO.pdf"
            />
            <Award
              color="from-pink-100 to-pink-50"
              iconColor="text-pink-600"
              text="Юбилейная медаль"
              link="assets/docs/president/YuBILEI_774_NAYa_MEDAL__100-letia_MINSPORTA.pdf"
            />
            <Award
              color="from-purple-100 to-purple-50"
              iconColor="text-purple-600"
              text="Почётная грамота"
              link="assets/docs/president/POChETNAYa_GRAMOTA.pdf"
            />
            <Award
              color="from-orange-100 to-orange-50"
              iconColor="text-orange-600"
              text="Благодарственное письмо"
              link="assets/docs/president/BLAGODAR_PIS_MO_GUBERNATOR_OMSKOI_774_OBLASTI.pdf"
            />
          </div>
        </div>

        {/* Правая колонка: Соцсети */}
        <div className="flex flex-col items-center md:items-start md:w-1/3 gap-4 mt-10 md:mt-35">
          <SocialLink
            href="https://vk.com/floorballomsk"
            icon={<FaVk className="text-blue-600 text-4xl" />}
            text="Официальная страница в VK"
          />
          <SocialLink
            href="https://vk.com/ffoo55?from=groups"
            icon={<FaVk className="text-blue-800 text-4xl" />}
            text="Официальная группа в VK"
          />
          <SocialLink
            href="https://t.me/Siberia_Omsk_Region_FFOO"
            icon={<FaTelegramPlane className="text-sky-500 text-4xl" />}
            text="Официальная страница в Telegram"
          />
          <SocialLink
            href="https://www.youtube.com/@floorballomsk55"
            icon={<FaYoutube className="text-red-600 text-4xl" />}
            text="Официальный YouTube-канал"
          />
          <SocialLink
            href="https://mail.google.com/mail/?view=cm&to=ffoo55@mail.ru"
            icon={<FaEnvelope className="text-orange-500 text-4xl" />}
            text="Почта: ffoo55@mail.ru"
          />
        </div>
      </div>
    </div>
  );
}

/* Компонент награды */
function Award({ color, iconColor, text, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 p-3 h-full bg-gradient-to-r ${color} rounded-xl shadow-md hover:scale-105 transition hover:shadow-lg`}
    >
      <FaMedal className={`${iconColor} w-8 h-8 flex-shrink-0`} />
      <span className="font-semibold text-base flex items-center">{text}</span>
    </a>
  );
}

/* Компонент ссылки на соцсеть */
function SocialLink({ href, icon, text }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-4 w-full md:w-[400px] h-16 bg-gray-100 rounded-xl shadow-md hover:bg-blue-50 hover:scale-105 transition transform"
    >
      {icon}
      <span className="font-medium text-lg">{text}</span>
    </a>
  );
}


