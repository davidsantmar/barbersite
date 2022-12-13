import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from '../src/components/AboutUs';
import Service from '../src/components/Service';
import Comments from './components/Comments';
import Contact from  '../src/components/Contact';
import Hamburger from './components/Hamburger';
import Prize from './components/Prize';

function App() {
  return (
    <>
      <Prize />
      <Hamburger />
      <Navbar />
      <AboutUs />
      <Service />
      <Comments />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
