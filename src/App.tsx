// Base imports
import './App.css';
import DrawerAppBar from './components/DrawerAppBar';

// Pages
import Home from './views/Home';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';

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
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
