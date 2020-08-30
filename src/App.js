import React from 'react';
import './App.css';
import LoginPage from './components/Auth/LoginPage';
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from './components/DashBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/dashboard" component={Dashboard} />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
