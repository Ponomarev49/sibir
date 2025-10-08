import { Link } from "react-router-dom";
import { FaTelegramPlane, FaVk, FaBars, FaTimes } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A2E6B] text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8">
        {/* Всегда 4 колонки */}
        <div className="grid grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center sm:text-left">
          
          {/* Логотип + соцсети */}
          <div className="flex flex-col items-center sm:items-start space-y-3 sm:space-y-4">
            <Link to="/" className="flex justify-center sm:justify-start items-center">
              <img
                src="assets/logos/logo.png"
                alt="Сибирь"
                className="h-10 sm:h-14 lg:h-16 w-auto object-contain"
              />
            </Link>
  
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              <a href="https://t.me/Siberia_Omsk_Region_FFOO" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane className="text-white text-[24px] sm:text-[20px] md:text-[15px] lg:text-[18px] xl:text-[25px]" />
              </a>
              <a href="https://vk.com/floorballomsk" target="_blank" rel="noopener noreferrer">
                <FaVk className="text-white text-[24px] sm:text-[20px] md:text-[15px] lg:text-[18px] xl:text-[25px]" />
              </a>
            </div>
          </div>

          {/* Сибирь */}
          <div className="flex flex-col items-center sm:items-start space-y-1.5 sm:space-y-2">
            {/* <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Сибирь</h3> */}
            <Link to="/documents_sibir" className="hover:text-gray-300 text-sm sm:text-base">Документы</Link>
            <Link to="/team" className="hover:text-gray-300 text-sm sm:text-base">Клуб</Link>
            <Link to="/champ_russia" className="hover:text-gray-300 text-sm sm:text-base">Чемпионат России</Link>
            {/* <Link to="/cup_russia" className="hover:text-gray-300 text-sm sm:text-base">Кубок России</Link> */}
          </div>

          {/* Федерация */}
          <div className="flex flex-col items-center sm:items-start space-y-1.5 sm:space-y-2">
            {/* <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Федерация</h3> */}
            <Link to="/doping" className="hover:text-gray-300 text-sm sm:text-base">Антидопинг</Link>
            <Link to="/education" className="hover:text-gray-300 text-sm sm:text-base">Образование</Link>
            <Link to="/documents_federation" className="hover:text-gray-300 text-sm sm:text-base">Документы</Link>
            {/* <Link to="/lfl" className="hover:text-gray-300 text-sm sm:text-base">ЛФЛ Омск</Link> */}
            <Link to="/dfl" className="hover:text-gray-300 text-sm sm:text-base">ДФЛ Омск</Link>
          </div>

          {/* Контакты */}
          <div className="flex flex-col items-center sm:items-start space-y-1.5 sm:space-y-2">
            <Link to="/contacts" className="hover:text-gray-300 text-sm sm:text-base">Связаться с нами</Link>
          </div>
        </div>

        {/* Нижняя полоса */}
        <div className="mt-6 sm:mt-8 border-t border-white/30 pt-3 sm:pt-4 text-center text-xs sm:text-sm text-gray-300">
          © 2025 АНО «ОФлК Сибирь» — Все права защищены  
        </div>
      </div>
    </footer>
  );
}
