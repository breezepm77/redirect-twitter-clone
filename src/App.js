import {Routes, Route} from 'react-router-dom';
import SingUp from './SingUp/Singup';
import Login from './Login/Login';
import Home from './Home/Home';
import Private from './Routes/Private';
import Public from './Routes/Public';
import NotFound from './NotFound/NotFound';
import './App.css';
import Profile from './Profile/Profile';

function App() {
  return (
    <>
  <Routes>
    <Route path="/"  element={<Public/>}>
    <Route path="/Login" element={<Login/>}/>
      <Route path="/" element={<SingUp/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>
    <Route path="/" element={<Private/>}>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    </Route>
  </Routes>
    </>
  );
} 

export default App;
