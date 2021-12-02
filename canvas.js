var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// for (var i = 0; i < 30; i++) {
//
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = getRandomColor();
//   c.stroke();
// }

// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5) * 6;
// var dy = (Math.random() - 0.5 * 6);
// var radius = 40;


function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "#E2EAFC";
    c.fill();
    c.fillStyle = "#EDF2FB";
    c.stroke();
  }

  this.update = function() {
    // if (this.y + this.radius > innerHeight ||
    //   this.y - this.radius < 0) {
    //   this.dy = -this.dy;
    // }

    if (this.x + this.radius > innerWidth ||
      this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}


var circleArray = [];

for (var i = 0; i < 10; i++) {
  var radius = (Math.random() * 2);
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = (Math.random() - 0.2) * 0.1;
  var dy = (Math.random() - 0.2) * 0.4;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray);

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

canvas.addEventListener('click', function() {
  for (var i = 0; i < 80; i++) {
    var radius = (Math.random() * 2);
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.2) * 0.1;
    var dy = (Math.random() - 0.2) * 0.4;
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
});

animate();
