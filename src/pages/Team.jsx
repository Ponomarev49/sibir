import React from "react";
import { staff, goalkeepers, defenders, forwards } from "../data/teamData";

function PlayerCard({ firstName, lastName, position, photo, number }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
      <img src={photo} alt={lastName} className="w-full h-110 object-contain" />
      <div className="py-6 text-center">
        <h3 className="text-[28px] font-bold text-gray-800">
            {number ? `#${number} ` : ""}
            {lastName}
        </h3>
        <h3 className="text-[28px] font-bold text-gray-800">{firstName}</h3>
        <p className="text-[22px] text-gray-500">{position}</p>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <div className="bg-gray-50 min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
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
      <h2 className="text-[36px] font-bold text-blue-900 mb-8 text-center">{title}</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {players.map((person, index) => (
          <PlayerCard key={index} {...person} />
        ))}
      </div>
    </div>
  );
}
