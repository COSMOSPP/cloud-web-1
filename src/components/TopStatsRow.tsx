import React from 'react';
import { Card } from './ui';
import { topStats } from '../data';
import { Monitor, Building2 } from 'lucide-react';

export default function TopStatsRow() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
      {topStats.map((stat) => {
        if (stat.type === 'cpu-arch') {
          return (
            <Card key={stat.id} className="p-2.5 bg-white border border-slate-200/90 shadow-2xs">
              {/* Header: Title & Arch Badge */}
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-700">{stat.title}</span>
                  <span className="text-2xl font-extrabold text-slate-900 mt-0.5 tracking-tight font-mono leading-none">
                    {stat.value}
                  </span>
                </div>

                {/* Circle CPU Arch Badge */}
                <div className="w-8 h-8 rounded-full border-2 border-emerald-500 border-t-[#1d5bf0] flex items-center justify-center p-0.5 shrink-0 bg-blue-50/50">
                  <span className="text-[8px] font-bold text-[#1d5bf0] leading-tight text-center">
                    CPU<br />架构
                  </span>
                </div>
              </div>

              {/* Bottom Tags Row */}
              <div className="flex items-center gap-2 mt-2 pt-1.5 border-t border-slate-100 text-xs flex-wrap">
                {stat.archTags?.map((tag, idx) => (
                  <div key={idx} className="flex items-center gap-1 text-[11px] font-medium text-slate-700">
                    <span
                      className="w-2.5 h-2.5 rounded-2xs inline-block shrink-0"
                      style={{ backgroundColor: tag.color }}
                    ></span>
                    <span>{tag.label}</span>
                    <span className="font-bold text-slate-900 font-mono">{tag.count}</span>
                  </div>
                ))}
              </div>
            </Card>
          );
        }

        const isVm = stat.type === 'vm';
        return (
          <Card key={stat.id} className="p-2.5 bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-700">{stat.title}</span>
                <span className="text-2xl font-extrabold text-slate-900 mt-0.5 tracking-tight font-mono leading-none">
                  {stat.value}
                </span>
              </div>

              <div className="w-8 h-8 rounded-md bg-[#eef3fe] border border-blue-100 flex items-center justify-center text-[#1d5bf0] shrink-0">
                {isVm ? <Monitor className="w-4 h-4" /> : <Building2 className="w-4 h-4" />}
              </div>
            </div>
            {/* Spacer to match height with CPU arch cards */}
            <div className="mt-2 pt-1.5 border-t border-transparent h-3"></div>
          </Card>
        );
      })}
    </div>
  );
}
