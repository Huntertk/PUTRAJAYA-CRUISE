import {Router} from 'express'
import { authAdmin } from '../middlewares/authMiddleware.js'
import { blockTimeSlot, getBlockedTimeSlot } from '../controllers/bookingTypeOneTimeSlotController.js'

const router  = Router()


router.post('/timeslot', authAdmin, blockTimeSlot);
router.post('/get-timeslot', getBlockedTimeSlot);

export default router