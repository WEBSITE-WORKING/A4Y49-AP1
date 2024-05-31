var owner = "FARHAN-ISLAM"
var caption = "☆《HORNY VIDEO》☆"
exports.name = '/video/horny';
exports.index = async(req, res, next) => {
    try {
        const n = require('./data/horny.json');
        var video = n[Math.floor(Math.random() * n.length)].trim();
        res.jsonp({
            data: video,
            count: n.length,
            owner: `${owner}`,
            nayan: `${caption}`
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}