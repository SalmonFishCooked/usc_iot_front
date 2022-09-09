const config = {
  //新建传感器字段数据
  sensorData: {
    "DeviceID": -1,
    "Name": "",
    "ApiTag": "",
    "Type": 0,
    "TransmissionType": 0,
    "DataType": 0,
    "Unit": "",
    "SensorType": "",
    "SerialNumber": "",
    "Channel": "",
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
    optionsSensorTypeNewLab: [
      { label: '位移 cm', value: '位移' },
      { label: '热电偶 ℃', value: '热电偶' },
      { label: '超声波 Hz', value: '超声波' },
      { label: '温度 ℃', value: '温度' },
      { label: '光照 lx', value: '光照' },
      { label: '红外 mm', value: '红外' },
      { label: '声音 dB', value: '声音' },
      { label: '霍尔', value: '霍尔' },
      { label: '称重 kg', value: '称重' },
      { label: '湿度 %RH', value: '湿度' },
      { label: '压电', value: '压电' },
      { label: '气体', value: '气体' },
      { label: 'MEMS', value: 'MEMS' },
    ],
    optionsSensorTypeSimulation: [
      { label: '温度 ℃', value: '温度' },
      { label: '湿度 %RH', value: '湿度' },
      { label: '空气质量', value: '空气质量' },
      { label: '大气压力 kpa', value: '大气压力' },
      { label: '风速 m/s', value: '风速' },
      { label: '光照 lx', value: '光照' },
      { label: '二氧化碳 ppm', value: '二氧化碳' },
      { label: '土壤温度 ℃', value: '土壤温度' },
      { label: '土壤湿度 %RH', value: '土壤湿度' },
      { label: '水位 m', value: '水位' },
      { label: '风向 °', value: '风向' },
      { label: 'PM2.5 μg/m³', value: 'PM2.5' },
      { label: '氧气 %', value: '氧气' },
      { label: '噪音 dB', value: '噪音' },
      { label: '重力 kg', value: '重力' },
      { label: '称重 kg', value: '称重' },
    ],
    optionsSensorTypeNumber: [
      { label: '人体', value: '人体' },
      { label: '烟雾', value: '烟雾' },
      { label: '火焰', value: '火焰' },
      { label: '红外对射', value: '红外对射' },
      { label: '微动开关', value: '微动开关' },
      { label: '行程开关', value: '行程开关' },
      { label: '接近开关', value: '接近开关' },
      { label: '限位开关', value: '限位开关' },
      { label: '液位开关', value: '液位开关' },
      { label: '微波', value: '微波' },
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
  },
}

export default config