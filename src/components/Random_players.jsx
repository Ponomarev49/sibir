import React, { useEffect, useState } from "react";
import { staff, goalkeepers, defenders, forwards } from "../data/teamData";
import { Link } from "react-router-dom";

export default function ClubShowcase() {
  // Объединяем всех в одну коллекцию
  const allPlayers = [...staff, ...goalkeepers, ...defenders, ...forwards];

  const [randomPlayers, setRandomPlayers] = useState([]);

  // Функция случайного выбора 5 игроков
  const getRandomPlayers = () => {
    const shuffled = [...allPlayers].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  useEffect(() => {
    setRandomPlayers(getRandomPlayers()); // начальная загрузка
    const interval = setInterval(() => {
      setRandomPlayers(getRandomPlayers()); // обновление каждые 5 сек
    }, 5000);

    return () => clearInterval(interval); // очистка таймера
  }, []);


  function MiniPlayerCard({ firstName, lastName, position, photo, number }) {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
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
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Наш клуб</h2>

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
          className="inline-block px-6 py-3 bg-[#0046AD] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Клуб
        </Link>
      </div>
    </section>
  );
}
