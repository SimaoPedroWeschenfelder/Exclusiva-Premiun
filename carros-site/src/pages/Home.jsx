import { useState } from "react";
import bannerLoja from "../assets/banner.jpg";
import CarList from "../components/CarList";
import Footer from "../components/Footer";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      name: "Clássico",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.IwJ_B7HRtcWDTmogWfiKlgHaHa?r=0&w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Hatch",
      image:
        "https://i.pinimg.com/736x/49/f0/37/49f037ff1259200c279bbdbb6f02b11d.jpg",
    },
    {
      name: "Off-road",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.N5vb3sgE7DGnkvCTWLRyywHaHa?r=0&w=2000&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];

  return (
    <div style={{ paddingTop: "0px" }}>
      <div style={{ paddingTop: "39px" }}>
        <img src={bannerLoja} alt="Banner" style={{ width: "105%" }} />

        {/* Botões de categoria */}
        <div style={{ textAlign: "center", margin: "30px 0" }}>
          <h2 style={{ marginBottom: "16px" }}>Pesquise por tipo de carro</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {categories.map((cat) => (
              <div
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                style={{
                  width: "120px",
                  cursor: "pointer",
                  textAlign: "center",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  backgroundColor:
                    selectedCategory === cat.name ? "#d32f2f" : "#fff",
                  color: selectedCategory === cat.name ? "#fff" : "#333",
                  transition: "transform 0.2s ease",
                }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  style={{
                    width: "100%",
                    height: "80px",
                    objectFit: "cover",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                  }}
                />
                <div style={{ padding: "8px", fontWeight: "600" }}>
                  {cat.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lista de carros filtrada */}
        <CarList selectedCategory={selectedCategory} />

        <Footer />
        <div style={{ width: "100vw", margin: 0, padding: 0 }}>
          {/* conteúdo */}
        </div>
      </div>
    </div>
  );
};

export default Home;
