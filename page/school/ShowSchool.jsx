// pages/showSchools.jsx

import { useEffect, useState } from 'react';
import Link from 'next/link';
import pool from '../../config/db';

const ShowSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from MySQL database
        const [rows] = await pool.execute('SELECT name, address, city, image FROM schools');
        setSchools(rows);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Schools List</h1>
      <div>
        {schools.map((school, index) => (
          <div key={index}>
            <h3>{school.name}</h3>
            <p>Address: {school.address}</p>
            <p>City: {school.city}</p>
            <img src={school.image} alt={school.name} style={{ maxWidth: '200px' }} />
          </div>
        ))}
      </div>
      <Link href="/addSchool">
        <a>Add School</a>
      </Link>
    </div>
  );
};

export default ShowSchools;
