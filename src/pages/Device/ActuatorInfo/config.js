const config = {
  //新建传感器字段数据
  actuatorData: {
    "DeviceID": -1,
    "Name": "",
    "ApiTag": "",
    "Type": 0,
    "TransmissionType": 0,
    "DataType": 0,
    "OperationType": 0,
    "SensorType": "",
    "SerialNumber": "",
    "Channel": "",
    "SlaveAddress": "",
    "FunctionNumber": "",
    "DataAddress": "",
    "DataLength": "",
    "SampleTime": 30,
    "SampleFormula": "",
  },

  //多选框配置
  options: {
    //自定义：数据类型
    optionsDataType: [
      { label: '整数型', value: 0 },
      { label: '浮点型', value: 1 },
      { label: '布尔型', value: 2 },
      { label: '字符型', value: 3 },
      { label: '枚举型', value: 4 },
      { label: '二进制型', value: 5 },
    ],
    optionsOperationType: [
      { label: '开关型', value: 0 },
      { label: '开关停', value: 1 },
      { label: '按钮型', value: 2 },
      { label: '刻度型', value: 3 },
      { label: '输入框型', value: 4 },
    ],
    optionsSensorTypeNewLab: [
      { label: '风扇', value: '风扇' },
      { label: '灯光', value: '灯光' },
      { label: '舵机', value: '舵机' },
    ],
    optionsSensorModbusFunction: [
      { label: '01 线圈', value: '01' },
      // { label: '02 离散量', value: '02' },
      { label: '03 保持寄存器', value: '03' },
      // { label: '04 输入寄存器', value: '04' },
    ],
    optionsSensorModbusSampleTime: [
      { label: '30秒', value: 30 },
      { label: '1分钟', value: 60 },
      { label: '2分钟', value: 120 },
      { label: '3分钟', value: 180 },
      { label: '5分钟', value: 300 },
      { label: '30分钟', value: 1800 },
      { label: '1小时', value: 3600 },
      { label: '1天', value: 86400 },
    ],
    optionsSensorTypeSimulation: [
      { label: '直流电机', value: '直流电机' },
      { label: '风阀', value: '风阀' },
      { label: '电动推杆', value: '电动推杆' },
    ],
    optionsSensorTypeNumber: [
      { label: '风扇', value: '风扇' },
      { label: '灯光', value: '灯光' },
      { label: '报警灯', value: '报警灯' },
      { label: '插座', value: '插座' },
      { label: 'RGB灯', value: 'RGB灯' },
      { label: 'LCD屏', value: 'LCD屏' },
      { label: 'uwb', value: 'uwb' },
    ],
    optionsSensorTypeZigBee: [
      { label: '温度 ℃', value: '温度' },
      { label: '湿度 %RH', value: '湿度' },
      { label: '人体', value: '人体' },
      { label: '光照 lx', value: '光照' },
      { label: '空气质量', value: '空气质量' },
      { label: '可燃气体 ppm', value: '可燃气体' },
      { label: '火焰', value: '火焰' },
      { label: '四输入小板', value: '四输入小板' },
    ],
    optionsSensorTypeAgriculture: [
      { label: '土壤PH PH', value: '土壤PH' },
      { label: '水温 ℃', value: '水温' },
      { label: '空气湿度 %RH', value: '空气湿度' },
      { label: '土壤湿度 %RH', value: '土壤湿度' },
      { label: '土壤温度 ℃', value: '土壤温度' },
      { label: '光照 Lux', value: '光照' },
      { label: '电导率 us/cm', value: '电导率' },
      { label: '风速 m/s', value: '风速' },
      { label: '溶解氧 mg/L', value: '溶解氧' },
      { label: '溶解氧水温 ℃', value: '溶解氧水温' },
      { label: '氮气 ppm', value: '氮气' },
      { label: '二氧化碳 ppm', value: '二氧化碳' },
      { label: '一氧化碳 ppm', value: '一氧化碳' },
      { label: '氧气 %', value: '氧气' },
      { label: '硫化氢 ppm', value: '硫化氢' },
      { label: '二氧化硫 ppm', value: '二氧化硫' },
      { label: '氢气 ppm', value: '氢气' },
      { label: '氧化还原 mV', value: '氧化还原' },
      { label: '铵离子 ppm', value: '铵离子' },
      { label: '高精度光照 Lux', value: '高精度光照' },
      { label: '镉离子 ppm', value: '镉离子' },
      { label: '钾离子 ppm', value: '钾离子' },
      { label: '硝酸根 ppm', value: '硝酸根' },
      { label: '钙离子 ppm', value: '钙离子' },
      { label: '噪声 db', value: '噪声' },
      { label: '磷化氢 ppm', value: '磷化氢' },
      { label: '气压 mbar', value: '气压' },
      { label: '雨量 mm/min', value: '雨量' },
    ],
  },

  //表单规则
  formRule: {
    Name: [
      { required: true, message: '传感器名称必填'},
      { max: 15, message: '最多输入十五个字符'},
    ],
    ApiTag: [{ required: true, message: '标识名必填' }],
    TransmissionType: [{ required: true, message: '传输类型必填' }],
    DataType: [{ required: true, message: '数据类型必填' }],
    SensorType: [{ required: true, message: '传感类型必填' }],
    SerialNumber: [{ required: true, message: '序列号必填' }],
    Channel: [{ required: true, message: '通道号必填' }],
    SlaveAddress: [{ required: true, message: '从机地址必填' }],
    FunctionNumber: [{ required: true, message: '功能号必填' }],
    SampleTime: [{ required: true, message: '采样间隔必填' }],
  },

  //表格栏
  columns: {
    columnsCustom: [
      {
        colKey: 'row-select',
        type: 'multiple',
        width: 50,
      },
      {
        colKey: 'Name',
        align: 'center',
        title: '名称',
        ellipsis: true
      },
      {
        colKey: 'ApiTag',
        align: 'center',
        title: '标识名',
        ellipsis: true
      },
      {
        colKey: 'TransmissionType',
        align: 'center',
        title: '传输类型',
        width: 100,
      },
      {
        colKey: 'DataType',
        align: 'center',
        title: '数据类型',
        width: 100,
      },
      {
        colKey: 'op',
        width: 60,
        align: 'center',
        title: 'op-column',
        cell: 'op',
      },
    ],
    columnsNewlab: [
      {
        colKey: 'row-select',
        type: 'multiple',
        width: 50,
      },
      {
        colKey: 'Name',
        align: 'center',
        title: '名称',
        ellipsis: true
      },
      {
        colKey: 'ApiTag',
        align: 'center',
        title: '标识名',
        ellipsis: true
      },
      {
        colKey: 'SensorType',
        align: 'center',
        title: 'NEWLab',
        width: 100,
      },
      {
        colKey: 'SerialNumber',
        align: 'center',
        title: '序列号',
        width: 100,
      },
      {
        colKey: 'op',
        width: 60,
        align: 'center',
        title: 'op-column',
        cell: 'op',
      },
    ],
    columnsModbus: [
      {
        colKey: 'row-select',
        type: 'multiple',
        width: 50,
      },
      {
        colKey: 'Name',
        align: 'center',
        title: '名称',
        ellipsis: true
      },
      {
        colKey: 'ApiTag',
        align: 'center',
        title: '标识名',
        ellipsis: true
      },
      {
        colKey: 'SlaveAddress',
        align: 'center',
        title: '从机地址',
        width: 100,
      },
      {
        colKey: 'DataAddress',
        align: 'center',
        title: '起始地址',
        width: 100,
      },
      {
        colKey: 'op',
        width: 60,
        align: 'center',
        title: 'op-column',
        cell: 'op',
      },
    ],
    columnsSimulation: [
      {
        colKey: 'row-select',
        type: 'multiple',
        width: 50,
      },
      {
        colKey: 'Name',
        align: 'center',
        title: '名称',
        ellipsis: true
      },
      {
        colKey: 'ApiTag',
        align: 'center',
        title: '标识名',
        ellipsis: true
      },
      {
        colKey: 'SensorType',
        align: 'center',
        title: '模拟量',
        width: 100,
      },
      {
        colKey: 'Channel',
        align: 'center',
        title: '通道号',
        width: 100,
      },
      {
        colKey: 'op',
        width: 60,
        align: 'center',
        title: 'op-column',
        cell: 'op',
      },
    ],
    columnsNumber: [
      {
        colKey: 'row-select',
        type: 'multiple',
        width: 50,
      },
      {
        colKey: 'Name',
        align: 'center',
        title: '名称',
        ellipsis: true
      },
      {
        colKey: 'ApiTag',
        align: 'center',
        title: '标识名',
        ellipsis: true
      },
      {
        colKey: 'SensorType',
        align: 'center',
        title: '数字量',
        width: 100,
      },
      {
        colKey: 'Channel',
        align: 'center',
        title: '通道号',
        width: 100,
      },
      {
        colKey: 'op',
        width: 60,
        align: 'center',
        title: 'op-column',
        cell: 'op',
      },
    ],
    columnsZigBee: [
      {
        colKey: 'row-select',
        type: 'multiple',
        width: 50,
      },
      {
        colKey: 'Name',
        align: 'center',
        title: '名称',
        ellipsis: true
      },
      {
        colKey: 'ApiTag',
        align: 'center',
        title: '标识名',
        ellipsis: true
      },
      {
        colKey: 'SensorType',
        align: 'center',
        title: 'ZigBee',
        width: 100,
      },
      {
        colKey: 'SerialNumber',
        align: 'center',
        title: '序列号',
        width: 100,
      },
      {
        colKey: 'op',
        width: 60,
        align: 'center',
        title: 'op-column',
        cell: 'op',
      },
    ],
    columnsAgriculture: [
      {
        colKey: 'row-select',
        type: 'multiple',
        width: 50,
      },
      {
        colKey: 'Name',
        align: 'center',
        title: '名称',
        ellipsis: true
      },
      {
        colKey: 'ApiTag',
        align: 'center',
        title: '标识名',
        ellipsis: true
      },
      {
        colKey: 'SensorType',
        align: 'center',
        title: '农业',
        width: 100,
      },
      {
        colKey: 'Channel',
        align: 'center',
        title: '通道号',
        width: 100,
      },
      {
        colKey: 'op',
        width: 60,
        align: 'center',
        title: 'op-column',
        cell: 'op',
      },
    ],
  },
}

export default config