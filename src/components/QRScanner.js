import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useNavigate } from 'react-router-dom';
import '../styles/QRScanner.css';

const QRScanner = () => {
  const navigate = useNavigate();
  const [scanResult, setScanResult] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'qr-scanner',
      { fps: 10, qrbox: 250 },
      false
    );

    scanner.render(
      (decodedText) => {
        setScanResult(decodedText);
        const [recipientId, amount] = decodedText.split('|');
        navigate('/send', { state: { recipientId, amount } });
        scanner.clear();
      },
      (err) => {
        setError(err.message || 'Failed to scan QR code.');
      }
    );

    return () => {
      scanner.clear();
    };
  }, [navigate]);

  return (
    <div className="qr-scanner-container">
      <h2>Scan QR Code</h2>
      {error && <div className="error-message">{error}</div>}
      {!scanResult && <div id="qr-scanner"></div>}
      {scanResult && <p>Scanned Data: {scanResult}</p>}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default QRScanner;
