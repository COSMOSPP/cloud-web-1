import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { myManagement } from '../data';
import { Users } from 'lucide-react';

export default function MyManagementCard() {
  return (
    <Card>
      <CardHeader className="py-3 flex items-center justify-between">
        <CardTitle>我的管理</CardTitle>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100/80">
          <Users className="w-3.5 h-3.5 text-blue-600" />
          <span>用户</span>
          <span className="font-bold ml-0.5">{myManagement.userCount}</span>
        </div>
      </CardHeader>
      <CardContent className="p-5">
        <div className="grid grid-cols-2 gap-5">
          <div className="border border-red-100 bg-gradient-to-b from-red-50/40 to-transparent rounded-xl py-3.5 px-3 text-center flex flex-col items-center justify-center hover:shadow-sm hover:border-red-200 transition-all cursor-pointer">
            <span className="text-2xl font-bold text-red-600 tracking-tight">{myManagement.disaster}</span>
            <span className="text-xs font-medium text-slate-500 mt-1">灾难</span>
          </div>
          <div className="border border-amber-100 bg-gradient-to-b from-amber-50/40 to-transparent rounded-xl py-3.5 px-3 text-center flex flex-col items-center justify-center hover:shadow-sm hover:border-amber-200 transition-all cursor-pointer">
            <span className="text-2xl font-bold text-amber-600 tracking-tight">{myManagement.severe}</span>
            <span className="text-xs font-medium text-slate-500 mt-1">严重</span>
          </div>
          <div className="border border-blue-100 bg-gradient-to-b from-blue-50/40 to-transparent rounded-xl py-3.5 px-3 text-center flex flex-col items-center justify-center hover:shadow-sm hover:border-blue-200 transition-all cursor-pointer">
            <span className="text-2xl font-bold text-blue-600 tracking-tight">{myManagement.normal}</span>
            <span className="text-xs font-medium text-slate-500 mt-1">一般</span>
          </div>
          <div className="border border-slate-200/80 bg-gradient-to-b from-slate-50/60 to-transparent rounded-xl py-3.5 px-3 text-center flex flex-col items-center justify-center hover:shadow-sm hover:border-slate-300 transition-all cursor-pointer">
            <span className="text-2xl font-bold text-slate-500 tracking-tight">{myManagement.info}</span>
            <span className="text-xs font-medium text-slate-500 mt-1">提示</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
