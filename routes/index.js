import { join } from 'path';
// import apiRoutes from "./api";

const router = require('express').Router();

// API Routes (if route starts w/ "/api", use the routes in apiRoutes
// ...shortens to code and organizes in seperate file)
// router.use('/api', apiRoutes);


// If no API routes are hit, send the React app
router.use((req, res) => {
  res.sendFile(join(__dirname, '../client/build/index.html'));
});

export default router;
