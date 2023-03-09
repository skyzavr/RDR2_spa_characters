import classes from './header.module.css';
import Github from '../../../assets/images/logo/github';
import logo from '../../../assets/images/logo/rdr2Logo.png';
const Header = () => {
  return (
    <header className={classes.container}>
      <div className={classes.github}>
        <a
          href="https://github.com/skyzavr/RDR2_spa_characters"
          target="_blanc"
        >
          <Github />
        </a>
      </div>
      <nav className={classes.menu}>
        <ul>
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
