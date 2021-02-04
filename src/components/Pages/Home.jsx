import { useEffect } from 'react'
import NavBar from '../Navbar/Navbar';
import Presentation from '../Presentation/Presentation';
import Footer from '../Footer/Footer';
import Stadium from '../Stadium/Stadium';
import Map from '../Map/Map';
import Jersey from '../Jersey/Jersey'

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <NavBar />
      <Presentation />
      <Stadium />
      <Map />
      <Jersey />
      <Footer />
    </div>
  );
}

export default Home;
