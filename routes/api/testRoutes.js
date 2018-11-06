const router = require('express').Router();

// This is just a test route
// Path to this route is /api/testRoute
router.get('/', (req, res) => {
  res.json('testRoute works!');
});


module.exports = router;
