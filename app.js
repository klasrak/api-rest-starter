// Imports
import express from 'express'
import dotenv from 'dotenv'

import './src/database'

// Routes
import HomeRoutes from './src/routes/homeRoutes'

dotenv.config()

// App
class App {
  constructor () {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
  }

  routes () {
    this.app.use('/', HomeRoutes)
  }
}

export default new App().app
