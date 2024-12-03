import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">İletişim</h1>
      <p className="contact-description">
        Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz:
      </p>
      <ul className="contact-info">
        <li><strong>Telefon:</strong> +90 123 456 7890</li>
        <li><strong>Email:</strong> info@zumrutdogaltas.com</li>
        <li><strong>Adres:</strong> Örnek Mah. 123. Sok. No:45, İstanbul</li>
      </ul>
    </div>
  );
};

export default Contact;
