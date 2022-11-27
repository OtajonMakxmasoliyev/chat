import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { BrowserRouter, Outlet } from 'react-router-dom';
import Navbar from './components/router/navbar';
import AppRouter from './components/router/appRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
        <Outlet/>
      </BrowserRouter>
    </div>
  );
}

export default App;
