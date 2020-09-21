import React from 'react';
import './OpenModalsButton.css';
import Button from 'react-bootstrap/Button';
import plus from '../../../assets/plus.png';

const OpenModalsButton = ({children}) => {
  return (
      <div className="float-right mr-5 download-text">
        <Button variant="primary">
            <img src={plus} alt="Plus" className="mr-3" />
            {children}
        </Button>
      </div>
  );
};

export default OpenModalsButton;