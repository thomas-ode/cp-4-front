import { useEffect } from 'react'
import NavBar from '../Navbar/Navbar';

function Roster() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <NavBar />
    </div>
  );
}

export default Roster;
