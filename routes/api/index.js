const router = require('express').Router();

const userRoutes = require('./userroutes');

const thoughtRoutes = require('./thoughtRoutes');

router.use('/users', userroutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
