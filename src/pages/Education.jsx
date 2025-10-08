import React from "react";

export default function Education() {
  return (
    <div className="min-h-screen bg-white flex flex-col px-4 pt-18">
      {/* Заголовок */}
      <h1 className="text-[22px] sm:text-[25px] md:text-[30px] lg:text-[34px] xl:text-[38px] font-bold text-blue-900 mb-8 text-center">
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
