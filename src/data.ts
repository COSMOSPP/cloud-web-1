export const topStats = [
  { id: 'compute-nodes', title: '计算节点', value: 48, unit: '台', arch: 'CPU架构：鲲鹏' },
  { id: 'storage-nodes', title: '存储节点', value: 32, unit: '台', arch: 'CPU架构：鲲鹏' },
  { id: 'network-nodes', title: '网络节点', value: 46, unit: '台', arch: 'CPU架构：鲲鹏' },
  { id: 'vms', title: '虚拟机', value: 358, unit: '台' },
  { id: 'tenants', title: '使用组织', value: 18, unit: '家' },
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
  { id: 5, name: 'xx', unit: '政府办', vms: 18, cpu: 88, memory: 640, storage: 8, cpuUtil: 52, memoryUtil: 61, storageUtil: 58, status: '运行中' },
  { id: 6, name: 'xx系统', unit: '教育局', vms: 6, cpu: 24, memory: 128, storage: 1.5, cpuUtil: 18, memoryUtil: 22, storageUtil: 30, status: '运行中' },
];

export const userInfo = {
  username: '系统管理员',
  role: '系统管理员',
  lastLogin: '172.18.0.203',
  currentLogin: '172.18.0.203',
};

export const myManagement = {
  userCount: 3,
  disaster: 0,
  severe: 0,
  normal: 0,
  info: 0,
};

export const hostNetworkData = [
  { time: '22:00', send: 1.5, recv: 0.6 },
  { time: '22:30', send: 2.6, recv: 1.1 },
  { time: '23:15', send: 1.6, recv: 0.5 },
  { time: '00:00', send: 1.5, recv: 0.5 },
  { time: '00:30', send: 2.5, recv: 2.0 },
  { time: '01:00', send: 1.8, recv: 0.6 },
  { time: '01:30', send: 4.2, recv: 3.6 },
  { time: '02:00', send: 1.6, recv: 0.6 },
  { time: '02:30', send: 2.6, recv: 0.7 },
  { time: '03:00', send: 1.7, recv: 0.6 },
  { time: '03:30', send: 7.5, recv: 1.8 },
  { time: '04:00', send: 8.8, recv: 1.2 },
  { time: '04:30', send: 2.0, recv: 0.6 },
  { time: '05:30', send: 1.8, recv: 0.5 },
  { time: '06:45', send: 2.1, recv: 0.6 },
  { time: '08:00', send: 1.8, recv: 0.5 },
];

export const hostNetworkSummary = {
  sendRate: '5.67 MB/s',
  recvRate: '1.52 MB/s',
};

export const hostDiskIOData = [
  { time: '10:00', io: 8 },
  { time: '10:05', io: 8 },
  { time: '10:10', io: 8 },
  { time: '10:15', io: 78 },
  { time: '10:20', io: 8 },
  { time: '10:25', io: 8 },
];

export const hostCpuUsageData = {
  rate: '14.50%',
  points: [
    { time: '22:00', val: 14.1 },
    { time: '00:30', val: 16.2 },
    { time: '03:00', val: 14.4 },
    { time: '05:30', val: 14.5 },
    { time: '08:00', val: 14.5 },
  ]
};

export const hostMemoryUsageData = {
  rate: '42.40%',
  points: [
    { time: '22:00', val: 42.1 },
    { time: '00:30', val: 42.4 },
    { time: '03:00', val: 42.3 },
    { time: '05:30', val: 42.4 },
    { time: '08:00', val: 42.4 },
  ]
};

export const cloudResourcePoolData = {
  cpu: { percent: 44.85, total: '4290 核', allocated: '1924 核', unallocated: '2366 核' },
  memory: { percent: 45.89, total: '11.65 TB', allocated: '5.34 TB', unallocated: '6.31 TB' },
  storage: { percent: 46.1, total: '453.49 TB', allocated: '209.08 TB', unallocated: '244.41 TB', other: '0 TB', disk: '242 TB' },
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

export const appResourceGroups = [
  {
    id: 'group-1',
    name: '研发中心',
    vms: 23,
    cpu: 152,
    cpuUtil: 77,
    memory: 320,
    memoryUtil: 68,
    storage: 2500,
    storageUnit: 'GB',
    storageUtil: 48,
    children: [
      {
        id: 'app-1-1',
        name: '代码托管平台',
        vms: 8,
        cpu: 32,
        cpuUtil: 45,
        memory: 64,
        memoryUtil: 60,
        storage: 500,
        storageUnit: 'GB',
        storageUtil: 80,
      },
      {
        id: 'app-1-2',
        name: '持续集成流水线',
        vms: 15,
        cpu: 120,
        cpuUtil: 85,
        memory: 256,
        memoryUtil: 70,
        storage: 2000,
        storageUnit: 'GB',
        storageUtil: 40,
      },
    ],
  },
  {
    id: 'group-2',
    name: '金融事业部',
    vms: 32,
    cpu: 248,
    cpuUtil: 46,
    memory: 784,
    memoryUtil: 51,
    storage: 1600,
    storageUnit: 'GB',
    storageUtil: 28,
    children: [
      {
        id: 'app-2-1',
        name: '核心交易系统',
        vms: 20,
        cpu: 160,
        cpuUtil: 25,
        memory: 512,
        memoryUtil: 30,
        storage: 1000,
        storageUnit: 'GB',
        storageUtil: 15,
      },
      {
        id: 'app-2-2',
        name: '风控模型引擎',
        vms: 10,
        cpu: 80,
        cpuUtil: 92,
        memory: 256,
        memoryUtil: 95,
        storage: 500,
        storageUnit: 'GB',
        storageUtil: 60,
      },
      {
        id: 'app-2-3',
        name: '老旧查询模块',
        vms: 2,
        cpu: 8,
        cpuUtil: 5,
        memory: 16,
        memoryUtil: 10,
        storage: 100,
        storageUnit: 'GB',
        storageUtil: 5,
      },
    ],
  },
];

export const provisionedInstances = {
  vm: {
    total: 103,
    running: 102,
    stopped: 1,
    other: 0,
  },
  disk: {
    total: 242,
  },
};
