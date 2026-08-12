import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { vmCpuTop1To5, vmCpuTop6To10, vmMemTop1To5, vmMemTop6To10 } from '../data';

interface RankingItem {
  name: string;
  value: number;
  color?: string;
}

function VmRankingCard({ title, items }: { title: string; items: RankingItem[] }) {
  return (
    <Card className="h-full">
      <CardHeader className="py-3.5 px-5">
        <CardTitle className="whitespace-nowrap">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-5 space-y-3.5">
        {items.map((item, idx) => {
          return (
            <div key={`${item.name}-${idx}`} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-700 font-semibold truncate pr-2">{item.name}</span>
                <span className="text-slate-400 font-mono font-medium shrink-0">({item.value}%)</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-sky-300 rounded-full transition-all duration-500"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

export default function VmRankingsRow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <VmRankingCard title="虚拟机CPU TOP1–5" items={vmCpuTop1To5} />
      <VmRankingCard title="虚拟机CPU TOP6–10" items={vmCpuTop6To10} />
      <VmRankingCard title="虚拟机内存 TOP1–5" items={vmMemTop1To5} />
      <VmRankingCard title="虚拟机内存 TOP6–10" items={vmMemTop6To10} />
    </div>
  );
}
