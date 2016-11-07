var backImgs = ["http://res.cloudinary.com/dgzgxqcli/image/upload/c_scale,w_1200/v1478140628/callao.png", "http://res.cloudinary.com/dgzgxqcli/image/upload/c_scale,w_1200/v1478140576/landscape1.png", "http://res.cloudinary.com/dgzgxqcli/image/upload/c_scale,w_1200/v1478140633/flower.png", "http://res.cloudinary.com/dgzgxqcli/image/upload/c_scale,w_1200/v1478140624/landscape2.png", "http://res.cloudinary.com/dgzgxqcli/image/upload/c_scale,w_1200/v1478140556/bridge.png",               "http://res.cloudinary.com/dgzgxqcli/image/upload/v1478140630/angel.png", "http://res.cloudinary.com/dgzgxqcli/image/upload/v1478140622/oldcity.png", "http://res.cloudinary.com/dgzgxqcli/image/upload/v1478140625/reflection.png", "http://res.cloudinary.com/dgzgxqcli/image/upload/v1478140563/hand_statue.png"];

 var blue = document.getElementsByClassName('bluebg')[0];


window.onload = changeBack();

function changeBack() {
  var idx = Math.floor(Math.random() * backImgs.length);
  blue.style.backgroundImage = 'url(' + backImgs[idx] + ')';
}