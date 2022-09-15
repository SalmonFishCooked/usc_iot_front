import axios from "axios";

const service = {
  commonPost: async (baseUrl, payload) => {
    let data = null

    await axios.post(baseUrl, payload).then((res) => {
      data = res.data
    }).catch((err) => {

    })

    return data
  }
}

export default service