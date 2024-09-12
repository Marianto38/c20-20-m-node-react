import React, { useContext, useEffect, useState } from "react";

import "./NavHeader.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../../appContext/AppContext";
import Cookies from "js-cookie";

const NavHeader = () => {
  const { isLogged, userLogged, setIsLogged } = useContext(AppContext);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate();

  console.log(isLogged);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const getUserInitials = (name, lastName) => {
    const firstInitial = name ? name.charAt(0).toUpperCase() : "";
    const lastInitial = lastName ? lastName.charAt(0).toUpperCase() : "";
    return `${firstInitial}${lastInitial}`;
  };
  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("userLogged");
    localStorage.removeItem("userData");
    setIsLogged(false);
    // navigate("/login");
  };

  useEffect(() => {
    // Este efecto se disparará cuando `userLogged` cambie
    console.log("Usuario loggeado:", userLogged);
  }, [userLogged]);
  

  console.log(userLogged);
  return (
    <nav>
      <div className="home-nav-container">
        <h1 className="title">SkillTrade</h1>
        <ul className="right">
          <li className="question">?</li>
          <li>Comunidad</li>
          {isLogged ? (
            <div className="user-info" onClick={toggleDropdown}>
              <span className="greeting">
                ¡Qué bueno verte {userLogged?.name}!
              </span>
              {userLogged?.image ? (
                <img
                  src={userLogged?.image}
                  alt="Imagen de perfil"
                  className="profile-image"
                />
              ) : (
                <div className="profile-initials">
                  {getUserInitials(userLogged?.name, userLogged?.last_name)}
                </div>
              )}

              {isDropdownVisible && (
                <div className="dropdown-menu">
                  <button className="logout-button" onClick={handleLogout}>
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink to={"/login"}>Iniciar sesión</NavLink>
              <NavLink to={"/sign-up"}>Registrarse</NavLink>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavHeader;
