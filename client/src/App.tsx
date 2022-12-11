import React from 'react';


import Header from './Header';


import './App.css';
import { Route, Routes } from 'react-router-dom';
import Team from './Team';
import IndexPage from './IndexPage';
import Reviews from './Reviews';
import Footer from './Footer';
import Lessons from './Lessons';

function App() {
  return (<>
    <Header />
    <Routes>

      <Route path="/" element={<IndexPage />} />
      <Route path="/team" element={<Team />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/lessons" element={<Lessons />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
