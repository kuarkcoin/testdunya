// app/components/ExamCard.tsx
import React from 'react';
import { Exam } from '../data/exams';

interface ExamCardProps {
  exam: Exam;
}

export const ExamCard: React.FC<ExamCardProps> = ({ exam }) => {
  
  const getBadgeStyle = (score: number) => {
    if (score >= 80) return "bg-red-100 text-red-700 ring-red-600/20";
    if (score >= 60) return "bg-blue-100 text-blue-700 ring-blue-700/10";
    return "bg-gray-100 text-gray-600 ring-gray-500/10";
  };

  const getBadgeLabel = (score: number) => {
    if (score >= 80) return "Trend";
    if (score >= 60) return "Popüler";
    return "Standart";
  };

  return (
    <article className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-gray-200 transition-all hover:shadow-lg hover:border-indigo-200">
      
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
            {exam.name}
          </h3>
          <p className="text-sm font-medium text-gray-500">{exam.label}</p>
        </div>
        <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${getBadgeStyle(exam.score)}`}>
          {getBadgeLabel(exam.score)}
        </span>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>İlgi: <strong>%{exam.score}</strong></span>
          <span>{exam.monthly} arama</span>
        </div>
        <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
          <div 
            className="h-full bg-indigo-500 rounded-full transition-all duration-500 ease-out group-hover:bg-indigo-600" 
            style={{ width: `${exam.score}%` }} 
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {exam.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="inline-flex items-center rounded bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 border border-gray-200">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100">
        <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors">
          Hemen Çöz
        </button>
        <p className="text-center text-xs text-gray-400 mt-2">
          {exam.highlight}
        </p>
      </div>
    </article>
  );
};
