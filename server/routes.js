const { Router } = require('express');

const path = require('path');

const homeController = require('./controllers/homeController');
const contactController = require('./controllers/contactController');

const router = Router();

router.use('/', homeController);
router.use('/contact', contactController);

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = router;