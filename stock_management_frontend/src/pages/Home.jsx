// Tela principal:
// 	Tela simples com botões para direcionar para cada página.
// 	Botão para ler QR code;

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Supondo que você tenha um arquivo CSS para o componente Home

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Bem-vindo à página inicial!</p>
      <div className="button-container">
        <Link className="button" to="/inventory">Inventory</Link>
        <Link className="button" to="/SearchNewSlab">Search New Slab</Link>
        <Link className="button" to="/SlabEntry">Slab Entry</Link>
        <Link className="button" to="/SlabLeftOverEntry">Slab Leftover Entry</Link>
      </div>
    </div>
  )
}

export default Home;

