import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GetClick from './pages/getClick';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<GetClick />} />
      </Routes>
    </Router>
  );
}

export default App;
