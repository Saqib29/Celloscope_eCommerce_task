import express from 'express';
import { addSupplier } from '../controllers/supplierController.js';

const router = express.Router();

router.route('/add_ssupplier').post(addSupplier);

export default router;
