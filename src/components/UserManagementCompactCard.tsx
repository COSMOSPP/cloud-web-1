import React from 'react';
import { Card } from './ui';
import { userInfo, myManagement } from '../data';
import { UserCheck, ShieldCheck, Users, AlertTriangle, AlertCircle, Info, ShieldAlert } from 'lucide-react';

export default function UserManagementCompactCard() {
  return (
    <Card className="p-3 bg-white border border-slate-200/80 shadow-2xs hover:shadow-xs transition-shadow">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 text-xs">
        {/* Left Section: User Info */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-2xs shrink-0">
            <UserCheck className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-2 flex-wrap min-w-0">
            <span className="font-extrabold text-slate-900 text-sm tracking-tight">{userInfo.username}</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-semibold border border-blue-100/80">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              {userInfo.role}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              在线
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono font-medium border border-slate-200/60">
              IP: {userInfo.currentLogin}
            </span>
          </div>
        </div>

        {/* Divider for desktop */}
        <div className="hidden lg:block w-px h-6 bg-slate-200/80"></div>

        {/* Right Section: My Management */}
        <div className="flex items-center justify-between lg:justify-end gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 font-bold border border-slate-200/70 shrink-0">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>我的管理</span>
            <span className="ml-1 text-xs px-1.5 py-0.2 bg-blue-600 text-white rounded-full font-extrabold">
              {myManagement.userCount}人
            </span>
          </div>

          {/* Inline Alert Severity Badges */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-red-50/60 border border-red-100 text-red-700 font-semibold">
              <ShieldAlert className="w-3 h-3 text-red-500" />
              <span>灾难</span>
              <span className="font-extrabold font-mono ml-0.5">{myManagement.disaster}</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50/60 border border-amber-100 text-amber-700 font-semibold">
              <AlertTriangle className="w-3 h-3 text-amber-500" />
              <span>严重</span>
              <span className="font-extrabold font-mono ml-0.5">{myManagement.severe}</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50/60 border border-blue-100 text-blue-700 font-semibold">
              <AlertCircle className="w-3 h-3 text-blue-500" />
              <span>一般</span>
              <span className="font-extrabold font-mono ml-0.5">{myManagement.normal}</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/80 text-slate-600 font-semibold">
              <Info className="w-3 h-3 text-slate-400" />
              <span>提示</span>
              <span className="font-extrabold font-mono ml-0.5">{myManagement.info}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
