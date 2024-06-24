import React, { useState, useEffect } from 'react';

const Dropdown_MN_CO = ({ selectedDepartment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const allOwners = [
    { department: 'แผนก 1', owner: 'นาย ก1' },
    { department: 'แผนก 2', owner: 'นาย ก2' },
    { department: 'แผนก 3', owner: 'นาย ก3' },
    { department: 'แผนก 4', owner: 'นาย ก4' },
    { department: 'แผนก 5', owner: 'นาย ก5' },
    { department: 'แผนก 6', owner: 'นาย ก6' },
    { department: 'แผนก 7', owner: 'นาย ก7' },
    { department: 'แผนก 8', owner: 'นาย ก8' },
  ];

  const owners = {
    'แผนก 1': 'นาย ก1',
    'แผนก 2': 'นาย ก2',
    'แผนก 3': 'นาย ก3',
    'แผนก 4': 'นาย ก4',
    'แผนก 5': 'นาย ก5',
    'แผนก 6': 'นาย ก6',
    'แผนก 7': 'นาย ก7',
    'แผนก 8': 'นาย ก8'
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    setSelectedOption(null);
  }, [selectedDepartment]);

  const availableOwners = selectedDepartment ? [owners[selectedDepartment]] : allOwners.map(item => item.owner);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full border border-gray-300 shadow-sm py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={toggleDropdown}
          style={{ height: '49px' , width: '176px'}}
        >
          {selectedOption ? selectedOption : 'ทั้งหมด'}
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
          className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {availableOwners.map(option => (
              <a
                href="#"
                key={option}
                className={`text-gray-700 block px-4 py-2 text-sm ${selectedOption === option ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                onClick={() => handleOptionClick(option)}
                role="menuitem"
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown_MN_CO;
