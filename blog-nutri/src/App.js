import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import { AuthProviderContext } from './Contextmanage/authcontext';
import { useAuth } from './hoock/useAuthTentication';
import Dashboard from './pages/dashbords/dashboards';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/sobre';
import RegisterUser from './Register/registerUser';


function App() {
  const[user, setUsers] = useState(undefined)
  const{auth} = useAuth()

  console.log('test users here',user)
  
  useEffect(() => {

  }, [])

      
  
  return (
    <div className="App">
    <AuthProviderContext value={{user}} >
      <BrowserRouter>
      <Navbar/>
      <div className='container' >
        <Routes>
          <Route  path='/' element={<Home/>} />
          
           
          <Route path='/login'  />
          <Route path='/register' element={ <RegisterUser/> } />
          <Route path='/about' element={<Sobre/>} />
          <Route path="/dashboard" element={<Dashboard/>}  />
          <Route/>
        </Routes>

        </div>
        <Footer/>
    
     </BrowserRouter>

    </AuthProviderContext> 
    </div>
  );
}

export default App;
