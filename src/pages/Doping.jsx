import React from "react";

export default function Doping() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 pt-20">
      {/* Заголовок */}
      <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-bold text-blue-900 mb-8 text-center">
        Антидопинг
      </h1>

      {/* Текст */}
      <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-gray-800 text-left max-w-3xl mb-12">
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
