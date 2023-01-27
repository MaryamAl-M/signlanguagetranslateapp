import  Navbar  from './components/Navbar/Navbar';

import {
  BrowserRouter,
  Routes, 
  Route
} from 'react-router-dom'
import Startup from "./views/Startup";
import Profile from "./views/Profile";
import Translations from "./views/Translate";

function App() {
  return(

  <BrowserRouter>


  <div className="App">
  <Navbar />
   <Routes>
    <Route path="/" element={ <Startup /> } />
    <Route path="/Translate" element={ <Translations /> } />
    <Route path="/Profile" element={ <Profile /> } />
   </Routes>
  </div>



  </BrowserRouter>
  );

}

export default App;
