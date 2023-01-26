import express from 'express';
const router = express.Router();
import { 
getProjects,
 getPorjectById,
 createProject,
 updateProject,
 deleteProject,
 upload
} from '../controllers/projectController.js';



router.get('/', getProjects);

router.get('/:id', getPorjectById);

router.post('/',upload.single("image"),createProject);

router.patch('/:id',upload.single("image"),updateProject);

router.delete('/:id', deleteProject);



export default router;