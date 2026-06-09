import React, { useState, useEffect } from "react";
// Note: If on Framer Motion v10 or older, change this import back to: import { motion, AnimatePresence } from "framer-motion";
import { motion, AnimatePresence } from "motion/react";

function Navigation({ onLinkClick, activeSection }) {
  const links = ["Home", "About", "Work", "Contact"];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <ul className="nav-ul flex flex-col gap-4 sm:flex-row sm:gap-2 items-center justify-center relative">
      {links.map((link, index) => {
        const lowerLink = link.toLowerCase();
        const isActive = activeSection === lowerLink;

        return (
          <li 
            key={link} 
            className="nav-li list-none relative px-4 py-2 rounded-full cursor-pointer transition-all duration-200"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Hover Background Pill Slider */}
            {hoveredIndex === index && (
              <motion.div
                layoutId="hoverBgPill"
                className="absolute inset-0 bg-white/5 rounded-full z-0 hidden sm:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
              />
            )}

            {/* Active Section Underline (ScrollSpy Indicator) */}
            {isActive && (
              <motion.div 
                layoutId="activeSectionLine"
                className="absolute bottom-0 left-4 right-4 h-[2px] bg-aqua hidden sm:block z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            <motion.a
              className="nav-link font-medium relative z-10 block text-lg sm:text-base outline-none"
              href={`#${lowerLink}`}
              onClick={onLinkClick}
              // Accessible keyboard focus triggers hover state
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              animate={{ 
                y: hoveredIndex === index ? -2 : 0,
                color: isActive || hoveredIndex === index ? "#33c2cc" : "#a3a3a3" 
              }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              {link}
            </motion.a>
          </li>
        );
      })}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const closeMenu = () => setIsOpen(false);

  // 1. Scroll Spy Logic: Detects what section is currently visible on screen
  useEffect(() => {
    const sections = ["home", "about", "work", "contact"];
    
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200; // Offset for navbar height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // 2. Smart Hide Logic: Hides header on scroll-down, reveals on scroll-up
  useEffect(() => {
    const handleScrollDirection = () => {
      // Don't hide navbar if mobile drawer is currently open
      if (isOpen) return;

      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setHidden(true); // Scrolling down
      } else {
        setHidden(false); // Scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScrollDirection);
    return () => window.removeEventListener("scroll", handleScrollDirection);
  }, [lastScrollY, isOpen]);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-lg bg-primary/40 overflow-visible border-b border-white/5"
    >
      <div className="mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Profile Interactive Link */}
          <a href="#home" className="relative flex items-center gap-3 group" onClick={closeMenu}>
            <div className="relative">
              <img
                src="/assets/profile.jpg"
                alt="Ayush"
                className="w-9 h-9 rounded-full object-cover border-2 border-aqua group-hover:scale-105 group-hover:border-white transition-all duration-300"
              />

              {/* Floating Enlarged Preview */}
              <div className="absolute left-1/2 -translate-x-1/2 top-12 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-50">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-aqua shadow-[0_0_30px_#33c2cc]">
                  <img
                    src="/assets/profile.jpg"
                    alt="Ayush Large"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0">
                    <div className="absolute w-full h-1 bg-aqua opacity-70 animate-scan" />
                  </div>
                  <div className="absolute inset-0 rounded-full border border-aqua/50 animate-ping" />
                </div>
              </div>
            </div>

            <span className="text-xl font-bold text-neutral-400 group-hover:text-white group-hover:tracking-wide transition-all duration-300">
              Ayush Joshi
            </span>
          </a>

          {/* Hamburger Trigger button with scale down on press feedback */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden p-2 rounded-lg hover:bg-white/5"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex">
            <Navigation activeSection={activeSection} />
          </nav>
        </div>
      </div>

      {/* Mobile Accordion Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="w-full bg-primary/95 backdrop-blur-xl sm:hidden border-b border-white/5 absolute top-full left-0 origin-top overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <nav className="py-6 px-6">
              <Navigation onLinkClick={closeMenu} activeSection={activeSection} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;