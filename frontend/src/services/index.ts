import axios from 'axios'

import { StatsService } from './StatsService'

export const http = axios.create({
  baseURL: 'http://localhost:3333'
})

http.interceptors.request.use((requestConfig) => {
  const token = ''
  requestConfig.headers.Authorization = `Bearer ${token}`

  return requestConfig
})

const services = {
  stats: new StatsService(http)
}

export { services }
