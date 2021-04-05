import './Input.scss';

const Input = ({ value, onChange, placeholder, icon }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="custom-input"
    />
  );
};

export default Input;
