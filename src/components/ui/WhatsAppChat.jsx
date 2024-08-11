"use client";

import '@fortawesome/fontawesome-free/css/all.min.css';

const WhatsAppChat = () => {
  const handleClick = () => {
    window.open('https://wa.me/918851151548', '_blank');
  };

  return (
    <div style={styles.container}>
      <div style={styles.icon} onClick={handleClick}>
        <i className="fab fa-whatsapp" style={styles.whatsappIcon}></i>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: '80px', // Adjusted to ensure it is above the chatbot icon
    right: '20px',
    zIndex: 1001, // Ensure it is above other fixed elements
  },
  icon: {
    width: '50px',
    height: '50px',
    backgroundColor: '#25D366', // WhatsApp green
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
  whatsappIcon: {
    color: 'white',
  },
};

export default WhatsAppChat;
