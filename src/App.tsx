import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Header from './components/header/Header';
import { FC } from 'react';
import TaskPage from './pages/TaskPage';

const App:FC = () => {
  return (
    <>
        <Header/>
        <div className='container'>
          <Routes>
            <Route path='/' Component={HomePage} />
            <Route path='/:id' Component={TaskPage} />
            <Route path='/login' Component={LoginPage} />
            <Route path='/register' Component={RegisterPage} />
          </Routes>
        </div>
    </>
  );
}

export default App;
