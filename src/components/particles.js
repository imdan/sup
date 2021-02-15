// const React = require("react")
import React, { useContext } from "react"
import ModeContext from "../context/ModeContext"
const Sketch = typeof window !== `undefined` ? require("react-p5") : null

let particles = []
const Particles = () => {
  const { dark } = useContext(ModeContext)
  let setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    )
    // const particlesLength = Math.floor(window.innerWidth / 45);

    const particlesLength = window.innerWidth < 450 ? 8 : 12
    if (particles.length === 0) {
      for (let i = 0; i < particlesLength; i++) {
        particles.push(new Particle(p5))
      }
    }
  }

  let draw = p5 => {
    if (!dark) {
      p5.background(255, 255, 255)
    } else {
      p5.background(40, 40, 40)
    }

    particles.forEach((p, index) => {
      p.update(p5)
      p.draw(p5, dark)
      p.checkParticles(particles.slice(index), p5, dark)
    })
  }

  class Particle {
    constructor(p5) {
      // Position
      this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height))
      // velocity
      this.vel = p5.createVector(p5.random(-1, 1), p5.random(-1, 1))
      // Size
      this.size = 4
    }

    // updates movement by adding velocity
    update() {
      this.pos.add(this.vel)
      this.edges()
    }

    // draw a single particle
    draw(p5, dark) {
      p5.noStroke()

      if (!dark) {
        p5.fill("rgba(0,0,0,.11)")
      } else {
        p5.fill("rgba(51,255,51,.25)")
      }
      p5.circle(this.pos.x, this.pos.y, this.size)
    }

    // detect edges
    edges() {
      const width = window.innerWidth
      if (this.pos.x < 0 || this.pos.x > width) {
        this.vel.x *= -1
      }

      const height = window.innerHeight
      if (this.pos.y < 0 || this.pos.y > height) {
        this.vel.y *= -1
      }
    }

    // Connect particles
    checkParticles(particles, p5, dark) {
      particles.forEach(particle => {
        const d = p5.dist(
          this.pos.x,
          this.pos.y,
          particle.pos.x,
          particle.pos.y
        )

        if (d < 200) {
          if (!dark) {
            p5.stroke("rgba(0,0,0,0.05)")
          } else {
            p5.stroke("rgba(51,255,51,.25)")
          }
          p5.line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
        }
      })
    }
  }

  if (typeof window !== `undefined`) {
    return (
      <>
        <Sketch setup={setup} draw={draw} />
      </>
    )
  }

  return <div></div>
}

export default Particles
