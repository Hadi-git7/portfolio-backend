import express  from 'express';
const router = express.Router();
import { getAbout, setAbout, updateAbout, deleteAbout,getAboutById,upload} from '../controllers/aboutController.js';

router.route('/').get(getAbout)
router.route('/:id').get(getAboutById)
router.route('/').post(upload.single("image"),setAbout)
router.route('/:id').put(upload.single("image"),updateAbout)
router.route('/:id').delete(deleteAbout)

export default router