import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import './CSS/sb-admin-2.css';
import './CSS/fontawesome-free/css/all.min.css';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './User';
import { useContext } from 'react';

function App() {
  const {user}=(useContext)
  return (
<BrowserRouter>
<div id="wrapper">
    <Sidebar/>
    <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      <Topbar/>
<Routes>
<Route path="/dashboard" element={<Dashboard/>}></Route>
<Route path="/users" element={<User/>}></Route> 
</Routes>
    </div>
    </div>
    </div>
</BrowserRouter>
  )
}

export default App;
