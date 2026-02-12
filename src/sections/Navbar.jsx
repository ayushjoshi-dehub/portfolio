import { useState } from "react";
import { motion } from "motion/react";
function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-50 w-full backdrop-blur-lg bg-primary/40 overflow-visible">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
        <a href="#home" className="relative flex items-center gap-3 group">
  
  {/* Small Profile */}
  <div className="relative">
    <img
      src="/assets/profile.jpg"
      alt="Ayush"
      className="w-9 h-9 rounded-full object-cover border-2 border-aqua"
    />

    {/* Floating Enlarged Preview */}
    <div className="
      absolute left-1/2 -translate-x-1/2 top-12
      opacity-0 scale-90
      group-hover:opacity-100 group-hover:scale-100
      transition-all duration-300
      pointer-events-none
    ">
      
      <div className="relative w-40 h-40 rounded-full overflow-hidden
                      border-2 border-aqua shadow-[0_0_30px_#33c2cc]">
        
        <img
          src="/assets/profile.jpg"
          alt="Ayush Large"
          className="w-full h-full object-cover"
        />

        {/* AI Scanning Line */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-1 bg-aqua opacity-70 animate-scan" />
        </div>

        {/* Radar Ring */}
        <div className="absolute inset-0 rounded-full border border-aqua/50 animate-ping" />
      </div>
    </div>
  </div>

  <span className="text-xl font-bold text-neutral-400 group-hover:text-white transition-colors">
    Ayush Joshi
  </span>
</a>


          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
