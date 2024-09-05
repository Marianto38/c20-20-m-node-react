import React from "react";
import "./Reviews.css";
import Masonry from "react-masonry-css";

function Card({ text, name, color }) {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <p className="card-name">{name}</p>
      <p className="card-text">{text}</p>
    </div>
  );
}

const Reviews = () => {
  const reviewsCard = [
    { id: 1, text: "Excelente explicación 👏👏, sus clases son muy claras y siempre se toma el tiempo de asegurarse que todos entiendan cada tema antes de avanzar.", name: "Juan Pérez" },
    { id: 2, text: "Motiva a todos a dar lo mejor, su energía positiva es contagiosa y siempre nos anima a participar activamente en las discusiones.", name: "Ana García" },
    { id: 3, text: "Adoro esta manera de aprender. ❤️ Sus ejemplos prácticos ayudan a entender conceptos difíciles de una manera sencilla.", name: "Carlos Fernández" },
    { id: 4, text: "Así da gusto aprender. Siempre trae materiales interesantes y relevantes que hacen que el aprendizaje sea dinámico y divertido.", name: "María López" },
    { id: 5, text: "Muy bueno todo, su enfoque metodológico permite entender desde los conceptos más básicos hasta los más avanzados sin problemas.", name: "Javier Martínez" },
    { id: 6, text: "Su habilidad para simplificar temas complejos es impresionante, siempre utiliza analogías y ejemplos que hacen todo más comprensible.", name: "Lucía Rodríguez" },
    { id: 7, text: "Gracias a su enfoque creativo, las clases nunca se sienten aburridas, siempre encuentras algo nuevo e interesante por aprender.", name: "Roberto Sánchez" },
    { id: 8, text: "Su pasión por la ciencia es palpable, lo que hace que todos en la clase se sientan igualmente entusiasmados por el tema.", name: "Carmen Jiménez" },
    { id: 9, text: "Siempre está al tanto de las últimas investigaciones, lo que nos mantiene actualizados y preparados para los retos modernos.", name: "Fernando Díaz" },
    { id: 10, text: "Genial! Su capacidad de adaptarse a las necesidades de cada estudiante.", name: "Laura Gómez" }
  ];
  

  const colors = ["#FF6B6B", "#4ECDC4", "#FFD93B", "#1A535C"]; // Array de colores

  const breakpointColumnsObj = {
    default: 6,
    1100: 6,
    700: 3,
    500: 2,
  };

  return (
    <div className="reviews">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {reviewsCard.map((review, index) => (
          <div key={review.id} className="my-masonry-grid_item">
            <Card
              text={review.text}
              name={review.name}
              color={colors[index % colors.length]} // Asignar color en base al índice
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Reviews;
