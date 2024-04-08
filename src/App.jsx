import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/home/Home'
import DashBoard from './pages/home/sub_pages/Dashboard_page/DashBoard';
import Conversation from './pages/home/sub_pages/conversation_page/Conversation';

import './App.css'


function App() {

  return (
    <Suspense>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="/" element={<DashBoard />} />
            <Route path="/conversations" element={<Conversation />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App
