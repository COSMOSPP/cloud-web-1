import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { userInfo } from '../data';
import { User } from 'lucide-react';

export default function UserInfoCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>用户信息</CardTitle>
      </CardHeader>
      <CardContent className="p-3 space-y-3">
        {/* Avatar & User Details */}
        <div className="flex items-center gap-3.5">
          <div className="w-14 h-14 rounded-full bg-[#1d5bf0] flex items-center justify-center text-white shrink-0 shadow-2xs">
            <User className="w-8 h-8" />
          </div>
          <div className="flex flex-col text-xs space-y-1 text-slate-600">
            <div>
              <span>用户名：</span>
              <span className="font-bold text-slate-900">{userInfo.username}</span>
            </div>
            <div>
              <span>角色：</span>
              <span className="font-bold text-slate-900">{userInfo.role}</span>
            </div>
          </div>
        </div>

        {/* IP Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
          <div className="bg-[#f7f8fa] border border-slate-200/60 p-2.5 rounded-md flex flex-col space-y-0.5">
            <span className="text-slate-500 font-medium">上次账号登录IP</span>
            <span className="font-bold text-slate-900 font-mono tracking-tight">{userInfo.lastLogin}</span>
          </div>

          <div className="bg-[#f7f8fa] border border-slate-200/60 p-2.5 rounded-md flex flex-col space-y-0.5">
            <span className="text-slate-500 font-medium">本次账号登录IP</span>
            <span className="font-bold text-slate-900 font-mono tracking-tight">{userInfo.currentLogin}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
