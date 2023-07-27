import { useContext } from "react";
import InputComponent from "../universalComponents/InputComponent";
import Button from "../universalComponents/button";
import axios from "axios";
import { LoggedInUserContext } from "../Contexts/LoggedInUserContxt";
const SignIn = () => {
  const { values, setLoggedInUserId } = useContext(LoggedInUserContext);
  const { logInUsername, logInPassword } = values;
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const response = await axios.post("/signIn", {
        username: logInUsername,
        password: logInPassword,
      });
      const { data } = response;
      const { _id, username } = data;
      setLoggedInUserId(_id);
      setLoggedInUser(username);
    } catch (err) {
      throw err;
      console.log(err);
    }
  };
  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={onSubmitHandler}>
        <InputComponent
          label="Username"
          type="text"
          name="logInUsername"
          placeholder="username"
          className={"block w-full rounded-sm p-2 mb-2"}
          required
        />
        <InputComponent
          label="Password"
          name="logInPassword"
          type="password"
          placeholder="password"
          required
          className={"block w-full rounded-sm p-2 mb-2"}
        />
        <Button
          children={"Sign In"}
          type="submit"
          className={"bg-blue-500 text-white block w-full rounded-sm"}
        />
      </form>
    </div>
  );
};
export default SignIn;
