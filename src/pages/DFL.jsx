import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function League() {
  const categories = [
    {
      name: "2009-2010",
      groups: [
        {
          name: "Группа A",
          matches: [
            { "team1": "Юность", "team2": "Энергия-09", "score1": 3, "score2": 6, "date": "2025-09-01" },
            { "team1": "Юность", "team2": "Виктория", "score1": 1, "score2": 0, "date": "2025-09-02" },
            { "team1": "Энергия-09", "team2": "Виктория", "score1": 2, "score2": 2, "date": "2025-09-03" },
            { "team1": "Энергия-09", "team2": "Старт", "score1": 11, "score2": 1, "date": "2025-09-04" },
            { "team1": "Виктория", "team2": "Старт", "score1": 2, "score2": 0, "date": "2025-09-05" }
          ]
        },
        {
          name: "Группа B",
          matches: [
            { "team1": "Радуга", "team2": "Энергия-10", "score1": 8, "score2": 3, "date": "2025-09-01" },
            { "team1": "Радуга", "team2": "Виктория-2", "score1": 7, "score2": 3, "date": "2025-09-02" },
            { "team1": "Радуга", "team2": "Молния", "score1": 6, "score2": 3, "date": "2025-09-03" },
            { "team1": "Энергия-10", "team2": "Виктория-2", "score1": 5, "score2": 5, "date": "2025-09-04" },
            { "team1": "Энергия-10", "team2": "Молния", "score1": 8, "score2": 4, "date": "2025-09-05" },
            { "team1": "Виктория-2", "team2": "Молния", "score1": 2, "score2": 4, "date": "2025-09-06" }
          ]
        },
      ]
    },
    {
      name: "2011-2012",
      groups: [
        {
          name: "Группа A",
          matches: [
            { team1: "Виктория", team2: "Энергия", score1: 7, score2: 4, date: "01.09.2025" },
            { team1: "Виктория", team2: "Юность", score1: 8, score2: 2, date: "05.09.2025" },
            { team1: "Виктория", team2: "Виктория-2", score1: 9, score2: 1, date: "09.09.2025" },
            { team1: "Виктория", team2: "Омская-1", score1: 7, score2: 4, date: "10.09.2025" },
            { team1: "Энергия", team2: "Юность", score1: 8, score2: 7, date: "11.09.2025" },
            { team1: "Энергия", team2: "Виктория-2", score1: 10, score2: 2, date: "12.09.2025" },
            { team1: "Энергия", team2: "Омская-1", score1: 6, score2: 8, date: "13.09.2025" },
            { team1: "Юность", team2: "Омская-1", score1: 4, score2: 8, date: "14.09.2025" },
            { team1: "Тайфун", team2: "Радуга", score1: 1, score2: 5, date: "15.09.2025" },
            { team1: "Тайфун", team2: "Виктория-2", score1: 3, score2: 3, date: "16.09.2025" },
            { team1: "Тайфун", team2: "Омская-1", score1: 1, score2: 6, date: "17.09.2025" },
            { team1: "Радуга", team2: "Виктория-2", score1: 2, score2: 1, date: "18.09.2025" },
            { team1: "Радуга", team2: "Омская-1", score1: 5, score2: 8, date: "19.09.2025" }
          ]
        }
      ]
    },
    {
      name: "2013-2014",
      groups: [
        {
          name: "Группа A",
          matches: [
            { "team1": "Олимп", "team2": "Виктория", "score1": 1, "score2": 1, "date": "2025-09-01" },
            { "team1": "Олимп", "team2": "Радуга", "score1": 5, "score2": 4, "date": "2025-09-02" },
            { "team1": "Олимп", "team2": "Юность", "score1": 8, "score2": 1, "date": "2025-09-03" },
            { "team1": "Виктория", "team2": "Радуга", "score1": 6, "score2": 2, "date": "2025-09-04" },
            { "team1": "Радуга", "team2": "Юность", "score1": 10, "score2": 2, "date": "2025-09-05" }
          ]
        },
        {
          name: "Группа B",
          matches: [
            { "team1": "Омская-1", "team2": "Виктория-2", "score1": 0, "score2": 6, "date": "2025-09-01" },
            { "team1": "Омская-1", "team2": "Метеор", "score1": 1, "score2": 6, "date": "2025-09-02" },
            { "team1": "Омская-1", "team2": "Олимп-2", "score1": 1, "score2": 2, "date": "2025-09-03" },
            { "team1": "Виктория-2", "team2": "Радуга-2", "score1": 3, "score2": 3, "date": "2025-09-04" },
            { "team1": "Виктория-2", "team2": "Метеор", "score1": 2, "score2": 5, "date": "2025-09-05" },
            { "team1": "Виктория-2", "team2": "Олимп-2", "score1": 2, "score2": 3, "date": "2025-09-06" },
            { "team1": "Радуга-2", "team2": "Метеор", "score1": 8, "score2": 4, "date": "2025-09-07" },
            { "team1": "Радуга-2", "team2": "Олимп-2", "score1": 4, "score2": 0, "date": "2025-09-08" },
            { "team1": "Метеор", "team2": "Олимп-2", "score1": 3, "score2": 2, "date": "2025-09-09" }
          ]
        },
      ]
    },
    {
      name: "2015-2016",
      groups: [
        {
          name: "Группа A",
          matches: [
            { "team1": "Виктория", "team2": "Юность", "score1": 14, "score2": 1, "date": "2025-09-01" },
            { "team1": "Виктория", "team2": "Радуга", "score1": 5, "score2": 0, "date": "2025-09-02" },
            { "team1": "Виктория", "team2": "Старт", "score1": 9, "score2": 0, "date": "2025-09-03" },
            { "team1": "Юность", "team2": "Старт", "score1": 1, "score2": 8, "date": "2025-09-04" },
            { "team1": "Радуга", "team2": "Старт", "score1": 4, "score2": 10, "date": "2025-09-05" },
            { "team1": "Радуга", "team2": "Олимп", "score1": 4, "score2": 4, "date": "2025-09-06" },
            { "team1": "Старт", "team2": "Олимп", "score1": 5, "score2": 3, "date": "2025-09-07" }
          ]
        }
      ]
    },
  ]

  const [activeCategory, setActiveCategory] = useState(0);

  const activeCat = categories[activeCategory];

  // Все матчи категории, сортировка по дате
  const allMatches = activeCat.groups.flatMap(g =>
    g.matches.map(m => ({ ...m, group: g.name }))
  ).sort((a, b) => new Date(a.date) - new Date(b.date));

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
    const table = teams.map(team => {
      let games=0, wins=0, draws=0, losses=0, points=0;
      group.matches.forEach(m => {
        if(m.team1===team || m.team2===team){
          games++;
          const scoreSelf = m.team1===team?m.score1:m.score2;
          const scoreOpp = m.team1===team?m.score2:m.score1;
          if(scoreSelf>scoreOpp){wins++; points+=3}
          else if(scoreSelf===scoreOpp){draws++; points+=1}
          else losses++;
        }
      });
      return {team, games, wins, draws, losses, points};
    }).sort((a,b)=>b.points - a.points || b.wins - a.wins);

    return (
      <div key={group.name} className="space-y-4 min-h-screen">
        {!hideName && <h3 className="text-3xl font-bold text-blue-700">{group.name}</h3>}
        <div className="overflow-x-auto flex justify-center">
          <table className="border-collapse border border-gray-400 text-md">
            <thead className="bg-blue-100">
              <tr>
                <th className="border border-gray-400 px-4 py-3">Команда</th>
                <th className="border border-gray-400 px-4 py-3">И</th>
                <th className="border border-gray-400 px-4 py-3">В</th>
                <th className="border border-gray-400 px-4 py-3">Н</th>
                <th className="border border-gray-400 px-4 py-3">П</th>
                <th className="border border-gray-400 px-4 py-3">Очки</th>
              </tr>
            </thead>
            <tbody>
              {table.map((row,i)=>(
                <tr key={i} className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-3 font-semibold">{row.team}</td>
                  <td className="border border-gray-400 px-4 py-3">{row.games}</td>
                  <td className="border border-gray-400 px-4 py-3">{row.wins}</td>
                  <td className="border border-gray-400 px-4 py-3">{row.draws}</td>
                  <td className="border border-gray-400 px-4 py-3">{row.losses}</td>
                  <td className="border border-gray-400 px-4 py-3 font-bold">{row.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  return (
    <div className="text-center space-y-14 pt-30">
      <h1 className="text-5xl font-extrabold text-blue-800 drop-shadow-md">Детская флорбольная лига</h1>

      {/* Вкладки категорий */}
      <div className="flex justify-center gap-5">
        {categories.map((cat,i)=>(
          <button key={i} onClick={()=>{setActiveCategory(i); setIndexAll(0)}} className={`px-5 py-3 font-semibold rounded-md ${activeCategory===i?"bg-blue-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>{cat.name}</button>
        ))}
      </div>

      <div className="pt-6 space-y-14">
        {/* Сыгранные матчи */}
        <h2 className="text-4xl font-extrabold text-blue-800 drop-shadow-md">Сыгранные матчи</h2>
        <div className="flex items-center justify-center gap-4">
          <button onClick={handlePrevAll} className="text-blue-500 px-3 py-3 rounded-full shadow hover:bg-gray-200 active:bg-blue-500">⬅️</button>
          <div className="flex gap-5">
            <AnimatePresence>
              {visibleMatchesAll.map((m,i)=>(
                <motion.div key={i} initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-30}} transition={{duration:0.5}} className="bg-white rounded-lg shadow-md border border-gray-200 w-[220px] h-[146px] flex flex-col items-center justify-center">
                  <p className="text-sm font-bold">{m.team1}</p>
                  <p className="text-lg font-extrabold my-1">{m.score1} : {m.score2}</p>
                  <p className="text-sm font-bold">{m.team2}</p>
                  <p className="text-gray-600 text-xs mt-1">{m.date}</p>
                  <p className="text-xs text-gray-500 mt-1">{m.group}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <button onClick={handleNextAll} className="text-blue-500 px-3 py-3 rounded-full shadow hover:bg-gray-200 active:bg-blue-500">➡️</button>
        </div>
        <h2 className="text-4xl font-extrabold text-blue-800 drop-shadow-md mb-6">Турнирная таблица</h2>

        {/* Таблицы групп */}
        {activeCat.groups.length === 1 
          ? renderGroupTable(activeCat.groups[0], true) 
          : activeCat.groups.map((g)=>renderGroupTable(g,false))
        }

        {/* Регламент */}
        <div>
          <h2 className="text-4xl font-extrabold text-blue-800 drop-shadow-md mb-6">Регламент</h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-700">Здесь добавим текст регламента.</p>
        </div>
      </div>
    </div>
  )
}