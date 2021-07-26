import './styles/App.css';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import { useEffect } from 'react';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    function handleResize() {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
    }

    window.addEventListener('resize', handleResize);
  });
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
