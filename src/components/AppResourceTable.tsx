import React, { useState, useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui';
import { appResourceGroups } from '../data';
import { Search, Settings, RotateCcw, ChevronDown, ChevronRight, ChevronLeft, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

type SortField = 'name' | 'vms' | 'cpu' | 'memory' | 'storage';
type SortDirection = 'asc' | 'desc' | null;

const getProgressBarColor = (val: number) => {
  if (val > 80) return 'bg-red-500';
  if (val >= 60) return 'bg-amber-500';
  return 'bg-emerald-500';
};

function MetricProgressCell({ value, unit, util }: { value: number; unit: string; util: number }) {
  return (
    <div className="flex flex-col justify-center pr-6 py-1">
      <div className="flex items-center justify-between text-xs mb-1">
        <span className="font-bold text-gray-800">{value} {unit}</span>
        <span className="text-gray-400 font-normal">{util}%</span>
      </div>
      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${getProgressBarColor(util)} rounded-full transition-all duration-300`}
          style={{ width: `${util}%` }}
        />
      </div>
    </div>
  );
}

function SortHeader({
  title,
  field,
  currentField,
  currentDirection,
  onSort,
  className = "",
}: {
  title: string;
  field: SortField;
  currentField: SortField | null;
  currentDirection: SortDirection;
  onSort: (field: SortField) => void;
  className?: string;
}) {
  const isActive = currentField === field;
  return (
    <th
      onClick={() => onSort(field)}
      className={`py-3 font-medium cursor-pointer select-none hover:text-blue-600 transition-colors ${className}`}
    >
      <div className="flex items-center gap-1">
        <span>{title}</span>
        <span className="text-gray-400">
          {isActive ? (
            currentDirection === 'asc' ? (
              <ArrowUp className="w-3.5 h-3.5 text-blue-600 inline" />
            ) : (
              <ArrowDown className="w-3.5 h-3.5 text-blue-600 inline" />
            )
          ) : (
            <ArrowUpDown className="w-3.5 h-3.5 text-gray-300 opacity-60 group-hover:opacity-100 inline" />
          )}
        </span>
      </div>
    </th>
  );
}

export default function AppResourceTable({ className = "" }: { className?: string }) {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    'group-1': true,
    'group-2': true,
  });

  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const toggleGroup = (groupId: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  const handleSort = (field: SortField) => {
    if (sortField !== field) {
      setSortField(field);
      setSortDirection('asc');
    } else if (sortDirection === 'asc') {
      setSortDirection('desc');
    } else {
      setSortField(null);
      setSortDirection(null);
    }
  };

  const sortedAndFilteredGroups = useMemo(() => {
    let result = appResourceGroups;

    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result
        .map((group) => {
          const matchGroup = group.name.toLowerCase().includes(term);
          const filteredChildren = group.children.filter(
            (c) => c.name.toLowerCase().includes(term) || group.name.toLowerCase().includes(term)
          );
          if (matchGroup || filteredChildren.length > 0) {
            return { ...group, children: matchGroup ? group.children : filteredChildren };
          }
          return null;
        })
        .filter(Boolean) as typeof appResourceGroups;
    }

    // Sort if active
    if (sortField && sortDirection) {
      const compareValues = (a: any, b: any) => {
        let valA = a[sortField];
        let valB = b[sortField];
        if (typeof valA === 'string') {
          return sortDirection === 'asc'
            ? valA.localeCompare(valB, 'zh-CN')
            : valB.localeCompare(valA, 'zh-CN');
        }
        return sortDirection === 'asc' ? valA - valB : valB - valA;
      };

      result = result
        .map((group) => {
          const sortedChildren = [...group.children].sort(compareValues);
          return { ...group, children: sortedChildren };
        })
        .sort(compareValues);
    }

    return result;
  }, [sortField, sortDirection, searchTerm]);

  const totalAppsCount = useMemo(
    () => sortedAndFilteredGroups.reduce((acc, g) => acc + g.children.length, 0),
    [sortedAndFilteredGroups]
  );

  return (
    <Card className={`flex flex-col ${className}`}>
      <CardHeader>
        <CardTitle>应用资源情况</CardTitle>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="搜索应用名称或单位" 
              className="bg-gray-50 border border-gray-200 rounded-md py-1.5 pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-64 transition-all"
            />
          </div>
          <button
            onClick={() => {
              setSearchTerm('');
              setSortField(null);
              setSortDirection(null);
            }}
            title="重置"
            className="p-1.5 text-gray-400 hover:text-gray-600 border border-gray-200 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button className="p-1.5 text-gray-400 hover:text-gray-600 border border-gray-200 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col pt-0">
        {/* Overall Summary Statistics Bar */}
        <div className="mb-3 px-3.5 py-2 bg-blue-50/60 border border-blue-100/70 rounded-lg text-xs text-gray-700 flex items-center flex-wrap gap-2">
          <span className="font-medium text-gray-800">共 12 个组织</span>
          <span className="text-gray-300">·</span>
          <span>虚拟机 <strong className="font-bold text-gray-800">276</strong> 台</span>
          <span className="text-gray-300">·</span>
          <span>CPU <strong className="font-bold text-gray-800">832</strong> 核</span>
          <span className="text-gray-300">·</span>
          <span>内存 <strong className="font-bold text-gray-800">2864</strong> GB</span>
          <span className="text-gray-300">·</span>
          <span>磁盘 <strong className="font-bold text-gray-800">208</strong> 个</span>
          <span className="text-gray-300">·</span>
          <span>总量 <strong className="font-bold text-gray-800">325</strong> TB</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-xs font-medium text-gray-500 border-b border-gray-100">
                <SortHeader
                  title="组织/应用名称"
                  field="name"
                  currentField={sortField}
                  currentDirection={sortDirection}
                  onSort={handleSort}
                  className="pl-2 w-1/4"
                />
                <SortHeader
                  title="虚拟机数量"
                  field="vms"
                  currentField={sortField}
                  currentDirection={sortDirection}
                  onSort={handleSort}
                  className="w-28"
                />
                <SortHeader
                  title="CPU(核) / 利用率"
                  field="cpu"
                  currentField={sortField}
                  currentDirection={sortDirection}
                  onSort={handleSort}
                  className="w-1/5"
                />
                <SortHeader
                  title="内存(GB) / 利用率"
                  field="memory"
                  currentField={sortField}
                  currentDirection={sortDirection}
                  onSort={handleSort}
                  className="w-1/5"
                />
                <SortHeader
                  title="磁盘(GB) / 利用率"
                  field="storage"
                  currentField={sortField}
                  currentDirection={sortDirection}
                  onSort={handleSort}
                  className="w-1/5"
                />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {sortedAndFilteredGroups.map((group) => {
                const isExpanded = !!expandedGroups[group.id];
                return (
                  <React.Fragment key={group.id}>
                    {/* Group Header Row */}
                    <tr
                      onClick={() => toggleGroup(group.id)}
                      className="bg-gray-50/40 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <td className="py-3.5 pl-2">
                        <div className="flex items-center gap-1.5">
                          {isExpanded ? (
                            <ChevronDown className="w-4 h-4 text-gray-600 shrink-0" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-gray-600 shrink-0" />
                          )}
                          <span className="font-bold text-gray-800">{group.name}</span>
                          <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full font-normal ml-1">
                            {group.children.length}应用
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 font-bold text-gray-800">{group.vms}</td>
                      <td className="py-3.5">
                        <MetricProgressCell value={group.cpu} unit="核" util={group.cpuUtil} />
                      </td>
                      <td className="py-3.5">
                        <MetricProgressCell value={group.memory} unit="GB" util={group.memoryUtil} />
                      </td>
                      <td className="py-3.5">
                        <MetricProgressCell value={group.storage} unit={group.storageUnit} util={group.storageUtil} />
                      </td>
                    </tr>

                    {/* Child Application Rows */}
                    {isExpanded &&
                      group.children.map((app) => (
                        <tr key={app.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="py-3 pl-8 text-gray-700 font-medium">
                            {app.name}
                          </td>
                          <td className="py-3 text-gray-700">{app.vms}</td>
                          <td className="py-3">
                            <MetricProgressCell value={app.cpu} unit="核" util={app.cpuUtil} />
                          </td>
                          <td className="py-3">
                            <MetricProgressCell value={app.memory} unit="GB" util={app.memoryUtil} />
                          </td>
                          <td className="py-3">
                            <MetricProgressCell value={app.storage} unit={app.storageUnit} util={app.storageUtil} />
                          </td>
                        </tr>
                      ))}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {/* Table Footer */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
          <div className="text-xs text-gray-500">
            共 {sortedAndFilteredGroups.length} 部门 / {totalAppsCount} 应用
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="px-2 py-1 bg-blue-50 text-blue-600 border border-blue-100 rounded text-xs font-medium">1</div>
            <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
              <ChevronRight className="w-4 h-4" />
            </button>
            <select className="ml-2 bg-white border border-gray-200 rounded text-xs py-1 px-2 focus:outline-none text-gray-600 cursor-pointer hover:border-gray-300">
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
