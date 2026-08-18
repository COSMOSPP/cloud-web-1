import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { myManagement } from '../data';

export default function MyManagementCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>我的管理</CardTitle>
        <div className="bg-[#1d5bf0] text-white text-xs px-2 py-0.5 rounded font-medium shadow-2xs">
          用户：{myManagement.userCount}
        </div>
      </CardHeader>
      <CardContent className="p-2.5">
        <div className="grid grid-cols-3 gap-2">
          {/* Disaster alert */}
          <div className="bg-[#f7f8fa] border border-slate-200/60 p-2 rounded-md flex flex-col space-y-1 text-center items-center justify-center">
            <span className="text-[11px] text-slate-500 font-medium">灾难告警</span>
            <span className="text-xl font-extrabold text-red-500 font-mono tracking-tight leading-none">
              {myManagement.disaster}
            </span>
          </div>

          {/* Severe alert */}
          <div className="bg-[#f7f8fa] border border-slate-200/60 p-2 rounded-md flex flex-col space-y-1 text-center items-center justify-center">
            <span className="text-[11px] text-slate-500 font-medium">严重告警</span>
            <span className="text-xl font-extrabold text-orange-500 font-mono tracking-tight leading-none">
              {myManagement.severe}
            </span>
          </div>

          {/* Normal alert */}
          <div className="bg-[#f7f8fa] border border-slate-200/60 p-2 rounded-md flex flex-col space-y-1 text-center items-center justify-center">
            <span className="text-[11px] text-slate-500 font-medium">一般告警</span>
            <span className="text-xl font-extrabold text-emerald-500 font-mono tracking-tight leading-none">
              {myManagement.normal}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
