import React, { useState } from "react";
import { FaTelegramPlane, FaVk, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue-500 w-full fixed top-0 left-0 z-50">
      <div className="max-w-[1560px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-2">
        {/* Блок 1: Логотипы и иконки */}
        <div className="flex items-center md:gap-3 lg:gap-3 gap-4">
          <a href="https://vk.com/ffoo55" target="_blank" rel="noopener noreferrer">
            <img src="assets/logos/ffoo.png" alt="ФФОО" className="h-14 sm:h-14 md:h-9 lg:h-11 xl:h-13 w-auto" />
          </a>
          <Link to="/">
            <img src="assets/logos/logo.png" alt="Team Logo" className="h-14 sm:h-14 md:h-9 lg:h-11 xl:h-13 w-auto" />
          </Link>
          <a href="https://t.me/Siberia_Omsk_Region_FFOO" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane className="text-white text-[24px] sm:text-[20px] md:text-[15px] lg:text-[18px] xl:text-[25px]" />
          </a>
          <a href="https://vk.com/floorballomsk" target="_blank" rel="noopener noreferrer">
            <FaVk className="text-white text-[24px] sm:text-[20px] md:text-[15px] lg:text-[18px] xl:text-[25px]" />
          </a>

          {/* Бургер для малых экранов */}
          <button
            className="md:hidden ml-2 text-white text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Блок 2: Меню для средних и больших экранов */}
        <nav className="hidden md:flex flex-col md:flex-row items-center md:gap-3 lg:gap-4 gap-6 text-white">
          {/* Сибирь */}
          <div className="relative group">
            <span className="font-medium cursor-pointer hover:text-blue-600 md:text-[14px] lg:text-[20px] xl:text-[24px]">Сибирь</span>
            <div className="absolute top-full left-0 mt-0 bg-blue-500 rounded-md py-2 md:w-30 lg:w-44 w-50
                            invisible group-hover:visible
                            transition-all duration-200 ease-in-out z-10 md:text-[12px] lg:text-[18px] xl:text-[18px]">
              <Link to="/documents_sibir" className="block px-1 py-2 hover:bg-blue-700">Документы</Link>
              <Link to="/team" className="block px-1 py-2 hover:bg-blue-700">Клуб</Link>
              <Link to="/champ_russia" className="block px-1 py-2 hover:bg-blue-700">Чемпионат России</Link>
              {/* <Link to="/cup_russia" className="block px-1 py-2 hover:bg-blue-700">Кубок России</Link> */}
            </div>
          </div>

          {/* Федерация */}
          <div className="relative group">
            <span className="font-medium cursor-pointer hover:text-blue-600 md:text-[14px] lg:text-[20px] xl:text-[24px]">Федерация</span>
            <div className="absolute top-full left-0 mt-0 bg-blue-500 rounded-md py-2 md:w-30 lg:w-44 w-50
                            invisible group-hover:visible
                            transition-all duration-200 ease-in-out z-10 md:text-[12px] lg:text-[18px] xl:text-[18px]">
              <Link to="/doping" className="block px-1 py-2 hover:bg-blue-700">Антидопинг</Link>
              <Link to="/education" className="block px-1 py-2 hover:bg-blue-700">Образование</Link>
              <Link to="/documents_federation" className="block px-1 py-2 hover:bg-blue-700">Документы</Link>
              {/* <Link to="/lfl" className="block px-1 py-2 hover:bg-blue-700">ЛФЛ Омск</Link> */}
              <Link to="/dfl" className="block px-1 py-2 hover:bg-blue-700">ДФЛ Омск</Link>
            </div>
          </div>

          {/* Контакты и Новости */}
          <Link to="/contacts" className="font-medium hover:text-blue-600 md:text-[14px] lg:text-[20px] xl:text-[24px]">Контакты</Link>
          <Link to="/news" className="font-medium hover:text-blue-600 md:text-[14px] lg:text-[20px] xl:text-[24px]">Новости</Link>
        </nav>

        {/* Блок 3: Логотипы спонсоров */}
        <div className="hidden md:flex items-center md:gap-3 gap-4 overflow-x-auto">
          <a href="https://vk.com/minsportrf" target="_blank" rel="noopener noreferrer">
            <img src="assets/logos/min_sport_russia.png" alt="Sponsor 1" className="md:h-9 lg:h-11 xl:h-13 w-auto" />
          </a>
          <a href="https://vk.com/minsportomsk" target="_blank" rel="noopener noreferrer">
            <img src="assets/logos/min_sport_omsk.png" alt="Sponsor 2" className="md:h-9 lg:h-11 xl:h-13 w-auto" />
          </a>
          <a href="https://xn--m1agla.xn--p1ai/" target="_blank" rel="noopener noreferrer">
            <img src="assets/logos/nffr.png?" alt="Sponsor 3" className="md:h-4 lg:h-5 xl:h-7 w-auto" />
          </a>
          <a href="https://vk.com/red_star_omsk55" target="_blank" rel="noopener noreferrer">
            <img src="assets/logos/red_star.png" alt="Sponsor 4" className="md:h-8 lg:h-11 xl:h-13 w-auto" />
          </a>
          <a href="https://vk.com/omsksportteam55" target="_blank" rel="noopener noreferrer">
            <img src="assets/logos/direction.png" alt="Sponsor 5" className="md:h-9 lg:h-11 xl:h-13 w-auto" />
          </a>
        </div>
      </div>

      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-500 w-full py-4 px-6 flex flex-col gap-4">
          <div>
            <details className="mb-2">
              <summary className="font-medium text-white cursor-pointer text-[20px]">Сибирь</summary>
              <div className="flex flex-col mt-2">
                <Link to="/documents_sibir" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-1 text-white hover:bg-blue-700 rounded text-[18px]">Документы</Link>
                <Link to="/team" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-1 text-white hover:bg-blue-700 rounded text-[18px]">Клуб</Link>
                <Link to="/champ_russia" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-1 text-white hover:bg-blue-700 rounded text-[18px]">Чемпионат России</Link>
              </div>
            </details>

            <details className="mb-2">
              <summary className="font-medium text-white cursor-pointer text-[20px]">Федерация</summary>
              <div className="flex flex-col mt-2">
                <Link to="/doping" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-1 text-white hover:bg-blue-700 rounded text-[18px]">Антидопинг</Link>
                <Link to="/education" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-1 text-white hover:bg-blue-700 rounded text-[18px]">Образование</Link>
                <Link to="/documents_federation" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-1 text-white hover:bg-blue-700 rounded text-[18px]">Документы</Link>
                <Link to="/dfl" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-1 text-white hover:bg-blue-700 rounded text-[18px]">ДФЛ Омск</Link>
              </div>
            </details>

            <Link to="/contacts" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-white hover:bg-blue-700 px-2 py-1 rounded text-[20px]">Контакты</Link>
            <Link to="/news" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-white hover:bg-blue-700 px-2 py-1 rounded text-[20px]">Новости</Link>
          </div>

          {/* Логотипы спонсоров */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4 overflow-x-auto">
            <a href="https://vk.com/minsportrf" target="_blank" rel="noopener noreferrer">
              <img src="assets/logos/min_sport_russia.png" alt="Sponsor 1" className="h-10 w-auto" />
            </a>
            <a href="https://vk.com/minsportomsk" target="_blank" rel="noopener noreferrer">
              <img src="assets/logos/min_sport_omsk.png" alt="Sponsor 2" className="h-10 w-auto" />
            </a>
            <a href="https://xn--m1agla.xn--p1ai/" target="_blank" rel="noopener noreferrer">
              <img src="assets/logos/nffr.png?v=2" alt="Sponsor 3" className="h-3 w-auto" />
            </a>
            <a href="https://vk.com/red_star_omsk55" target="_blank" rel="noopener noreferrer">
              <img src="assets/logos/red_star.png" alt="Sponsor 4" className="h-8 w-auto" />
            </a>
            <a href="https://vk.com/omsksportteam55" target="_blank" rel="noopener noreferrer">
              <img src="assets/logos/direction.png" alt="Sponsor 5" className="h-10 w-auto" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
