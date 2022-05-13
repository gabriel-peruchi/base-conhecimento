import { AxiosInstance } from 'axios'

export class UserService {
  constructor (private http: AxiosInstance) {}

  async list () {
    const { data } = await this.http.get('/users')
    return data
  }
}
