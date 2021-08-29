import React from "react";
import moment from "moment";
import '../../css/styles.css'

const ReleasesSummary = ({ release }) => {
  return (
    <div className="container row">
      <div className="col l10 offset-l1 s12 m12 ">
        <div className="card vertical releases-summary">
          <div className="card-image">
            <img
              className="img"
              src={release.img}
              alt="sneaker"
            ></img>
          </div>
          <div className="card-content blue-grey-text text-darken-3">
            <span className="card-title">{release.sneakerTitle}</span>
            <p>
              <b>Info</b>: {release.sneakerInfo}
            </p>
            <p>
              <b>Release Date</b>:{" "}
              {moment(release.releaseDate.toDate()).format("L")}
            </p>
            <p>
              <b>Price</b>: {release.price} €
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleasesSummary;
