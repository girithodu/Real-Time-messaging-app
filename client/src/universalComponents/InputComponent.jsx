import {useContext} from 'react';
import {LoggedInUserContext} from '../Contexts/LoggedInUserContxt';
const InputComponent = ({ label, css, ...otherProps }) => {
  const { onChangeHandler } = useContext(LoggedInUserContext)
  return (
    <div>
      <label>{label}</label>
      <input {...otherProps} onChange={onChangeHandler} />
    </div>
  );
};
export default InputComponent;
