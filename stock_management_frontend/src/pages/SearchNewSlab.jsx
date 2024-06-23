import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchNewSlab = () => {
  const [geometria, setGeometria] = useState('');
  const [melhorOpcao, setMelhorOpcao] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/procurar-chapa/', { geometria })
      .then(response => setMelhorOpcao(response.data))
      .catch(error => console.error('Erro ao procurar chapa:', error));
  };

  return (
    <div>
      <h1>Procurar Chapa</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Geometria do Artefato</label>
          <textarea value={geometria} onChange={(e) => setGeometria(e.target.value)} />
        </div>
        <button type="submit">Procurar</button>
      </form>
      {melhorOpcao && (
        <div>
          <h2>Melhor Opção</h2>
          <p>Código: {melhorOpcao.codigo}</p>
          <p>Tipo: {melhorOpcao.tipo_de_pedra.nome}</p>
        </div>
      )}
    </div>
  );
};

export default SearchNewSlab;
