import {Router} from 'express'
import { authAdmin } from '../middlewares/authMiddleware.js'
import { getAdminData, loginAdmin, logoutAdmin, registerAdmin } from '../controllers/adminController.js'


const router  = Router()

// router.post('/register', registerAdmin)
router.post('/login', loginAdmin)
router.get('/logout', logoutAdmin)
router.get('/admin-data', authAdmin, getAdminData)

export default router