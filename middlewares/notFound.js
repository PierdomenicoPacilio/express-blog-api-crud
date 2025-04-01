function notFound(err, req, res, next) {
    res.status(404);
    res.json({
        error: err.message
    });
    next();
};
module.exports = notFound;