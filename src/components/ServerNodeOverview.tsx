import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { serverNodes } from '../data';
import { Server, Cpu, Database, Network } from 'lucide-react';

function NodeRow({ icon, title, data, details }: { icon: React.ReactNode, title: string, data: any, details: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 py-4 border-b border-gray-50 last:border-0">
      <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-800">{title}</span>
          <div className="flex gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>在线 {data.online}</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>离线 {data.offline}</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>告警 {data.alert}</span>
          </div>
        </div>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-2xl font-bold text-gray-800">{data.total}</span>
          <span className="text-xs text-gray-500">台</span>
        </div>
        <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded-lg flex gap-4">
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
      <CardContent className="pt-0">
        <NodeRow 
          icon={<Cpu className="w-6 h-6" />}
          title="计算节点"
          data={serverNodes.compute}
          details={<><span>CPU <strong className="text-gray-700">{serverNodes.compute.cpu}</strong> 核</span> <span>内存 <strong className="text-gray-700">{serverNodes.compute.memory}</strong> GB</span></>}
        />
        <NodeRow 
          icon={<Database className="w-6 h-6" />}
          title="存储节点"
          data={serverNodes.storage}
          details={<><span>存储容量 <strong className="text-gray-700">{serverNodes.storage.capacity}</strong> TB</span></>}
        />
        <NodeRow 
          icon={<Network className="w-6 h-6" />}
          title="xx节点"
          data={serverNodes.network}
          details={<><span>xx带宽 <strong className="text-gray-700">{serverNodes.network.bandwidth}</strong> G</span></>}
        />
      </CardContent>
    </Card>
  );
}
