import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SlabEntry = () => {
  const [tipo, setTipo] = useState('');
  const [tiposDePedra, setTiposDePedra] = useState([]);
  const [localizacao, setLocalizacao] = useState('');
  const [localizacoes, setLocalizacoes] = useState([]);
  const [comprimento, setComprimento] = useState('');
  const [largura, setLargura] = useState('');
  const [espessura, setEspessura] = useState('');
  const [defeitos, setDefeitos] = useState('');
  const [hasDefeitos, setHasDefeitos] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/tipos-de-pedra/')
      .then(response => setTiposDePedra(response.data))
      .catch(error => console.error('Erro ao buscar tipos de pedra:', error));

    axios.get('http://localhost:8000/api/localizacoes-estoque/')
      .then(response => setLocalizacoes(response.data))
      .catch(error => console.error('Erro ao buscar localizações:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const novaChapa = {
      tipo_de_pedra: tipo,
      comprimento: parseFloat(comprimento),
      largura: parseFloat(largura),
      espessura: parseFloat(espessura),
      defeitos_superficiais: hasDefeitos ? defeitos : '',
      localizacao_estoque: localizacao,
      codigo: `CHAPA-${Date.now()}`, // Gerar um código único temporário
      qr_code: `QR-${Date.now()}`, // Gerar um QR code único temporário
    };

    console.log('Enviando dados:', novaChapa); // Adicionado para depuração

    axios.post('http://localhost:8000/api/chapas/', novaChapa)
      .then(response => {
        console.log('Chapa adicionada:', response.data);
        setErrorMessage(''); // Limpar a mensagem de erro após o sucesso
      })
      .catch(error => {
        if (error.response) {
          console.error('Erro ao adicionar chapa:', error.response.data);
          setErrorMessage(JSON.stringify(error.response.data));
        } else {
          console.error('Erro ao adicionar chapa:', error.message);
          setErrorMessage(error.message);
        }
      });
  };

  return (
    <div>
      <h1>Entrada de Chapa</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tipo de Pedra</label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="">Selecione o tipo de pedra</option>
            {tiposDePedra.map(pedra => (
              <option key={pedra.id} value={pedra.id}>{pedra.nome}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Localização</label>
          <select value={localizacao} onChange={(e) => setLocalizacao(e.target.value)}>
            <option value="">Selecione a localização</option>
            {localizacoes.map(local => (
              <option key={local.id} value={local.id}>{local.codigo} - {local.descricao}</option>
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

export default SlabEntry;
