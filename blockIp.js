const getIP = require('ipware')().get_ip;
const fs = require("fs-extra");
module.exports = function (req, res, next) {
  const listIPBlocked = JSON.parse(fs.readFileSync('./blockedIP.json', { encoding: 'utf-8' }));
  if (listIPBlocked.includes(getIP(req).clientIp)) {
    res.status(403).send({
      AUTHOR: 'Tuan DeepTry',
      STATUS: 'ERROR 404',
      MESSAGE: 'PLEASE DIE BE DIFFERENT, LETS BE ABLE TO BE BURNED next time. 😏',
      INBOX: 'INB FACEBOOK INB FACEBOOK IF YOU WANT TO LOOK BECAUSE I DONT REP'
    });
  } 
  else {
    next();
  }
}