import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0A2E6B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Логотип + соцсети */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link to="/" className="flex items-center">
              <img
                src="assets/logos/logo.png"
                alt="Сибирь"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <div className="flex space-x-4">
              <a
                href="https://vk.com/floorballomsk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="assets/logos/vk.png"
                  alt="VK"
                  className="h-7 w-auto object-contain"
                />
              </a>
              <a
                href="https://t.me/Siberia_Omsk_Region_FFOO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="assets/logos/tg.png"
                  alt="Telegram"
                  className="h-7 w-auto object-contain invert"
                />
              </a>
            </div>
          </div>

          {/* Ссылки — Сибирь */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="font-semibold text-lg mb-2">Сибирь</h3>
            <Link to="/documents_federation" className="hover:text-gray-300">Документы</Link>
            <Link to="/team" className="hover:text-gray-300">Клуб</Link>
            <Link to="/champ_russia" className="hover:text-gray-300">Чемпионат России</Link>
            <Link to="/cup_russia" className="hover:text-gray-300">Кубок России</Link>
          </div>

          {/* Ссылки — Федерация */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="font-semibold text-lg mb-2">Федерация</h3>
            <Link to="/doping" className="hover:text-gray-300">Антидопинг</Link>
            <Link to="/education" className="hover:text-gray-300">Образование</Link>
            <Link to="/documents_federation" className="hover:text-gray-300">Документы</Link>
            <Link to="/lfl" className="hover:text-gray-300">ЛФЛ Омск</Link>
            <Link to="/dfl" className="hover:text-gray-300">Первенство ДФЛ Омск</Link>
          </div>

          {/* Контакты */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="font-semibold text-lg mb-2">Контакты</h3>
            <Link to="/contacts" className="hover:text-gray-300">Связаться с нами</Link>
          </div>
        </div>

        {/* Нижняя полоса */}
        <div className="mt-8 border-t border-white/30 pt-4 text-center text-sm text-gray-300">
          © 2025 АНО «ОФлК Сибирь» — Все права защищены  
        </div>
      </div>
    </footer>
  );
}
