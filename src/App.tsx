// Base imports
import './App.css';
import DrawerAppBar from './components/DrawerAppBar';

// Pages
import Home from './views/Home';
import Signin from './views/Signin';

// Routing
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <DrawerAppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Signin" element={<Signin />} />
        </Routes>
      </DrawerAppBar>
    </BrowserRouter>
  );
}

export default App;
