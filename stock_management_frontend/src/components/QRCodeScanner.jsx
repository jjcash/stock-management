import React from 'react';
import QrReader from 'react-qr-reader';

const QRCodeScanner = ({ onScan }) => {
  const handleScan = (data) => {
    if (data) {
      onScan(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <QrReader
      delay={300}
      onError={handleError}
      onScan={handleScan}
      style={{ width: '100%' }}
    />
  );
};

export default QRCodeScanner;
