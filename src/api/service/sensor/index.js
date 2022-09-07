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
  }
}

export default sensor