import style from "./Button.module.css";

const Button = (props) => {
  const {
    buttonText = "Button",
    className = "",
    buttonIcon = "",
    type = "button",
  } = props;
  return (
    <button className={className} type={type}>
      {buttonText} {buttonIcon}
    </button>
  );
};

export default Button;
