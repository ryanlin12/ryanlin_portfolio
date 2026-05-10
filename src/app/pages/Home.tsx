import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export function HomePage() {
  const [windowWidth, setWindowWidth] = useState(1000);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  // Motion value for the scale physics
  const mouseX = useMotionValue(500);

  useEffect(() => {
    const width = window.innerWidth;
    setWindowWidth(width);
    mouseX.set(width / 2); // Start balanced in the center

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mouseX]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
    mouseX.set(e.clientX);
  };

  // Map mouse position to a rotation between -12deg and 12deg
  // When mouseX = 0 (far left), rotation = -12 (tips left)
  // When mouseX = windowWidth (far right), rotation = 12 (tips right)
  const targetRotation = useTransform(mouseX, [0, windowWidth], [-12, 12]);
  
  // Apply a spring for realistic, smooth physical movement
  const smoothRotation = useSpring(targetRotation, { stiffness: 40, damping: 20 });
  
  // Inverse rotation for the items sitting on the scale so they remain perfectly upright
  const counterRotation = useTransform(smoothRotation, (r) => -r);

  return (
    <div 
      className="relative min-h-screen bg-neutral-950 flex flex-col items-center overflow-hidden text-neutral-100 py-16 px-6"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Interactive Cursor Background Glow */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 hidden md:block"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 40%)`,
          opacity: isHovering ? 1 : 0.5
        }}
      />

      {/* Intro - Positioned at top */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center space-y-4 pt-4 md:pt-10 mb-20 md:mb-32"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
          Ryan Lin
        </h1>
        <p className="text-base md:text-xl text-neutral-400 font-light max-w-xl mx-auto">
          Software Engineer. Striving for perfect balance.
        </p>
      </motion.div>

      {/* The Interactive Scale */}
      <div className="z-10 relative w-full max-w-3xl h-64 flex items-center justify-center mt-auto mb-auto">
        
        {/* Minimalist Fulcrum (Base) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center">
          {/* Pivot pin */}
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 absolute -top-[5px] z-20 shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
          {/* Pillar */}
          <div className="w-[2px] h-48 bg-gradient-to-b from-neutral-500 to-transparent" />
        </div>

        {/* The Rotating Beam */}
        <motion.div 
          style={{ rotate: smoothRotation }}
          className="absolute top-1/2 left-0 right-0 h-[2px] bg-neutral-500 z-10 origin-center"
        >
          {/* Left Side: Work */}
          <div className="absolute left-0 top-0">
            {/* 
              We use a 0x0 container anchored to the left edge of the beam. 
              The counterRotation keeps the inner content upright.
            */}
            <motion.div 
              style={{ rotate: counterRotation }} 
              className="absolute bottom-0 left-0 w-0 h-0 flex justify-center items-end"
            >
              <Link 
                to="/work" 
                className="group relative pb-6 flex flex-col items-center outline-none"
              >
                {/* Visual Connection (Plate) holding the button to the beam */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-neutral-400 rounded-full" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-6 bg-neutral-400" />
                
                {/* The "Work" Button */}
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border border-neutral-700 bg-neutral-900/80 backdrop-blur-md flex flex-col items-center justify-center text-white hover:border-neutral-300 hover:bg-neutral-800 transition-all duration-300 shadow-xl group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <span className="text-xl md:text-2xl font-semibold tracking-wide group-hover:scale-105 transition-transform">Work</span>
                  <span className="text-xs text-neutral-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Experience</span>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Life */}
          <div className="absolute right-0 top-0">
            <motion.div 
              style={{ rotate: counterRotation }} 
              className="absolute bottom-0 right-0 w-0 h-0 flex justify-center items-end"
            >
              <Link 
                to="/about" 
                className="group relative pb-6 flex flex-col items-center outline-none"
              >
                {/* Visual Connection (Plate) holding the button to the beam */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-neutral-400 rounded-full" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-6 bg-neutral-400" />

                {/* The "Life" Button */}
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border border-neutral-700 bg-neutral-900/80 backdrop-blur-md flex flex-col items-center justify-center text-white hover:border-neutral-300 hover:bg-neutral-800 transition-all duration-300 shadow-xl group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <span className="text-xl md:text-2xl font-semibold tracking-wide group-hover:scale-105 transition-transform">Life</span>
                  <span className="text-xs text-neutral-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">About Me</span>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Mobile hint - only visible on small screens to explain interactivity */}
      <div className="mt-auto text-neutral-600 text-sm md:hidden animate-pulse pb-8">
        Tap the weights to explore
      </div>
    </div>
  );
}
