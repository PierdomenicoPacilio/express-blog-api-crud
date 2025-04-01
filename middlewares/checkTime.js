function checkTime (req, res, next) {
    console.log('sono nel middleware');
    next();
};
module.exports = checkTime;