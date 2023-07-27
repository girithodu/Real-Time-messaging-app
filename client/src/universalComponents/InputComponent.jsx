import {useContext} from 'react';
import {LoggedInUserContext} from '../Contexts/LoggedInUserContxt';
const InputComponent = ({ label, labelCss, ...otherProps }) => {
  const { onChangeHandler } = useContext(LoggedInUserContext)
  return (
    <div>
      <label className ={labelCss}>{label}</label>
      <input {...otherProps} onChange={onChangeHandler} />
    </div>
  );
};
export default InputComponent;
