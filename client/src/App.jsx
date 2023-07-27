import { useState } from 'react';
import axios from 'axios';
import CreateUser from './CreateUser.jsx';
import {LoggedInUserContextProvider} from './Contexts/LoggedInUserContxt.jsx';

function App() {
  axios.defaults.baseURL="http://localhost:3001";
  axios.defaults.withCredentials = true;
  return (
   <div>
    <LoggedInUserContextProvider>
      <CreateUser/>
    </LoggedInUserContextProvider>
   </div>
  )
}

export default App
