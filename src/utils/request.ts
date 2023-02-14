import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ResponseType } from '../types/common'

class HTTPRequest {
  private instance: AxiosInstance 
  constructor(config: AxiosRequestConfig = {}) {
    this.instance = axios.create(Object.assign({
      timeout: 1000,
    }, config))
  }

  async request<T, R = ResponseType<T>>(config: AxiosRequestConfig) {
    try {
      const { data } = await this.instance.request<R>(config)
      return data
    } catch (error) {
      return Promise.reject(error)      
    }
  }

  async post<T>(url: string, data = {}, config?: AxiosRequestConfig) {
    this.request<T>({ ...config, method: 'POST', url, data })
  }

  async get<T>(url: string, data = {}, config?: AxiosRequestConfig) {
    this.request<T>({ ...config, method: 'GET', url, params: data })
  }
}

const instance = new HTTPRequest()

const post = (url: string, data = {}, config?: AxiosRequestConfig) => instance.post(url, data, config) 

const get = (url: string, data = {}, config?: AxiosRequestConfig) => instance.get(url, data, config) 

export default instance

export {
  post,
  get
}


