import Text from "../Text/Text";
import style from "./Card.module.css";

const Card = (props) => {
  const { title = "", description = "", width = "" } = props;

  console.log(width);

  return (
    <div className={style.card_container} style={width}>
      <Text type="h3" content={title} className={style.card_title} />

      <div className={style.card_content}>
        <Text
          type="p"
          content={description}
          className={style.card_description}
        />
      </div>
    </div>
  );
};

export default Card;
