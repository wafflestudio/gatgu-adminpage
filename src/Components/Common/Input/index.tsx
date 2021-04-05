import './Input.scss';

interface Props {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  icon?: any;
}

const Input = ({ value, onChange, placeholder, icon }: Props) => {
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
