"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";

const Dropdown = ({ label, items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleMouseLeave = (event) => {
    const relatedTarget = event.relatedTarget;
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(relatedTarget) &&
      menuRef.current &&
      !menuRef.current.contains(relatedTarget)
    ) {
      setIsOpen(false);
    }
  };

  const handleItemClick = (itemLabel, onClick) => {
    if (onSelect) {
      onSelect(itemLabel);
    }
    if (onClick) {
      onClick();
    }
    setIsOpen(false);
  };
  return (
    <div
      className="lg:inline-block relative whitespace-nowrap"
      ref={dropdownRef}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={toggleDropdown}
        className={`flex items-center ${"text-gray-500"} hover:text-primary py-2 rounded-md text-md`}
      >
        {label}
        <svg
          className={`w-4 h-4 ml-1 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="absolute right-0 w-48 bg-white shadow-lg rounded-md z-10"
          onMouseLeave={handleMouseLeave}
          ref={menuRef}
        >
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() =>
                handleItemClick(item.label, item.value, item.onClick)
              }
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
