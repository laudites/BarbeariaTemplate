import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Importa o CSS para autoplay
import { Navigation, Autoplay } from 'swiper/modules'; // Importa módulos

import '../style/servicesComponent.css';
// Dados dos serviços
const servicesData = [
  {
    icon: "https://americanbarbershop.com.br/wp-content/uploads/2022/11/iconCorte.svg",
    title: "Platinado",
    description: "Utilizamos produtos da mais alta qualidade para deixar seus cabelos com um incrível loiro platinado.",
  },
  {
    icon: "https://americanbarbershop.com.br/wp-content/uploads/2022/11/iconReconstrucao.svg",
    title: "Reconstrução Capilar",
    description: "Reconstrução dos cabelos, recuperando o seu brilho e fora natural.",
  },
  {
    icon: "https://americanbarbershop.com.br/wp-content/uploads/2022/11/iconHidratacaoOzonio.svg",
    title: "Hidratação com Ozônio",
    description: "A hidratação capilar aliada ao ozônio promete muitos benefícios ao couro cabeludo e aos fios.",
  },
  {
    icon: "https://americanbarbershop.com.br/wp-content/uploads/2022/11/iconPezinho.svg",
    title: "Sobrancelha na Navalha",
    description: "Apara e alinha os fios em excesso ao redor das sobrancelhas, fazendo uso de técnica com navalha.",
  },
  {
    icon: "https://americanbarbershop.com.br/wp-content/uploads/2022/11/tesoura.svg",
    title: "Corte de Cabelo",
    description: "Corte de cabelo realizado com a excelência dos mestres barbeiros.",
  },
  {
    icon: "https://americanbarbershop.com.br/wp-content/uploads/2022/11/iconBarba.svg",
    title: "Barba",
    description: "Barba feita como antigamente, com o uso de uma relaxante toalha quente e creme hidratante para amaciar os fios.",
  },
  {
    icon: "https://americanbarbershop.com.br/wp-content/uploads/2022/11/iconPezinho.svg",
    title: "Pezinho",
    description: "Indicado para você que precisa fazer apenas a manutenção básica do contorno do cabelo.",
  },
  {
    icon: "https://americanbarbershop.com.br/wp-content/uploads/2022/11/iconSelagem.svg",
    title: "Selagem",
    description: "Tratamento capilar feito com produtos de alta qualidade. Alisa os cabelos e sela os fios.",
  },
  {
    icon: "https://americanbarbershop.com.br/wp-content/uploads/2022/11/barboterapiaIcone.svg",
    title: "Barboterapia com Ozônio",
    description: "Barba feita com o uso de uma relaxante toalha quente e creme hidratante para amaciar os fios.",
  },
  {
    icon: "https://americanbarbershop.com.br/wp-content/uploads/2022/11/iconHidratacao.svg",
    title: "Hidratação Capilar",
    description: "Tratamento ideal para manter os cabelos saudáveis. Restaura o brilho natural, os nutrientes e a queratina perdida.",
  }
];

export default function ServicesComponent() {
  return (
    <Swiper
      spaceBetween={30} // Espaço entre os slides
      slidesPerView={3} // Número de slides visíveis
      loop={true} // Habilita o loop infinito
      autoplay={{
        //delay: 2500, // Tempo de espera entre os slides
        delay: 1112500,
        disableOnInteraction: false, // Não desabilita ao interagir
      }}
      navigation={true} // Habilita a navegação
      modules={[Navigation, Autoplay]} // Define os módulos aqui
      breakpoints={{
        640: { slidesPerView: 1 }, // Um slide em telas pequenas
        768: { slidesPerView: 2 }, // Dois slides em telas médias
        1024: { slidesPerView: 3 }, // Três slides em telas grandes
      }}
      className="mySwiper"
    >
      {servicesData.map((service, index) => (
        <SwiperSlide key={index} className='teste'>
          <div className="serviceGeral services-caption text-center mb-30 per001">
            <div className="scPers">
              <div className="service-icon">
                <img src={service.icon} alt={service.title} width="50" height="50" />
              </div>
              <div className="service-cap">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}