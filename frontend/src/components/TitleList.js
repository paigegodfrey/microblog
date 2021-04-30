import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTitlesFromAPI } from '../actions/titles';
import { sendVoteToAPI } from "../actions/posts";
import { PropagateLoader } from "react-spinners";
import TitleCard from './TitleCard';

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
    <>
      <div className="text-center mt-4" style={{ fontSize: '18px' }}>Waiting for Heroku server...</div>
      <div className="d-flex align-items-center justify-content-center" style={{ height: '30vh' }}>
        <div className="fade-loader-container text-center">
          <PropagateLoader size='15px' color="#123abc" />
        </div>
      </div>
    </>
  );

  if (!isLoading && titles.length === 0) {
    return <p className="lead mt-4" style={{ fontSize: '18px' }}>Please add a post!</p>;
  }

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 mb-4">
      {titles.map(title => (
        <TitleCard key={title.id} titleData={title} vote={vote} />
      ))}
    </div>
  );
}

export default TitleList;