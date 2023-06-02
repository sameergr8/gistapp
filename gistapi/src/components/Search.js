import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Octicon from 'react-octicon'
import { useDispatch } from 'react-redux';
import { searchGists } from '../store/actions';

const Search = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (username) {
      dispatch(searchGists(username));
    }
  }, [username, dispatch]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // const handleSearch = () => {
  //   dispatch(searchGists(username));
  // };

  return (
    <Wrapper>
      <InputBox>
      <Octicon name="search" />
      <Input type="text" value={username} onChange={handleUsernameChange} placeholder="Search Gists for the username"/>
      </InputBox>

    </Wrapper>

  )
}

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus{
    outline: 0;
  }
`;

export default Search
