import { useEffect } from 'react'
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Administrator from '../Admin/Administrator'

function Roster() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <NavBar />
      <Administrator />
      <Footer />
    </div>
  );
}

export default Roster;