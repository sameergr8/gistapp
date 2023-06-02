// GistItem.js
import React, { useState, useEffect } from "react";

const GistItem = ({ gist, owner }) => {
  const fileCount = Object.keys(gist.files).length;

  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    fetch(owner.url)
      .then((response) => response.json())
      .then((data) => {
        setAvatarUrl(data.avatar_url);
      })
      .catch((error) => {
        console.error("Error fetching avatar image:", error);
      });
  }, [owner]);

  const handleFileClick = (fileUrl) => {
    window.open(fileUrl, "_blank");
  };
  console.log(gist);
  return (
    <li>
      <div className="grid-container mb-5">
        <div className="grid-item">
          <div className="row">
            <div className="col-lg-2">
              <img src={avatarUrl} alt="Avatar" className="user-image" />
            </div>
            <div className="col-lg-10 align-self-center">
              <h3>
                <a href={owner.html_url} target="blank">
                  {owner.login}
                </a>
              </h3>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <i className="fa-solid fa-file"></i>
          {fileCount} Files
        </div>
        <div className="grid-item">
          <a href={gist.forks_url} target="blank">
            <i className="fa-solid fa-cog"></i> Forks
          </a>
        </div>
        <div className="grid-item">
          <a href={gist.comments_url} target="blank">
            <i className="fa-solid fa-comment"></i> Comments
          </a>
        </div>
        <div className="grid-item">
          <i className="fa-solid fa-star"></i> Stars
        </div>
      </div>
      <p>
        <strong>{gist.description || "No description available"}</strong>
      </p>
      <p>
        <strong>Created at:</strong> {gist.created_at}
      </p>
      <p>
        <strong>Last updated:</strong> {gist.updated_at}
      </p>

      <hr />
      <ul className="file-ul">
        {Object.values(gist.files).map((file) => (
          <li
            key={file.filename}
            style={{ cursor: "pointer" }}
            onClick={() => handleFileClick(file.raw_url)}
          >
            <a href={file.raw_url} target="blank" className="gist-file">
              <i className="fa-solid fa-file"></i> {file.filename}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default GistItem;
