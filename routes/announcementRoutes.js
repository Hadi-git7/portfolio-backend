import express  from 'express';
const router = express.Router();
import {getAnnouncement,setAnnouncement,updateAnnouncement,deleteAnnouncement,upload, getAnnouncementById} from '../controllers/announcementController.js';

router.route('/').get(getAnnouncement)
router.route('/:id').get(getAnnouncementById)
router.route('/').post(upload.single("image"),setAnnouncement)
router.route('/:id').put(upload.single("image"),updateAnnouncement)
router.route('/:id').delete(deleteAnnouncement)

export default router