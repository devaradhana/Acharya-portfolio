import React from 'react';


const WhatsAppRedirect = ({ children }) => {
    const phoneNumber = '+918884009140';
    const message = 'Hello Acharya Arun Mishra Ji';
  
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    const handleClick = () => {
      window.open(url, '_blank');
    };
    return (
      <span style={{ cursor: 'pointer' }} onClick={handleClick}>
   {children}
    </span>
  );
};

export default WhatsAppRedirect;