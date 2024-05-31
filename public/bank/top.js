const dataBank = require('./data/bank.json')
exports.name = '/bank/top';
exports.index = async(req, res, next) => {
    if(dataBank.length == 0) return res.json({ status: false, message: 'Bank has no users'})
    var top = dataBank.sort((a, b) => b.data.money - a.data.money)
    console.log(top)
    var topBank = [];
    for (var i = 0; i < 10; i++) {
        if(!top[i]) continue;
        topBank.push({
            rank: i+1,
            name: top[i].name,
            STK: top[i].data.STK,
            money: top[i].data.money
        })
    }
    return res.json({
        status: true,
        message: `[ 𝐓𝐎𝐏 ${topBank.length} THE RICHEST BANK ]`,
        ranking: topBank
    })
}