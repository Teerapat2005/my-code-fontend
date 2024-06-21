import React, { useState } from 'react';
import Navbar from './Iconbutter/Navbar';
import Body_r from './Head/Headle/Body_r';
import Table1 from './Body/Grapch/Table1';
import Partner_input from './Body/Grapch/Partner_input';
import Contract_grade from './Body/Grapch/Contract_grade';
import List from '../EBusiness_partner/List';
import Pagination from './Body/Button_nextpage/Pagination';
import Icon_menu from './Head/Drawer/Icon_menu';
import Informationinput from './Body/Grapch/Informationinput';

function Input_peple() {
  const [selectedDate, setSelectedDate] = useState('');
  return (
    <>
      <Navbar />
      <div className='px-2'>
        <div className='navbar border'>
          <Icon_menu selectedDate={selectedDate} />
          <Body_r setSelectedDate={setSelectedDate} />
        </div>
      </div>

      <div className='flex flex-row '>
        <div className='w-full border m-2'>
          <Informationinput/>
        </div>
        <div className='w-1/3 border m-2'>
          <Table1 />
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
      </div>

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

export default Input_peple;
