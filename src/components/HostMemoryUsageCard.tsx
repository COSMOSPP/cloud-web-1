import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, ReferenceDot, CartesianGrid } from 'recharts';
import { hostMemoryUsageData } from '../data';

export default function HostMemoryUsageCard() {
  return (
    <Card>
      <CardHeader className="flex-col items-start gap-0.5 pb-1">
        <CardTitle>总宿主机内存使用率</CardTitle>
        <div className="text-[11px] text-slate-500 font-medium">
          当前负载率：<span className="font-bold text-slate-900 font-mono">{hostMemoryUsageData.rate}</span>
        </div>
      </CardHeader>
      <CardContent className="p-2.5 pt-0">
        <div className="w-full h-28 relative">
          {/* Static Callout Marker */}
          <div className="absolute left-[54%] top-[14%] -translate-x-1/2 z-10 bg-white border border-slate-200 px-1.5 py-0.2 rounded shadow-2xs text-[9px] font-bold text-slate-700 pointer-events-none flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1d5bf0]"></span>
            <span>负载率 6.52%</span>
          </div>

          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={hostMemoryUsageData.points} margin={{ top: 16, right: 8, left: -28, bottom: 0 }}>
              <defs>
                <linearGradient id="memGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1d5bf0" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#1d5bf0" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis
                dataKey="time"
                ticks={['19:00', '22:00', '01:00', '04:00', '07:00']}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 9, fill: '#64748b' }}
              />
              <YAxis
                domain={[0, 12]}
                ticks={[0, 3, 6, 9, 12]}
                tickFormatter={(val) => `${val}%`}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 9, fill: '#64748b' }}
              />
              <Area
                type="monotone"
                dataKey="val"
                stroke="#1d5bf0"
                strokeWidth={1.5}
                fill="url(#memGradient)"
                isAnimationActive={false}
              />
              <ReferenceDot
                x="01:00"
                y={6.52}
                r={3}
                fill="#1d5bf0"
                stroke="#fff"
                strokeWidth={1.5}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
