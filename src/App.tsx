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
      <Routes>
        <Route path="/" element={<DrawerAppBar />}>
          <Route path="" element={<Home />} />          
        </Route>
        <Route path="Signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
