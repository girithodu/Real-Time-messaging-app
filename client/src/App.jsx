import { useState } from 'react';
import axios from 'axios';
import CreateUser from './CreateUser.jsx';

function App() {
  axios.defaults.baseURL="http://localhost:3001";
  axios.defaults.withCredentials = true;
  return (
   <div>
      <CreateUser/>
   </div>
  )
}

export default App
