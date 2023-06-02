import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    font-family: Helvetica Neue,Helvetica,Segoe UI,Arial,freesans,sans-serif;
    color: #626465;
  }
  *{
    box-sizing: border-box;
  }
  .grid-container{
    display:grid;
    grid-template-columns: 40% 15% 15% 15% 15%;

  }
  .gist-list{
    list-style: none;
    padding-left:0px;
    margin: 30px 100px 100px 100px;
  }
  .gist-list li{
    border: 1px solid lightgray;
    padding: 25px;
    margin-bottom: 40px;
    border-radius: 15px
  }
  .user-image{
    width: 60px;
    border-radius: 35px
  }
  .List-Heading{
    text-align: center;
    margin-top:50px;
    padding-bottom:50px
  }
  .not-found-sec{
    text-align: center;
  }
  .not-found-sec img{
    width: 150px;
  }
  .not-found-sec p{
    font-size: 18px;
    font-style: italic;
  }
  .gist-file{
    text-decoration:none;
  }
  .file-ul{
    list-style:none;
    padding-left:0px
  }
  .file-ul li{
    display:inline-block;
    padding:10px
  }
`;

export default GlobalStyles;
