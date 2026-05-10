import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Home, User, Briefcase } from 'lucide-react';

export function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // We only show the nav on non-home pages
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white flex flex-col">
      {!isHome && (
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200"
        >
          <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
            <Link to="/" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity flex items-center gap-2">
              <Home size={18} />
              <span>RL.</span>
            </Link>
            <div className="flex gap-6 text-sm font-medium text-neutral-500">
              <Link 
                to="/work" 
                className={`flex items-center gap-1.5 transition-colors ${location.pathname.startsWith('/work') ? 'text-neutral-900' : 'hover:text-neutral-900'}`}
              >
                <Briefcase size={16} />
                <span>Work</span>
              </Link>
              <Link 
                to="/about" 
                className={`flex items-center gap-1.5 transition-colors ${location.pathname === '/about' ? 'text-neutral-900' : 'hover:text-neutral-900'}`}
              >
                <User size={16} />
                <span>About</span>
              </Link>
            </div>
          </div>
        </motion.nav>
      )}

      <main className={`flex-grow ${!isHome ? 'pt-24 pb-20 max-w-5xl mx-auto w-full px-6 md:px-12' : ''}`}>
        <Outlet />
      </main>
    </div>
  );
}
