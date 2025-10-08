import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "../data/dflData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function League() {
  const [activeCategory, setActiveCategory] = useState(0);

  const activeCat = categories[activeCategory];

  // Все матчи категории, сортировка по дате
  const allMatches = activeCat.groups
    .flatMap(g =>
      g.matches.map(m => ({ ...m, group: g.name }))
    )
    .sort((a, b) => {
      const [dayA, monthA, yearA] = a.date.split('.').map(Number);
      const [dayB, monthB, yearB] = b.date.split('.').map(Number);
      return new Date(yearB, monthB - 1, dayB) - new Date(yearA, monthA - 1, dayA);
    });



  // Карусель для блока сыгранных матчей
  const [indexAll, setIndexAll] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexAll(prev => (prev + 2 >= allMatches.length ? 0 : prev + 2));
    }, 5000);
    return () => clearInterval(interval);
  }, [indexAll, activeCategory]);

  const handleNextAll = () => {
    setIndexAll(prev => (prev + 2 >= allMatches.length ? 0 : prev + 2));
  };
  const handlePrevAll = () => {
    setIndexAll(prev => (prev - 2 < 0 ? allMatches.length - (allMatches.length % 2 === 0 ? 2 : 1) : prev - 2));
  };
  const visibleMatchesAll = [allMatches[indexAll], allMatches[indexAll + 1] || allMatches[0]];

  // Таблица отдельной группы
  const renderGroupTable = (group, hideName) => {
  const teams = Array.from(new Set(group.matches.flatMap(m => [m.team1, m.team2])));

  // вычисляем полную статистику по каждой команде
  const stats = teams.map(team => {
    let games=0, wins=0, draws=0, losses=0, points=0, goalsFor=0, goalsAgainst=0;
    group.matches.forEach(m => {
      if(m.team1===team || m.team2===team){
        games++;
        const scoreSelf = m.team1===team?m.score1:m.score2;
        const scoreOpp = m.team1===team?m.score2:m.score1;
        goalsFor += scoreSelf;
        goalsAgainst += scoreOpp;
        if(scoreSelf>scoreOpp){wins++; points+=3}
        else if(scoreSelf===scoreOpp){draws++; points+=1}
        else losses++;
      }
    });
    return {team, games, wins, draws, losses, points, goalsFor, goalsAgainst};
  });

  // функция для подсчёта очков и разницы только во "встречах между собой"
  const getHeadToHeadStats = (teamA, teamB) => {
    let ptsA=0, gdA=0, gfA=0;
    group.matches.forEach(m => {
      if (
        (m.team1===teamA && m.team2===teamB) ||
        (m.team1===teamB && m.team2===teamA)
      ) {
        const scoreA = m.team1===teamA ? m.score1 : m.score2;
        const scoreB = m.team1===teamA ? m.score2 : m.score1;
        gfA += scoreA;
        gdA += (scoreA - scoreB);
        if (scoreA > scoreB) ptsA += 3;
        else if (scoreA === scoreB) ptsA += 1;
      }
    });
    return {ptsA, gdA, gfA};
  };

  // сортировка по всем критериям
  const table = stats.sort((a, b) => {
    // 1️⃣ Очки
    if (b.points !== a.points) return b.points - a.points;

    // 2️⃣ Очки во встречах между собой
    const { ptsA: ptsAB } = getHeadToHeadStats(a.team, b.team);
    const { ptsA: ptsBA } = getHeadToHeadStats(b.team, a.team);
    if (ptsBA !== ptsAB) return ptsBA - ptsAB;

    // 3️⃣ Разница мячей в очных встречах
    const { gdA: gdAB } = getHeadToHeadStats(a.team, b.team);
    const { gdA: gdBA } = getHeadToHeadStats(b.team, a.team);
    if (gdBA !== gdAB) return gdBA - gdAB;

    // 4️⃣ Общая разница мячей
    const gdAllA = a.goalsFor - a.goalsAgainst;
    const gdAllB = b.goalsFor - b.goalsAgainst;
    if (gdAllB !== gdAllA) return gdAllB - gdAllA;

    // 5️⃣ Количество забитых мячей
    if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;

    // 6️⃣ Количество пропущенных мячей
    if (a.goalsAgainst !== b.goalsAgainst) return a.goalsAgainst - b.goalsAgainst;

    // 7️⃣ По жребию (рандом, но детерминированный)
    return a.team.localeCompare(b.team);
  });

  return (
    <div key={group.name} className="space-y-4">
      {!hideName && <h3 className="text-3xl font-bold text-blue-700">{group.name}</h3>}
      <div className="overflow-x-auto flex justify-center md:text-[16px] lg:text-[19px] xl:text-[20px]">
        <table className="border-collapse border border-gray-400 text-md">
          <thead className="bg-blue-100">
            <tr>
              <th className="border border-gray-400 px-3 py-3">Команда</th>
              <th className="border border-gray-400 px-2 py-3">И</th>
              <th className="border border-gray-400 px-2 py-3">В</th>
              <th className="border border-gray-400 px-2 py-3">Н</th>
              <th className="border border-gray-400 px-2 py-3">П</th>
              <th className="border border-gray-400 px-2 py-3">ЗМ</th>
              <th className="border border-gray-400 px-2 py-3">ПМ</th>
              <th className="border border-gray-400 px-2 py-3">О</th>
            </tr>
          </thead>
          <tbody>
            {table.map((row,i)=>(
              <tr key={i} className="hover:bg-gray-100">
                <td className="border border-gray-400 px-3 py-3 font-semibold">{row.team}</td>
                <td className="border border-gray-400 px-2 py-3">{row.games}</td>
                <td className="border border-gray-400 px-2 py-3">{row.wins}</td>
                <td className="border border-gray-400 px-2 py-3">{row.draws}</td>
                <td className="border border-gray-400 px-2 py-3">{row.losses}</td>
                <td className="border border-gray-400 px-2 py-3">{row.goalsFor}</td>
                <td className="border border-gray-400 px-2 py-3">{row.goalsAgainst}</td>
                <td className="border border-gray-400 px-2 py-3 font-bold">{row.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


  return (
    <div className="text-center space-y-10 pt-20">
      <h1 className="text-[34px] sm:text-[38px] md:text-[42px] lg:text-[46px] xl:text-[50px] font-extrabold text-blue-800 drop-shadow-md">Детская флорбольная лига</h1>

      {/* Вкладки категорий */}
      <div className="flex justify-center gap-5">
        {categories.map((cat,i)=>(
          <button key={i} onClick={()=>{setActiveCategory(i); setIndexAll(0)}} className={`text-[14px] sm:text-[18px] px-5 py-3 font-semibold rounded-md ${activeCategory===i?"bg-blue-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>{cat.name}</button>
        ))}
      </div>

      <div className="space-y-10 pb-10">
        {/* Сыгранные матчи */}
        <h2 className="text-[26px] sm:text-[34px] md:text-[36px] lg:text-[38px] xl:text-[40px] font-extrabold text-blue-700 drop-shadow-md text-center">Матчи</h2>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrevAll}
            className="text-blue-500 px-2 py-2 sm:px-3 sm:py-3 rounded-full shadow hover:bg-gray-200 active:bg-blue-500 transition"
          >
            <FaArrowLeft className="text-xl sm:text-2xl" />
          </button>
        <div className="flex gap-2 sm:gap-5">
            <AnimatePresence>
              {visibleMatchesAll.map((m,i)=>(
                <motion.div key={i} initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-30}} transition={{duration:0.5}} className="bg-white rounded-lg shadow-md border border-gray-200 w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] flex flex-col items-center justify-center">
                  <p className="text-[12px] sm:text-[16px] font-bold">{m.team1}</p>
                  <p className="text-[16px] sm:text-[20px] font-extrabold my-1">{m.score1} : {m.score2}</p>
                  <p className="text-[12px] sm:text-[16px] font-bold">{m.team2}</p>
                  <p className="text-gray-600 text-[10px] sm:text-[14px] mt-1">{m.date}</p>
                  <p className="text-[10px] sm:text-[14px] text-gray-500 mt-1">{m.group}</p>
                </motion.div>
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
        <h2 className="text-[26px] sm:text-[34px] md:text-[36px] lg:text-[38px] xl:text-[40px] font-extrabold text-blue-700 drop-shadow-md text-center mb-6">Турнирная таблица</h2>

        {/* Таблицы групп */}
        {activeCat.groups.length === 1 ? (
          renderGroupTable(activeCat.groups[0], true)
        ) : (
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">
            {activeCat.groups.map(g => (
              <div key={g.name} className="md:min-w-[320px] flex-1">
                {renderGroupTable(g, false)}
              </div>
            ))}
          </div>
        )}
        {/* Регламент */}
        <div className="px-4">
          <h2 className="text-center text-[26px] sm:text-[34px] md:text-[36px] lg:text-[38px] xl:text-[40px] font-extrabold text-blue-700 drop-shadow-md mb-2">
            Регламент
          </h2>
          <p className="max-w-4xl mx-auto text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-gray-700 whitespace-pre-line leading-relaxed text-left">
            {activeCat.reglament}
          </p>
        </div>
      </div>
    </div>
  )
}