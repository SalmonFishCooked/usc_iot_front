const prefix = '/api/actuator'

const actuatorBase = {
  //获取某个设备详情
  getActuatorInfo: prefix + '/info',
  //创建设备
  createActuator: prefix + '/create',
  //删除设备
  deleteActuator: prefix + '/delete'
}

export default actuatorBase