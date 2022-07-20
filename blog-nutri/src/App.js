import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import { AuthProviderContext } from './Contextmanage/authcontext';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/sobre';
import RegisterUser from './Register/registerUser';


function App() {
  return (
    <div className="App">
    <AuthProviderContext value={{}} >
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route  path='/' element={<Home/>} />
          
           
          <Route path='/login'  />
          <Route path='/register' element={ <RegisterUser/> } />
          <Route path='/about' element={<Sobre/>} />
          <Route/>
          <Route/>
        </Routes>
        <Footer/>
     </BrowserRouter>

    </AuthProviderContext> 
    </div>
  );
}

export default App;
