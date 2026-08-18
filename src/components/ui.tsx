import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("bg-white rounded-md shadow-2xs border border-slate-200/90 flex flex-col overflow-hidden", className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-3 py-2 border-b border-slate-100 flex items-center justify-between bg-white", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-xs sm:text-sm font-bold text-slate-800 flex items-center tracking-tight", className)} {...props}>
      <span className="w-[3.5px] h-3.5 bg-[#1d5bf0] rounded-2xs shrink-0 inline-block mr-2"></span>
      <span>{children}</span>
    </h3>
  );
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-2.5 flex-1", className)} {...props}>
      {children}
    </div>
  );
}
