import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("bg-white rounded-2xl shadow-[0_2px_10px_-3px_rgba(15,23,42,0.06),0_1px_4px_-2px_rgba(15,23,42,0.04)] border border-slate-200/80 hover:border-blue-200/80 transition-all duration-200 flex flex-col overflow-hidden", className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-5 py-3.5 border-b border-slate-100/90 flex items-center justify-between bg-slate-50/40", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-sm font-bold text-slate-800 flex items-center gap-2 tracking-wide", className)} {...props}>
      <span className="w-1.5 h-4 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full shrink-0 shadow-sm"></span>
      <span>{children}</span>
    </h3>
  );
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-5 flex-1", className)} {...props}>
      {children}
    </div>
  );
}
