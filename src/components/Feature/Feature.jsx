import Card from "../Card/Card";
import Text from "../Text/Text";
import style from "./Feature.module.css";
import { CARD_DATA } from "../../utils/Contants";

const Feature = () => {
  // Function to render card on UI
  function renderCardOnUi(CARD_DATA) {
    return CARD_DATA.map((card) => (
      <Card key={card.id} title={card.title} description={card.description} />
    ));
  }

  return (
    <div>
      <Text
        type="h2"
        content="Things users love about X-ACK"
        className={style.feature_heading}
      />
      <div className={style.card_container}>{renderCardOnUi(CARD_DATA)}</div>
    </div>
  );
};

export default Feature;
