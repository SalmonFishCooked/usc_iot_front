import axios from "axios";
import base from "../../base/index.js";
import service from "../index.js";

const sensor = {
  //获取所属设备ID的传感器列表
  async getSensorInfo(payload) {
    return await service.commonPost(base.sensorBase.getSensorInfo, payload)
  },

  //创建设备
  async createSensor(payload) {
    return await service.commonPost(base.sensorBase.createSensor, payload)
  },

  //删除设备
  async deleteSensor(payload) {
    return await service.commonPost(base.sensorBase.deleteSensor, payload)
  },
}

export default sensor