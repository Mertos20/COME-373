import React from "react";
import "./Contact.css"; // Stilleri ayrı bir dosyada tutabilirsiniz

const Contact = () => {
  return (
    <div className="contact-container">
     
     
      <section class="contact-container">
        <div class="contact-info">
            <h2>İletişim Bilgilerimiz</h2>
            <p><strong>Adres:</strong> Tahtakale mah. Sabuncuhan Cd. No: 6 , 34320 Eminönü Fatih/İstanbul, Istanbul, Turkey 34320</p>
            <p><strong>Email:</strong> zumrutdogaltas@gmail.com</p>
            <p><strong>Telefon:</strong> +90 555 123 4567</p>
            <p><strong>Instagram:</strong> 
                <a href="https://www.instagram.com/zumrutdogaltasofficial" target="_blank">
                    Zümrüt Doğal Taş Instagram
                </a>
            </p>
        </div>
    </section>
     
    </div>
  );
};

export default Contact;
