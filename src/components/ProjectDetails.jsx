import React from "react";
// Note: If using Framer Motion v11+, "motion/react" is correct. 
// If on v10 or older, change this import to: import { motion } from "framer-motion";
import { motion } from "motion/react"; 

const ProjectDetails = ({
  title,
  description,
  subDescription = [], // Added default empty array to prevent crashing if undefined
  image,
  tags = [],           // Added default empty array
  href,
  closeModal,
}) => {
  return (
    // Clicking the backdrop will now also close the modal gracefully
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm bg-black/40"
      onClick={closeModal}
    >
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 mx-4"
        initial={{ opacity: 0, scale: 0.85 }} // Smooth scale instead of 0.5 look
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.85 }}
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 transition-colors"
          aria-label="Close modal"
        >
          <img src="assets/close.svg" className="w-6 h-6" alt="Close" />
        </button>
        
        <img src={image} alt={title} className="w-full rounded-t-2xl object-cover max-h-72" />
        
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id || tag.name} // Fallback to name if ID isn't present
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            
            {/* FIXED: Added href here, changed to target="_blank" for cleaner UX */}
            <a 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation text-white"
            >
              View Project{" "}
              <img src="assets/arrow-up.svg" className="size-4" alt="Arrow pointing up right" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;