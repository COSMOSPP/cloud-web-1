import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { Monitor, HardDrive } from 'lucide-react';
import { provisionedInstances } from '../data';

export default function ProvisionedInstancesCard() {
  return (
    <Card>
      <CardHeader className="py-3">
        <CardTitle>已开通实例数量</CardTitle>
      </CardHeader>
      <CardContent className="p-5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 px-2">
          {/* Virtual Machines Section */}
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <div className="p-1 bg-blue-50 text-blue-600 rounded">
                  <Monitor className="w-4 h-4" />
                </div>
                <span>虚拟机</span>
              </div>
              <span className="text-3xl font-bold text-gray-900 mt-1">{provisionedInstances.vm.total}</span>
            </div>

            {/* VM Status breakdown */}
            <div className="flex flex-col gap-2 text-xs border-l border-gray-100 pl-6 py-1">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-gray-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex items-center justify-center text-[8px] text-white">✓</span>
                  <span>已开机</span>
                </div>
                <span className="font-semibold text-gray-800">{provisionedInstances.vm.running}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-gray-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-400 flex items-center justify-center text-[8px] text-white">-</span>
                  <span>已关机</span>
                </div>
                <span className="font-semibold text-gray-800">{provisionedInstances.vm.stopped}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-gray-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300 flex items-center justify-center text-[8px] text-white">•</span>
                  <span>其他</span>
                </div>
                <span className="font-semibold text-gray-800">{provisionedInstances.vm.other}</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-gray-100 mx-4"></div>

          {/* Virtual Disks Section */}
          <div className="flex flex-col gap-1 pr-12">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <div className="p-1 bg-blue-50 text-blue-600 rounded">
                <HardDrive className="w-4 h-4" />
              </div>
              <span>虚拟磁盘</span>
            </div>
            <span className="text-3xl font-bold text-gray-900 mt-1">{provisionedInstances.disk.total}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
