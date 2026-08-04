import React from 'react';
import { Search, Bell, HelpCircle, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#083cb0] text-white h-16 flex items-center justify-between px-6 min-w-[1440px]">
      <div className="flex items-center gap-10 h-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <h1 className="text-xl font-bold tracking-wider">虚拟化云管平台</h1>
        </div>
        
        <nav className="flex h-full">
          {['首页', '产品中心', '运维中心', '管理中心'].map((item, idx) => (
            <button
              key={item}
              className={`h-full px-6 flex items-center text-sm font-medium transition-colors ${
                idx === 0 ? 'bg-blue-600/50 border-b-2 border-white' : 'hover:bg-white/10'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-200" />
          <input 
            type="text" 
            placeholder="搜索资源、功能、文档..." 
            className="bg-blue-800/50 border border-blue-700 rounded-full py-1.5 pl-9 pr-4 text-sm text-white placeholder:text-blue-300 focus:outline-none focus:ring-1 focus:ring-white w-64 transition-all"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative hover:text-blue-200 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] w-4 h-4 flex items-center justify-center rounded-full border border-[#083cb0]">12</span>
          </button>
          <button className="hover:text-blue-200 transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-white/5 py-1 px-2 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium leading-none">admin</span>
              <span className="text-[10px] text-blue-200 mt-1">超级管理员</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
