import { useEffect } from 'react'
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import RosterList from '../RosterList/RosterList';

function Roster() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <NavBar />
      <RosterList />
      <Footer />
    </div>
  );
}

export default Roster;