const canvas = document.getElementById("topCanvas");

const c = canvas.getContext("2d");

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

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

      if (this.x + this.radius > innerWidth ||
        this.x - this.radius < 0) {
        this.dx = -this.dx;
      }

      this.x += this.dx;
      this.y += this.dy;

      this.draw();
    }
  }
  const circleArray = [];

  for (i = 0; i < 100; i++) {
    radius = (Math.random() * 1);
    x = Math.random() * (innerWidth - radius * 2) + radius;
    y = Math.random() * (innerHeight - radius * 2) + radius;
    dx = (Math.random() - 0.15) * 0.1;
    dy = (Math.random() - 0.25) * 0.3;
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }

  console.log(circleArray);

  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
    }
  }

  canvas.addEventListener('click', function() {
    for (i = 0; i < 80; i++) {
      radius = (Math.random() * 2);
      x = Math.random() * (innerWidth - radius * 2) + radius;
      y = Math.random() * (innerHeight - radius * 2) + radius;
      dx = (Math.random() - 0.15) * 0.1;
      dy = (Math.random() - 0.25) * 0.3;
      circleArray.push(new Circle(x, y, dx, dy, radius));
    }
  });

  animate();
}

resizeCanvas();
