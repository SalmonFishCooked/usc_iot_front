const prefix = '/api/sensor'

const sensorBase = {
  //获取某个设备详情
  getSensorInfo: prefix + '/info',
  //创建设备
  createSensor: prefix + '/create',
  //删除设备
  deleteSensor: prefix + '/delete'
}

export default sensorBase