
import Admin from './Admin/DashBoard';
import Login from './AuthAdmin/Login'
import Register from './AuthAdmin/Register'






import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


function App() {
  return (
    
      <Router>
        <Routes>
    
          <Route path='/Admin' element={<Admin />} />
          <Route path='/' element={<Login />} />
          <Route path='/Register' element={<Register />} />
       




        </Routes>
      </Router>
 
  );
}

export default App;
