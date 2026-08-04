/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import TopStatsRow from './components/TopStatsRow';
import ServerNodeOverview from './components/ServerNodeOverview';
import ResourcePool from './components/ResourcePool';
import TenantOverview from './components/TenantOverview';
import UnitResourceDetail from './components/UnitResourceDetail';
import AppResourceTable from './components/AppResourceTable';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4f7fc] font-sans">
      <Header />
      <main className="max-w-[1920px] mx-auto p-4 md:p-6 lg:p-8">
        <TopStatsRow />
        
        <div className="grid grid-cols-12 gap-4 mb-4">
          <ServerNodeOverview />
          <ResourcePool />
          <TenantOverview />
        </div>
        
        <div className="grid grid-cols-12 gap-4">
          <UnitResourceDetail />
          <AppResourceTable />
        </div>
      </main>
    </div>
  );
}
