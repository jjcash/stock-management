import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterComponent from '../components/FilterComponent';

const InventoryList = () => {
  const [chapas, setChapas] = useState([]);
  const [tiposDePedra, setTiposDePedra] = useState([]);
  const [localizacoes, setLocalizacoes] = useState([]);
  const [filtros, setFiltros] = useState({
    tipo_de_pedra: '',
    localizacao_estoque: '',
    espessura: '',
    defeitos_superficiais: ''
  });

  useEffect(() => {
    axios.get('http://localhost:8000/api/tipos-de-pedra/')
      .then(response => setTiposDePedra(response.data))
      .catch(error => console.error('Erro ao buscar tipos de pedra:', error));

    axios.get('http://localhost:8000/api/localizacoes/')
      .then(response => setLocalizacoes(response.data))
      .catch(error => console.error('Erro ao buscar localizações:', error));

    fetchChapas();
  }, []);

  const fetchChapas = () => {
    const params = { ...filtros };

    if (filtros.defeitos_superficiais === 'com_defeito') {
      params.defeitos_superficiais = true;
    } else if (filtros.defeitos_superficiais === 'sem_defeito') {
      params.defeitos_superficiais = false;
    } else {
      delete params.defeitos_superficiais;
    }

    axios.get('http://localhost:8000/api/chapas/', { params })
      .then(response => setChapas(response.data))
      .catch(error => console.error('Erro ao buscar chapas:', error));
  };

  const handleFiltrar = () => {
    fetchChapas();
  };

  return (
    <div>
      <h1>Inventário de Chapas</h1>
      <FilterComponent 
        tiposDePedra={tiposDePedra}
        localizacoes={localizacoes}
        filtros={filtros}
        setFiltros={setFiltros}
        handleFiltrar={handleFiltrar}
      />
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Tipo de Pedra</th>
            <th>Localização</th>
            <th>Comprimento</th>
            <th>Largura</th>
            <th>Espessura</th>
            <th>Defeitos Superficiais</th>
          </tr>
        </thead>
        <tbody>
          {chapas.map(chapa => (
            <tr key={chapa.id}>
              <td>{chapa.codigo}</td>
              <td>{tiposDePedra.find(pedra => pedra.id === chapa.tipo_de_pedra)?.nome}</td>
              <td>{localizacoes.find(local => local.id === chapa.localizacao_estoque)?.codigo}</td>
              <td>{chapa.comprimento}</td>
              <td>{chapa.largura}</td>
              <td>{chapa.espessura}</td>
              <td>{chapa.defeitos_superficiais ? 'Sim' : 'Não'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;
