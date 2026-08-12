import React from 'react';
import { Search, Bell, HelpCircle, User, Cloud } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#083cb0] text-white h-16 flex items-center justify-between px-5 shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-8 h-full">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shadow-sm">
            <Cloud className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-bold tracking-wider text-white font-sans">虚拟化云管平台</h1>
            <span className="text-[10px] text-blue-200 -mt-0.5 tracking-wider font-mono uppercase">Cloud Management Platform</span>
          </div>
        </div>
        
        {/* Nav tabs */}
        <nav className="flex h-full ml-4">
          {['首页', '产品中心', '运维中心', '管理中心'].map((item, idx) => (
            <button
              key={item}
              className={`h-full px-5 flex items-center text-sm font-medium transition-all relative ${
                idx === 0
                  ? 'bg-blue-600/50 text-white font-semibold'
                  : 'text-blue-100/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {item}
              {idx === 0 && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-t-full shadow-sm"></span>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-6">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-200" />
          <input 
            type="text" 
            placeholder="搜索资源、实例、应用..." 
            className="bg-blue-950/40 border border-blue-400/40 rounded-full py-1.5 pl-10 pr-4 text-xs text-white placeholder:text-blue-200/70 focus:outline-none focus:ring-2 focus:ring-white/50 w-64 transition-all"
          />
        </div>
        
        {/* User & Actions */}
        <div className="flex items-center gap-3">
          <button className="relative p-2 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 bg-red-500 text-white text-[9px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full border border-[#083cb0]">12</span>
          </button>
          <button className="p-2 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            <HelpCircle className="w-4 h-4" />
          </button>
          
          <div className="h-4 w-px bg-blue-400/30 mx-1"></div>

          <div className="flex items-center gap-2.5 cursor-pointer hover:bg-white/10 py-1.5 px-2.5 rounded-xl transition-all border border-transparent">
            <div className="w-7 h-7 bg-white/20 border border-white/30 rounded-full flex items-center justify-center shadow-sm">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white leading-none">admin</span>
              <span className="text-[10px] text-blue-200 font-medium mt-1">超级管理员</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
