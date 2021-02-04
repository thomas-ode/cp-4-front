import { useEffect } from 'react'
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ScheduleList from '../Schedule/ScheduleList';

function Schedule() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <NavBar />
      <ScheduleList />
      <Footer />
    </div>
  );
}

export default Schedule;
