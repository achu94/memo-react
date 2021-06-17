const { Router } = require('express');

const path = require('path');

const homeController = require('./controllers/homeController');
const contactController = require('./controllers/contactController');
const adminController = require('./controllers/adminController');

const router = Router();

router.use('/admin', adminController);
router.use('/', homeController);
router.use('/api/contact', contactController);

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = router;