import React from "react";
import { staff, goalkeepers, defenders, forwards } from "../data/teamData";

function PlayerCard({ firstName, lastName, position, photo, number }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
      <img src={photo} alt={lastName} className="w-[133px] h-[200px] sm:w-[166px] sm:h-[250px] md:w-[216px] md:h-[325px] lg:w-[290px] lg:h-[440px] xl:w-[290px] xl:h-[440px]  object-contain" />
      <div className="py-6 text-center">
        <h3 className="text-[15px] sm:text-[19px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-bold text-gray-800">
            {number ? `#${number} ` : ""}
            {lastName}
        </h3>
        <h3 className="text-[15px] sm:text-[19px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-bold text-gray-800">{firstName}</h3>
        <p className="text-[13px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-gray-500">{position}</p>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <div className="bg-gray-50 min-h-screen pt-18">
      <div className="max-w-7xl mx-auto px-4 pb-12 space-y-12">
        {/* Тренерский штаб */}
        <Section title="Флорбольный клуб Сибирь (Омская область)" players={staff} />

        {/* Вратари */}
        <Section title="Вратари" players={goalkeepers} />

        {/* Защитники */}
        <Section title="Защитники" players={defenders} />

        {/* Нападающие */}
        <Section title="Нападающие" players={forwards} />
      </div>
    </div>
  );
}

function Section({ title, players }) {
  return (
    <div>
      <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-bold text-blue-900 mb-8 text-center">{title}</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {players.map((person, index) => (
          <PlayerCard key={index} {...person} />
        ))}
      </div>
    </div>
  );
}
