import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const cookies = Cookies.get("token");

  const [isLogged, setIsLogged] = useState(false);

  const [userData, setUserData] = useState(() => {
    const savedUserData = localStorage.getItem("userData");
    return savedUserData ? JSON.parse(savedUserData) : null;
  });
  const [noUserFounded, setNoUserFounded] = useState(false);
  const [professionCategorySelected, setProfessionCategorySelected] =
    useState(null);
  const [usersSelectedByProfession, setUsersSelectedByProfession] = useState(
    []
  );
  useEffect(() => {
    if (userData) {
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userData");
    }
  }, [userData]);

  return (
    <AppContext.Provider
      value={{
        isLogged,
        setIsLogged,
        userData,
        setUserData,
        professionCategorySelected,
        setProfessionCategorySelected,
        usersSelectedByProfession,
        setUsersSelectedByProfession,
        noUserFounded,
        setNoUserFounded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
