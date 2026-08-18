import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { hostCpuRankings } from '../data';

const getRankBadge = (index: number) => {
  if (index === 0) return 'bg-amber-100 text-amber-800 border-amber-300';
  if (index === 1) return 'bg-slate-100 text-slate-700 border-slate-300';
  if (index === 2) return 'bg-orange-100 text-orange-800 border-orange-300';
  return 'bg-slate-50 text-slate-500 border-slate-200';
};

export default function HostCpuRankingCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>宿主机CPU排行榜</CardTitle>
      </CardHeader>
      <CardContent className="p-3.5 sm:p-4 space-y-2.5">
        {hostCpuRankings.map((item, idx) => (
          <div key={item.name} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className={`w-5 h-5 rounded-lg border text-xs font-extrabold flex items-center justify-center ${getRankBadge(idx)}`}>
                  {idx + 1}
                </span>
                <span className="text-slate-800 font-bold">{item.name}</span>
              </div>
              <span className="text-slate-900 font-mono font-extrabold">{item.value}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full transition-all duration-500"
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
