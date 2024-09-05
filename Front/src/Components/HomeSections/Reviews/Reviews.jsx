import React from "react";
import "./Reviews.css";
import Masonry from "react-masonry-css";

function Card({ text, name, color }) {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      {/* <p className="card-name">{name}</p> */}
      <p className="card-text">{text}</p>
    </div>
  );
}

const Reviews = ({userActive}) => {
  console.log(userActive)

  const colors = ["#F65035", "#7FBFA2", "#FFCD54", "#3845AD", "#F9CDCC"]; 
  const breakpointColumnsObj = {
    default: 6,
    1100: 6,
    700: 3,
    500: 2,
  };

  return (
    <div className="reviews">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {userActive?.Reviews?.map((review, index) => (
          <div        key={`${review.userId}-${index}`}  className="my-masonry-grid_item">
            <Card
              text={review.review}
              color={colors[index % colors.length]}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Reviews;
