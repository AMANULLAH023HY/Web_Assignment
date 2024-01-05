// pages/index.js

import Link from 'next/link';

const Home = () => (
  <div>
    <h1>Welcome to School Management App</h1>
    <Link href="/addSchool">
      <a>Add School</a>
    </Link>
    <br />
    <Link href="/showSchools">
      <a>Show Schools</a>
    </Link>
  </div>
);

export default Home;
