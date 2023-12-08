import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Developers from "./components/Developers";

function App() {
  return (
      <Router>
                  <Routes>
                      <Route path="/" element={<Layout />}>
                      <Route index element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/developers" element={<Developers />} />
                      <Route path="*" element={<NotFound />} />
                      </Route>
                  </Routes>
      </Router>
  );
}

export default App;
