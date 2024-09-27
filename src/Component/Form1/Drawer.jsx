import React, { useState, useEffect } from 'react';
import axios from 'axios';  // import axios
import Icon_menu from './Icon_menu';

function Drawer() {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/fetch_data.php'); // ใช้ axios แทน fetch
        setPersons(response.data); // เก็บข้อมูลใน state
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="drawer flex w-full bg-gray-300 ">
       <div><Icon_menu/></div>
      <div className='flex ml-auto m-2'>
        <select className="select w-full max-w-xs">
          <option disabled selected>รายชื่อ บุคคลอันตราย</option>
          {persons.map((person, index) => (
            <option key={index}>{person.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Drawer;
