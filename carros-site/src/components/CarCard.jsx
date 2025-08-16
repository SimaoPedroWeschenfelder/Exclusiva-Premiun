import { Link } from "react-router-dom";
import "./CarCard.css";

const CarCard = ({ car }) => {
  return (
    <Link to={`/carro/${car.id}`} className="car-card">
      <img src={car.image} alt={car.name} className="car-image" />
      <div className="car-info">
        <h2 className="car-name">{car.name}</h2>
        <p className="car-price">R$ {car.price}</p>
      </div>
    </Link>
  );
};

export default CarCard;
