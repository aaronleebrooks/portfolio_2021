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
          Resume
        </Button>
        <Button className={theme.linkButton}>
          Demos
        </Button>
        <Button className={theme.linkButton}>
          Contact Me
        </Button>
      </span>
    </div>
  );
}

export default Header;
