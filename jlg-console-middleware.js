module.exports = function (req, res, next) {
    console.log(req.body.str);
    res.send('ok');
};
