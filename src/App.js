import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Startup from "./views/Startup";
import Profile from "./views/Profile";
import Translate from "./views/Translate";
import { Provider } from "./context/userProvider";
function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Navbar />

        <div className="App">
          <Routes>
            <Route path="/" element={<Startup />} />
            <Route path="/Translate" element={<Translate />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;


