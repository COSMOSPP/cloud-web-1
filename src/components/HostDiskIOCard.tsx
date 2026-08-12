import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid } from 'recharts';
import { hostDiskIOData } from '../data';

export default function HostDiskIOCard() {
  return (
    <Card>
      <CardHeader className="py-3">
        <CardTitle>总宿主机磁盘 IO</CardTitle>
      </CardHeader>
      <CardContent className="p-5 pt-2">
        <div className="w-full h-36">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={hostDiskIOData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="#f1f5f9" strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#94a3b8' }}
              />
              <Line
                type="monotone"
                dataKey="io"
                stroke="#ea580c"
                strokeWidth={2}
                dot={{ r: 2, stroke: '#ea580c', strokeWidth: 1, fill: '#fff' }}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center gap-2 mt-3 text-xs">
          <span className="w-2.5 h-2.5 border border-amber-600 bg-white rounded-full inline-block"></span>
          <span className="text-slate-500">IO 峰值</span>
          <span className="font-semibold text-slate-800">78 MB/s</span>
        </div>
      </CardContent>
    </Card>
  );
}
