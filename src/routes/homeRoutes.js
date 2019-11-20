import { Router } from 'express'

// Controllers
import homeController from '../controllers/HomeController'

const router = new Router()

router.get('/', homeController.index)

export default router
