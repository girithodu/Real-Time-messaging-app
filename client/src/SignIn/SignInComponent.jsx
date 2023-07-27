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
    <div className="flex flex-col items-end">
      <h3 >Already a member?</h3>
      <form className="flex flex-col items-end" onSubmit={onSubmitHandler}>
        <InputComponent
          label="Username"
          labelCss="mr-4"
          type="text"
          name="logInUsername"
          className="bg-transparent border border-solid border-black p-2 mb-10"
          placeholder="username"
          required
        />
        <InputComponent
          label="Password"
          labelCss="mr-4"
          name="logInPassword"
          type="password"
          placeholder="password"
          className="bg-transparent border border-solid border-black p-2 mb-5"
          required
        />
        <Button
          children={"Sign In"}
          type="submit"
          className="bg-black p-3 text-white rounded"
        />
      </form>
    </div>
  );
};
export default SignIn;
