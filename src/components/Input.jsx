/* eslint-disable react/prop-types */


const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;