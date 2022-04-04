import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from './components/auth/Login';
import Registration from './components/auth/Registration';
import Welcome from './components/welcome';
import { AuthProvider } from './context/ContextProvider';
import useAuth from './hooks/useAuth';

function App() {
  const { isAuthorized } = useAuth();
  
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path='welcome' element={<Welcome />}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
