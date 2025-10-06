import React from "react";

export default function MainPage() {
  return (
    <div className="relative w-full h-screen pt-24">
      <img
        src="assets/team.jpg"
        alt="Команда Сибирь"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-end pb-90 text-center px-4 sm:px-6 lg:px-8">
        <p className="mt-4 text-3xl sm:text-5xl md:text-6xl text-white drop-shadow-md">
          Бывает тяжело, но мы идем к своей цели!
        </p>
      </div>
    </div>   
  );
}
