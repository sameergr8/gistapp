// GistList.js
import React from "react";
import { useSelector } from "react-redux";
import GistItem from "./GistItem";
import notfound from "../not-found.png";
import loading from "../loadingimage.gif";
import Error from "../errorimage.png";

const GistList = () => {
  const gists = useSelector((state) => state.gists);

  const renderGists = () => {
    if (gists.loading) {
      return (
        <div className="not-found-sec">
          <img src={loading} alt="loading"></img>
          <p>Loading gists. Please Wait......</p>
        </div>
      );
    }

    if (gists.error) {
      return (
        <div className="not-found-sec">
          <img src={Error} alt="error"></img>
          <p>Something went wrong. Please try again later.</p>
        </div>
      );
    }

    if (gists.data.length === 0) {
      return (
        <div className="not-found-sec">
          <img src={notfound} alt="notfound"></img>
          <p>No gists found. Try searching with a different Username.</p>
        </div>
      );
    }

    return (
      <ul className="gist-list">
        {gists.data.map((gist) => (
          <GistItem key={gist.id} gist={gist} owner={gist.owner} />
        ))}
      </ul>
    );
  };

  return <div>{renderGists()}</div>;
};

export default GistList;
