import Button from "../Button";
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
        <Button className={theme.linkButton}>
          About Me
        </Button>
        <Button className={theme.linkButton}>
          Projects
        </Button>
        <Button className={theme.linkButton}>
          Contact Me
        </Button>
      </span>
    </div>
  );
}

export default Header;
