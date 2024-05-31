const fs = require('fs');
const path = require('path');
exports.name = '/apikey';
exports.index = async(req, res, next) => {
    const path_D = path.join(__dirname, 'data', 'data_apikey.json');
    if (!fs.existsSync(path_D)) {
        fs.writeFileSync(path_D, '[]', 'utf-8');
    }
    const data_apikey = require('./data/data_apikey.json');
    if (data_apikey.find(i => i.name == req.query.name)) {
        return res.json({
            error: 'You already have an APIKEY on your system'
        });
    }
    if (req.query.type == 'register') {
        let name = req.query.name;
        if (!name) return res.json({
            error: 'Missing data to make your request'
        });
        else {
            if (req.query.apikey == 'MrTomXxX_140703') {
                var type = 'premium';
                var apikey = 'MrTomXxX_';
                var request = 'infinite';
            } else {
                var type = 'free';
                var request = 100;
                var apikey = 'MrTomXxX_';
            }
            const data = require('./data/data_apikey.json');
            var random = '1234567890';
            var number = 10;
            for (var i = 0; i < number; i++) {
                apikey += random.charAt(Math.floor(Math.random() * random.length));
            }
            data.push({ apikey, name, request, type });
            fs.writeFileSync(path_D, JSON.stringify(data, null, 2), 'utf-8');
            res.json({
                author: "MrTomXxX",
                request: 100,
                apikey,
                type,
                message: 'APIKEY generated successfully'
            })
        }
    } else if (req.query.type == 'checker') {
        var apikey = req.query.apikey;
        const data = require('./data/data_apikey.json');
        if (!data.find(i => i.apikey == apikey)) {
            return res.json({
                error: 'APIKEY does not exist'
            })
        } else {
            var APIKEY = data.find(i => i.apikey == apikey);
            return res.json(APIKEY)
        }
    } else {
        return res.json({
            error: 'The command you requested could not be found'
        })
    }
}