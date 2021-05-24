import express from 'express'; 
const router = express.Router();
import Owner from '../models/ownerMessage.js';
import { getOwner, createOwner } from '../controllers/owner.js';

router.get('/', getOwner );
router.post('/', createOwner);
/*
you have to import the method implemented in the controllers/owner.js and just call it here
router.get('/', nameMethod );
*/


export default router;

