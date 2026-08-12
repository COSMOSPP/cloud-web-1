import React from 'react';
import { Card } from './ui';
import { Cpu, Database, Network, Monitor, Building2, Layers } from 'lucide-react';
import { topStats } from '../data';

const iconConfig: Record<string, { icon: React.ReactNode; bg: string }> = {
  'compute-nodes': { icon: <Cpu className="w-5 h-5 text-indigo-600" />, bg: 'bg-indigo-50/80 group-hover:bg-indigo-100/80' },
  'storage-nodes': { icon: <Database className="w-5 h-5 text-sky-600" />, bg: 'bg-sky-50/80 group-hover:bg-sky-100/80' },
  'network-nodes': { icon: <Network className="w-5 h-5 text-purple-600" />, bg: 'bg-purple-50/80 group-hover:bg-purple-100/80' },
  'vms': { icon: <Monitor className="w-5 h-5 text-emerald-600" />, bg: 'bg-emerald-50/80 group-hover:bg-emerald-100/80' },
  'tenants': { icon: <Building2 className="w-5 h-5 text-amber-600" />, bg: 'bg-amber-50/80 group-hover:bg-amber-100/80' },
};

export default function TopStatsRow() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-5">
      {topStats.map((stat: any) => {
        const config = iconConfig[stat.id] || { icon: <Cpu className="w-5 h-5 text-blue-600" />, bg: 'bg-blue-50' };
        return (
          <Card key={stat.id} className="p-5 flex flex-col justify-between group hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
            <div className="flex items-center gap-2.5 mb-3">
              <div className={`p-2 rounded-xl transition-colors duration-200 ${config.bg}`}>
                {config.icon}
              </div>
              <span className="text-xs font-semibold text-slate-500 tracking-wide">{stat.title}</span>
            </div>
            
            <div className="flex items-baseline justify-between mt-auto">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-slate-900 tracking-tight">{stat.value}</span>
                <span className="text-xs font-medium text-slate-400">{stat.unit}</span>
              </div>
              {stat.kunpengCount !== undefined ? (
                <span className="text-xs font-semibold text-slate-600 bg-slate-100/90 px-2 py-0.5 rounded-md border border-slate-200/80">
                  xx {stat.kunpengCount}个
                </span>
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-600 group-hover:scale-125 transition-all"></span>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
}
