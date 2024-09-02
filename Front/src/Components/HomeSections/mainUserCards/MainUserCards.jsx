import { BsWhatsapp } from "react-icons/bs";
import UserCard from "../userCard/UserCard";
import "./mainUserCards.css";

const MainUserCards = ({ users }) => {
  const usersData = [
    {
      id: 1,
      name: "Maria",
      last_name: "Pérez",
      profesion: "Desarrollo Web",
      description:
        "Soy una desarrolladora web con una sólida experiencia en tecnologías front-end y back-end. Especialista en React y Node.js, tengo más de 5 años de experiencia en la creación de aplicaciones web escalables y eficientes. Mi pasión por la programación me ha llevado a explorar continuamente nuevas tecnologías y mejores prácticas, asegurando que mis proyectos estén siempre a la vanguardia. Además, disfruto colaborando en equipos multidisciplinarios, donde puedo aplicar mis habilidades técnicas para resolver problemas complejos y entregar soluciones de alta calidad.",
      tel: "+54 11 1234-5678",
      email: "mariaperez@example.com",
      image:
        "https://c.superprof.com/i/m/1640336/600/20230614170931/1640336.webp",
      reviews: 9,
      contact: {
        whatsapp: "+5100000000",
        facebook: "https://www.facebook.com/maria.perez",
        instagram: "https://www.instagram.com/maria.perez",
      },
    },
    {
      id: 2,
      name: "Juan",
      last_name: "Pérez",
      profesion: "Músico",
      description: "Experto en React y Node.js",
      tel: "+54 11 1234-5678",
      email: "juanperez@example.com",
      image:
        "https://c.superprof.com/i/m/653090/300/20240131130912/653090.webp",
      reviews: 4,
    },
    {
      id: 3,
      name: "Tomás",
      last_name: "Pérez",
      profesion: "Diseñador",
      description: "Experto en React y Node.js",
      tel: "+54 11 1234-5678",
      email: "juanperez@example.com",
      image:
        "https://c.superprof.com/i/m/522899/300/20220920110015/522899.webp",
      reviews: 3,
    },
    {
      id: 4,
      name: "Camila",
      last_name: "Pérez",
      profesion: "Químico",
      description: "Experto en React y Node.js",
      tel: "+54 11 1234-5678",
      email: "juanperez@example.com",
      image:
        "https://c.superprof.com/i/m/27384577/600/20240331225916/27384577.webp",
      reviews: 5,
    },
    {
      id: 5,
      name: "Carlos",
      last_name: "Pérez",
      profesion: "Desarrollador Web",
      description: "Experto en React y Node.js",
      tel: "+54 11 1234-5678",
      email: "juanperez@example.com",
      image:
        "https://c.superprof.com/i/m/10856203/600/20240401150959/10856203.webp",
      reviews: 12,
    },
    {
      id: 6,
      name: "Claudia",
      last_name: "Pérez",
      profesion: "Docente",
      description: "Experto en React y Node.js",
      tel: "+54 11 1234-5678",
      email: "juanperez@example.com",
      image:
        "https://c.superprof.com/i/m/15502604/600/20220531144604/15502604.webp",
      reviews: 18,
    },
  ];

  return (
    <section className="SectionUserCards">
      <h2>¡Busca, interactúa y aprende!</h2>
      <div className="SectionUserCards-container">
        {usersData.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
};

export default MainUserCards;
