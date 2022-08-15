import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Navbar from './Component/Navbar';
import { AuthProviderContext } from './Contextmanage/authcontext';

import { useAuth } from './hoock/useAuthTentication';
import Home from './pages/Home/Home';
import ManagePost from './pages/MeusPost/SavePost';


function App() {
  const[user, setUsers] = useState(undefined)
  const{auth} = useAuth()
   
  console.log("testing user", user)
  const loadeduser = user === undefined

  
  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
    setUsers(user)
    })
  }, [auth])

  if(loadeduser){
    return <p>Loading.....</p>
  } 
    
  return (
    <div className="App">
    <AuthProviderContext value={{user}} >
      
      <BrowserRouter>
       <Navbar/>
       <div className='container' >
      
       <Routes>
         <Route  path='/' element={<Home/>} /> 
         <Route path='/post/meuspost'  element={ user ? <ManagePost/> : <Navigate to='/login' />   }  />
       </Routes>
       </div>

     </BrowserRouter>

    </AuthProviderContext> 
    </div>
  );
}

export default App;
