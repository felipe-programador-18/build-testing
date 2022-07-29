import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import { AuthProviderContext } from './Contextmanage/authcontext';
import { useAuth } from './hoock/useAuthTentication';
import CreateLogin from './Login/login';
import CreatePost from './pages/CreatePost/createpost';
import Dashboard from './pages/dashbords/dashboards';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/sobre';
import RegisterUser from './Register/registerUser';


function App() {
  const[user, setUsers] = useState(undefined)
  const{auth} = useAuth()
   
  const loadeduser = user === undefined
  console.log('test users here',user)
  
  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
    setUsers(user)
    })
  }, [auth])

  if(loadeduser){
    <p>Loading.....</p>
  } 
  
  
  return (
    <div className="App">
    <AuthProviderContext value={{user}} >
      <BrowserRouter>
      <Navbar/>
      <div className='container' >
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route path='/about' element={<Sobre/>} />
          <Route path="/dashboard" element={<Dashboard/>}  />
          
          <Route path='' element={''}  />
           
          <Route path='/login' element={ !user ?  <CreateLogin/> : <Navigate to='/' /> }  />
          
          <Route path='/register' element={!user ?  <RegisterUser/> : <Navigate to='/'  /> } />
          
          <Route path="/dashboard" element={ user ?  <Dashboard/> : <Navigate to='/' />}  />
          
          
          <Route path='/post/create'  element={ user ? <CreatePost/> : <Navigate to='/login' />   }  />
          
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
