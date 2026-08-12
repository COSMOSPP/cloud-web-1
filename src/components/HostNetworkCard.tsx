import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid } from 'recharts';
import { hostNetworkData, hostNetworkSummary } from '../data';

export default function HostNetworkCard() {
  return (
    <Card>
      <CardHeader className="py-3">
        <CardTitle>总宿主机xx吞吐量</CardTitle>
      </CardHeader>
      <CardContent className="p-5 pt-2">
        <div className="w-full h-36">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={hostNetworkData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                ticks={['22:00', '00:30', '03:00', '05:30', '08:00']}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#9ca3af' }}
              />
              <Line
                type="monotone"
                dataKey="send"
                stroke="#1d4ed8"
                strokeWidth={2}
                dot={{ r: 2, stroke: '#1d4ed8', strokeWidth: 1, fill: '#fff' }}
                isAnimationActive={false}
              />
              <Line
                type="monotone"
                dataKey="recv"
                stroke="#c2410c"
                strokeWidth={2}
                dot={{ r: 2, stroke: '#c2410c', strokeWidth: 1, fill: '#fff' }}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Legend / Values Footer */}
        <div className="flex items-center justify-center gap-6 mt-3 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 border border-blue-600 bg-white rounded-full inline-block"></span>
            <span className="text-gray-500">发送</span>
            <span className="font-semibold text-gray-800">{hostNetworkSummary.sendRate}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 border border-amber-700 bg-white rounded-full inline-block"></span>
            <span className="text-gray-500">接收</span>
            <span className="font-semibold text-gray-800">{hostNetworkSummary.recvRate}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
