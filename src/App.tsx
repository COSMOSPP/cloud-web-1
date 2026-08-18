import React, { useState } from 'react';
import Header from './components/Header';
import TopStatsRow from './components/TopStatsRow';
import HostNetworkCard from './components/HostNetworkCard';
import HostDiskIOCard from './components/HostDiskIOCard';
import HostCpuUsageCard from './components/HostCpuUsageCard';
import HostMemoryUsageCard from './components/HostMemoryUsageCard';
import HostCpuRankingCard from './components/HostCpuRankingCard';
import HostMemoryRankingCard from './components/HostMemoryRankingCard';
import ProvisionedInstancesCard from './components/ProvisionedInstancesCard';
import VmRankingsRow from './components/VmRankingsRow';
import ResourcePool from './components/ResourcePool';
import AppResourceTable from './components/AppResourceTable';
import UserInfoCard from './components/UserInfoCard';
import MyManagementCard from './components/MyManagementCard';
import { LayoutGrid, Activity, Layers, Trophy } from 'lucide-react';

type DashboardTab = 'overview' | 'host_network' | 'resource_app' | 'rankings';

const tabsConfig = [
  { id: 'overview' as DashboardTab, label: '综合概览', icon: LayoutGrid },
  { id: 'host_network' as DashboardTab, label: '主机与网络性能', icon: Activity },
  { id: 'resource_app' as DashboardTab, label: '资源池与应用', icon: Layers },
  { id: 'rankings' as DashboardTab, label: '排行榜分析', icon: Trophy },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');

  return (
    <div className="min-h-screen bg-[#f3f4f8] font-sans selection:bg-blue-500 selection:text-white text-slate-800">
      <Header />
      <main className="max-w-[1920px] mx-auto p-2.5 space-y-2.5">
        {/* Top 5 Stats Row */}
        <TopStatsRow />

        {/* Tab Navigation Bar */}
        <div className="bg-white p-1 rounded-md border border-slate-200/90 shadow-2xs flex items-center gap-1">
          {tabsConfig.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-[#1d5bf0] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: 综合概览 View */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 items-start">
            {/* Left Column (~58% / 7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-2.5">
              <ProvisionedInstancesCard />
              <ResourcePool />
              <AppResourceTable />
            </div>

            {/* Right Column (~42% / 5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-2.5">
              {/* 2x2 Grid of Host Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <HostCpuUsageCard />
                <HostMemoryUsageCard />
                <HostNetworkCard />
                <HostDiskIOCard />
              </div>

              {/* Bottom Right Cards */}
              <UserInfoCard />
              <MyManagementCard />
            </div>
          </div>
        )}

        {/* Tab 2: 主机与网络性能 View */}
        {activeTab === 'host_network' && (
          <div className="space-y-2.5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
              <HostCpuUsageCard />
              <HostMemoryUsageCard />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
              <HostNetworkCard />
              <HostDiskIOCard />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
              <HostCpuRankingCard />
              <HostMemoryRankingCard />
            </div>
          </div>
        )}

        {/* Tab 3: 资源池与应用 View */}
        {activeTab === 'resource_app' && (
          <div className="space-y-2.5">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-2.5 items-stretch">
              <div className="xl:col-span-5 flex flex-col">
                <ResourcePool className="h-full flex-1" />
              </div>
              <div className="xl:col-span-7 flex flex-col gap-2.5">
                <ProvisionedInstancesCard />
                <UserInfoCard />
                <MyManagementCard />
              </div>
            </div>
            <AppResourceTable />
          </div>
        )}

        {/* Tab 4: 排行榜分析 View */}
        {activeTab === 'rankings' && (
          <div className="space-y-2.5">
            <VmRankingsRow />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
              <HostCpuRankingCard />
              <HostMemoryRankingCard />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
