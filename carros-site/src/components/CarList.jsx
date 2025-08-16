import React from "react";
import CarCard from "./CarCard"; // Certifique-se de que esse componente existe
import rubicon from "../assets/rubicon 1.jpg";
import hb20 from "../assets/hb20 1.jpg";
const cars = [
  {
    id: "rubicon",
    name: "Jeep Rubicon",
    price: "R$ 289.900",
    image: rubicon,
  },
  {
    id: "hb20",
    name: "Hyundai HB20",
    price: "R$ 72.900",
    image: hb20,
  },
];

const CarList = () => {
  return (
    <div className="car-list">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
