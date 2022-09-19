const config = {
  //新建设备字段数据
  deviceData: {
    "Name": "",
    "ApiTag": "",
    "IsOnline": false,
  },

  formRule: {
    Name: [{ required: true, message: '名称必填' }],
    ApiTag: [{ required: true, message: '标识名必填' }],
  }
}

export default config