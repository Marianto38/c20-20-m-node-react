import React, { useState } from "react";
import "./userCard.css";
import { GoHeart } from "react-icons/go";
import { PiHeartDuotone } from "react-icons/pi";
import { truncate } from "../../../utils/utils";

const UserCard = ({ user }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="userCard-container">
      <div className="userCard-containerImage">
        <figure>
          <img src={user?.image} alt="" />
        </figure>
        <article className="userCard-info">
          <p className="userCard-name">{user?.name}</p>
          <p className="userCard-category">{user?.profesion}</p>
        </article>
      </div>
      <article className="userCard-details">
        <p className="userCard-rating">{user?.reviews} <span>opiniones</span></p>
        <p className="userCard-description">{truncate(user?.description, 65)}</p>
      </article>
      <PiHeartDuotone className={isFavorite ? "userCard-heartIconActive" : "userCard-heartIcon"} onClick={() => setIsFavorite(!isFavorite)}/>
    </div>
  );
};

export default UserCard;
