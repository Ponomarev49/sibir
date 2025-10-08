import React from "react";

export default function Doping() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 pt-18">
      {/* Заголовок */}
      <h1 className="text-[36px] font-bold text-blue-900 mb-8 text-center">
        Антидопинг
      </h1>

      {/* Текст */}
      <p className="text-lg md:text-xl text-gray-800 text-left max-w-3xl mb-12">
        Ответственный за организацию работы общероссийской спортивной федерации по предотвращению 
        допинга в спорте и борьбе с ним: <br />
        <strong>Брюханов Дмитрий Сергеевич</strong>
      </p>

      {/* Логотип RUSADA */}
      <a href="https://rusada.ru" target="_blank" rel="noopener noreferrer">
        <img
          src="/assets/logos/rusada.png"
          alt="RUSADA"
          className="h-32 w-auto object-contain transition-shadow duration-300 hover:shadow-lg"
        />
      </a>
    </div>
  );
}
