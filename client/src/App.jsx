import { useState, useContext, useEffect } from "react";
import axios from "axios";
import CreateUser from "./CreateUser.jsx";
import { LoggedInUserContext } from "./Contexts/LoggedInUserContxt";
import SignIn from './SignIn/SignInComponent'

function App() {
  axios.defaults.baseURL = "http://localhost:3001";
  axios.defaults.withCredentials = true;
  const { loggedInUserId, setLoggedInUserId } = useContext(LoggedInUserContext);


  if (!loggedInUserId) {
    return (
      <div>
        <CreateUser />
        <SignIn />
      </div>
    );
  }
  return (
    <>
      <h1>User Logged in </h1>
    </>
  );
}

export default App;
