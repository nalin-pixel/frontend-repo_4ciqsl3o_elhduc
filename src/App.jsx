import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-blue-50 text-black">
      <Navbar />
      <Hero />
      <Marquee />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
