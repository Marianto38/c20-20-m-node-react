import { BsWhatsapp } from "react-icons/bs";
import UserCard from "../userCard/UserCard";
import "./mainUserCards.css";
import { getAllUsers } from "../../../services/services";
import { useEffect } from "react";
import { useState } from "react";

const MainUserCards = () => {
  const [allUsersData, setAllUsersData] = useState([]);

  const handleGetAllUsers = async () => {
    try {
      const response = await getAllUsers();

      if (response.status === 200) {
        setAllUsersData(response.data);
      } else {
        console.log("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    handleGetAllUsers();
  }, []);

  return (
    <section className="SectionUserCards">
      <h2>¡Busca, interactúa y aprende!</h2>
      <div className="SectionUserCards-container">
        {allUsersData?.slice(0, 6).map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
};

export default MainUserCards;
