import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <a href="/">
        <p className={style.logo}>x-ack</p>
      </a>

      <nav>
        <ul className={style.links_container}>
          <li className={style.link}>
            <a href="#">
              About Us <MdOutlineKeyboardArrowDown />
            </a>
          </li>

          <li className={style.link}>
            <a href="#">
              Community <MdOutlineKeyboardArrowDown />
            </a>
          </li>

          <li className={style.link}>
            <a href="#">
              Blog <MdOutlineKeyboardArrowDown />
            </a>
          </li>
          <li className={style.link}>
            <a href="#">
              Contact <MdOutlineKeyboardArrowDown />
            </a>
          </li>
          <li className={style.link}>
            <a href="#">
              Other <MdOutlineKeyboardArrowDown />
            </a>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className={style.auth_container}>
          <li>
            <a href="#" className={style.log_in}>
              Log in
            </a>
          </li>

          <li>
            <a href="#" className={style.sign_up}>
              Sign up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
