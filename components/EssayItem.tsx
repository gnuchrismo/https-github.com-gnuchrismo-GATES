
import React from 'react';
import { Essay } from '../types';

interface EssayItemProps {
  essay: Essay;
}

const EssayItem: React.FC<EssayItemProps> = ({ essay }) => {
  return (
    <article className="group relative">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="h-48 w-full shrink-0 overflow-hidden rounded-lg md:w-64">
          <img 
            src={essay.imageUrl} 
            alt={essay.title} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-accent">
            <span>{essay.category}</span>
            <span className="h-1 w-1 rounded-full bg-slate-300"></span>
            <span className="text-slate-500">{essay.date}</span>
          </div>
          <h3 className="serif-font mt-3 text-2xl font-bold text-slate-900 transition-colors group-hover:text-primary">
            {essay.title}
          </h3>
          <p className="mt-4 line-clamp-2 text-slate-600">
            {essay.excerpt}
          </p>
          <a 
            href="#" 
            className="mt-4 inline-block text-sm font-bold underline decoration-accent/30 decoration-2 underline-offset-4 hover:decoration-accent transition-all"
          >
            Read Essay
          </a>
        </div>
      </div>
    </article>
  );
};

export default EssayItem;
