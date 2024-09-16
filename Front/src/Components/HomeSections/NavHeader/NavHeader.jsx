import React, { useContext, useEffect, useState } from "react";

import "./NavHeader.css";
import { NavLink, useNavigate} from "react-router-dom";
import { AppContext } from "../../appContext/AppContext";
import Cookies from "js-cookie";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { capitalizeFirstLetter, getUserInitials } from "../../../utils/utils";

const NavHeader = () => {
  const { isLogged, userLogged, setIsLogged } = useContext(AppContext);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleProfile = () => {
    navigate('/profile');
  }

  console.log(userLogged);
  return (
    <nav>
      <div className={`home-nav-container ${isScrolled ? "scrolled" : ""}`}>
        <h1 className="title">SkillTrade</h1>
        <ul className="right">
          <li className="question">?</li>
          <li className="comunity">Comunidad</li>
          {isLogged ? (
            <div className="user-info" onClick={toggleDropdown}>
              <span className="greeting">
                ¡Qué bueno verte {capitalizeFirstLetter(userLogged?.name)}!
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
                  <button className="logout-button" onClick={handleProfile}>
                  Ver mi perfil
                  </button>
    
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink to={"/login"} className="login-icon">
                <FaSignInAlt />
              </NavLink>
              <NavLink to={"/login"} className="navlink-login">
                Iniciar sesión
              </NavLink>

              <NavLink to={"/sign-up"} className="signup-icon">
                <FaUserPlus />
              </NavLink>
              <NavLink to={"/sign-up"} className="navlink-signup">
                Registrarse
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavHeader;
