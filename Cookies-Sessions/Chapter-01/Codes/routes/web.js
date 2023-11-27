import express from 'express'
import StudentController from '../controllers/student.controller.js';

const router = express.Router()

router.get('/setcookie',StudentController.set_cookie)
router.get('/getcookie',StudentController.get_cookie)
router.get('/deletecookie',StudentController.delete_cookie)

export default router;