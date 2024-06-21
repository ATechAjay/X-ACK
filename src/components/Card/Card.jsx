import Text from "../Text/Text";
import style from "./Card.module.css";

const Card = (props) => {
  const { title = "Card Title", description = "Card description" } = props;

  return (
    <div className={style.card_container}>
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
