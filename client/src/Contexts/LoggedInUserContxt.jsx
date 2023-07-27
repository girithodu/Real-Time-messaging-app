import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const LoggedInUserContext = createContext();
const initialValues = {
  username: "",
  password: "",
  logInUsername:"",
  logInPassword:""
};
export const LoggedInUserContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  const [values, setValues] = useState(initialValues);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  useEffect(() => {
    axios
      .get("/profile")
      .then((response) => {
        const { data } = response;
        console.log(data);
        setLoggedInUserId(data.userId);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <LoggedInUserContext.Provider
      value={{
        loggedInUserId,
        setLoggedInUserId,
        loggedInUser,
        setLoggedInUser,
        values,
        setValues,
        onChangeHandler
      }}
    >
      {children}
    </LoggedInUserContext.Provider>
  );
};
