import React, { useEffect, useState } from "react";
import { staff, goalkeepers, defenders, forwards } from "../data/teamData";
import { Link } from "react-router-dom";

export default function ClubShowcase() {
  const allPlayers = [...staff, ...goalkeepers, ...defenders, ...forwards];
  const [randomPlayers, setRandomPlayers] = useState([]);

  const getRandomPlayers = () => {
    const shuffled = [...allPlayers].sort(() => 0.5 - Math.random());

    const uniquePlayers = [];
    const seenNames = new Set();

    for (let player of shuffled) {
      const fullName = `${player.firstName} ${player.lastName}`;
      if (!seenNames.has(fullName)) {
        uniquePlayers.push(player);
        seenNames.add(fullName);
      }
      if (uniquePlayers.length === 5) break;
    }

    return uniquePlayers;
  };


  useEffect(() => {
    setRandomPlayers(getRandomPlayers());
    const interval = setInterval(() => {
      setRandomPlayers(getRandomPlayers());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function MiniPlayerCard({ firstName, lastName, position, photo, number }) {
    return (
      <div className="bg-white/90 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1
      w-[95px] sm:w-[115px] md:w-[145px] lg:w-[185px]  xl:w-[231px]">
        {/* Контейнер с фиксированной высотой */}
        <div className="w-[95px] h-[160px] sm:w-[115px] sm:h-[200px] md:w-[145px] md:h-[250px] lg:w-[185px] lg:h-[320px]  xl:w-[231px] xl:h-[400px] overflow-hidden">
          <img
            src={photo}
            alt={lastName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="py-3 sm:py-2 text-center">
          <h3 className="text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px]  xl:text-[24px] font-bold text-gray-800">
            {number ? `#${number} ` : ""}
            {lastName}
          </h3>
          <h3 className="text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px]  xl:text-[24px] font-bold text-gray-800">{firstName}</h3>
          <p className="text-[8px] sm:text-[11px] md:text-[14px] lg:text-[16px]  xl:text-[18px] text-gray-500">{position}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative py-12">
      {/* Фоновая картинка */}
      <img
        src="assets/random.jpg"  // <-- сюда подставь свой путь к картинке
        alt="Фон клуба"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Затемнение поверх картинки */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Контент поверх */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <h2 className="text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[36px] font-bold mb-8">Наш клуб</h2>

        {/* Сетка с карточками */}
        <div className="flex justify-center sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-5 mb-10">
        {randomPlayers
          .slice(0, window.innerWidth < 768 ? 3 : 5)
          .map((player) => (
            <MiniPlayerCard key={player.lastName} {...player} />
          ))}
        </div>

        {/* Кнопка "Клуб" */}
        <Link
          to="/team"
          className="inline-block px-4 py-2 sm:px-6 sm:py-3 md:px-6 md:py-3 lg:px-8 lg:py-4 xl:px-8 xl:py-4 bg-[#0046AD] text-white text-[12px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] font-bold rounded-xl shadow-lg hover:bg-blue-700 transition"
        >
          Клуб
        </Link>
      </div>
    </section>
  );
}
