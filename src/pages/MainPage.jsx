import React from "react";

export default function MainPage() {
  return (
    <div className="relative w-full h-[100dvh] pt-16">
      {/* Фоновое изображение */}
      <img
        src="assets/team.jpg"
        alt="Команда Сибирь"
        className="w-full h-full object-cover object-center"
      />

      {/* Затемнение */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Контент — по центру */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <p className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-semibold drop-shadow-md leading-snug max-w-5xl">
          Бывает тяжело, но мы идем к своей цели!
        </p>
      </div>
    </div>
  );
}
