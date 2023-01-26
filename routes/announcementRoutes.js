import express  from 'express';
const router = express.Router();
import {getAnnouncement,setAnnouncement,updateAnnouncement,deleteAnnouncement,upload} from '../controllers/announcementController.js';

router.route('/').get(getAnnouncement)
router.route('/').post(upload.single("image"),setAnnouncement)
router.route('/:id').put(upload.single("image"),updateAnnouncement)
router.route('/:id').delete(deleteAnnouncement)

export default router