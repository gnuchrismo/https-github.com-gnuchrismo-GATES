
import React from 'react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="group min-w-[280px] md:min-w-[320px] flex-1 shrink-0">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-slate-100 shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
        <img 
          src={book.coverImage} 
          alt={book.title} 
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold text-slate-900">{book.title}</h3>
        <p className="mt-2 text-sm text-slate-500 leading-snug">{book.subtitle}</p>
        <button className="mt-4 flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors">
          Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
