const Button = ({ value, onButtonClick }) => {
  let buttonClass;

  if (value === "C") {
    buttonClass = "btn-danger";
  } else if (value === "=") {
    buttonClass = "btn-success";
  } else if (value === "/" || value === "*" || value === "-" || value === "+") {
    buttonClass = "btn-info";
  } else {
    buttonClass = "btn-primary";
  }
  return (
    <button
      className={`btn ${buttonClass} w-100`}
      onClick={() => onButtonClick(value)}
    >
      {value}
    </button>
  );
};

export default Button;
