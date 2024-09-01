import React from "react";
import "./UserModalProfile.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

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
            {user?.name} {user?.last_name}
          </p>
          <p className="userModalProfile-email">{user?.email}</p>
          <p className="userModalProfile-category">
            {user?.profesion.toUpperCase()}
          </p>
          <p className="userModalProfile-description">{user?.description}</p>
          <p className="userModalProfile-contact">Contáctame</p>
          <div className="userModalProfile-socialMedia">
            {user?.contact?.whatsapp && (
              <Link
                to={`https://wa.me/${
                  user.contact.whatsapp
                }?text=${"hola me interesa"}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="icon" />
              </Link>
            )}
            {user?.contact?.facebook && (
              <Link
                to={user.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icon" />
              </Link>
            )}
            {user?.contact?.instagram && (
              <Link
                to={user.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icon" />
              </Link>
            )}
          </div>
        </article>
        <p className="userModalProfile-rating">
          {user?.reviews} <span>Opiniones</span>
        </p>
      </div>
    </>
  );
};

export default UserModalProfile;
