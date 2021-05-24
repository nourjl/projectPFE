import express from 'express'; 
const router = express.Router();
import User from '../models/userMessage.js';

import {getUser,createUser} from '../controllers/user.js' ;

router.get('/', getUser);
router.post('/',createUser);




export default router;
