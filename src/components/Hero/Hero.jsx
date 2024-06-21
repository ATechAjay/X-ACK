import Button from "../Button/Button";
import Text from "../Text/Text";
import style from "./Hero.module.css";

import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className={style.hero_container}>
      <Text type="h1" content="Most Awaited!" className={style.hero_heading} />

      <Text
        type="p"
        content="a world of cyber security to learn, compete and grow. Some more content about what we offer will come here"
        className={style.hero_description}
      />

      <Button
        buttonText="Get Started Now"
        className={style.hero_button}
        buttonIcon={<FaArrowRightLong />}
        type="button"
      />
    </div>
  );
};

export default Hero;
