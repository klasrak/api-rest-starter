// Imports
import express from 'express'
import dotenv from 'dotenv'

import './src/database'

// Routes
import homeRoutes from './src/routes/homeRoutes'
import userRoutes from './src/routes/userRoutes'
import tokenRoutes from './src/routes/tokenRoutes'

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
    this.app.use('/', homeRoutes)
    this.app.use('/users', userRoutes)
    this.app.use('/tokens', tokenRoutes)
  }
}

export default new App().app
