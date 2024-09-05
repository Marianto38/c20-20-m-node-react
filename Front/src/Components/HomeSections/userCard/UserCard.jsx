import React, { useEffect, useState } from "react";
import "./userCard.css";
import { GoHeart } from "react-icons/go";
import { PiHeartDuotone } from "react-icons/pi";
import { truncate } from "../../../utils/utils";
import ModalComponent from "../../ModalComponent/ModalComponent";
import { useLocation, useNavigate } from "react-router-dom";
import UserModalProfile from "../UserModalProfile/UserModalProfile";

const UserCard = ({ user }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate(location.pathname);
  };
  const handleToProfile = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="userCard-container" onClick={() => handleToProfile()}>
        <div className="userCard-containerImage">
          <figure
            className="userModalProfile-containerImage"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.0)), url(${user?.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></figure>
          <article className="userCard-info">
            <p className="userCard-name">{user?.name}</p>
            <p className="userCard-category">{user?.Profession?.name}</p>
          </article>
        </div>
        <article className="userCard-details">
          <p className="userCard-rating">
            {user?.reviews || "Sin"} <span>opiniones</span>
          </p>
          <p className="userCard-description">
            {truncate(user?.description, 65)}
          </p>
        </article>
        <PiHeartDuotone
          className={
            isFavorite ? "userCard-heartIconActive" : "userCard-heartIcon"
          }
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
        />
      </div>
      <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal}>
        <UserModalProfile user={user} />
      </ModalComponent>
    </>
  );
};

export default UserCard;
