import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { Monitor, HardDrive } from 'lucide-react';
import { provisionedInstances } from '../data';

export default function ProvisionedInstancesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>已开通实例数量</CardTitle>
      </CardHeader>
      <CardContent className="p-2.5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {/* Left Panel: 虚拟机 */}
          <div className="bg-[#f7f8fa] border border-slate-200/60 px-3 py-2.5 rounded-md flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#eef3fe] border border-blue-100 flex items-center justify-center text-[#1d5bf0] shrink-0">
                <Monitor className="w-5 h-5" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-semibold text-slate-700">虚拟机</span>
                <span className="text-xl font-extrabold text-slate-900 font-mono tracking-tight">
                  {provisionedInstances.vm.total}
                </span>
              </div>
            </div>

            {/* Horizontal Status Indicators */}
            <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                <span>已开机:</span>
                <span className="font-bold text-slate-900 font-mono">{provisionedInstances.vm.running}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-slate-400 inline-block"></span>
                <span>已关机:</span>
                <span className="font-bold text-slate-900 font-mono">{provisionedInstances.vm.stopped}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-slate-300 inline-block"></span>
                <span>其他:</span>
                <span className="font-bold text-slate-900 font-mono">{provisionedInstances.vm.other}</span>
              </div>
            </div>
          </div>

          {/* Right Panel: 虚拟磁盘 */}
          <div className="bg-[#f7f8fa] border border-slate-200/60 px-3 py-2.5 rounded-md flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#eef3fe] border border-blue-100 flex items-center justify-center text-[#1d5bf0] shrink-0">
              <HardDrive className="w-5 h-5" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-semibold text-slate-700">虚拟磁盘</span>
              <span className="text-xl font-extrabold text-slate-900 font-mono tracking-tight">
                {provisionedInstances.disk.total}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
