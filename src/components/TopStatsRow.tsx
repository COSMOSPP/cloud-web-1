import React from 'react';
import { Card } from './ui';
import { Server, Cpu, Database, Network, Monitor, Building2, Activity, ShieldCheck, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { topStats } from '../data';
import { ResponsiveContainer, LineChart, Line } from 'recharts';

const iconMap: Record<string, React.ReactNode> = {
  'total-servers': <Server className="w-5 h-5 text-blue-600" />,
  'compute-nodes': <Cpu className="w-5 h-5 text-indigo-600" />,
  'storage-nodes': <Database className="w-5 h-5 text-sky-600" />,
  'network-nodes': <Network className="w-5 h-5 text-purple-600" />,
  'vms': <Monitor className="w-5 h-5 text-blue-500" />,
  'tenants': <Building2 className="w-5 h-5 text-indigo-500" />,
  'cpu-util': <Activity className="w-5 h-5 text-blue-600" />,
  'health': <ShieldCheck className="w-5 h-5 text-emerald-500" />,
};

export default function TopStatsRow() {
  return (
    <div className="grid grid-cols-8 gap-4 mb-4">
      {topStats.map((stat) => {
        const isPositive = stat.trend >= 0;
        const trendColor = isPositive ? 'text-emerald-500' : 'text-red-500';
        const TrendIcon = isPositive ? ArrowUpRight : ArrowDownRight;
        const chartData = stat.sparklineData.map((v, i) => ({ val: v, idx: i }));
        const strokeColor = isPositive ? '#10b981' : '#ef4444';

        return (
          <Card key={stat.id} className="p-4 flex flex-col justify-between">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-blue-50 rounded-lg">
                  {iconMap[stat.id]}
                </div>
                <span className="text-sm text-gray-500 font-medium">{stat.title}</span>
              </div>
            </div>
            
            <div className="flex items-baseline gap-1 my-1">
              <span className="text-2xl font-bold text-gray-800">{stat.value}</span>
              <span className="text-xs text-gray-500">{stat.unit}</span>
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className={`flex items-center text-xs font-medium ${trendColor}`}>
                <TrendIcon className="w-3 h-3 mr-0.5" />
                {Math.abs(stat.trend)}{stat.isPercent ? '%' : stat.unit}
              </div>
              
              <div className="w-12 h-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <Line type="monotone" dataKey="val" stroke={strokeColor} strokeWidth={2} dot={false} isAnimationActive={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <span className="text-[10px] text-gray-400">较昨日</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
