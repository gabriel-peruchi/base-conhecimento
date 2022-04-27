import { AxiosInstance } from 'axios'

export class StatsService {
  constructor (private http: AxiosInstance) {}

  async get () {
    const { data } = await this.http.get('/stats')
    return data
  }
}
