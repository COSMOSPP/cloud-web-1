import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { serverNodes } from '../data';
import { Server, Cpu, Database, Network } from 'lucide-react';

function NodeRow({ icon, title, data, details }: { icon: React.ReactNode, title: string, data: any, details: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 py-3.5 border-b border-slate-100 last:border-0">
      <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[15px] font-bold text-slate-900">{title}</span>
          <div className="flex gap-4 text-sm font-semibold text-slate-600">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>在线 {data.online}</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-400"></span>离线 {data.offline}</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500"></span>告警 {data.alert}</span>
          </div>
        </div>
        <div className="flex items-baseline gap-1.5 mb-2">
          <span className="text-3xl font-extrabold text-slate-900">{data.total}</span>
          <span className="text-sm font-semibold text-slate-500">台</span>
        </div>
        <div className="text-sm text-slate-600 bg-slate-50/80 p-2.5 rounded-xl flex gap-5 border border-slate-100 font-medium">
          {details}
        </div>
      </div>
    </div>
  );
}

export default function ServerNodeOverview() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>服务器节点总览</CardTitle>
      </CardHeader>
      <CardContent className="pt-0 p-3.5 sm:p-4">
        <NodeRow 
          icon={<Cpu className="w-6 h-6" />}
          title="计算节点"
          data={serverNodes.compute}
          details={<><span>CPU <strong className="text-slate-900 font-bold">{serverNodes.compute.cpu}</strong> 核</span> <span>内存 <strong className="text-slate-900 font-bold">{serverNodes.compute.memory}</strong> GB</span></>}
        />
        <NodeRow 
          icon={<Database className="w-6 h-6" />}
          title="存储节点"
          data={serverNodes.storage}
          details={<><span>存储容量 <strong className="text-slate-900 font-bold">{serverNodes.storage.capacity}</strong> TB</span></>}
        />
        <NodeRow 
          icon={<Network className="w-6 h-6" />}
          title="网络节点"
          data={serverNodes.network}
          details={<><span>网络带宽 <strong className="text-slate-900 font-bold">{serverNodes.network.bandwidth}</strong> G</span></>}
        />
      </CardContent>
    </Card>
  );
}
