// Base imports
import './App.css';
import DrawerAppBar from './presentation/shared/components/DrawerAppBar';

// Pages
import SignIn from './presentation/session/pages/SignIn';
import SignUp from './presentation/session/pages/SignUp';
import ListDocs from './presentation/docs/pages/ListDocs';
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
          <Route path="" element={<ListDocs />} />          
        </Route>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
