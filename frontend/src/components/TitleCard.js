import React from "react";
import { Link } from 'react-router-dom';

const TitleCard = ({titleData, vote}) => {
  const { id, title, description, votes } = titleData;

  return (
    <div className="TitleCard col mt-4">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <Link to={"/" + id}>{title}</Link>
          </div>
          <div className="card-text">
            <i>{description}</i>
          </div>
        </div>
        <div className="card-footer">
          <small>{votes} votes</small>
          <i className="fas fa-thumbs-up text-success ml-2"
            onClick={() => vote("up", id)} />
          <i className="fas fa-thumbs-down text-danger ml-2"
            onClick={() => vote("down", id)} />
        </div>
      </div>
    </div>
  );
}

export default TitleCard;