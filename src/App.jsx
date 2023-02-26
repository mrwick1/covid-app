import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';

import Home from './views/Home/Home';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
