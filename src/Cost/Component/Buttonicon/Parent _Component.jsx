import React, { useState } from 'react';
import C_Textbox from './C_Textbox';
import C_Textl from './C_Textl';

function Parent _Component() {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <div>
      <C_Textbox setSelectedDate={setSelectedDate} />
      <C_Textl selectedDate={selectedDate} />
    </div>
  );
}

export default Parent _Component;
