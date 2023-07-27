import InputComponent from "./universalComponents/InputComponent.jsx";
import Button from "./universalComponents/button";
import axios from "axios";
import { LoggedInUserContext } from "./Contexts/LoggedInUserContxt.jsx";
import { useState, useContext } from "react";

const CreateUser = () => {
  const { setLoggedInUser, setLoggedInUserId, values } =
    useContext(LoggedInUserContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const response = await axios.post("/register", values);
      const { data } = response;
      const { _id, username } = data;
      setLoggedInUserId(_id);
      setLoggedInUser(username);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={onSubmitHandler}>
        <InputComponent
          label="Username"
          name="username"
          type="text"
          placeholder={"username"}
          required
          className={"block w-full rounded-sm p-2 mb-2"}
          value={values.username}
        />
        <InputComponent
          label="Password"
          name="password"
          type="password"
          placeholder="password"
          required
          className={"block w-full rounded-sm p-2 mb-2"}
          value={values.password}
        />
        <Button
          type="submit"
          children={"Create User"}
          className={"bg-blue-500 text-white block w-full rounded-sm"}
        />
      </form>
    </div>
  );
};
export default CreateUser;
