import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import Home from './pages/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route/>
          <Route/>
          <Route/>
          <Route/>
        </Routes>
        <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
