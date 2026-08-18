import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { hostNetworkData } from '../data';

export default function HostNetworkCard() {
  return (
    <Card>
      <CardHeader className="pb-1">
        <CardTitle>总宿主机网络吞吐量</CardTitle>
      </CardHeader>
      <CardContent className="p-2.5 pt-0">
        <div className="w-full h-28">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={hostNetworkData.points} margin={{ top: 12, right: 8, left: -22, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis
                dataKey="time"
                ticks={['19:00', '22:00', '01:00', '04:00', '07:00']}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 9, fill: '#64748b' }}
              />
              <YAxis
                domain={[0, 1.2]}
                ticks={[0, 0.3, 0.6, 0.9, 1.2]}
                tickFormatter={(val) => `${val}qps`}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 9, fill: '#64748b' }}
              />
              <Line
                type="monotone"
                dataKey="send"
                stroke="#1d5bf0"
                strokeWidth={1.5}
                dot={false}
                isAnimationActive={false}
              />
              <Line
                type="monotone"
                dataKey="recv"
                stroke="#f97316"
                strokeWidth={1.5}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Legend Footer */}
        <div className="flex items-center justify-center gap-4 mt-0.5 text-[11px] text-slate-600 font-medium">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#1d5bf0] inline-block"></span>
            <span>发送</span>
            <span className="font-bold text-slate-900 font-mono ml-0.5">{hostNetworkData.sendRate}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>接收</span>
            <span className="font-bold text-slate-900 font-mono ml-0.5">{hostNetworkData.recvRate}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
