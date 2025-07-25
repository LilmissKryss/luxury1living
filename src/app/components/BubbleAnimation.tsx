'use client';

import { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  wobble: number;
  opacity: number;
  hue: number;
  delay: number;
}

export default function BubbleAnimation() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Create initial realistic bubbles
    const createBubble = (): Bubble => ({
      id: Math.random(),
      x: Math.random() * 100, // Random horizontal position
      y: Math.random() * 100, // Random vertical position
      size: Math.random() * 40 + 15, // Random size between 15-55px
      speed: Math.random() * 0.002 + 0.001, // Snail slow random speed
      wobble: Math.random() * 2 + 1, // Random wobble frequency
      opacity: Math.random() * 0.3 + 0.1, // Random opacity
      hue: Math.random() * 60 + 180, // Random blue-green hue
      delay: Math.random() * 5, // Random start delay
    });

    const initialBubbles: Bubble[] = Array.from({ length: 20 }, createBubble);
    setBubbles(initialBubbles);

    // Animation loop for continuous bubble movement
    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.016; // ~60fps
      
      setBubbles(prevBubbles => {
                const updatedBubbles = prevBubbles.map(bubble => {
          // Calculate new position with natural floating motion in all directions
          const angle = Math.sin(time * bubble.wobble * 0.5) * Math.PI * 2;
          const newX = bubble.x + Math.cos(angle) * bubble.speed * 0.5;
          const newY = bubble.y + Math.sin(angle) * bubble.speed * 0.5;
          
          // Keep bubbles within screen bounds with gentle bouncing
          let finalX = newX;
          let finalY = newY;
          
          if (newX < -5) finalX = 105;
          if (newX > 105) finalX = -5;
          if (newY < -5) finalY = 105;
          if (newY > 105) finalY = -5;
          
          return {
            ...bubble,
            x: finalX,
            y: finalY,
          };
        });

        // Occasionally add new bubbles
        if (Math.random() < 0.00005) { // 0.005% chance per frame - snail slow generation
          updatedBubbles.push(createBubble());
        }

        // Keep max 25 bubbles for performance
        return updatedBubbles.slice(-25);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Scroll-triggered bubble creation
    const handleScroll = () => {
      if (Math.random() < 0.3) { // 30% chance on scroll
        const newBubble = createBubble();
        setBubbles(prev => [...prev.slice(-20), newBubble]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            opacity: bubble.opacity,
            background: `
              radial-gradient(circle at 30% 30%, 
                hsla(${bubble.hue}, 70%, 80%, 0.8) 0%, 
                hsla(${bubble.hue}, 60%, 70%, 0.4) 40%, 
                hsla(${bubble.hue}, 50%, 60%, 0.2) 70%, 
                transparent 100%
              )
            `,
            boxShadow: `
              inset 2px 2px 4px rgba(255, 255, 255, 0.3),
              inset -2px -2px 4px rgba(0, 0, 0, 0.1),
              0 0 8px hsla(${bubble.hue}, 70%, 70%, 0.3),
              0 0 16px hsla(${bubble.hue}, 60%, 60%, 0.2)
            `,
            filter: 'blur(0.5px)',
            transform: `translateZ(0)`,
            animation: `bubbleFloat ${bubble.speed * 3000}s ease-in-out infinite`,
            animationDelay: `${bubble.delay}s`,
          }}
        >
          {/* Bubble highlight/reflection */}
          <div 
            className="absolute rounded-full"
            style={{
              top: '15%',
              left: '20%',
              width: '30%',
              height: '30%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
              filter: 'blur(1px)',
            }}
          />
          {/* Secondary reflection */}
          <div 
            className="absolute rounded-full"
            style={{
              top: '25%',
              left: '60%',
              width: '15%',
              height: '15%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)',
              filter: 'blur(0.5px)',
            }}
          />
        </div>
      ))}
      
      <style jsx>{`
        @keyframes bubbleFloat {
          0% {
            transform: scale(0.8) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: var(--bubble-opacity, 0.3);
            transform: scale(1) rotate(90deg);
          }
          50% {
            transform: scale(1.1) rotate(180deg);
          }
          80% {
            opacity: var(--bubble-opacity, 0.3);
            transform: scale(1) rotate(270deg);
          }
          100% {
            transform: scale(0.9) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
} 