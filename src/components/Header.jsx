import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [openSibir, setOpenSibir] = useState(false);
  const [openFederation, setOpenFederation] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sibirTimeout, setSibirTimeout] = useState(null);
  const [federationTimeout, setFederationTimeout] = useState(null);

  return (
    <>
      {/* Оверлей — затемнение под меню */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <header className="fixed top-0 left-0 w-full z-50 bg-blue-800 text-white shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Левый блок: Логотип + соцсети */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center">
                <img
                  src="/logo.png"
                  alt="Сибирь"
                  className="h-14 sm:h-16 md:h-20 w-auto object-contain"
                />
              </Link>
              {/* Соцсети */}
              <div className="flex items-center space-x-3">
                <a
                  href="https://vk.com/floorballomsk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <img
                    src="/vk.png"
                    alt="VK"
                    className="h-6 sm:h-6 md:h-8 w-auto object-contain"
                  />
                </a>
                <a
                  href="https://t.me/Siberia_Omsk_Region_FFOO"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/tg.png"
                    alt="Telegram"
                    className="h-6 sm:h-6 md:h-8 w-auto object-contain invert"
                  />
                </a>
              </div>
            </div>

            {/* Центр: меню на десктопе */}
            <div className="flex items-center">
              <nav className="hidden sm:flex items-center space-x-8 text-white">
                {/* Сибирь */}
                <div
                  className="relative"
                  onMouseEnter={() => {
                      // Сразу закрываем Федерацию
                      if (federationTimeout) clearTimeout(federationTimeout);
                      setOpenFederation(false);

                      // Сбрасываем таймер Сибирь
                      if (sibirTimeout) clearTimeout(sibirTimeout);
                      setOpenSibir(true);
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => {
                        setOpenSibir(false);
                      }, 750);
                      setSibirTimeout(timeout);
                    }}
                >
                  <button className="font-semibold text-lg sm:text-xl md:text-2xl hover:text-gray-300 flex items-center">
                    СИБИРЬ ▾
                  </button>
                  {openSibir && (
                    <div className="absolute left-0 mt-2 w-48 bg-blue-800 text-white border rounded shadow-md z-50">
                      <Link
                        to="/documents"
                        className="block px-4 py-2 hover:bg-blue-400"
                      >
                        Документы
                      </Link>
                      <Link
                        to="/team"
                        className="block px-4 py-2 hover:bg-blue-400"
                      >
                        Клуб
                      </Link>
                      <Link
                        to="/champ_russia"
                        className="block px-4 py-2 hover:bg-blue-400"
                      >
                        Чемпионат России
                      </Link>
                      <Link
                        to="/cup_russia"
                        className="block px-4 py-2 hover:bg-blue-400"
                      >
                        Кубок России 
                      </Link>
                                            <Link
                        to="/champ_sfo"
                        className="block px-4 py-2 hover:bg-blue-400"
                      >
                        Чемпионат СФО и УРФО
                      </Link>
                    </div>
                  )}
                </div>

                {/* Федерация */}
                <div
                  className="relative group"
                    onMouseEnter={() => {
                      // Сразу закрываем Сибирь
                      if (sibirTimeout) clearTimeout(sibirTimeout);
                      setOpenSibir(false);

                      // Сбрасываем таймер Федерация
                      if (federationTimeout) clearTimeout(federationTimeout);
                      setOpenFederation(true);
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => {
                        setOpenFederation(false);
                      }, 750);
                      setFederationTimeout(timeout);
                    }}
                >
                  <button className="font-semibold text-lg sm:text-xl md:text-2xl hover:text-gray-300 flex items-center">
                    ФЕДЕРАЦИЯ ▾
                  </button>
                  {openFederation && (
                    <div className="absolute left-0 mt-2 w-48 bg-blue-800 text-white border rounded shadow-md z-50">
                      <Link
                        to="/lfl"
                        className="block px-4 py-2 hover:bg-blue-400"
                      >
                        Новогодний турнир
                      </Link>
                      <Link
                        to="/dfl"
                        className="block px-4 py-2 hover:bg-blue-400"
                      >
                        Турнир посвященный, Дню Победы
                      </Link>
                      <Link
                        to="/league"
                        className="block px-4 py-2 hover:bg-blue-400"
                      >
                        ЛФЛ Омск
                      </Link>
                      <Link
                        to="/league"
                        className="block px-4 py-2 hover:bg-blue-400"
                      >
                        Первенство ДФЛ Омск
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/contacts"
                  className="font-semibold text-lg sm:text-xl md:text-2xl hover:text-gray-300 flex items-center"
                >
                  КОНТАКТЫ
                </Link>
              </nav>

              {/* Бургер для мобильных */}
              <button
                className="sm:hidden ml-2 p-3 rounded-md hover:bg-blue-700 focus:outline-none z-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Правый блок: НФФР (только десктоп) */}
            <div className="hidden sm:flex items-center space-x-4">
              <a
                href="https://xn--m1agla.xn--p1ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/gerb_omsk.png"
                  alt="МинСпорт"
                  className="h-14 sm:h-16 md:h-20 w-auto object-contain"
                />
              </a>
              <a
                href="https://xn--m1agla.xn--p1ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/nffr.png"
                  alt="НФФР"
                  className="h-4 sm:h-6 md:h-6 w-auto object-contain"
                />
              </a>
              <a
                href="https://xn--m1agla.xn--p1ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/red_star.png"
                  alt="Кз"
                  className="h-4 sm:h-6 md:h-10 w-auto object-contain"
                />
              </a>
            </div>
          </div>

          {/* Мобильное меню */}
          {mobileMenuOpen && (
            <div className="sm:hidden absolute top-24 left-0 w-full bg-blue-800 text-white rounded-md shadow-md p-4 z-50">
              {/* Меню Сибирь */}
              <div>
                <button
                  className="w-full text-left font-medium text-base hover:text-gray-300 flex items-center justify-between"
                  onClick={() => setOpenSibir(!openSibir)}
                >
                  СИБИРЬ ▾
                </button>
                {openSibir && (
                  <div className="mt-1 pl-4 space-y-1">
                    <Link
                      to="/coaches"
                      className="block py-1 hover:text-gray-300"
                    >
                      Тренеры
                    </Link>
                    <Link
                      to="/players"
                      className="block py-1 hover:text-gray-300"
                    >
                      Игроки
                    </Link>
                    <Link
                      to="/history"
                      className="block py-1 hover:text-gray-300"
                    >
                      История
                    </Link>
                    <Link
                      to="/documents"
                      className="block py-1 hover:text-gray-300"
                    >
                      Документы
                    </Link>
                  </div>
                )}
              </div>

              {/* Меню Федерация */}
              <div>
                <button
                  className="w-full text-left font-medium text-base hover:text-gray-300 flex items-center justify-between"
                  onClick={() => setOpenFederation(!openFederation)}
                >
                  ФЕДЕРАЦИЯ ▾
                </button>
                {openFederation && (
                  <div className="mt-1 pl-4 space-y-1">
                    <Link to="/lfl" className="block py-1 hover:text-gray-300">
                      ЛФЛ
                    </Link>
                    <Link to="/dfl" className="block py-1 hover:text-gray-300">
                      ДФЛ
                    </Link>
                    <Link
                      to="/league"
                      className="block py-1 hover:text-gray-300"
                    >
                      Высшая лига
                    </Link>
                  </div>
                )}
              </div>

              {/* Контакты */}
              <Link
                to="/contacts"
                className="block py-1 font-medium hover:text-gray-300"
              >
                КОНТАКТЫ
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
