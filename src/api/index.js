import axios from 'axios'
import device from "./service/device";
import sensor from "./service/sensor/index.js";
import history from "./service/history/index.js";

//dev环境
axios.defaults.baseURL = 'http://localhost:8080'

//携带cookie
// axios.defaults.withCredentials = true

// 请求拦截器
// axios.interceptors.request.use(
//   common_config => {
//
//   },
//   error => {
//     return Promise.error(error);
//   }
// )

// 响应拦截器
// axios.interceptors.response.use(
//   response => {
//     if (response.status === 200) {
//       return Promise.resolve(response);
//     } else {
//       return Promise.reject(response);
//     }
//   },
//   // 服务器状态码不是2开头的的情况
//   error => {
//     if (error.response.status) {
//       switch (error.response.status) {
//         case 403:
//           window.$message.error(error.response.data.msg)
//           break;
//
//         default:
//           window.$message.error(error.response.data.msg)
//       }
//       return Promise.reject(error.response);
//     }
//   }
// )

const api = {
  device,
  sensor,
  history,
}

export default api