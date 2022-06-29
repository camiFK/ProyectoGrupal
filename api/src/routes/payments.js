const { Router } = require('express');
const { getPayments, postPayment, postMercadopago, postMercadopagoSuccess , getTodayPayments} = require('../controllers/payments.js');

const router = Router();

router.get('/', getPayments);
router.get('/today',getTodayPayments);
router.post('/', postPayment);
router.post('/mercado', postMercadopago);
router.post('/mercado/success', postMercadopagoSuccess);

router.get('/feedback', function(req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id
  });
});

/*

router.get('/:id',getServiceById);

router.put('/:id',updateService);

router.delete('/:id',deleteService); */

module.exports = router;
