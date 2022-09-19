import axios from "axios";
import base from "../../base/index.js";
import service from "../index.js";

const device = {
  //获取设备详情
  async getDeviceInfo(payload) {
    return await service.commonPost(base.deviceBase.getDeviceInfo, payload)
  },
  //创建设备
  async createDevice(payload) {
    return await service.commonPost(base.deviceBase.createDevice, payload)
  }
}

export default device