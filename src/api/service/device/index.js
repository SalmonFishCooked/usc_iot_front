import axios from "axios";
import base from "../../base/index.js";
import service from "../index.js";

const device = {
  //获取某个设备详情
  async getDeviceInfo(payload) {
    return await service.commonPost(base.deviceBase.getDeviceInfo, payload)
  }
}

export default device