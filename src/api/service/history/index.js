import axios from "axios";
import base from "../../base/index.js";
import service from "../index.js";

const history = {
  //获取历史传感记录列表
  async getHistoryInfo(payload) {
    return await service.commonPost(base.historyBase.getHistoryInfo, payload)
  },

  // //创建设备
  // async createSensor(payload) {
  //   let data = null
  //
  //   await axios.post(base.sensorBase.createSensor, payload).then((res) => {
  //     data = res.data
  //   }).catch((err) => {
  //
  //   })
  //
  //   return data
  // },
  //
  // //删除设备
  // async deleteSensor(payload) {
  //   let data = null
  //
  //   await axios.post(base.sensorBase.deleteSensor, payload).then((res) => {
  //     data = res.data
  //   }).catch((err) => {
  //
  //   })
  //
  //   return data
  // },
}

export default history