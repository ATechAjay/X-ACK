import style from "./Text.module.css";

const Text = (props) => {
  const { type = "p", content = "", className = "" } = props;

  // Dynamically render the element based on the type prop.
  const Element = type;

  return <Element className={className}>{content}</Element>;
};

export default Text;
