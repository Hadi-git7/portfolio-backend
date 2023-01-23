import express  from 'express';
const router = express.Router();
import {getServices,setService,updateService,deleteService} from '../controllers/serviceController.js';

router.route('/').get(getServices)
router.route('/').post(setService)
router.route('/:id').put(updateService)
router.route('/:id').delete(deleteService)

export default router