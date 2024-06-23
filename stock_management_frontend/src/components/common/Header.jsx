import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Tela Principal</Link></li>
        <li><Link className="button" to="/inventory">Inventory</Link></li>
        <li><Link className="button" to="/SearchNewSlab">Search New Slab</Link></li>
        <li><Link className="button" to="/SlabEntry">Slab Entry</Link></li>
        <li><Link className="button" to="/SlabLeftOverEntry">Slab Leftover Entry</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
