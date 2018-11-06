const router = require('express').Router();
const testRoutes = require('./testRoutes');


router.use('/testRoute', testRoutes);

module.exports = router;
