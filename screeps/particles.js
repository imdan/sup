const particles = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  // const particlesLength = Math.floor(window.innerWidth / 45);

  window.setTimeout(() => {
    const particlesLength = 11;
    for (let i = 0; i < particlesLength; i++) {
      particles.push(new Particle());
    }
  }, 1450);
}

function mouseClicked() {
  particles.push(new Particle(mouseX, mouseY));
}

function draw() {
  background(255, 255, 255);

  particles.forEach((p, index) => {
    p.update();
    p.draw();
    p.checkParticles(particles.slice(index));
  });
}

class Particle {
  constructor(x, y) {
    // Position
    this.pos =
      !x && !y
        ? createVector(random(width), random(height))
        : createVector(x, y);
    // velocity
    this.vel = createVector(random(-1, 1), random(-1, 1));
    // Size
    this.size = 4;
  }

  // updates movement by adding velocity
  update() {
    this.pos.add(this.vel);
    this.edges();
  }

  // draw a single particle
  draw() {
    noStroke();
    fill('rgba(0,0,0,.11)');
    circle(this.pos.x, this.pos.y, this.size);
  }

  // detect edges
  edges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }

    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }

  // Connect particles
  checkParticles(particles) {
    particles.forEach(particle => {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

      if (d < 200) {
        stroke('rgba(0,0,0,0.05)');
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      }
    });
  }
}
