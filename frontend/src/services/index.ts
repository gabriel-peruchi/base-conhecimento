import axios from 'axios'

import { StatsService } from './StatsService'
import { UserService } from './UserService'

export const http = axios.create({
  baseURL: 'http://localhost:3333'
})

http.interceptors.request.use((requestConfig) => {
  const token = ''
  requestConfig.headers.Authorization = `Bearer ${token}`

  return requestConfig
})

const services = {
  users: new UserService(http),
  stats: new StatsService(http)
}

export { services }
