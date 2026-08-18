import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { appResourceGroups, tableBadges } from '../data';
import { ChevronDown, ChevronRight, ChevronLeft, Building2, Monitor, Cpu, HardDrive, Layers, Server } from 'lucide-react';

function MetricBar({ text, util }: { text: string; util: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-mono font-medium text-slate-900 shrink-0 w-10">{text}</span>
      <div className="w-20 sm:w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden shrink-0">
        <div
          className="h-full bg-emerald-500 rounded-full transition-all duration-300"
          style={{ width: `${util}%` }}
        />
      </div>
      <span className="text-xs font-mono text-slate-600 shrink-0">{util}%</span>
    </div>
  );
}

export default function AppResourceTable({ className = "" }: { className?: string }) {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    'group-1': true,
    'group-2': true,
  });

  const toggleGroup = (id: string) => {
    setExpandedGroups((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Card className={`flex flex-col ${className}`}>
      <CardHeader>
        <CardTitle>已开通实例数量</CardTitle>
      </CardHeader>
      <CardContent className="p-2.5 space-y-2">
        {/* Top Filter Badges Bar */}
        <div className="flex items-center gap-2 flex-wrap text-xs font-medium pb-0.5">
          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#eef3fe] text-[#1d5bf0] cursor-pointer">
            <Building2 className="w-3.5 h-3.5" />
            <span>组织:</span>
            <span className="font-bold font-mono">{tableBadges.orgs}</span>
          </div>

          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#eef3fe] text-[#1d5bf0] cursor-pointer">
            <Monitor className="w-3.5 h-3.5" />
            <span>虚拟机:</span>
            <span className="font-bold font-mono">{tableBadges.vms}</span>
          </div>

          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#eef3fe] text-[#1d5bf0] cursor-pointer">
            <Cpu className="w-3.5 h-3.5" />
            <span>CPU:</span>
            <span className="font-bold font-mono">{tableBadges.cpu}</span>
          </div>

          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#eef3fe] text-[#1d5bf0] cursor-pointer">
            <Layers className="w-3.5 h-3.5" />
            <span>内存:</span>
            <span className="font-bold font-mono">{tableBadges.memory}</span>
          </div>

          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#eef3fe] text-[#1d5bf0] cursor-pointer">
            <HardDrive className="w-3.5 h-3.5" />
            <span>磁盘:</span>
            <span className="font-bold font-mono">{tableBadges.disk}</span>
          </div>

          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#eef3fe] text-[#1d5bf0] cursor-pointer">
            <Server className="w-3.5 h-3.5" />
            <span>总量:</span>
            <span className="font-bold font-mono">{tableBadges.total}</span>
          </div>
        </div>

        {/* Tree Table */}
        <div className="overflow-x-auto border border-slate-200/70 rounded">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="bg-[#f7f8fa] border-b border-slate-200/70 text-slate-700 font-semibold">
                <th className="py-2 px-2.5">组织/应用名称</th>
                <th className="py-2 px-2.5">虚拟机数量</th>
                <th className="py-2 px-2.5">CPU(核)/利用率</th>
                <th className="py-2 px-2.5">内存(GB)/利用率</th>
                <th className="py-2 px-2.5">磁盘(GB)/利用率</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {appResourceGroups.map((group) => {
                const isExpanded = !!expandedGroups[group.id];
                return (
                  <React.Fragment key={group.id}>
                    {/* Parent Row */}
                    <tr
                      onClick={() => toggleGroup(group.id)}
                      className="hover:bg-slate-50/80 transition-colors cursor-pointer"
                    >
                      <td className="py-2 px-2.5">
                        <div className="flex items-center gap-1 font-bold text-slate-800">
                          {isExpanded ? (
                            <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                          )}
                          <span>{group.name}</span>
                          <span className="bg-slate-100 text-slate-600 text-[10px] px-1 py-0.2 rounded border border-slate-200/70 font-normal">
                            应用:{group.appCount}
                          </span>
                        </div>
                      </td>
                      <td className="py-2 px-2.5 font-bold font-mono text-slate-800">{group.vms}</td>
                      <td className="py-2 px-2.5">
                        <MetricBar text={group.cpuText} util={group.cpuUtil} />
                      </td>
                      <td className="py-2 px-2.5">
                        <MetricBar text={group.memoryText} util={group.memoryUtil} />
                      </td>
                      <td className="py-2 px-2.5">
                        <MetricBar text={group.storageText} util={group.storageUtil} />
                      </td>
                    </tr>

                    {/* Child Rows */}
                    {isExpanded &&
                      group.children.map((child) => (
                        <tr key={child.id} className="bg-slate-50/40 hover:bg-slate-50 transition-colors">
                          <td className="py-1.5 px-2.5 pl-7 text-slate-700 font-medium">
                            {child.name}
                          </td>
                          <td className="py-1.5 px-2.5 font-mono font-medium text-slate-700">{child.vms}</td>
                          <td className="py-1.5 px-2.5">
                            <MetricBar text={child.cpuText} util={child.cpuUtil} />
                          </td>
                          <td className="py-1.5 px-2.5">
                            <MetricBar text={child.memoryText} util={child.memoryUtil} />
                          </td>
                          <td className="py-1.5 px-2.5">
                            <MetricBar text={child.storageText} util={child.storageUtil} />
                          </td>
                        </tr>
                      ))}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer Pagination */}
        <div className="flex items-center justify-between text-xs text-slate-600 pt-0.5">
          <span>共60条</span>
          <div className="flex items-center gap-1">
            <button className="p-0.5 hover:bg-slate-100 rounded text-slate-400">
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button className="px-1.5 py-0.2 bg-[#1d5bf0] text-white rounded text-[11px] font-bold">1</button>
            <button className="px-1.5 py-0.2 hover:bg-slate-100 rounded text-[11px]">2</button>
            <button className="px-1.5 py-0.2 hover:bg-slate-100 rounded text-[11px]">3</button>
            <button className="px-1.5 py-0.2 hover:bg-slate-100 rounded text-[11px]">4</button>
            <button className="px-1.5 py-0.2 hover:bg-slate-100 rounded text-[11px]">5</button>
            <button className="p-0.5 hover:bg-slate-100 rounded text-slate-400">
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <select className="ml-1 bg-white border border-slate-200 rounded px-1 py-0.2 text-[11px] text-slate-700 cursor-pointer">
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
