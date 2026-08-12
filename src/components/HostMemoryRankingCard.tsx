import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { hostMemoryRankings } from '../data';

const getRankBadge = (index: number) => {
  if (index === 0) return 'bg-amber-100 text-amber-800 border-amber-300';
  if (index === 1) return 'bg-slate-100 text-slate-700 border-slate-300';
  if (index === 2) return 'bg-orange-100 text-orange-800 border-orange-300';
  return 'bg-slate-50 text-slate-500 border-slate-200';
};

export default function HostMemoryRankingCard() {
  return (
    <Card>
      <CardHeader className="py-3">
        <CardTitle>宿主机内存排行</CardTitle>
      </CardHeader>
      <CardContent className="p-5 space-y-3.5">
        {hostMemoryRankings.map((item, idx) => (
          <div key={item.name} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className={`w-4 h-4 rounded-md border text-[10px] font-bold flex items-center justify-center ${getRankBadge(idx)}`}>
                  {idx + 1}
                </span>
                <span className="text-slate-700 font-semibold">{item.name}</span>
              </div>
              <span className="text-slate-500 font-mono font-medium">{item.value}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-sky-300 rounded-full transition-all duration-500"
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
