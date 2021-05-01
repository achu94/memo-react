const { Router } = require('express');
const path = require('path');

const router = Router();
//if (!process.env.NODE_ENV == 'development'){
    router.get('/', (req, res) => {
        console.log('AMK')
        res.sendFile(path.resolve('build', 'index.html'));
    });
//}


module.exports = router;