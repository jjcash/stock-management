import React, { useState } from 'react';

function SlabEntry() {
    const [formData, setFormData] = useState({
        code: '',
        length: '',
        width: '',
        thickness: '',
        stoneType: '',
        defects: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // lógica para enviar dados para a API
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="code" value={formData.code} onChange={handleChange} placeholder="Código" />
            <input type="number" name="length" value={formData.length} onChange={handleChange} placeholder="Comprimento" />
            <input type="number" name="width" value={formData.width} onChange={handleChange} placeholder="Largura" />
            <input type="number" name="thickness" value={formData.thickness} onChange={handleChange} placeholder="Espessura" />
            <input type="text" name="stoneType" value={formData.stoneType} onChange={handleChange} placeholder="Tipo de Pedra" />
            <input type="text" name="defects" value={formData.defects} onChange={handleChange} placeholder="Defeitos" />
            <button type="submit">Adicionar Chapa</button>
        </form>
    );
}

export default SlabEntry;
