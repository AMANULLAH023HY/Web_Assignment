// pages/addSchool.jsx

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import pool from '../../config/db';

const AddSchool = () => {
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const { name, address, city, state, contact, image, email_id } = data;

      // Insert data into MySQL database
      const [rows] = await pool.execute(
        'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, address, city, state, contact, image, email_id]
      );

      console.log('Inserted ID:', rows.insertId);

      // Redirect to the display page after successful insertion
      router.push('/showSchools');
    } catch (error) {
      console.error('Error inserting data:', error.message);
    }
  };

  return (
    <div>
      <h1>Add School</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          School Name:
          <input type="text" name="name" ref={register({ required: 'School name is required' })} />
          {errors.name && <p>{errors.name.message}</p>}
        </label>

        <label>
          Address:
          <input type="text" name="address" ref={register({ required: 'Address is required' })} />
          {errors.address && <p>{errors.address.message}</p>}
        </label>

        <label>
          City:
          <input type="text" name="city" ref={register({ required: 'City is required' })} />
          {errors.city && <p>{errors.city.message}</p>}
        </label>

        <label>
          State:
          <input type="text" name="state" ref={register({ required: 'State is required' })} />
          {errors.state && <p>{errors.state.message}</p>}
        </label>

        <label>
          Contact Number:
          <input type="number" name="contact" ref={register({ required: 'Contact number is required' })} />
          {errors.contact && <p>{errors.contact.message}</p>}
        </label>

        <label>
          Image URL:
          <input type="text" name="image" ref={register} />
        </label>

        <label>
          Email ID:
          <input type="text" name="email_id" ref={register} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddSchool;
