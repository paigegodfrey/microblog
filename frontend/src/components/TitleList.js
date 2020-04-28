import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTitlesFromAPI } from '../actions/titles';
import { sendVoteToAPI } from "../actions/posts";
import { Link } from 'react-router-dom';
import { HashLoader } from "react-spinners";
import "./TitleList.css";

const TitleList = () => {
  const titles = useSelector(st => st.titles);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTitle = async () => {
      dispatch(fetchTitlesFromAPI()).then(() => setIsLoading(false));
    }
    if (isLoading) {
      fetchTitle();
    }
  }, [dispatch, isLoading]);

  const vote = (direction, id) => {
    dispatch(sendVoteToAPI(id, direction));
  }

  if (isLoading) return (
    <div className="fade-loader-container d-flex align-items-center justify-content-center" style={{ height: '50vh' }}>
      <HashLoader size='50px' color="#123abc" />
    </div>
  );

  if (!isLoading && titles.length === 0) {
    return <b>Please add a post!</b>;
  }

  return (
    <div className="row">
      {titles.map(title => (
        <div key={title.id} className="col">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <Link to={"/" + title.id}>{title.title}</Link>
              </div>
              <div className="card-text">
                <i>{title.description}</i>
              </div>
            </div>
            <div className="card-footer">
              <small>{title.votes} votes</small>
              <i className="fas fa-thumbs-up text-success ml-2"
                  onClick={() => vote("up", title.id)} />
              <i className="fas fa-thumbs-down text-danger ml-2"
                  onClick={() => vote("down", title.id)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TitleList;