import { Server } from './Server'

async function bootstrap() {
  try {
    console.log('Start server...')
    const server = new Server()

    await server.listen(3333)
    console.log('Server is running on port 3333')
  } catch (error) {
    console.error(error)
  }
}

bootstrap()
