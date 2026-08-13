import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { cloudResourcePoolData } from '../data';
import { Cpu, MemoryStick, HardDrive, HelpCircle } from 'lucide-react';

const getGaugeGradientColors = (percent: number): [string, string] => {
  if (percent > 80) return ['#dc2626', '#ef4444'];
  if (percent >= 60) return ['#d97706', '#f59e0b'];
  return ['#059669', '#10b981'];
};

const getHorizontalBarColor = (percent: number) => {
  if (percent > 80) return 'bg-gradient-to-r from-red-500 to-rose-500';
  if (percent >= 60) return 'bg-gradient-to-r from-amber-500 to-orange-500';
  return 'bg-gradient-to-r from-emerald-500 to-teal-400';
};

interface ResourceMeterProps {
  icon: React.ReactNode;
  title: string;
  percent: number;
  total: string;
  allocated: string;
  unallocated: string;
  other?: string;
  disk?: string;
  gradientId: string;
  bgGradient: string;
}

function ResourceMeterCard({
  icon,
  title,
  percent,
  total,
  allocated,
  unallocated,
  other,
  disk,
  gradientId,
  bgGradient,
}: ResourceMeterProps) {
  const radius = 34;
  const strokeWidth = 6.5;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percent / 100) * circumference;
  const strokeColors = getGaugeGradientColors(percent);

  const hasExtra = other !== undefined || disk !== undefined;

  return (
    <div className={`p-4 rounded-xl border border-slate-200/80 ${bgGradient} hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group`}>
      {/* Meter Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-white shadow-2xs border border-slate-100">
            {icon}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs font-bold text-slate-800 tracking-wide">{title}</span>
            <HelpCircle className="w-3 h-3 text-slate-400 hover:text-slate-600 cursor-pointer" />
          </div>
        </div>
        <span className="text-[10px] font-semibold text-slate-600 bg-white/90 px-2 py-0.5 rounded-full border border-slate-200/60 shadow-2xs">
          总量 {total}
        </span>
      </div>

      {/* Main Metric Section with Radial SVG Gauge */}
      <div className="flex items-center justify-between my-2 px-1">
        <div className="flex flex-col">
          <span className="text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5 group-hover:translate-x-0.5 transition-transform origin-left">
            {percent}<span className="text-sm font-bold text-slate-500 ml-0.5">%</span>
          </span>
        </div>

        {/* High-Precision SVG Gauge Ring */}
        <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
          <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={strokeColors[0]} />
                <stop offset="100%" stopColor={strokeColors[1]} />
              </linearGradient>
            </defs>
            <circle
              stroke="#e2e8f0"
              fill="transparent"
              strokeWidth={strokeWidth}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <circle
              stroke={`url(#${gradientId})`}
              fill="transparent"
              strokeWidth={strokeWidth}
              strokeDasharray={`${circumference} ${circumference}`}
              style={{ strokeDashoffset }}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[11px] font-bold text-slate-700">{percent}%</span>
          </div>
        </div>
      </div>

      {/* Breakdown Cards (2 columns or 4 columns) */}
      <div className={`mt-2 pt-3 border-t border-slate-200/60 grid ${hasExtra ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-2'} gap-2 text-xs`}>
        <div className="flex flex-col bg-white/80 p-2 rounded-lg border border-slate-100/80">
          <span className="text-[10px] text-slate-400 font-medium">已分配</span>
          <span className="font-bold text-slate-800 text-xs mt-0.5">{allocated}</span>
        </div>
        <div className="flex flex-col bg-white/80 p-2 rounded-lg border border-slate-100/80">
          <span className="text-[10px] text-slate-400 font-medium">未分配</span>
          <span className="font-bold text-slate-600 text-xs mt-0.5">{unallocated}</span>
        </div>
        {disk !== undefined && (
          <div className="flex flex-col bg-white/80 p-2 rounded-lg border border-slate-100/80">
            <span className="text-[10px] text-slate-400 font-medium">云硬盘</span>
            <span className="font-bold text-slate-600 text-xs mt-0.5">{disk}</span>
          </div>
        )}
        {other !== undefined && (
          <div className="flex flex-col bg-white/80 p-2 rounded-lg border border-slate-100/80">
            <span className="text-[10px] text-slate-400 font-medium">其他</span>
            <span className="font-bold text-slate-600 text-xs mt-0.5">{other}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function HorizontalResourceMeterRow({
  icon,
  title,
  percent,
  total,
  allocated,
  unallocated,
  other,
  disk,
  bgGradient,
}: {
  icon: React.ReactNode;
  title: string;
  percent: number;
  total: string;
  allocated: string;
  unallocated: string;
  other?: string;
  disk?: string;
  bgGradient: string;
}) {
  const barColor = getHorizontalBarColor(percent);

  return (
    <div className={`p-4 rounded-xl border border-slate-200/80 ${bgGradient} hover:shadow-md hover:border-slate-300 transition-all duration-300 flex items-center justify-between gap-4 flex-1`}>
      {/* Icon & Title */}
      <div className="flex items-center gap-3 w-40 shrink-0">
        <div className="p-2 rounded-xl bg-white shadow-2xs border border-slate-100/90">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-slate-800 tracking-wide">{title}</span>
          <span className="text-[10px] text-slate-400 font-medium">总量 {total}</span>
        </div>
      </div>

      {/* Progress Bar & Percentage */}
      <div className="flex-1 flex flex-col justify-center px-2">
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="text-slate-500 font-medium">分配率</span>
          <span className="font-extrabold text-slate-900 font-mono text-sm">{percent}%</span>
        </div>
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/60">
          <div
            className={`h-full ${barColor} rounded-full transition-all duration-500`}
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>

      {/* Breakdown Details */}
      <div className="flex items-center gap-4 text-xs shrink-0 pl-3 border-l border-slate-200/70">
        <div className="flex flex-col items-end">
          <span className="text-[10px] text-slate-400 font-medium">已分配</span>
          <span className="font-bold text-slate-800 text-xs mt-0.5">{allocated}</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] text-slate-400 font-medium">未分配</span>
          <span className="font-semibold text-slate-500 text-xs mt-0.5">{unallocated}</span>
        </div>
        {disk !== undefined && (
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-slate-400 font-medium">云硬盘</span>
            <span className="font-semibold text-slate-500 text-xs mt-0.5">{disk}</span>
          </div>
        )}
        {other !== undefined && (
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-slate-400 font-medium">其他</span>
            <span className="font-semibold text-slate-500 text-xs mt-0.5">{other}</span>
          </div>
        )}
      </div>
    </div>
  );
}

interface ResourcePoolProps {
  className?: string;
  layout?: 'default' | 'appTab';
}

export default function ResourcePool({ className = "", layout = "default" }: ResourcePoolProps) {
  // Variant for 【资源池与应用】 tab
  if (layout === 'appTab') {
    return (
      <Card className={`flex flex-col justify-between h-full ${className}`}>
        <CardHeader className="py-3.5 shrink-0">
          <CardTitle>资源分配率</CardTitle>
        </CardHeader>
        <CardContent className="p-5 flex-1 flex flex-col justify-between gap-3">
          <HorizontalResourceMeterRow
            icon={<Cpu className="w-4 h-4 text-blue-600" />}
            title="CPU分配率"
            percent={cloudResourcePoolData.cpu.percent}
            total={cloudResourcePoolData.cpu.total}
            allocated={cloudResourcePoolData.cpu.allocated}
            unallocated={cloudResourcePoolData.cpu.unallocated}
            bgGradient="bg-gradient-to-r from-emerald-50/40 via-slate-50/40 to-white"
          />

          <HorizontalResourceMeterRow
            icon={<MemoryStick className="w-4 h-4 text-indigo-600" />}
            title="内存分配率"
            percent={cloudResourcePoolData.memory.percent}
            total={cloudResourcePoolData.memory.total}
            allocated={cloudResourcePoolData.memory.allocated}
            unallocated={cloudResourcePoolData.memory.unallocated}
            bgGradient="bg-gradient-to-r from-emerald-50/40 via-slate-50/40 to-white"
          />

          <HorizontalResourceMeterRow
            icon={<HardDrive className="w-4 h-4 text-cyan-600" />}
            title="存储分配率"
            percent={cloudResourcePoolData.storage.percent}
            total={cloudResourcePoolData.storage.total}
            allocated={cloudResourcePoolData.storage.allocated}
            unallocated={cloudResourcePoolData.storage.unallocated}
            other={cloudResourcePoolData.storage.other}
            disk={cloudResourcePoolData.storage.disk}
            bgGradient="bg-gradient-to-r from-emerald-50/40 via-slate-50/40 to-white"
          />
        </CardContent>
      </Card>
    );
  }

  // Default layout for 【综合概览】 Tab
  return (
    <Card className={`flex flex-col justify-between h-full ${className}`}>
      <CardHeader className="py-3.5 shrink-0">
        <CardTitle>资源分配率</CardTitle>
      </CardHeader>
      <CardContent className="p-5 flex-1 flex flex-col justify-between gap-5">
        {/* Row 1: CPU分配率 & 内存分配率 in the same row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 shrink-0">
          <ResourceMeterCard
            icon={<Cpu className="w-4 h-4 text-blue-600" />}
            title="CPU分配率"
            percent={cloudResourcePoolData.cpu.percent}
            total={cloudResourcePoolData.cpu.total}
            allocated={cloudResourcePoolData.cpu.allocated}
            unallocated={cloudResourcePoolData.cpu.unallocated}
            gradientId="cpuMeterGrad"
            bgGradient="bg-gradient-to-br from-slate-50/60 to-white"
          />

          <ResourceMeterCard
            icon={<MemoryStick className="w-4 h-4 text-indigo-600" />}
            title="内存分配率"
            percent={cloudResourcePoolData.memory.percent}
            total={cloudResourcePoolData.memory.total}
            allocated={cloudResourcePoolData.memory.allocated}
            unallocated={cloudResourcePoolData.memory.unallocated}
            gradientId="memMeterGrad"
            bgGradient="bg-gradient-to-br from-slate-50/60 to-white"
          />
        </div>

        {/* Row 2: 存储分配率 */}
        <ResourceMeterCard
          icon={<HardDrive className="w-4 h-4 text-cyan-600" />}
          title="存储分配率"
          percent={cloudResourcePoolData.storage.percent}
          total={cloudResourcePoolData.storage.total}
          allocated={cloudResourcePoolData.storage.allocated}
          unallocated={cloudResourcePoolData.storage.unallocated}
          other={cloudResourcePoolData.storage.other}
          disk={cloudResourcePoolData.storage.disk}
          gradientId="diskMeterGrad"
          bgGradient="bg-gradient-to-br from-slate-50/60 to-white"
        />
      </CardContent>
    </Card>
  );
}
