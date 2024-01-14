import express, { Express, Request, Response } from 'express'
import { MoveMarsRoverController } from './controllers/MoveMarsRoverController'
import { MoveMarsRover } from './MarsRover/application/MoveMarsRover'
import cors from 'cors'
import { InMemoryRoverRepository } from './MarsRover/infrastructure/InMemoryRoverRepository'

const app: Express = express()
const port = 3005
const options: cors.CorsOptions = {
  origin: ['http://localhost:3001', 'http://localhost:3000']
}
app.use(cors(options))
app.use(express.json())

const roverRepository = new InMemoryRoverRepository()

app.get('/', (req: Request, res: Response) => {
  console.log('GET /')
  const controller = new MoveMarsRoverController(new MoveMarsRover(roverRepository))
  controller.run(req, res)
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
