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
      <CardHeader>
        <CardTitle className="whitespace-nowrap">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-3.5 sm:p-4 space-y-2.5">
        {items.map((item, idx) => {
          return (
            <div key={`${item.name}-${idx}`} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-800 font-bold truncate pr-2">{item.name}</span>
                <span className="text-slate-900 font-mono font-extrabold shrink-0">({item.value}%)</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full transition-all duration-500"
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
      <VmRankingCard title="虚拟机CPU使用率 TOP1–5" items={vmCpuTop1To5} />
      <VmRankingCard title="虚拟机CPU使用率 TOP6–10" items={vmCpuTop6To10} />
      <VmRankingCard title="虚拟机内存使用率 TOP1–5" items={vmMemTop1To5} />
      <VmRankingCard title="虚拟机内存使用率 TOP6–10" items={vmMemTop6To10} />
    </div>
  );
}
