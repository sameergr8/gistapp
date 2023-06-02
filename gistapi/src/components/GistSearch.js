// GistSearch.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchGists } from '../store/actions';

const GistSearch = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSearch = () => {
    dispatch(searchGists(username));
  };

  return (
    <div>
      <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter username" />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default GistSearch;
