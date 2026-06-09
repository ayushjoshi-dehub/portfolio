import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags = [], // Added default empty array to safeguard map loop
  setPreview,
}) => {
  // FIXED: Renamed state from isHidden to isOpen for logical clarity
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview?.(image)} // Added optional chaining to prevent crashes if setPreview isn't passed
        onMouseLeave={() => setPreview?.(null)}
      >
        <div>
          <p className="text-2xl font-semibold text-white">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id || tag.name}>{tag.name}</span>
            ))}
          </div>
        </div>
        
        <button
          onClick={() => setIsOpen(true)} // Opens the modal
          className="flex items-center gap-1 cursor-pointer hover-animation text-white"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" alt="Arrow right" />
        </button>
      </div>
      
      {/* Divider line */}
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      
      {/* Conditionally render modal when isOpen is true */}
      {isOpen && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsOpen(false)} // Closes the modal
        />
      )}
    </>
  );
};

export default Project;