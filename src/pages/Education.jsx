import React from "react";

export default function Education() {
  return (
    <div className="min-h-screen bg-white flex flex-col px-4 pt-20">
      {/* Заголовок */}
      <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]
       font-bold text-blue-900 text-center">
        Образование
      </h1>

      {/* Центрированная картинка */}
      <div className="flex-grow flex items-center justify-center">
        <img
          src="/assets/edu.jpg"
          alt="referee"
          className="
            object-cover rounded-lg transition-shadow duration-300 hover:shadow-2xl
            w-[700px] h-auto
            lg:w-[600px]
            md:w-[500px]
            sm:w-[400px]
            xs:w-[300px]
          "
        />
      </div>
    </div>
  );
}
