
import { Router } from 'express'
import { createUser, getUser } from '../controllers/users.controller'

const router = Router()

router.route('/user').get(getUser)
router.route("/user").post(createUser)

export default router