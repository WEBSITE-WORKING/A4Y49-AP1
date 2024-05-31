const fs = require("fs-extra")
const { loadImage, createCanvas, registerFont, Canvas } = require("canvas");
exports.name = '/ggsaid';
exports.index = async  (req, res, next) => {
  name = req.query.name;
//////////////////////////////////////////////////////////////////////////////////  
///////////////////////////////////////////////////////////////////////////////////
	let path = __dirname + '/cache/bg.jpg'; // Get the background
  let bg   = await loadImage(path);
  registerFont(__dirname+"/cache/arial.ttf", {family: "arial"});

  function rd(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  nghe = ['Program', 'Plumber', 'Hacker', 'Install windows', 'Clear garbage', 'poop', 'Sincerely raised', 'Facebook service', 'Clinging to parents', 'Education', 'Bot Developer', 'Transplant'];
  
  xe = ['BMW', 'DREAM', 'Bicycle', 'Helicopter', 'SH', 'WAVE A', 'SUZUKI', 'Boing 747'];

  var A = createCanvas( bg.width, bg.height);
  var B = A.getContext("2d");
	B.drawImage(bg, 0, 0, A.width, A.height);
  B.font = "35px arial";
  B.fillStyle = "rgba(0,0,0,.87)";
  B.fillText("Fate of: " + name, 130, 185);
  B.fillStyle = "#70757a";
  B.fillText("Married at: " + rd(16, 35) + " year old", 50, 400);
  B.fillText("Children: " + rd(0, 3) + " daughter and " + rd(0, 3) + " with draw", 50, 450);
  B.fillText("Job: " + nghe[Math.floor(Math.random() * nghe.length)].trim(), 50, 500);
  B.fillText("Car: " + xe[Math.floor(Math.random() * xe.length)].trim(), 50, 550);
  B.fillText("Died at: " + rd(20, 105), 50, 600);
  let tot = rd(0, 99999);
  let xau = rd(0, 99999);
  if (tot < xau) {
    noiden = "Hell"
  } else {
    noiden = "Heaven"
  };
  B.fillText("Good job: " + tot, 50, 650);
  B.fillText("Scandal: " + xau, 50, 700);
  B.fillText("Destination: " + noiden, 50, 750);
	const C = A.toBuffer();
  res.type('image/jpeg')
  res.write(C)
  res.end()
}

