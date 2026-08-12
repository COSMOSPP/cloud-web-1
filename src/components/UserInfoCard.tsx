import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { userInfo } from '../data';
import { ShieldCheck, UserCheck } from 'lucide-react';

export default function UserInfoCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>用户信息</CardTitle>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          在线
        </span>
      </CardHeader>
      <CardContent className="p-5 space-y-4">
        {/* User Badge Banner */}
        <div className="flex items-center gap-3.5 p-3 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50/50 border border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-sm">
            <UserCheck className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-800">{userInfo.username}</span>
            <span className="text-xs text-blue-600 font-medium flex items-center gap-1 mt-0.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              {userInfo.role}
            </span>
          </div>
        </div>

        {/* Data Rows */}
        <div className="space-y-3 pt-1 text-xs">
          <div className="flex items-center justify-between py-1">
            <span className="text-slate-500 font-medium">上次登录 IP</span>
            <span className="text-slate-700 font-mono font-semibold bg-slate-100/80 px-2 py-0.5 rounded border border-slate-200/60">{userInfo.lastLogin}</span>
          </div>
          <div className="flex items-center justify-between py-1 border-t border-slate-100">
            <span className="text-slate-500 font-medium">当前登录 IP</span>
            <span className="text-slate-700 font-mono font-semibold bg-blue-50/80 text-blue-700 px-2 py-0.5 rounded border border-blue-100">{userInfo.currentLogin}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
