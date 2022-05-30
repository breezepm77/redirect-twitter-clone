import {Routes, Route} from 'react-router-dom';
import SingUp from './Pages/SingUp/Singup';
import Home from './Pages/Home/Home';
import Private from './Pages/Routes/Private';
import Public from './Pages/Routes/Public';
import NotFound from './Pages/NotFound/NotFound';
import More from './Pages/More/More';
import Ekle from './Pages/Ekle/Ekle';
import './App.css';

function App() {
  return (
    <>
  <Routes>
    <Route path="/"  element={<Public/>}>
      <Route path="/" element={<SingUp/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>
    <Route path="/" element={<Private/>}>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/More" element={<More/>}/>
    <Route path="/Ekle" element={<Ekle/>}/>
    </Route>
  </Routes>
    </>
  );
} 

export default App;
