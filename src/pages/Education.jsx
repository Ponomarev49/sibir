import React from "react";

export default function Education() {
  return (
    <div className="min-h-screen bg-white flex flex-col pt-24">
      {/* Заголовок сверху */}
      <h1 className="text-[32px] font-extrabold text-blue-900 text-center">
        Образование
      </h1>

      {/* Картинка по центру */}
      <div className="flex-grow flex items-center justify-center">
        <img
          src="/assets/edu.jpg"
          alt="referee"
          className="h-100 w-auto object-cover rounded-lg transition-shadow duration-300 hover:shadow-2xl"
        />
      </div>
    </div>
  );
}
