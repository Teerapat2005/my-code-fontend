import React from 'react';

function Button_Reset() {
  const handleReset = () => {
    window.location.reload();  // ฟังก์ชันที่ใช้รีเฟรชหน้าเว็บ
  };

  return (
    <button 
      className='btn bg-black text-white font-bold' 
      style={{ width: '100px', height: '80px' }}
      onClick={handleReset}  // เพิ่ม event handler ที่นี่
    >
      Reset
    </button>
  );
}

export default Button_Reset;
