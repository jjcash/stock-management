import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Inventory = () => {
  const [itens, setItens] = useState([]);
  const [filtro, setFiltro] = useState({ tipo: '', status: '', espessura: '', defeitos: '' });

  useEffect(() => {
    axios.get('/api/chapas/')
      .then(response => setItens(response.data))
      .catch(error => console.error('Erro ao buscar estoque:', error));
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFiltro(prev => ({ ...prev, [name]: value }));
  };

  const filteredItens = itens.filter(item => {
    return (
      (!filtro.tipo || item.tipo_de_pedra.id === parseInt(filtro.tipo)) &&
      (!filtro.status || item.status === filtro.status) &&
      (!filtro.espessura || item.espessura === parseFloat(filtro.espessura)) &&
      (!filtro.defeitos || item.defeitos_superficiais.includes(filtro.defeitos))
    );
  });

  return (
    <div>
      <h1>Estoque</h1>
      <div>
        <label>Tipo de Pedra</label>
        <input name="tipo" value={filtro.tipo} onChange={handleFilterChange} />
        <label>Status</label>
        <input name="status" value={filtro.status} onChange={handleFilterChange} />
        <label>Espessura</label>
        <input name="espessura" value={filtro.espessura} onChange={handleFilterChange} />
        <label>Defeitos</label>
        <input name="defeitos" value={filtro.defeitos} onChange={handleFilterChange} />
      </div>
      <ul>
        {filteredItens.map(item => (
          <li key={item.id}>{item.codigo} - {item.tipo_de_pedra.nome} - {item.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;