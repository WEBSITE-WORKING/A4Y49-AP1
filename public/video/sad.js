var owner = "FARHAN-ISLAM"
var caption = "☆《SAD VIDEO》☆"
exports.name = '/video/sadvideo';
exports.index = async(req, res, next) => {
    try {
        const n = require('./data/sad.json');
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