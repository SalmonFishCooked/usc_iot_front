import axios from "axios";
import base from "../../base/index.js";
import service from "../index.js";

const sensor = {
  //获取所属设备ID的执行器列表
  async getActuatorInfo(payload) {
    return await service.commonPost(base.actuatorBase.getActuatorInfo, payload)
  },

  //创建执行器
  async createActuator(payload) {
    return await service.commonPost(base.actuatorBase.createActuator, payload)
  },

  //删除执行器
  async deleteActuator(payload) {
    return await service.commonPost(base.actuatorBase.deleteActuator, payload)
  },
}

export default sensor