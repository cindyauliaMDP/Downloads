const express = require('express');
const router = express.Router();
const OrderCetakController = require('../controllers/OrderCetakController');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', OrderCetakController.getAll);
router.get('/:id', OrderCetakController.getById);
router.post('/', cekApiKey, OrderCetakController.create);
router.put('/:id', cekApiKey, OrderCetakController.update);
router.delete('/:id', cekApiKey, OrderCetakController.remove);

module.exports = router;