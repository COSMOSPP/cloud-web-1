import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { applications } from '../data';
import { Search, Settings, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AppResourceTable() {
  return (
    <Card className="col-span-8 flex flex-col">
      <CardHeader>
        <CardTitle>应用资源情况</CardTitle>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="搜索应用名称或单位" 
              className="bg-gray-50 border border-gray-200 rounded-md py-1.5 pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-64 transition-all"
            />
          </div>
          <button className="p-1.5 text-gray-400 hover:text-gray-600 border border-gray-200 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors">
            <RotateCcw className="w-4 h-4" />
          </button>
          <button className="p-1.5 text-gray-400 hover:text-gray-600 border border-gray-200 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col pt-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-xs font-medium text-gray-500 border-b border-gray-100">
                <th className="py-3 font-medium">应用名称</th>
                <th className="py-3 font-medium">所属单位</th>
                <th className="py-3 font-medium">VM数量</th>
                <th className="py-3 font-medium">CPU(核)</th>
                <th className="py-3 font-medium">Memory(GB)</th>
                <th className="py-3 font-medium">Storage(TB)</th>
                <th className="py-3 font-medium w-28">CPU利用率</th>
                <th className="py-3 font-medium w-28">Memory利用率</th>
                <th className="py-3 font-medium w-28">Storage利用率</th>
                <th className="py-3 font-medium">状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="py-3 font-medium text-gray-800">{app.name}</td>
                  <td className="py-3 text-gray-600">{app.unit}</td>
                  <td className="py-3 font-medium text-gray-800">{app.vms}</td>
                  <td className="py-3 text-gray-600">{app.cpu}</td>
                  <td className="py-3 text-gray-600">{app.memory}</td>
                  <td className="py-3 text-gray-600">{app.storage}</td>
                  
                  {/* Progress bars */}
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="text-xs text-gray-500 w-8">{app.cpuUtil}%</div>
                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${app.cpuUtil}%` }} />
                      </div>
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="text-xs text-gray-500 w-8">{app.memoryUtil}%</div>
                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${app.memoryUtil}%` }} />
                      </div>
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="text-xs text-gray-500 w-8">{app.storageUtil}%</div>
                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full" style={{ width: `${app.storageUtil}%` }} />
                      </div>
                    </div>
                  </td>
                  
                  <td className="py-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-100">
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
          <div className="text-xs text-gray-500">
            共 {applications.length} 条
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"><ChevronLeft className="w-4 h-4" /></button>
            <div className="px-2 py-1 bg-blue-50 text-blue-600 border border-blue-100 rounded text-xs font-medium">1</div>
            <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"><ChevronRight className="w-4 h-4" /></button>
            <select className="ml-2 bg-white border border-gray-200 rounded text-xs py-1 px-2 focus:outline-none text-gray-600 cursor-pointer hover:border-gray-300">
              <option>10条/页</option>
              <option>20条/页</option>
              <option>50条/页</option>
            </select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
