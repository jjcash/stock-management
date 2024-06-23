import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SlabEntry = () => {
  const [tipo, setTipo] = useState('');
  const [tiposDePedra, setTiposDePedra] = useState([]);
  const [comprimento, setComprimento] = useState('');
  const [largura, setLargura] = useState('');
  const [espessura, setEspessura] = useState('');
  const [defeitos, setDefeitos] = useState('');
  const [hasDefeitos, setHasDefeitos] = useState(false);

  useEffect(() => {
    axios.get('/api/tipos-de-pedra/')
      .then(response => setTiposDePedra(response.data))
      .catch(error => console.error('Erro ao buscar tipos de pedra:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const novaChapa = {
      tipo_de_pedra: tipo,
      comprimento,
      largura,
      espessura,
      defeitos_superficiais: hasDefeitos ? defeitos : '',
    };
    axios.post('/api/chapas/', novaChapa)
      .then(response => console.log('Chapa adicionada:', response.data))
      .catch(error => console.error('Erro ao adicionar chapa:', error));
  };

  return (
    <div>
      <h1>Entrada de Chapa</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tipo de Pedra</label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            {tiposDePedra.map(pedra => (
              <option key={pedra.id} value={pedra.id}>{pedra.nome}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Comprimento</label>
          <input type="number" value={comprimento} onChange={(e) => setComprimento(e.target.value)} />
        </div>
        <div>
          <label>Largura</label>
          <input type="number" value={largura} onChange={(e) => setLargura(e.target.value)} />
        </div>
        <div>
          <label>Espessura</label>
          <input type="number" value={espessura} onChange={(e) => setEspessura(e.target.value)} />
        </div>
        <div>
          <label>Defeitos Superficiais</label>
          <input
            type="checkbox"
            checked={hasDefeitos}
            onChange={(e) => setHasDefeitos(e.target.checked)}
          />
          {hasDefeitos && (
            <textarea value={defeitos} onChange={(e) => setDefeitos(e.target.value)} />
          )}
        </div>
        <button type="submit">Adicionar Chapa</button>
      </form>
    </div>
  );
};

export default SlabEntry
