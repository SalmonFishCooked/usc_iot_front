const config = {
  FORM_DATA: {
    DeviceID: 3,
    Time: [],
    ApiTag: "",
  },

  formRule: {
    time: [{ required: true, message: '时间段必填' }]
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
        colKey: 'RecordTime',
        align: 'center',
        title: '记录时间',
        ellipsis: true
      },
      {
        colKey: 'SensorID',
        align: 'center',
        title: '传感器ID',
        width: 100,
      },
      {
        colKey: 'SensorName',
        align: 'center',
        title: '传感器名称',
        width: 100,
      },
      {
        colKey: 'SensorApiTag',
        align: 'center',
        title: '传感器标志名',
        width: 100,
      },
      {
        colKey: 'SensorUnit',
        align: 'center',
        title: '传感值/单位',
        width: 100,
      },
      {
        colKey: 'DeviceApiTag',
        align: 'center',
        title: '设备标识',
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
  }
}

export default config