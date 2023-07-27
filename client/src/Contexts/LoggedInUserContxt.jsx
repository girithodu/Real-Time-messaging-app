import {createContext, useState} from 'react';

export const LoggedInUserContext = createContext();
export const LoggedInUserContextProvider = ({children}) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  return (
    <LoggedInUserContext.Provider value={{loggedInUserId, setLoggedInUserId, loggedInUser, setLoggedInUser }}>
      {children}
    </LoggedInUserContext.Provider>
  )
}