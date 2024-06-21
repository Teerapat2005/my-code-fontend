import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // เพิ่ม state เก็บตัวเลือกที่ถูกเลือก

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // เมื่อเลือกตัวเลือกแล้วให้ปิด dropdown
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={toggleDropdown}
        >
          {selectedOption ? selectedOption : 'Options'}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06-.02L10 10.94l3.71-3.75a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 01-.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className={`text-gray-700 block px-4 py-2 text-sm ${
                selectedOption === 'Option 1' ? 'bg-gray-100' : 'hover:bg-gray-100'
              }`}
              onClick={() => handleOptionClick('Option 1')}
              role="menuitem"
            >
              Option 1
            </a>
            <a
              href="#"
              className={`text-gray-700 block px-4 py-2 text-sm ${
                selectedOption === 'Option 2' ? 'bg-gray-100' : 'hover:bg-gray-100'
              }`}
              onClick={() => handleOptionClick('Option 2')}
              role="menuitem"
            >
              Option 2
            </a>
            <a
              href="#"
              className={`text-gray-700 block px-4 py-2 text-sm ${
                selectedOption === 'Option 3' ? 'bg-gray-100' : 'hover:bg-gray-100'
              }`}
              onClick={() => handleOptionClick('Option 3')}
              role="menuitem"
            >
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
