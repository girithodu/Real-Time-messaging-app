import InputComponent from "./universalComponents/InputComponent.jsx";
import Button from "./universalComponents/button";
import axios from "axios";
import {LoggedInUserContext} from './Contexts/LoggedInUserContxt.jsx';
import { useState, useContext } from "react";


const initialValues = {
  username: "",
  password: "",
};


const CreateUser = () => {
  const {setLoggedInUser, setLoggedInUserId} = useContext(LoggedInUserContext);
  const [values, setValues] = useState(initialValues);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const response = await axios.post("/register", values);
      const {data} = response;
      const {_id,username} = data;
      setLoggedInUserId(_id);
      setLoggedInUser(username);
      setValues(initialValues);
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
          onChange={onChangeHandler}
          className={"block w-full rounded-sm p-2 mb-2"}
          value = {values.username}
        />
        <InputComponent
          label="Password"
          name="password"
          type="password"
          placeholder="password"
          required
          onChange={onChangeHandler}
          className={"block w-full rounded-sm p-2 mb-2"}
          value = {values.password}
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
