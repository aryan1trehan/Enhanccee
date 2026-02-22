'use client'

import { useEffect, useRef, useState } from 'react'

interface RippleEffectProps {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  color?: 'white' | 'black'
}

export default function RippleEffect({
  children,
  className = '',
  disabled = false,
  color = 'white',
}: RippleEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [ripples, setRipples] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
  }>>([])

  useEffect(() => {
    if (disabled || !containerRef.current) return

    const container = containerRef.current
    let rippleId = 0
    let lastRippleTime = 0
    const rippleThrottle = 300 // Minimum time between ripples in ms

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastRippleTime < rippleThrottle) return
      lastRippleTime = now

      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const size = Math.max(rect.width, rect.height) * 0.6

      const newRipple = {
        id: rippleId++,
        x,
        y,
        size,
      }

      setRipples((prev) => [...prev.slice(-2), newRipple])

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
      }, 2500)
    }

    container.addEventListener('mousemove', handleMouseMove)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [disabled])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className={color === 'black' ? 'water-ripple-black' : 'water-ripple'}
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: `${ripple.size}px`,
            height: `${ripple.size}px`,
          }}
        />
      ))}
    </div>
  )
}

