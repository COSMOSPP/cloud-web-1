import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { resourcePool } from '../data';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Cpu, MemoryStick, HardDrive } from 'lucide-react';

function ResourceDonut({ title, data, unit, color }: { title: string, data: any, unit: string, color: string }) {
  const chartData = [
    { name: 'Allocated', value: data.allocated },
    { name: 'Remaining', value: data.total - data.allocated }
  ];
  const allocatedPercent = ((data.allocated / data.total) * 100).toFixed(1);
  const remainingPercent = (100 - parseFloat(allocatedPercent)).toFixed(1);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={60}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              stroke="none"
            >
              <Cell fill={color} />
              <Cell fill="#e5e7eb" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-sm font-medium text-gray-800">{title}</span>
          <span className="text-[10px] text-gray-500">总量</span>
          <span className="text-sm font-bold text-gray-800">{data.total} <span className="text-[10px] font-normal">{unit}</span></span>
        </div>
      </div>
      <div className="w-full text-xs space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-gray-600">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }}></span>
            已分配
          </div>
          <div className="font-medium text-gray-800">{data.allocated} {unit} <span className="text-gray-400 font-normal ml-1">({allocatedPercent}%)</span></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-gray-600">
            <span className="w-2 h-2 rounded-full bg-gray-200"></span>
            剩余
          </div>
          <div className="font-medium text-gray-800">{data.total - data.allocated} {unit} <span className="text-gray-400 font-normal ml-1">({remainingPercent}%)</span></div>
        </div>
      </div>
    </div>
  );
}

export default function ResourcePool() {
  return (
    <Card className="col-span-5 flex flex-col">
      <CardHeader>
        <CardTitle>云资源池</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-3 gap-6 flex-1 items-center px-4">
          <ResourceDonut title="CPU" data={resourcePool.cpu} unit="核" color="#2563eb" />
          <ResourceDonut title="内存" data={resourcePool.memory} unit="GB" color="#059669" />
          <ResourceDonut title="云硬盘" data={resourcePool.storage} unit="TB" color="#0284c7" />
        </div>
        
        <div className="bg-blue-50/50 rounded-xl p-4 mt-6 border border-blue-100/50">
          <h4 className="text-sm font-medium text-gray-700 mb-3">资源超分配率</h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100/50 text-blue-600 rounded-lg"><Cpu className="w-4 h-4" /></div>
              <div>
                <div className="text-xs text-gray-500 mb-0.5">CPU 超分配率</div>
                <div className="font-bold text-gray-800">{resourcePool.overAllocation.cpu}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100/50 text-emerald-600 rounded-lg"><MemoryStick className="w-4 h-4" /></div>
              <div>
                <div className="text-xs text-gray-500 mb-0.5">内存 超分配率</div>
                <div className="font-bold text-gray-800">{resourcePool.overAllocation.memory}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-sky-100/50 text-sky-600 rounded-lg"><HardDrive className="w-4 h-4" /></div>
              <div>
                <div className="text-xs text-gray-500 mb-0.5">存储 超分配率</div>
                <div className="font-bold text-gray-800">{resourcePool.overAllocation.storage}</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
