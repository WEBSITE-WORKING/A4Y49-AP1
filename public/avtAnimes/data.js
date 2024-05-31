exports.name = '/mtx-api/data';
exports.index = async(req, res, next) => {
    let dirPath = __dirname + `/data/data_anime.json`;
    return res.sendFile(dirPath)
}