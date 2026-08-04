import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { tenants } from '../data';
import { ChevronRight } from 'lucide-react';

export default function TenantOverview() {
  const total = tenants.length;
  const online = tenants.filter(t => t.status === '在线').length;
  const abnormal = total - online;

  return (
    <Card className="col-span-4 flex flex-col">
      <CardHeader>
        <CardTitle>租户单位概览</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col pt-0">
        <div className="flex items-center gap-8 py-4 border-b border-gray-50 mb-2">
          <div className="text-sm">租户总数 <span className="text-lg font-bold text-gray-800 ml-2">{total}</span> <span className="text-xs text-gray-500">家</span></div>
          <div className="text-sm">在线 <span className="text-lg font-bold text-emerald-600 ml-2">{online}</span> <span className="text-xs text-gray-500">家</span></div>
          <div className="text-sm">异常 <span className="text-lg font-bold text-red-500 ml-2">{abnormal}</span> <span className="text-xs text-gray-500">家</span></div>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-[1fr_80px_1.5fr] gap-4 text-xs font-medium text-gray-500 py-2">
            <div>单位名称</div>
            <div>状态</div>
            <div>资源占用</div>
          </div>
          <div className="space-y-3">
            {tenants.map(tenant => (
              <div key={tenant.id} className="grid grid-cols-[1fr_80px_1.5fr] gap-4 items-center text-sm">
                <div className="text-gray-800 truncate">{tenant.name}</div>
                <div className="text-emerald-500 text-xs">{tenant.status}</div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full" 
                      style={{ width: `${tenant.usage}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 w-8">{tenant.usage}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-50 flex justify-center">
          <button className="text-sm text-blue-600 flex items-center hover:text-blue-700">
            查看更多单位 <ChevronRight className="w-4 h-4 ml-0.5" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
