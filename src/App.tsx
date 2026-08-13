/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import TopStatsRow from './components/TopStatsRow';
import UserInfoCard from './components/UserInfoCard';
import MyManagementCard from './components/MyManagementCard';
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
import { LayoutDashboard, Activity, Layers, Trophy } from 'lucide-react';

type DashboardTab = 'overview' | 'host_network' | 'resource_app' | 'rankings';

const tabsConfig = [
  { id: 'overview' as DashboardTab, label: '综合概览', icon: LayoutDashboard, badge: '全览' },
  { id: 'host_network' as DashboardTab, label: '主机与网络性能', icon: Activity, badge: '实时' },
  { id: 'resource_app' as DashboardTab, label: '资源池与应用', icon: Layers, badge: '管理' },
  { id: 'rankings' as DashboardTab, label: '排行榜分析', icon: Trophy, badge: 'Top10' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');

  return (
    <div className="min-h-screen bg-slate-100/70 font-sans selection:bg-blue-500 selection:text-white">
      <Header />
      <main className="max-w-[1920px] mx-auto p-5 space-y-5">
        {/* Top Stats Cards Header Bar (Always Visible) */}
        <TopStatsRow />

        {/* Multi-View Tab Navigation Bar */}
        <div className="bg-white p-1.5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            {tabsConfig.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {tab.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab 1: 综合概览 View */}
        {activeTab === 'overview' && (
          <div className="space-y-5">
            {/* 2-Column Main Layout: Left 5 cols (Resource Pool & Provisioned Instances), Right 7 cols (Host Analytics & User Info) */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-stretch">
              {/* Left Column (5 Columns): Provisioned Instances aligned on top of Resource Pool */}
              <div className="xl:col-span-5 flex flex-col gap-5">
                {/* Provisioned Instances */}
                <ProvisionedInstancesCard />

                {/* Resource Pool (stretches to align bottom 100% with right column) */}
                <ResourcePool className="h-full flex-1" />
              </div>

              {/* Right Column (7 Columns): User Info & My Management aligned on top of Host Usage */}
              <div className="xl:col-span-7 flex flex-col gap-5">
                {/* User Info (aligned with Host CPU Usage) & My Management (aligned with Host Memory Usage) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <UserInfoCard />
                  <MyManagementCard />
                </div>

                {/* Host CPU & Memory Usage Rates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <HostCpuUsageCard />
                  <HostMemoryUsageCard />
                </div>

                {/* Host Network Throughput & Disk IO */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <HostNetworkCard />
                  <HostDiskIOCard />
                </div>
              </div>
            </div>

            {/* Bottom row: App Resource Table */}
            <AppResourceTable />
          </div>
        )}

        {/* Tab 2: 主机与网络性能 View */}
        {activeTab === 'host_network' && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <HostCpuUsageCard />
              <HostMemoryUsageCard />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <HostNetworkCard />
              <HostDiskIOCard />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <HostCpuRankingCard />
              <HostMemoryRankingCard />
            </div>
          </div>
        )}

        {/* Tab 3: 资源池与应用 View */}
        {activeTab === 'resource_app' && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-stretch">
              <div className="xl:col-span-5 flex flex-col">
                <ResourcePool layout="appTab" className="h-full flex-1" />
              </div>
              <div className="xl:col-span-7 flex flex-col gap-5">
                <ProvisionedInstancesCard />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <UserInfoCard />
                  <MyManagementCard />
                </div>
              </div>
            </div>
            <AppResourceTable />
          </div>
        )}

        {/* Tab 4: 排行榜分析 View */}
        {activeTab === 'rankings' && (
          <div className="space-y-5">
            <VmRankingsRow />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <HostCpuRankingCard />
              <HostMemoryRankingCard />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
