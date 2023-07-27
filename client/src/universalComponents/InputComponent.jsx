const InputComponent = ({ label, css, ...otherProps }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...otherProps} />
    </div>
  );
};
export default InputComponent;
