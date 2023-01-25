import express from 'express';
import { deleteContact, getContact, setContact, updateContact } from '../controllers/control.js';
const router = express.Router();



router.route('/').get(getContact)
router.route('/').post(setContact)
router.route('/:id').put(updateContact)
router.route('/:id').delete(deleteContact)




export default router;


