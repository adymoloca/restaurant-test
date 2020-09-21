import React from 'react';
import './DownloadButton.css';
import Button from 'react-bootstrap/Button';

const DownloadButton = () => {
  return (
    <div className="float-right mr-5 download-text">
      <Button variant="primary">Download data in PDF</Button>
    </div>
  );
};

export default DownloadButton;
