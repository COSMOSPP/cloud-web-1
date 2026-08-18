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
          <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg cursor-pointer border border-slate-200 hover:bg-slate-100 transition-colors">
            <span className="text-sm text-slate-800 font-bold">{unitDetails.name}</span>
            <ChevronDown className="w-4 h-4 text-slate-500" />
          </div>
        </div>
        <div className="text-xs text-slate-500 font-medium">
          数据更新时间: 2026-08-03 10:30:00
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 pt-2 p-3.5 sm:p-4">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <div className="text-xs text-slate-500 font-semibold mb-1">虚拟机</div>
            <div className="text-2xl font-extrabold text-blue-600">{unitDetails.vms} <span className="text-xs font-semibold text-slate-500">台</span></div>
          </div>
          <div>
            <div className="text-xs text-slate-500 font-semibold mb-1">CPU</div>
            <div className="text-2xl font-extrabold text-indigo-600">{unitDetails.cpu} <span className="text-xs font-semibold text-slate-500">核</span></div>
          </div>
          <div>
            <div className="text-xs text-slate-500 font-semibold mb-1">内存</div>
            <div className="text-2xl font-extrabold text-blue-600">{unitDetails.memory} <span className="text-xs font-semibold text-slate-500">GB</span></div>
          </div>
          <div>
            <div className="text-xs text-slate-500 font-semibold mb-1">云硬盘</div>
            <div className="text-2xl font-extrabold text-sky-600">{unitDetails.storage} <span className="text-xs font-semibold text-slate-500">TB</span></div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-3.5">
          <div>
            <div className="text-xs text-slate-500 font-semibold mb-1">CPU利用率</div>
            <div className="text-2xl font-extrabold text-slate-900 mb-2">{unitDetails.cpuUtil}%</div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${unitDetails.cpuUtil}%` }}></div>
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500 font-semibold mb-1">内存利用率</div>
            <div className="text-2xl font-extrabold text-slate-900 mb-2">{unitDetails.memoryUtil}%</div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: `${unitDetails.memoryUtil}%` }}></div>
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500 font-semibold mb-1">存储利用率</div>
            <div className="text-2xl font-extrabold text-slate-900 mb-2">{unitDetails.storageUtil}%</div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full" style={{ width: `${unitDetails.storageUtil}%` }}></div>
            </div>
          </div>
        </div>

        <div className="flex-1 mt-1 flex flex-col">
          <div className="text-sm font-bold text-slate-800 mb-3">资源利用率趋势 <span className="text-xs text-slate-400 font-medium">(最近30天)</span></div>
          <div className="flex-1 min-h-[160px] -ml-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b', fontWeight: 500 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b', fontWeight: 500 }} tickFormatter={(val) => `${val}%`} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontSize: '13px', fontWeight: 'bold' }}
                  labelStyle={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}
                />
                <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '12px', fontWeight: '600' }} />
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
