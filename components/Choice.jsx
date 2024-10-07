import React from 'react';

const Choice = () => {
  const handlePress = (buttonNumber) => {
    console.log(`Button ${buttonNumber} pressed`);
  };

  const creerButton = (buttonNumber, label) => {
    return (
      <button
        key={buttonNumber}
        style={styles.buttonActive}
        onClick={() => handlePress(buttonNumber)}
      >
        {label}
      </button>
    );
  };

  return (
    <div style={styles.container}>
      {creerButton(1, 'Oui')}
      {creerButton(2, 'Non')}
      {creerButton(3, 'Peut-Être')}
      {creerButton(4, 'Je sais pas')}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },

  buttonActive: {
    backgroundColor: '#5B9DEA',
    borderRadius: '30px',
    padding: '10px 20px',
    transition: 'transform 0.2s ease',
    transform: 'scale(0.95)',
    margin: '10px',
    color: '#FFFFFF'
  }
};

export default Choice;
