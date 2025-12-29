'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0, radius: 100 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create particles
    const particles: Particle[] = []
    const particleCount = Math.min(100, Math.floor((window.innerWidth * window.innerHeight) / 15000))
    
    const colors = [
      'rgba(102, 126, 234, 0.6)', // Indigo
      'rgba(118, 75, 162, 0.6)',  // Purple
      'rgba(240, 147, 251, 0.6)', // Pink
      'rgba(59, 130, 246, 0.6)',  // Blue
      'rgba(236, 72, 153, 0.6)',  // Hot pink
    ]

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }
    
    particlesRef.current = particles

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = event.x
      mouseRef.current.y = event.y
    }
    
    // Touch move handler
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        mouseRef.current.x = event.touches[0].clientX
        mouseRef.current.y = event.touches[0].clientY
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Move particle
        particle.x += particle.speedX
        particle.y += particle.speedY
        
        // Bounce off walls
        if (particle.x > canvas.width || particle.x < 0) particle.speedX *= -1
        if (particle.y > canvas.height || particle.y < 0) particle.speedY *= -1
        
        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
        
        // Connect particles with lines
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particle.x - particlesRef.current[j].x
          const dy = particle.y - particlesRef.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(102, 126, 234, ${0.2 * (1 - distance / 150)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y)
            ctx.stroke()
          }
        }
        
        // Mouse interaction
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < mouseRef.current.radius) {
          const force = (mouseRef.current.radius - distance) / mouseRef.current.radius
          const angle = Math.atan2(dy, dx)
          particle.x -= Math.cos(angle) * force * 5
          particle.y -= Math.sin(angle) * force * 5
        }
      })
      
      // Draw mouse effect
      ctx.beginPath()
      ctx.arc(mouseRef.current.x, mouseRef.current.y, mouseRef.current.radius, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(102, 126, 234, 0.05)'
      ctx.fill()
      
      animationId = requestAnimationFrame(animate)
    }
    
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  )
}

export default InteractiveBackground
