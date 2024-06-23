import React, { useState } from 'react';
import axios from 'axios';

const SlabLeftoverEntry = () => {
  const [arquivo, setArquivo] = useState(null);

  const handleFileChange = (e) => {
    setArquivo(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('arquivo', arquivo);
    axios.post('/api/retalhos/', formData)
      .then(response => console.log('Sobra adicionada:', response.data))
      .catch(error => console.error('Erro ao adicionar sobra:', error));
  };

  return (
    <div>
      <h1>Entrada de Sobra</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Arquivo de Geometria</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Adicionar Sobra</button>
      </form>
    </div>
  );
};

export default SlabLeftoverEntry;
