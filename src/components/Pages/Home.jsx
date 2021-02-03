import { useEffect } from 'react'
import NavBar from '../Navbar/Navbar';
import Presentation from '../Presentation/Presentation'
import Footer from '../Footer/Footer';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <NavBar />
      <Presentation />
      <Footer />
    </div>
  );
}

export default Home;
