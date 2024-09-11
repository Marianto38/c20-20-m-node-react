import React, { useContext, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { professionsList } from "../HomeSections/Header/IconsList";
import { AppContext } from "../appContext/AppContext";
import Swal from "sweetalert2";
import { getUsersByProfesion } from "../../services/services";

const Selector = () => {
  const listRef = useRef(null);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const {
    noUserFounded,
    setNoUserFounded,
    usersSelectedByProfession,
    setUsersSelectedByProfession,
  } = useContext(AppContext);

  const handleGetUsersByProfession = async (professionCategorySelected) => {
    try {
      const response = await getUsersByProfesion(professionCategorySelected);
      if (response.status === 200 && response.data.length > 0) {
        setUsersSelectedByProfession(response.data);
      } else {
        setUsersSelectedByProfession([]);
        setNoUserFounded(true);
        Swal.fire({
          icon: "info",
          title: "No se encontraron usuarios disponibles",
          text: "Para la categoría seleccionada.",
          showConfirmButton: false,
          timer: 5000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setUsersSelectedByProfession([]);
      setNoUserFounded(true);
      Swal.fire({
        icon: "info",
        title: "No se encontraron usuarios disponibles",
        text: "Para la categoría seleccionada.",
        showConfirmButton: false,
        timer: 5000,
      });
    }
  };

  return (
    <div className="selector">
      <button
        className="selector__arrow selector__arrow--left"
        onClick={scrollLeft}
      >
        <IoIosArrowBack />
      </button>
      <ul className="selector__list" ref={listRef}>
        {professionsList.map((profession, index) => (
          <li
            className="selector__item"
            key={index}
            onClick={() => handleGetUsersByProfession(profession.name)}
          >
            <span className="selector__icon">{profession.icon}</span>
            <span className="selector__name">{profession.name}</span>
          </li>
        ))}
      </ul>
      <button
        className="selector__arrow selector__arrow--right"
        onClick={scrollRight}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Selector;
