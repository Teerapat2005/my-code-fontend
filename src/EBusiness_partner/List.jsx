import React, { useState, useEffect } from 'react';
import DB_Ts from '../Database_Test/DB_Ts';
import Pagination from '../Personal/Body/Button_nextpage/Pagination';

function List({ selectedGrade, selectedGradeDepartment, selectedEmployeeType, selectedEmployeeLabel }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedGrade, selectedGradeDepartment, selectedEmployeeType, selectedEmployeeLabel]);

  const filteredEmployees = DB_Ts.filter(employee => {
    return (!selectedGrade || employee.เกรด === selectedGrade) &&
           (!selectedGradeDepartment || employee.แผนก === selectedGradeDepartment) &&
           (!selectedEmployeeType || employee.Process_NonProcess === selectedEmployeeType) &&
           (!selectedEmployeeLabel || employee.ส่วน === selectedEmployeeLabel || employee.แผนก === selectedEmployeeLabel);
  });

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  const currentEmployees = filteredEmployees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className='px-3 p-2'>
        <div className="bg-gray-700 rounded-lg">
          <div className="text-sm text-white p-2 grid grid-cols-12 gap-x-2">
            <span className='col-span-1 text-center'>ลำดับ</span>
            <span className='col-span-1 pr-16 text-center'>ชื่อ</span>
            <span className='col-span-1 pr-3 text-center'>สกุล</span>
            <span className='col-span-1 text-center'>สังกัด/ทาง</span>
            <span className='col-span-1 text-center'>ส่วน</span>
            <span className='col-span-1 text-center'>แผนก</span>
            <span className='col-span-1 text-center'>สัญญา</span>
            <span className='col-span-1 text-center'>Process/Non Process</span>
            <span className='col-span-1 text-center'>Job title</span>
            <span className='col-span-1 text-center'>Grade</span>
            <span className='col-span-1 text-center'>อายุ(ปี)</span>
            <span className='col-span-1 text-center'>อายุงาน</span>
          </div>
        </div>
      </div>

      {currentEmployees.map((employee, index) => (
        <div className='pl-3 p-1 px-3' key={index}>
          <div className="bg-white rounded-lg">
            <div className="text-sm text-black p-2 grid grid-cols-12 gap-x-2 rounded-lg shadow-md">
              <span className='col-span-1 text-center'>{(currentPage - 1) * itemsPerPage + index + 1}</span>
              <span className='col-span-1 pl-4 text-left'>{employee.ชื่อ}</span>
              <span className='col-span-1 pl-9 text-left'>{employee.สกุล}</span>
              <span className='col-span-1 text-center'>{employee.สังกัด}</span>
              <span className='col-span-1 text-center'>{employee.ส่วน}</span>
              <span className='col-span-1 text-center'>{employee.แผนก}</span>
              <span className='col-span-1 text-center'>{employee.สัญญา}</span>
              <span className='col-span-1 text-center'>{employee.Process_NonProcess}</span>
              <span className='col-span-1 text-center'>{employee.Job}</span>
              <span className='col-span-1 text-center'>{employee.เกรด}</span>
              <span className='col-span-1 text-center'>{employee.อายุ}</span>
              <span className='col-span-1 text-center'>{employee.อายุงาน}</span>
            </div>
          </div>
        </div>
      ))}

      <div className='flex justify-end p-2'>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default List;
