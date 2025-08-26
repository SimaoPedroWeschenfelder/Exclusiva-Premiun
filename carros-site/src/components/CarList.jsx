import React from "react";
import CarCard from "./CarCard"; // Certifique-se de que esse componente existe
import rubicon from "../assets/rubicon 1.jpg";
import hb20 from "../assets/hb20 1.jpg";
import fusca1 from "../assets/fusca 1.jpg";
const cars = [
  {
    id: "rubicon",
    name: "Jeep Rubicon",
    price: "289.900",
    image: rubicon,
    category: "Off-road",
  },
  {
    id: "hb20",
    name: "Hyundai HB20",
    price: " 72.900",
    image: hb20,
    category: "Hatch",
  },
  {
    id: "Fusca",
    name: "fusca",
    price: " 29.900",
    image: fusca1,
    category: "Clássico",
  },
];
const CarList = ({ selectedCategory }) => {
  const filteredCars = selectedCategory
    ? cars.filter((car) => car.category === selectedCategory)
    : cars;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {filteredCars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
