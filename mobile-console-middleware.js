const CircularJSON = require('circular-json');

module.exports = function (req, res, next) {
    let obj = CircularJSON.parse(req.body.str);
    obj.length = req.body.length;
    const array = Array.prototype.slice.apply(obj);
    console[req.body.type].apply(console, array);
    res.send('ok');
};
