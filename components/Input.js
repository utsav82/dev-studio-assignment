const Input = ({ type, id, name, placeholder, className }) => {
    return (
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`block w-full border border-gray-300 rounded-md pl-5 h-[60px] ${className}`}
      />
    );
  };
  
  export default Input;
  