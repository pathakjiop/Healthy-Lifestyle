import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import GetUserDetails from './components/GetUserDetails';

import GetUserAns from './components/GetUserAns';

  
import './App.css';

function HomePage() {
  return (
    <div className="App-header">
      <h1>User Health and Lifestyle Questionnaire</h1>
      <Link to="/questions"><button>Start</button></Link>
    </div>
  );
}

function QuestionsPage() {
  return (
    <main>
      <GetUserDetails />
      <GetUserAns />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions" element={<QuestionsPage />} />
{/* New route for the results page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
