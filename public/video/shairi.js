var owner = "FARHAN-ISLAM"
var caption = "☆《SHIRI VIDEO》☆"
exports.name = '/video/shairi';
exports.index = async(req, res, next) => {
    try {
        const n = require('./data/shairi.json');
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