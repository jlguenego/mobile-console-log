module.exports = function (req, res, next) {
    console.log('debug on ', req.url);
    res.send('ok');
};
