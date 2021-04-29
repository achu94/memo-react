function errorHandler(err, req, res, next) {
    if (!err) return;

    res.status(404).send('404', {error: err})
}

module.exports = errorHandler;