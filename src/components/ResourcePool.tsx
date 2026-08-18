import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { cloudResourcePoolData } from '../data';
import { HelpCircle } from 'lucide-react';

interface CircularGaugeProps {
  percent: number | string;
  strokeColor?: string;
  gradientColors?: [string, string];
  size?: number;
  centerText?: string;
}

function CircularGauge({
  percent,
  strokeColor = '#f97316',
  gradientColors,
  size = 64,
  centerText,
}: CircularGaugeProps) {
  const numPercent = typeof percent === 'number' ? percent : 72.75;
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (numPercent / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {gradientColors && (
          <defs>
            <linearGradient id={`grad-${centerText || numPercent}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={gradientColors[0]} />
              <stop offset="100%" stopColor={gradientColors[1]} />
            </linearGradient>
          </defs>
        )}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e2e8f0"
          strokeWidth={5}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={gradientColors ? `url(#grad-${centerText || numPercent})` : strokeColor}
          strokeWidth={5}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-center p-0.5">
        <span className="text-[11px] font-extrabold text-slate-800 font-mono tracking-tighter leading-tight">
          {centerText || `${numPercent}%`}
        </span>
      </div>
    </div>
  );
}

export default function ResourcePool({ className = "" }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>资源分配率</CardTitle>
      </CardHeader>
      <CardContent className="p-2.5 space-y-2.5">
        {/* Row 1: CPU分配率 & 内存分配率 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* CPU分配率 Panel */}
          <div className="bg-[#f7f8fa] border border-slate-200/60 p-3 rounded-md flex flex-col justify-between">
            <div className="flex items-center gap-1 font-bold text-xs text-slate-800 mb-2">
              <span>CPU分配率</span>
              <HelpCircle className="w-3.5 h-3.5 text-slate-400 cursor-pointer" />
            </div>
            <div className="flex items-center gap-3">
              <CircularGauge percent={cloudResourcePoolData.cpu.percent} strokeColor="#f97316" />
              <div className="flex flex-col text-xs space-y-0.5 text-slate-600">
                <div>
                  <span>总量 </span>
                  <span className="font-bold text-slate-900 font-mono">{cloudResourcePoolData.cpu.total}</span>
                </div>
                <div>
                  <span>已分配 </span>
                  <span className="font-bold text-slate-900 font-mono">{cloudResourcePoolData.cpu.allocated}</span>
                </div>
                <div>
                  <span>未分配 </span>
                  <span className="font-bold text-slate-900 font-mono">{cloudResourcePoolData.cpu.unallocated}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 内存分配率 Panel */}
          <div className="bg-[#f7f8fa] border border-slate-200/60 p-3 rounded-md flex flex-col justify-between">
            <div className="flex items-center gap-1 font-bold text-xs text-slate-800 mb-2">
              <span>内存分配率</span>
              <HelpCircle className="w-3.5 h-3.5 text-slate-400 cursor-pointer" />
            </div>
            <div className="flex items-center gap-3">
              <CircularGauge percent={cloudResourcePoolData.memory.percent} strokeColor="#f97316" />
              <div className="flex flex-col text-xs space-y-0.5 text-slate-600">
                <div>
                  <span>总量 </span>
                  <span className="font-bold text-slate-900 font-mono">{cloudResourcePoolData.memory.total}</span>
                </div>
                <div>
                  <span>已分配 </span>
                  <span className="font-bold text-slate-900 font-mono">{cloudResourcePoolData.memory.allocated}</span>
                </div>
                <div>
                  <span>未分配 </span>
                  <span className="font-bold text-slate-900 font-mono">{cloudResourcePoolData.memory.unallocated}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: 块存储分配率 Panel */}
        <div className="bg-[#f7f8fa] border border-slate-200/60 p-3 rounded-md space-y-2.5">
          <div className="flex items-center gap-1 font-bold text-xs text-slate-800">
            <span>块存储分配率</span>
            <HelpCircle className="w-3.5 h-3.5 text-slate-400 cursor-pointer" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            {/* Gauge 1 Group */}
            <div className="flex items-center gap-3">
              <CircularGauge
                percent={cloudResourcePoolData.storageBlock.gauge1.percent}
                gradientColors={['#2563eb', '#10b981']}
              />
              <div className="flex flex-col text-xs space-y-0.5 text-slate-600">
                <div>
                  <span>总量 </span>
                  <span className="font-bold text-slate-900 font-mono">{cloudResourcePoolData.storageBlock.gauge1.total}</span>
                </div>
                <div>
                  <span>已分配 </span>
                  <span className="font-bold text-slate-900 font-mono">{cloudResourcePoolData.storageBlock.gauge1.allocated}</span>
                </div>
                <div className="flex items-center gap-1 pt-0.5">
                  <span className="w-2.5 h-2.5 bg-[#2563eb] inline-block shrink-0"></span>
                  <span>虚拟磁盘</span>
                  <span className="font-bold text-slate-900 font-mono ml-0.5">{cloudResourcePoolData.storageBlock.gauge1.disk}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 bg-[#10b981] inline-block shrink-0"></span>
                  <span>其他</span>
                  <span className="font-bold text-slate-900 font-mono ml-0.5">{cloudResourcePoolData.storageBlock.gauge1.other}</span>
                </div>
              </div>
            </div>

            {/* Gauge 2 Group */}
            <div className="flex items-center gap-3">
              <CircularGauge
                percent={82}
                strokeColor="#f97316"
                centerText="虚拟硬盘"
              />
              <div className="flex flex-col text-xs space-y-1 text-slate-600">
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 bg-[#f97316] inline-block shrink-0"></span>
                  <span>已挂载</span>
                  <span className="font-bold text-slate-900 font-mono ml-0.5">{cloudResourcePoolData.storageBlock.gauge2.mounted}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 bg-slate-300 inline-block shrink-0"></span>
                  <span>未挂载</span>
                  <span className="font-bold text-slate-900 font-mono ml-0.5">{cloudResourcePoolData.storageBlock.gauge2.unmounted}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
