import axios from "axios";
import base from "../../base/index.js";

const sensor = {
  //获取所属设备ID的传感器列表
  async getSensorInfo(payload) {
    let data = null

    await axios.post(base.sensorBase.getSensorInfo, payload).then((res) => {
      data = res.data
    }).catch((err) => {

    })

    return data
  },

  //创建设备
  async createSensor(payload) {
    let data = null

    await axios.post(base.sensorBase.createSensor, payload).then((res) => {
      data = res.data
    }).catch((err) => {

    })

    return data
  },

  //删除设备
  async deleteSensor(payload) {
    let data = null

    await axios.post(base.sensorBase.deleteSensor, payload).then((res) => {
      data = res.data
    }).catch((err) => {

    })

    return data
  },
}

export default sensor