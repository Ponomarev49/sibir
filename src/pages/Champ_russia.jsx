import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { champ_russia } from "../data/champ_russia";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Champ_russia() {
  const { teams, sibir_matches, others_matches } = champ_russia;

  // Карусель матчей Сибири
  const matchesCarousel = sibir_matches.sort(
    (a, b) => new Date(a.date.split(".").reverse().join("-")) - new Date(b.date.split(".").reverse().join("-"))
  );

  const [indexAll, setIndexAll] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexAll((prev) => (prev + 1 >= matchesCarousel.length ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [matchesCarousel.length]);

  const handleNextAll = () => setIndexAll((prev) => (prev + 1 >= matchesCarousel.length ? 0 : prev + 1));
  const handlePrevAll = () => setIndexAll((prev) => (prev - 1 < 0 ? matchesCarousel.length - 1 : prev - 1));

  const visibleMatchesAll = [
    matchesCarousel[indexAll],
    matchesCarousel[indexAll + 1] || matchesCarousel[0],
  ];

  const getLogo = (teamName) => {
    const t = teams.find((t) => t.name === teamName);
    return t ? t.img : "/assets/teams/default.jpg";
  };

  // ✅ Объединяем оба списка матчей
  const allMatches = [...sibir_matches, ...others_matches];

  const stats = {};

  teams.forEach((team) => {
    stats[team.name] = {
      team,
      games: 0,
      wins: 0,
      winsOT: 0,
      winsSO: 0,
      losses: 0,
      lossesOT: 0,
      lossesSO: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    };
  });

  allMatches.forEach((match) => {
    const { team1, team2, score1, score2, resultType } = match;
    if (score1 == null || score2 == null || resultType == null) return;

    const teamA = stats[team1];
    const teamB = stats[team2];
    teamA.games++;
    teamB.games++;

    teamA.goalsFor += score1;
    teamA.goalsAgainst += score2;
    teamB.goalsFor += score2;
    teamB.goalsAgainst += score1;

    if (score1 > score2) {
      if (resultType === "regular") {
        teamA.wins++;
        teamA.points += 3;
        teamB.losses++;
      } else if (resultType === "ot") {
        teamA.winsOT++;
        teamA.points += 2;
        teamB.lossesOT++;
        teamB.points += 1;
      } else if (resultType === "so") {
        teamA.winsSO++;
        teamA.points += 2;
        teamB.lossesSO++;
        teamB.points += 1;
      }
    } else {
      if (resultType === "regular") {
        teamB.wins++;
        teamB.points += 3;
        teamA.losses++;
      } else if (resultType === "ot") {
        teamB.winsOT++;
        teamB.points += 2;
        teamA.lossesOT++;
        teamA.points += 1;
      } else if (resultType === "so") {
        teamB.winsSO++;
        teamB.points += 2;
        teamA.lossesSO++;
        teamA.points += 1;
      }
    }
  });

  const table = Object.values(stats).sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    const diffA = a.goalsFor - a.goalsAgainst;
    const diffB = b.goalsFor - b.goalsAgainst;
    return diffB - diffA;
  });

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-md pt-20 pb-10 min-h-screen">
      <h1 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[43px] xl:text-[50px] font-extrabold text-blue-900 drop-shadow-md text-center mb-8">
        Чемпионат России среди мужских команд "Высшая лига"
      </h1>

      <h2 className="text-[26px] sm:text-[34px] md:text-[36px] lg:text-[38px] xl:text-[40px] font-extrabold text-blue-700 drop-shadow-md text-center mb-2">
        Матчи команды «Сибирь»
      </h2>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrevAll}
          className="text-blue-500 px-2 py-2 sm:px-3 sm:py-3 rounded-full shadow hover:bg-gray-200 active:bg-blue-500 transition"
        >
          <FaArrowLeft className="text-xl sm:text-2xl" />
        </button>
        <div className="flex gap-2 sm:gap-5">
          <AnimatePresence>
            {visibleMatchesAll.map((m, i) => (
              <motion.a
                key={i}
                href={m.streamLink} // ссылка на трансляцию матча
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md border border-gray-200 w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] flex flex-col items-center justify-center hover:shadow-lg hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={getLogo(m.team1)}
                    alt={m.team1}
                    className="w-6 h-6 rounded-full"
                  />
                  <p className="text-[12px] sm:text-[16px] font-bold">{m.team1}</p>
                </div>
                <p className="text-[16px] sm:text-[20px] font-extrabold my-1">
                  {m.score1 ?? "-"} : {m.score2 ?? "-"}
                </p>
                <div className="flex items-center gap-2">
                  <img
                    src={getLogo(m.team2)}
                    alt={m.team2}
                    className="w-6 h-6 rounded-full"
                  />
                  <p className="text-[12px] sm:text-[16px] font-bold">{m.team2}</p>
                </div>
                <p className="text-gray-600 text-[8px] sm:text-[12px] mt-1">{m.date}</p>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
        <button
          onClick={handleNextAll}
          className="text-blue-500 px-2 py-2 sm:px-3 sm:py-3 rounded-full shadow hover:bg-gray-200 active:bg-blue-500 transition"
        >
          <FaArrowRight className="text-xl sm:text-2xl" />
        </button>  
      </div>

      <h2 className="text-[26px] sm:text-[34px] md:text-[36px] lg:text-[38px] xl:text-[40px] font-extrabold text-blue-700 drop-shadow-md text-center mt-8 mb-2">Турнирная таблица</h2>

      <table className="table-auto border border-gray-300 text-[9px] md:text-base mx-auto">
        <thead>
          <tr className="bg-blue-100 text-gray-700">
            <th className="border border-gray-300 px-1 sm:px-2 py-1 text-left">Команда</th>
            <th className="border border-gray-300 px-1 sm:px-2 py-1 text-center">И</th>
            <th className="border border-gray-300 px-1 sm:px-2 py-1 text-center">В</th>
            <th className="border border-gray-300 px-1 sm:px-2 py-1 text-center">ВО</th>
            <th className="border border-gray-300 px-1 sm:px-2 py-1 text-center">ВБ</th>
            <th className="border border-gray-300 px-1 sm:px-2 py-1 text-center">ПО</th>
            <th className="border border-gray-300 px-1 sm:px-2 py-1 text-center">ПБ</th>
            <th className="border border-gray-300 px-1 sm:px-2 py-1 text-center">П</th>
            <th className="border border-gray-300 px-1 sm:px-2 py-1 text-center">+</th>
            <th className="border border-gray-300 px-1 sm:px-2 py-1 text-center">−</th>
            <th className="border border-gray-300 px-1 sm:px-2 py-1 text-center">±</th>
            <th className="border border-gray-300 px-1 sm:px-2 py-1 text-center">О</th>
          </tr>
        </thead>
        <tbody>
          {table.map((t, i) => {
            const isTop4 = i < 4;
            const isBottom2 = i >= table.length - 2;

            let rowColor = "";
            if (isTop4) {
              rowColor = "bg-yellow-50";
            } else if (isBottom2) {
              rowColor = "bg-red-50";
            } else {
              rowColor = i % 2 === 0 ? "bg-gray-50" : "bg-white";
            }

            return (
              <tr
                key={t.team.name}
                className={`hover:bg-gray-100 ${rowColor}`}
              >
              <td className="border border-gray-300 px-2 py-1 font-medium flex items-center gap-2 whitespace-nowrap">
                <img
                  src={t.team.img}
                  alt={t.team.name}
                  className="w-5 h-5 sm:w-6 sm:h-6 object-cover rounded-full"
                />
                {t.team.name}
              </td>
              <td className="border border-gray-300 text-center px-1 sm:px-2 py-1">{t.games}</td>
              <td className="border border-gray-300 text-center px-1 sm:px-2 py-1">{t.wins}</td>
              <td className="border border-gray-300 text-center px-1 sm:px-2 py-1">{t.winsOT}</td>
              <td className="border border-gray-300 text-center px-1 sm:px-2 py-1">{t.winsSO}</td>
              <td className="border border-gray-300 text-center px-1 sm:px-2 py-1">{t.lossesOT}</td>
              <td className="border border-gray-300 text-center px-1 sm:px-2 py-1">{t.lossesSO}</td>
              <td className="border border-gray-300 text-center px-1 sm:px-2 py-1">{t.losses}</td>
              <td className="border border-gray-300 text-center px-1 sm:px-2 py-1">{t.goalsFor}</td>
              <td className="border border-gray-300 text-center px-1 sm:px-2 py-1">{t.goalsAgainst}</td>
              <td className="border border-gray-300 text-center px-1 sm:px-2 py-1">
                {t.goalsFor - t.goalsAgainst > 0
                  ? `+${t.goalsFor - t.goalsAgainst}`
                  : t.goalsFor - t.goalsAgainst}
              </td>
              <td className="border border-gray-300 text-center px-2 py-1 font-bold">
                {t.points}
              </td>
            </tr>
            );
          })}
        </tbody>
      </table>

      {/* Легенда */}
      <div className="mt-4 max-w-4xl mx-auto text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-700 space-y-2">
        <div className="flex flex-wrap justify-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-yellow-50 border border-gray-300 rounded"></span>
            <span>— Зона Play-off</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-red-50 border border-gray-300 rounded"></span>
            <span>— Зона вылета</span>
          </div>
        </div>

        <hr className="my-2 border-gray-300" />

        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-1 gap-x-4">
            <span className="text-left"><strong>И</strong> — игры</span>
            <span className="text-left"><strong>В</strong> — победы</span>
            <span className="text-left"><strong>ВО</strong> — победы в овертайме</span>
            <span className="text-left"><strong>ВБ</strong> — победы по буллитам</span>
            <span className="text-left"><strong>ПО</strong> — поражения в овертайме</span>
            <span className="text-left"><strong>ПБ</strong> — поражения по буллитам</span>
            <span className="text-left"><strong>П</strong> — поражения</span>
            <span className="text-left"><strong>+</strong> — забитые голы</span>
            <span className="text-left"><strong>−</strong> — пропущенные голы</span>
            <span className="text-left"><strong>±</strong> — разница мячей</span>
            <span className="text-left"><strong>О</strong> — очки</span>
          </div>
        </div>
      </div>
    </div>
  );
}
