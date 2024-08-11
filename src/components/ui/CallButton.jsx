"use client";

import '@fortawesome/fontawesome-free/css/all.min.css';

const CallButton = () => {
  const handleClick = () => {
    window.open('tel:+91885111546', '_self'); // Opens dial pad with number
  };

  return (
    <div style={styles.container}>
      <div style={styles.icon} onClick={handleClick}>
        <i className="fas fa-phone" style={styles.callIcon}></i>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: '140px', // Positioned above the WhatsApp icon
    right: '20px',
    zIndex: 1002, // Ensure it is above the WhatsApp icon
  },
  icon: {
    width: '50px',
    height: '50px',
    backgroundColor: '#34b7f1', // Blue color for call button
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    color: 'white',
    fontSize: '24px',
    transition: 'background-color 0.3s',
  },
  callIcon: {
    color: 'white',
  },
};

export default CallButton;
