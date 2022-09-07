import axios from "axios";
import base from "../../base/index.js";

const device = {
  //获取某个设备详情
  async getDeviceInfo(payload) {
    let data = null

    await axios.post(base.deviceBase.getDeviceInfo, payload).then((res) => {
      data = res.data
    }).catch((err) => {

    })

    return data
  }
}

export default device