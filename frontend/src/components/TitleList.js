import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTitlesFromAPI } from '../actions/titles';
import PostCard from "./PostCard";
import { HashLoader } from "react-spinners";

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
    <div>
      {titles.map(title => <PostCard title={title} vote={vote} key={title.id} />)}
    </div>
  );
}

export default TitleList;