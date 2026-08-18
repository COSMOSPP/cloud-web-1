export const topStats = [
  {
    id: 'node-1',
    title: '计算节点',
    value: 33,
    type: 'cpu-arch',
    archTags: [
      { label: '鲲鹏', count: 24, color: '#3b82f6' },
      { label: '海光', count: 6, color: '#eab308' },
      { label: '飞腾', count: 8, color: '#ef4444' },
    ],
  },
  {
    id: 'node-2',
    title: '计算节点',
    value: 33,
    type: 'cpu-arch',
    archTags: [
      { label: '鲲鹏', count: 24, color: '#06b6d4' },
      { label: '海光', count: 24, color: '#22c55e' },
    ],
  },
  {
    id: 'node-3',
    title: '计算节点',
    value: 33,
    type: 'cpu-arch',
    archTags: [
      { label: '鲲鹏', count: 24, color: '#3b82f6' },
    ],
  },
  {
    id: 'vms',
    title: '虚拟机',
    value: 33,
    type: 'vm',
  },
  {
    id: 'tenants',
    title: '使用组织',
    value: 33,
    type: 'org',
  },
];

export const provisionedInstances = {
  vm: {
    total: 234,
    running: 123,
    stopped: 123,
    other: 123,
  },
  disk: {
    total: 234,
  },
};

export const cloudResourcePoolData = {
  cpu: { percent: 44.75, total: '4290核', allocated: '1924核', unallocated: '1924核' },
  memory: { percent: 72.75, total: '4290TB', allocated: '1924TB', unallocated: '1924TB' },
  storageBlock: {
    gauge1: { percent: 72.75, total: '4290TB', allocated: '2924TB', disk: '2424TB', other: '798TB' },
    gauge2: { title: '虚拟硬盘', mounted: '2024TB', unmounted: '424TB' },
  },
};

export const tableBadges = {
  orgs: '12个',
  vms: '276台',
  cpu: '567核',
  memory: '456GB',
  disk: '356个',
  total: '5645TB',
};

export const appResourceGroups = [
  {
    id: 'group-1',
    name: '研发中心',
    appCount: 2,
    vms: 32,
    cpuText: '135核',
    cpuUtil: 48,
    memoryText: '135GB',
    memoryUtil: 48,
    storageText: '135GB',
    storageUtil: 48,
    children: [
      {
        id: 'app-1-1',
        name: '李丽丽',
        vms: 23,
        cpuText: '135核',
        cpuUtil: 36,
        memoryText: '135GB',
        memoryUtil: 36,
        storageText: '135GB',
        storageUtil: 36,
      },
      {
        id: 'app-1-2',
        name: '李丽丽',
        vms: 23,
        cpuText: '135核',
        cpuUtil: 12,
        memoryText: '135GB',
        memoryUtil: 12,
        storageText: '135GB',
        storageUtil: 12,
      },
    ],
  },
  {
    id: 'group-2',
    name: '金融事业部',
    appCount: 6,
    vms: 32,
    cpuText: '135核',
    cpuUtil: 48,
    memoryText: '135GB',
    memoryUtil: 48,
    storageText: '135GB',
    storageUtil: 48,
    children: [
      {
        id: 'app-2-1',
        name: '李丽丽',
        vms: 23,
        cpuText: '135核',
        cpuUtil: 41,
        memoryText: '135GB',
        memoryUtil: 41,
        storageText: '135GB',
        storageUtil: 41,
      },
    ],
  },
];

export const hostCpuUsageData = {
  rate: '5.16%',
  marker: { time: '01:00', val: 6.52, text: '负载率 6.52%' },
  points: [
    { time: '19:00', val: 6.8 },
    { time: '20:30', val: 9.5 },
    { time: '22:00', val: 6.8 },
    { time: '23:30', val: 9.0 },
    { time: '01:00', val: 6.52 },
    { time: '02:30', val: 8.2 },
    { time: '04:00', val: 4.8 },
    { time: '05:30', val: 6.0 },
    { time: '07:00', val: 8.5 },
  ],
};

export const hostMemoryUsageData = {
  rate: '5.16%',
  marker: { time: '01:00', val: 6.52, text: '负载率 6.52%' },
  points: [
    { time: '19:00', val: 6.8 },
    { time: '20:30', val: 9.5 },
    { time: '22:00', val: 6.8 },
    { time: '23:30', val: 9.0 },
    { time: '01:00', val: 6.52 },
    { time: '02:30', val: 8.2 },
    { time: '04:00', val: 4.8 },
    { time: '05:30', val: 6.0 },
    { time: '07:00', val: 8.5 },
  ],
};

export const hostNetworkData = {
  sendRate: '2.4MB/s',
  recvRate: '1.8MB/s',
  points: [
    { time: '19:00', send: 0.4, recv: 0.5 },
    { time: '20:30', send: 0.75, recv: 0.6 },
    { time: '22:00', send: 0.45, recv: 0.5 },
    { time: '23:30', send: 0.65, recv: 0.55 },
    { time: '01:00', send: 0.98, recv: 0.62 },
    { time: '02:30', send: 0.42, recv: 0.68 },
    { time: '04:00', send: 0.58, recv: 0.4 },
    { time: '05:30', send: 0.4, recv: 0.48 },
    { time: '07:00', send: 0.68, recv: 0.38 },
  ],
};

export const hostDiskIOData = {
  readRate: '2.4MB/s',
  writeRate: '1.8MB/s',
  points: [
    { time: '19:00', read: 0.4, write: 0.5 },
    { time: '20:30', read: 0.75, write: 0.6 },
    { time: '22:00', read: 0.45, write: 0.5 },
    { time: '23:30', read: 0.65, write: 0.55 },
    { time: '01:00', read: 0.98, write: 0.62 },
    { time: '02:30', read: 0.42, write: 0.68 },
    { time: '04:00', read: 0.58, write: 0.4 },
    { time: '05:30', read: 0.4, write: 0.48 },
    { time: '07:00', read: 0.68, write: 0.38 },
  ],
};

export const userInfo = {
  username: 'VDC管理员/VDC管理员1',
  role: 'VDC管理员/VDC管理员1',
  lastLogin: '192.168.100.28...',
  currentLogin: '192.168.100.29...',
};

export const myManagement = {
  userCount: 3,
  disaster: 20,
  severe: 20,
  normal: 20,
};

export const serverNodes = {
  compute: { total: 33, online: 33, offline: 0, alert: 0, cpu: 768, memory: 6144 },
  storage: { total: 32, online: 32, offline: 0, alert: 0, capacity: 480 },
  network: { total: 46, online: 46, offline: 0, alert: 0, bandwidth: 40 },
};

export const resourcePool = {
  cpu: { total: 4290, allocated: 1924, unit: '核' },
  memory: { total: 4290, allocated: 1924, unit: 'TB' },
  storage: { total: 4290, allocated: 2924, unit: 'TB' },
};

export const hostCpuRankings = [
  { name: '节点2-172.18.0.12', value: 21.7 },
  { name: '节点7-172.18.0.17', value: 18.1 },
  { name: '节点6-172.18.0.16', value: 17.2 },
  { name: '节点8-172.18.0.18', value: 15.5 },
  { name: '节点1-172.18.0.11', value: 12.4 },
];

export const hostMemoryRankings = [
  { name: '节点13-172.18.0.34', value: 84.4 },
  { name: '节点7-172.18.0.17', value: 78.3 },
  { name: '节点6-172.18.0.16', value: 76.6 },
  { name: '节点8-172.18.0.18', value: 65.2 },
  { name: '节点2-172.18.0.12', value: 55.1 },
];

export const vmCpuTop1To5 = [
  { name: 'xx系统', value: 28, color: 'orange' },
  { name: 'xx平台', value: 21, color: 'blue' },
  { name: '虚拟机监控系统', value: 20, color: 'blue' },
  { name: 'xx服务中心', value: 16, color: 'blue' },
  { name: 'xx一体服务', value: 13, color: 'blue' },
];

export const vmCpuTop6To10 = [
  { name: 'xx综合管理', value: 12, color: 'blue' },
  { name: 'xx自监管', value: 11, color: 'blue' },
  { name: '数字动员xx', value: 9, color: 'blue' },
  { name: '数字动员潜力', value: 7, color: 'blue' },
  { name: 'xx数据枢纽', value: 7, color: 'blue' },
];

export const vmMemTop1To5 = [
  { name: '数字动员预案', value: 69, color: 'orange' },
  { name: 'xx业务', value: 61, color: 'orange' },
  { name: '数字动员经济', value: 60, color: 'orange' },
  { name: '数字动员xx', value: 60, color: 'orange' },
  { name: 'xx云端平台', value: 59, color: 'orange' },
];

export const vmMemTop6To10 = [
  { name: 'xx信息终端', value: 57, color: 'blue' },
  { name: '数字动员应用', value: 55, color: 'blue' },
  { name: '数字动员潜力', value: 47, color: 'blue' },
  { name: 'xx自监管', value: 45, color: 'blue' },
  { name: '数字动员xx', value: 43, color: 'blue' },
];
