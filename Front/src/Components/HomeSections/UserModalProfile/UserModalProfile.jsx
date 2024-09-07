import React from "react";
import "./UserModalProfile.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { capitalizeFirstLetter } from "../../../utils/utils";

const UserModalProfile = ({ user }) => {
  return (
    <>
      <div className="userModalProfile">
        <figure
          className="userModalProfile-containerImage"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.0)), url(${user?.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></figure>

        <article className="userModalProfile-info">
          <p className="userModalProfile-name">
            {capitalizeFirstLetter(user?.name)} {capitalizeFirstLetter(user?.last_name)}
          </p>
          <p className="userModalProfile-email">{user?.email}</p>
          <p className="userModalProfile-category">
            {user?.Profession?.name?.toUpperCase()}
          </p>
          <p className="userModalProfile-description">{capitalizeFirstLetter(user?.description)}</p>
          <p className="userModalProfile-contact">Contáctame</p>
          <div className="userModalProfile-socialMedia">
            {user?.tel && (
              <Link
                to={`https://wa.me/${
                  user.tel
                }?text=${"hola me interesa"}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="icon" />
              </Link>
            )}
            {user?.contact?.facebook && (
              <Link
                to={user?.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icon" />
              </Link>
            )}
            {user?.Instagram && (
              <Link
                to={user?.Instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icon" />
              </Link>
            )}
          </div>
        </article>
        <p className="userModalProfile-rating">
        {user?.Reviews?.length > 0 ? user.Reviews.length : "Sin"}{" "}
        <span>opiniones</span>
        </p>
      </div>
    </>
  );
};

export default UserModalProfile;
