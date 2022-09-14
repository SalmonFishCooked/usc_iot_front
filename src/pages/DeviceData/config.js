const config = {
  FORM_DATA: {
    DeviceID: 3,
    Time: [],
    SensorApiTag: "",
    Status: 0,
  },

  formRule: {
    time: [{ required: true, message: '时间段必填' }],
    Status: [{ required: true, message: '状态必填' }]
  },

  options: {
    optionsCommandStatus: [
      { label: '全部状态', value: 0 },
      { label: '命令已创建', value: 1 },
      { label: '已发往设备', value: 2 },
      { label: '发往设备失败', value: 3 },
      { label: '设备已响应', value: 4 },
      { label: '命令执行超时', value: 5 },
    ]
  },

  columns: {
    columnsHistory: [
      {
        colKey: 'row-select',
        type: 'multiple',
        width: 50,
      },
      {
        colKey: 'ID',
        align: 'center',
        title: '记录ID',
        ellipsis: true
      },
      {
        colKey: 'CreatedAt',
        align: 'center',
        title: '记录时间',
        width: 300,
        ellipsis: true
      },
      {
        colKey: 'SensorID',
        align: 'center',
        title: '传感器ID',
        width: 120,
      },
      {
        colKey: 'SensorName',
        align: 'center',
        title: '传感器名称',
        width: 200,
      },
      {
        colKey: 'SensorApiTag',
        align: 'center',
        title: '传感器标志名',
        width: 200,
      },
      {
        colKey: 'SensorValue',
        align: 'center',
        title: '传感值/单位',
        width: 120,
      },
      {
        colKey: 'DeviceApiTag',
        align: 'center',
        title: '设备标识',
        width: 200,
      },
      // {
      //   colKey: 'op',
      //   width: 60,
      //   align: 'center',
      //   title: 'op-column',
      //   cell: 'op',
      // },
    ],
  }
}

export default config