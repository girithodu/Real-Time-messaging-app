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
    // className="bg-blue-50 h-screen flex items-center"
    // className="w-64 mx-auto mb-12"
    // className={"block w-full rounded-sm p-2 mb-2"}
    //className={"bg-blue-500 text-white block w-full rounded-sm"}
    <div >
      <form className="flex flex-col items-end"  onSubmit={onSubmitHandler}>
        <InputComponent
          label="Username:"
          labelCss="mr-4"
          name="username"
          type="text"
          placeholder={"username"}
          required
          className="bg-transparent border border-solid border-black p-2 mb-10"
          value={values.username}
        />
        <InputComponent
          label="Password:"
          labelCss="mr-4"
          name="password"
          type="password"
          placeholder="password"
          className="bg-transparent border border-solid border-black p-2 mb-5"
          required

          value={values.password}
        />
        <Button
          type="submit"
          children={"Create User"}
          className="bg-[#5b96f3] p-3 text-white rounded"
        />
      </form>
    </div>
  );
};
export default CreateUser;
