import express, { Express, Request, Response } from 'express'
import { MoveMarsRoverController } from './controllers/MoveMarsRoverController'
import { MoveMarsRover } from './MarsRover/application/MoveMarsRover'

const app: Express = express()
const port = 3004

app.get('/', (req: Request, res: Response) => {
  console.log('GET /')
  const controller = new MoveMarsRoverController(new MoveMarsRover())
  controller.run(req, res)
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
