// 引入axios 创建实例
import axios from 'axios'

const instance = axios.create({
  baseURL:`http://${process.env.HOST||'localhost'}:${process.env.PORT||3000}`,
  timeout:2000,
  headers:{

  }
})
export default instance
