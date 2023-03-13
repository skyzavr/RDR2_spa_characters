import classes from './header.module.css';
import Github from '../../../assets/images/logo/github';
import logo from '../../../assets/images/logo/rdr2Logo.png';
import line from '../../../assets/images/others/line.png';
import halfLine from '../../../assets/images/others/halfLine.png';
import { useState } from 'react';
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuHadler = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <header
      className={`${classes.container} ${openMenu ? classes.menuOpen : ''}`}
    >
      <div className={classes.github}>
        <a
          href="https://github.com/skyzavr/RDR2_spa_characters"
          target="_blanc"
        >
          <Github />
        </a>
      </div>
      <nav className={`${classes.menu} `}>
        <button className={classes.navBtn} onClick={menuHadler}>
          <div>
            <img src={line} alt="line logo" />
          </div>
          <div>
            <img src={halfLine} alt="half line logo" />
          </div>
        </button>
        <ul className={openMenu ? classes.navLinks : ''}>
          <li>
            <a href="#Characters">Characters</a>
          </li>
          <li>
            <a href="#Horses">Horses</a>
          </li>
          <li>
            <a href="#Nature">Nature</a>
          </li>
          <li>
            <a href="#Story ">Story</a>
          </li>
        </ul>
      </nav>

      <div className={classes.logo}>
        <img src={logo} alt="RDR2 logo" />
      </div>
    </header>
  );
};
export default Header;
