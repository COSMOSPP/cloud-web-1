import React from 'react';
import { ShoppingCart, Bell, Maximize2, ChevronDown, Server } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#185adb] text-white h-12 flex items-center justify-between px-4 shadow-sm sticky top-0 z-50 text-xs sm:text-sm">
      {/* Left section: Logo & Nav */}
      <div className="flex items-center gap-6 h-full">
        {/* Brand */}
        <div className="flex items-center gap-2 font-bold tracking-tight text-white text-base shrink-0">
          <Server className="w-5 h-5 text-blue-100" />
          <span>服务器虚拟化管理系统v2.0</span>
        </div>

        {/* Nav Tabs */}
        <nav className="hidden md:flex items-center h-full ml-2 space-x-1">
          {[
            { label: '首页', active: true, hasArrow: false },
            { label: '资源中心', active: false, hasArrow: true },
            { label: '运维中心', active: false, hasArrow: true },
            { label: '运营中心', active: false, hasArrow: false },
            { label: '管理中心', active: false, hasArrow: true },
          ].map((item) => (
            <button
              key={item.label}
              className={`h-full px-3.5 flex items-center gap-1 font-medium transition-all cursor-pointer ${
                item.active
                  ? 'bg-blue-600/80 text-white font-bold border-b-2 border-white'
                  : 'text-blue-100 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>{item.label}</span>
              {item.hasArrow && <ChevronDown className="w-3.5 h-3.5 opacity-80" />}
            </button>
          ))}
        </nav>
      </div>

      {/* Right section: Action Icons & Account */}
      <div className="flex items-center gap-4 text-blue-100">
        <button className="hover:text-white transition-colors cursor-pointer p-1" title="购物车">
          <ShoppingCart className="w-4 h-4" />
        </button>
        <button className="hover:text-white transition-colors cursor-pointer p-1 relative" title="消息通知">
          <Bell className="w-4 h-4" />
        </button>
        <button className="hover:text-white transition-colors cursor-pointer p-1" title="全屏">
          <Maximize2 className="w-3.5 h-3.5" />
        </button>

        <div className="h-3.5 w-px bg-blue-400/40"></div>

        {/* Account Dropdown */}
        <div className="flex items-center gap-1.5 cursor-pointer hover:text-white text-xs font-mono font-medium">
          <span>107300006863@qq.com</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </div>
      </div>
    </header>
  );
}
