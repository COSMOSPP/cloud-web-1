export const topStats = [
  { id: 'total-servers', title: '服务器总数', value: 126, unit: '台', trend: 12, sparklineData: [10, 15, 12, 18, 14, 20, 25] },
  { id: 'compute-nodes', title: '计算节点', value: 48, unit: '台', trend: 5, sparklineData: [5, 10, 8, 12, 10, 15, 18] },
  { id: 'storage-nodes', title: '存储节点', value: 32, unit: '台', trend: 2, sparklineData: [2, 4, 3, 5, 4, 6, 8] },
  { id: 'network-nodes', title: '网络节点', value: 46, unit: '台', trend: 3, sparklineData: [3, 5, 4, 6, 5, 7, 9] },
  { id: 'vms', title: '虚拟机', value: 358, unit: '台', trend: 18, sparklineData: [20, 25, 22, 28, 25, 30, 35] },
  { id: 'tenants', title: '使用单位', value: 18, unit: '家', trend: 2, sparklineData: [1, 2, 1, 3, 2, 4, 5] },
  { id: 'cpu-util', title: 'CPU利用率', value: 63, unit: '%', trend: -2, sparklineData: [60, 65, 62, 68, 65, 63, 63], isPercent: true },
  { id: 'health', title: '平台健康度', value: 99.9, unit: '%', trend: 0.1, sparklineData: [99, 99.5, 99.2, 99.8, 99.5, 99.9, 99.9], isPercent: true },
];

export const serverNodes = {
  compute: { total: 48, online: 47, offline: 1, alert: 1, cpu: 768, memory: 6144 },
  storage: { total: 32, online: 32, offline: 0, alert: 0, capacity: 480 },
  network: { total: 46, online: 46, offline: 0, alert: 0, bandwidth: 40 },
};

export const resourcePool = {
  cpu: { total: 4096, allocated: 2536, unit: '核' },
  memory: { total: 32768, allocated: 18360, unit: 'GB' },
  storage: { total: 860, allocated: 540, unit: 'TB' },
  overAllocation: { cpu: '1:4', memory: '1:2', storage: '78%' }
};

export const tenants = [
  { id: 1, name: '公安局', status: '在线', usage: 98 },
  { id: 2, name: '法院', status: '在线', usage: 65 },
  { id: 3, name: '检察院', status: '在线', usage: 72 },
  { id: 4, name: '卫健委', status: '在线', usage: 84 },
  { id: 5, name: '教育局', status: '在线', usage: 36 },
  { id: 6, name: '住建局', status: '在线', usage: 55 },
];

export const unitDetails = {
  name: '公安局',
  vms: 86,
  cpu: 520,
  memory: 2048,
  storage: 35,
  cpuUtil: 68,
  memoryUtil: 72,
  storageUtil: 61,
};

export const trendData = [
  { date: '05-03', cpu: 65, memory: 70, storage: 60 },
  { date: '05-06', cpu: 68, memory: 72, storage: 61 },
  { date: '05-09', cpu: 63, memory: 68, storage: 59 },
  { date: '05-12', cpu: 75, memory: 78, storage: 62 },
  { date: '05-15', cpu: 70, memory: 75, storage: 61 },
  { date: '05-18', cpu: 78, memory: 80, storage: 63 },
  { date: '05-21', cpu: 82, memory: 85, storage: 64 },
  { date: '05-24', cpu: 76, memory: 79, storage: 62 },
  { date: '05-27', cpu: 70, memory: 74, storage: 61 },
  { date: '05-30', cpu: 68, memory: 72, storage: 61 },
  { date: '06-01', cpu: 72, memory: 75, storage: 62 },
];

export const applications = [
  { id: 1, name: '警综平台', unit: '公安局', vms: 12, cpu: 48, memory: 256, storage: 4.5, cpuUtil: 48, memoryUtil: 36, storageUtil: 62, status: '运行中' },
  { id: 2, name: '视频平台', unit: '公安局', vms: 22, cpu: 160, memory: 1024, storage: 18, cpuUtil: 68, memoryUtil: 72, storageUtil: 88, status: '运行中' },
  { id: 3, name: '人口平台', unit: '公安局', vms: 8, cpu: 32, memory: 256, storage: 3.2, cpuUtil: 42, memoryUtil: 38, storageUtil: 55, status: '运行中' },
  { id: 4, name: 'HIS系统', unit: '卫健委', vms: 12, cpu: 96, memory: 512, storage: 5, cpuUtil: 38, memoryUtil: 42, storageUtil: 65, status: '运行中' },
  { id: 5, name: '电子政务', unit: '政府办', vms: 18, cpu: 88, memory: 640, storage: 8, cpuUtil: 52, memoryUtil: 61, storageUtil: 58, status: '运行中' },
  { id: 6, name: 'OA系统', unit: '教育局', vms: 6, cpu: 24, memory: 128, storage: 1.5, cpuUtil: 18, memoryUtil: 22, storageUtil: 30, status: '运行中' },
];
