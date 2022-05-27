const {Router} = require('express');
const controller = require('../controllers/controllers')
const router = Router();


router.get('/services', controller.getServices);
router.post('/services', controller.addServices);
router.delete('/services/:id',controller.deleteService)

router.post('/clients', controller.addClient);
router.post('/clients/login', controller.clientLogin);

router.post('/address', controller.addAddress);
router.get('/address', controller.getAddress); 

router.post('/request', controller.addRequest);
router.get('/request', controller.getRequests);
router.put('/status', controller.updateStatus);

router.post('/pic', controller.addPic);
router.get('/pic/:category', controller.getPic);
router.put('/pic',controller.updatePic);
router.delete('/pic', controller.deletePic);

router.get('/allPics', controller.getAllPics);




module.exports= router;