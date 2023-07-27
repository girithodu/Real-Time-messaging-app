import { useState, useContext } from "react";
import axios from "axios";
import CreateUser from "./CreateUser.jsx";
import {LoggedInUserContext} from './Contexts/LoggedInUserContxt';

function App() {
  axios.defaults.baseURL = "http://localhost:3001";
  axios.defaults.withCredentials = true;
  const {loggedInUser} = useContext(LoggedInUserContext);
  console.log(loggedInUser);
  if(!loggedInUser){
    return (
      <div>
        <CreateUser />
      </div>
    );
  }
  return (
    <>
    <h1>User Logged in </h1>
    </>
  )
}

export default App;
