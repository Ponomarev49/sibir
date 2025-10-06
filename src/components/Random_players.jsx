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
      <div className="bg-white/90 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
        {/* Контейнер с фиксированной высотой */}
        <div className="w-full h-100 overflow-hidden">
          <img
            src={photo}
            alt={lastName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="py-3 text-center">
          <h3 className="text-[24px] font-bold text-gray-800">
            {number ? `#${number} ` : ""}
            {lastName}
          </h3>
          <h3 className="text-[24px] font-bold text-gray-800">{firstName}</h3>
          <p className="text-[18px] text-gray-500">{position}</p>
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
        <h2 className="text-4xl font-bold mb-8">Наш клуб</h2>

        {/* Сетка с карточками */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mb-10">
          {randomPlayers.map((player) => (
            <MiniPlayerCard
              key={`${player.lastName}-${player.number}`}
              {...player}
            />
          ))}
        </div>

        {/* Кнопка "Клуб" */}
        <Link
          to="/team"
          className="inline-block px-8 py-4 bg-[#0046AD] text-white text-xl font-bold rounded-xl shadow-lg hover:bg-blue-700 transition"
        >
          Клуб
        </Link>
      </div>
    </section>
  );
}
