
const router = require('express').Router();

const { signup, getbill } = require('../controller/appController.js')


/** HTTP Reqeust */
router.post('/about', signup);
// router.post('/product/getbill', getbill);


module.exports = router;
