import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { unitDetails, trendData } from '../data';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { ChevronDown } from 'lucide-react';

export default function UnitResourceDetail() {
  return (
    <Card className="col-span-4 flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-3">
          <CardTitle>单位资源详情</CardTitle>
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-md cursor-pointer border border-gray-100 hover:bg-gray-100 transition-colors">
            <span className="text-sm text-gray-700 font-medium">{unitDetails.name}</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        <div className="text-xs text-gray-400">
          数据更新时间: 2026-08-03 10:30:00
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 pt-2">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <div className="text-xs text-gray-500 mb-1">虚拟机</div>
            <div className="text-xl font-bold text-blue-600">{unitDetails.vms} <span className="text-xs font-normal text-gray-500">台</span></div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">CPU</div>
            <div className="text-xl font-bold text-indigo-600">{unitDetails.cpu} <span className="text-xs font-normal text-gray-500">核</span></div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">内存</div>
            <div className="text-xl font-bold text-blue-600">{unitDetails.memory} <span className="text-xs font-normal text-gray-500">GB</span></div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">云硬盘</div>
            <div className="text-xl font-bold text-sky-600">{unitDetails.storage} <span className="text-xs font-normal text-gray-500">TB</span></div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 border-t border-gray-50 pt-4">
          <div>
            <div className="text-xs text-gray-500 mb-1">CPU利用率</div>
            <div className="text-xl font-bold text-gray-800 mb-2">{unitDetails.cpuUtil}%</div>
            <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${unitDetails.cpuUtil}%` }}></div>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">内存利用率</div>
            <div className="text-xl font-bold text-gray-800 mb-2">{unitDetails.memoryUtil}%</div>
            <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: `${unitDetails.memoryUtil}%` }}></div>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">存储利用率</div>
            <div className="text-xl font-bold text-gray-800 mb-2">{unitDetails.storageUtil}%</div>
            <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full" style={{ width: `${unitDetails.storageUtil}%` }}></div>
            </div>
          </div>
        </div>

        <div className="flex-1 mt-2 flex flex-col">
          <div className="text-sm font-medium text-gray-700 mb-4">资源利用率趋势 <span className="text-xs text-gray-400 font-normal">(最近30天)</span></div>
          <div className="flex-1 min-h-[160px] -ml-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} tickFormatter={(val) => `${val}%`} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontSize: '12px' }}
                  labelStyle={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}
                />
                <Legend iconType="circle" iconSize={6} wrapperStyle={{ fontSize: '12px' }} />
                <Line type="monotone" dataKey="cpu" name="CPU利用率(%)" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3, strokeWidth: 2 }} activeDot={{ r: 5 }} />
                <Line type="monotone" dataKey="memory" name="内存利用率(%)" stroke="#10b981" strokeWidth={2} dot={{ r: 3, strokeWidth: 2 }} activeDot={{ r: 5 }} />
                <Line type="monotone" dataKey="storage" name="存储利用率(%)" stroke="#a855f7" strokeWidth={2} dot={{ r: 3, strokeWidth: 2 }} activeDot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
