// pages/index.js
import Link from 'next/link';

const Home = () => (
  <div>
    <h1>Welcome to School Management App</h1>
    <Link href="/AddSchool.jsx">
      <a>Add School</a>
    </Link>
    <br />
    <Link href="/ShowSchools">
      <a>Show Schools</a>
    </Link>
  </div>
);

export default Home;
