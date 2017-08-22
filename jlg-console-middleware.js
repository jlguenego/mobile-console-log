module.exports = function (req, res, next) {
    let obj = JSON.parse(req.body.str);
    console.log('obj', obj);
    obj.length = req.body.length;
    console.log('obj2', obj);
    const array = Array.prototype.slice.apply(obj);
    console.log('array', array);
    console.log.apply(console, array);
    console.log('req.body', req.body);
    res.send('ok');
};
