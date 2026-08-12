import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis } from 'recharts';
import { hostCpuUsageData } from '../data';

export default function HostCpuUsageCard() {
  return (
    <Card>
      <CardHeader className="py-3 flex-col items-start gap-1">
        <CardTitle>总宿主机CPU使用率</CardTitle>
        <div className="text-xs text-gray-700 font-medium">
          当前负载率: <span className="font-bold">{hostCpuUsageData.rate}</span>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-1">
        <div className="w-full h-32">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={hostCpuUsageData.points} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="cpuGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.02}/>
                </linearGradient>
              </defs>
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#9ca3af' }}
              />
              <YAxis
                domain={[0, 18]}
                ticks={[0, 5, 10, 15, 17]}
                unit="%"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#9ca3af' }}
              />
              <Area type="monotone" dataKey="val" stroke="#3b82f6" strokeWidth={2} fill="url(#cpuGradient)" isAnimationActive={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
