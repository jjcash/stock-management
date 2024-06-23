import React from 'react';
import QRCodeScanner from '../components/QRCodeScanner';

const MainPage = () => {
  const handleScan = (data) => {
    if (data) {
      console.log('QR Code data:', data);
      // Implementar lógica para lidar com o QR code escaneado
    }
  };

  return (
    <div>
      <h1>Tela Principal</h1>
      <QRCodeScanner onScan={handleScan} />
    </div>
  );
};

export default MainPage;
