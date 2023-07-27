import InputComponent from "./universalComponents/InputComponent.jsx";
import Button from "./universalComponents/button";
import { useState } from "react";
const initialValues = {
  username: "",
  password: "",
};
const CreateUser = () => {
  const [values, setValues] = useState(initialValues);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12">
        <InputComponent
          label="Username"
          name="username"
          type="text"
          placeholder={'username'}
          required
          onChange={onChangeHandler}
          className={'block w-full rounded-sm p-2 mb-2'}
        />
        <InputComponent
          label="Password"
          name="password"
          type="text"
          placeholder="password"
          required
          onChange={onChangeHandler}
          className={'block w-full rounded-sm p-2 mb-2'}
        />
        <Button type="submit" children={"Create User"} className={'bg-blue-500 text-white block w-full rounded-sm'} />
      </form>
    </div>
  );
};
export default CreateUser;
