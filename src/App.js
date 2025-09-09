import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import Dashboard1 from './Components/Dashboard1/Dashboard1';
import Dashboard2 from './Components/Dashboard2/Dashboard2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (







    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard1' element={<Dashboard1 />} />
        <Route path='/dashboard2' element={<Dashboard2 />} />


      </Routes>

    </Router>
  )
}
export default App;
