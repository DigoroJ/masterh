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


module.exports= router;