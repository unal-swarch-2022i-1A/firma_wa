// Base imports
import './App.css';
import DrawerAppBar from './presentation/shared/components/DrawerAppBar';

// Pages
import Home from './presentation/main/Home';
import SignIn from './presentation/session/pages/SignIn';
import SignUp from './presentation/session/pages/SignUp';

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
