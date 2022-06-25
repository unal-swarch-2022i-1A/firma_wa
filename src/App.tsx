// Base imports
import './App.css';
import DrawerAppBar from './components/DrawerAppBar';

// Pages
import Home from './views/Home';
import SignIn from './views/SignIn';

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
        <Route path="Signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
