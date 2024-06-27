import React, { useState } from 'react';
import Navbar from './Iconbutter/Navbar';
import Partner_input from './Body/Grapch/Partner_input';
import Contract_grade from './Body/Grapch/Contract_grade';
import List from '../EBusiness_partner/List';
import Pagination from './Body/Button_nextpage/Pagination';
import Turnouttable2 from './Body/Grapch/Turnouttable2';
import Outicon_menu from './Head/Drawer/Outicon_menu';
import Outbody_r from './Head/Headle/Outbody_r';
import Informationoutput from './Body/Grapch/Informationoutput';

function Quit() {
  const [selectedDate, setSelectedDate] = useState('');
  return (
    <>
      <Navbar />
      <div className='px-2'>
        <div className='navbar border'>
          <Outicon_menu selectedDate={selectedDate} />
          <Outbody_r setSelectedDate={setSelectedDate} />
        </div>
      </div>

      <div className='flex flex-row '>
        <div className='w-full border m-2'>
          <Informationoutput/>
        </div>
        <div className='w-1/3 border m-2'>
          <Turnouttable2/>
        </div>
      </div>
          
      <div className='px-2'>  
        <div className='flex flex-row'>
          <div className='w-1/2 border'>
            <Contract_grade />
          </div>
          <div className='w-1/2 border'>
            <Partner_input />
          </div>
        </div>
      .</div>

      <div className='px-2'>
        <div className='border'>
          <List />
        </div>
      </div>
     
      <div className='flex justify-end p-2'>
        <Pagination />
      </div>
    </>
  )
}

export default Quit;
