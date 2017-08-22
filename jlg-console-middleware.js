module.exports = function (req, res, next) {
    console.log('debug on ', req.url, req.body);
    res.send('ok');
};
