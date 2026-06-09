import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import AITool from './pages/AITool';

function App() {
  return (
    <BrowserRouter>
      <div style={{ direction: 'rtl', fontFamily: 'Arial' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/ai-tool" element={<AITool />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
