import express  from 'express';
const router = express.Router();
import {getServices,setService,updateService,deleteService,getServicesById} from '../controllers/serviceController.js';

router.route('/').get(getServices)
router.route('/:id').get(getServicesById)
router.route('/').post(setService)
router.route('/:id').put(updateService)
router.route('/:id').delete(deleteService)

export default router