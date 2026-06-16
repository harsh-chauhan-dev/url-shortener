import express from 'express';
import  {generateShortenerId, getAnalytics ,redirectURL }  from '../controller/urlController.js';
const router = express.Router();

router.post('/shorten', generateShortenerId);
router.get('/analytics/:shortnerId', getAnalytics);
router.get('/:shortnerId',  redirectURL );

export default router;