import { useState, useContext, useEffect } from "react";
import axios from "axios";
import CreateUser from "./CreateUser.jsx";
import {LoggedInUserContext} from './Contexts/LoggedInUserContxt';

function App() {
  axios.defaults.baseURL = "http://localhost:3001";
  axios.defaults.withCredentials = true;
  // since when creating a user a cookie is being returned
    // on mount of component verify the user by checking cookie
    // send a get request to server to verify token
      // send the cookie in the get request
    // if it is set some state to logged in an render the log in page
    const {loggedInUserId, setLoggedInUserId} = useContext(LoggedInUserContext);
    useEffect(()=> {
      axios.get('/profile')
      .then((response)=> {
        const {data} = response;
        console.log(data);
        setLoggedInUserId(data.userId)
      })
      .catch((err) => {
        console.log(err);
      })
    }, [])

  if(!loggedInUserId){
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
