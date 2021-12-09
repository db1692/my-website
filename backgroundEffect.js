const background = document.getElementById("backgroundEffect");

background.width = window.innerWidth;
background.height = window.innerHeight;

const b = background.getContext("2d");


function Drawing(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    b.beginPath();
    b.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    b.strokeStyle = "#E2EAFC";
    b.fill();
    b.fillStyle = "#EDF2FB";
    b.stroke();
  }

  this.update = function() {

    if (this.x + this.radius > innerWidth ||
      this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}


const backgroundArray = [];

for (i = 0; i < 200; i++) {
  radius = (Math.random() * 2);
  x = Math.random() * (innerWidth - radius * 2) + radius;
  y = Math.random() * (innerHeight - radius * 2) + radius;
  dx = (Math.random() - 0.2) * 0.1;
  dy = (Math.random() - 0.2) * 0.4;
  backgroundArray.push(new Drawing(x, y, dx, dy, radius));
}

console.log(backgroundArray);

function animateBackground() {
  requestAnimationFrame(animate);
  b.clearRect(0, 0, innerWidth, innerHeight);

  for (i = 0; i < backgroundArray.length; i++) {
    backgroundArray[i].update();
  }
}

background.addEventListener('click', function() {
  for (i = 0; i < 80; i++) {
    radius = (Math.random() * 2);
    x = Math.random() * (innerWidth - radius * 2) + radius;
    y = Math.random() * (innerHeight - radius * 2) + radius;
    dx = (Math.random() - 0.2) * 0.1;
    dy = (Math.random() - 0.2) * 0.4;
    backgroundArray.push(new Circle(x, y, dx, dy, radius));
  }
});

animateBackground();
