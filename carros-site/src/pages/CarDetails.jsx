import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Imagens
import rubicon1 from "../assets/rubicon 1.jpg";
import rubicon2 from "../assets/rubicon 2.jpg";
import rubicon3 from "../assets/rubicon 3.jpg";
import hb20_1 from "../assets/hb20 1.jpg";
import hb20_2 from "../assets/hb20 2.jpg";
import hb20_3 from "../assets/hb20 3.jpg";
import Fusca_1 from "../assets/fusca 1.jpg";
import Fusca_2 from "../assets/fusca 2.jpg";
import Fusca_3 from "../assets/fusca 3.jpg";
import Fusca_4 from "../assets/fusca 4.jpg";
import Fusca_5 from "../assets/fusca 5.jpg";
import Fusca_6 from "../assets/fusca 6.jpg";
import Fusca_7 from "../assets/fusca 7.jpg";
import Fusca_8 from "../assets/fusca 8.jpg";
import Fusca_9 from "../assets/fusca 9.jpg";

const cars = [
  {
    id: "rubicon",
    name: "Jeep Rubicon",
    price: "R$ 289.900",
    description:
      "Ar condicionado, Motor 2.0 Turbo 272cv, Câmbio automático de 8 marchas 4x4 com reduzida, Capota removível, pneus off-road, Controle de tração e estabilidade, Central multimídia com Apple CarPlay/Android Auto, Bancos em couro. E muito mais. VENDE, TROCA, FINANCIA.",
    images: [rubicon1, rubicon2, rubicon3],
    categoria: "Off-road",
  },
  {
    id: "hb20",
    name: "Hyundai HB20",
    price: "R$ 72.900",
    description:
      "Ano 2022, Ar condicionado, Direção hidráulica, Vidros elétricos, Trava elétrica, Muito econômico, Pneus novos, Multimídia, Câmera de ré. E muito mais...",
    images: [hb20_1, hb20_2, hb20_3],
    categoria: "Hatch",
  },
  {
    id: "Fusca",
    name: " VOLKSVAGEM Fusca",
    price: "29.900",
    description: `Ano:1974,

    Motor: 1300 

    Pneus:ok

    Manual de Proprietario

    otimo estado de conservação

    chave reserva de 2 Dono !!!`,
    images: [
      Fusca_1,
      Fusca_2,
      Fusca_3,
      Fusca_4,
      Fusca_5,
      Fusca_6,
      Fusca_7,
      Fusca_8,
      Fusca_9,
    ],
    categoria: "Clássico",
  },
];

const CarDetail = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id);
  const [zoomIndex, setZoomIndex] = useState(null);

  if (!car) {
    return <h2>Carro não encontrado 😢</h2>;
  }

  const handleNext = () => {
    setZoomIndex((prev) => (prev + 1) % car.images.length);
  };

  const handlePrev = () => {
    setZoomIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  const closeZoom = () => setZoomIndex(null);

  return (
    <div
      className="car-detail"
      style={{ padding: "24px", textAlign: "center" }}
    >
      <h1>{car.name}</h1>
      <p style={{ padding: "12px", color: "#000000", fontSize: "1rem" }}>
        {car.description}
      </p>

      <div
        className="gallery"
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {car.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${car.name} ${index + 1}`}
            style={{
              width: "300px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "8px",
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              transition: "transform 0.2s ease",
            }}
            onClick={() => setZoomIndex(index)}
          />
        ))}
      </div>

      <AnimatePresence>
        {zoomIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeZoom}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.85)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <motion.img
              src={car.images[zoomIndex]}
              alt="Zoom"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Botão fechar */}
            <button
              onClick={closeZoom}
              style={{
                position: "absolute",
                top: "20px",
                right: "30px",
                fontSize: "2rem",
                color: "#fff",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              ❌
            </button>

            {/* Setas navegação */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              style={{
                position: "absolute",
                left: "30px",
                fontSize: "2rem",
                color: "#fff",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              ⬅️
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              style={{
                position: "absolute",
                right: "30px",
                fontSize: "2rem",
                color: "#fff",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              ➡️
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <p
        className="car-price"
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "#d32f2f",
          marginTop: "24px",
        }}
      >
        Preço: {car.price}
      </p>

      <a
        href={`https://wa.me/5599999999999?text=Olá! Tenho interesse no ${car.name}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          backgroundColor: "#25D366",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "12px",
          fontWeight: "600",
          fontSize: "1rem",
          textDecoration: "none",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          border: "2px solid #1ebe5d",
          transition: "transform 0.2s ease",
          marginTop: "16px",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Tenho interesse
      </a>
    </div>
  );
};

export default CarDetail;
