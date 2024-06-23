import React from 'react';

const FilterComponent = ({
  tiposDePedra,
  localizacoes,
  filtros,
  setFiltros,
  handleFiltrar
}) => {
  return (
    <div>
      <h2>Filtros</h2>
      <div>
        <label>Tipo de Pedra</label>
        <select value={filtros.tipo_de_pedra} onChange={(e) => setFiltros({...filtros, tipo_de_pedra: e.target.value})}>
          <option value="">Todos</option>
          {tiposDePedra.map(pedra => (
            <option key={pedra.id} value={pedra.id}>{pedra.nome}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Localização</label>
        <select value={filtros.localizacao_estoque} onChange={(e) => setFiltros({...filtros, localizacao_estoque: e.target.value})}>
          <option value="">Todos</option>
          {localizacoes.map(local => (
            <option key={local.id} value={local.id}>{local.codigo} - {local.descricao}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Espessura</label>
        <input type="number" value={filtros.espessura} onChange={(e) => setFiltros({...filtros, espessura: e.target.value})} />
      </div>
      <div>
        <label>Defeitos Superficiais</label>
        <select value={filtros.defeitos_superficiais} onChange={(e) => setFiltros({...filtros, defeitos_superficiais: e.target.value})}>
          <option value="">Todos</option>
          <option value="com_defeito">Com Defeito</option>
          <option value="sem_defeito">Sem Defeito</option>
        </select>
      </div>
      <button onClick={handleFiltrar}>Filtrar</button>
    </div>
  );
};

export default FilterComponent;
