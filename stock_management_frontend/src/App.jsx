import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import SlabEntry from './pages/SlabEntry';
import SearchNewSlab from './pages/SearchNewSlab';
import SlabLeftoverEntry from './pages/SlabLeftoverEntry';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/SlabEntry" element={<SlabEntry />} />
        <Route path="/SearchNewSlab" element={<SearchNewSlab/>} />
        <Route path="/SlabLeftoverEntry" element={<SlabLeftoverEntry />} />
      </Routes>
    </div>
  );
}

export default App;
