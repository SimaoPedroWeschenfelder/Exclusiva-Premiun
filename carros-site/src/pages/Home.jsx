import bannerLoja from "../assets/banner.jpg"; // ajuste o nome conforme o arquivo que você subiu
import CarList from "../components/CarList"; // ajuste o caminho se necessário
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div style={{ paddingTop: "0px" }}>
      {/* Banner da loja */}

      <div style={{ paddingTop: "60px" }}>
        {/* Banner */}
        <img src={bannerLoja} alt="Banner" style={{ width: "100%" }} />

        {/* Lista de carros */}
        <CarList />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
