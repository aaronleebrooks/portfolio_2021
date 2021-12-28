import Link from "../Link";
import styles from "./index.module.css";
import cx from "classnames";

const theme = {
  root: cx(
    styles.headerBar
  ),
  navigation: cx(
    styles.navSection
  ),
  logo: cx(
    styles.headerLogo,
    styles.headerText,
    styles.largeHeaderText
  ),
  linkButton: cx(
    styles.navButton,
    styles.headerText,
    styles.smallHeaderText
  ),
}

function Header() {
  return (
    <div className={theme.root}>
      <span className={theme.logo}>Aaron Brooks</span>
      <span className={theme.navigation}>
        <Link className={theme.linkButton} href="#about-me">
          About Me
        </Link>
        <Link className={theme.linkButton}>
          Projects
        </Link>
        <Link className={theme.linkButton}>
          Contact Me
        </Link>
      </span>
    </div>
  );
}

export default Header;
