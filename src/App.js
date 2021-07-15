import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import { Home } from './Components/Home';
import { Login } from './Components/Login/Login';
import { Photo } from './Components/Photo/Photo';
import { User } from './Components/User/User';
import UserProfile from './Components/User/UserProfile';
import { UserStorage } from './UserContext'


function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="conta/*" element={<User />} />
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
