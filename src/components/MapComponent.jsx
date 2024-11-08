import React from 'react';

const MapComponent = () => {
    return (
        <div className="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.0702073812646!2d-49.312131!3d-25.672167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dc5590fddeabc3%3A0xabcb3cfd6abc435e!2sTv.%20Ira%C3%BAna%2C%20132%20-%20Gralha%20Azul%2C%20Fazenda%20Rio%20Grande%20-%20PR%2C%2083824-193!5e0!3m2!1spt-BR!2sbr!4v1699580669197!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização no Google Maps"
            ></iframe>
        </div>
    );
};

export default MapComponent;
