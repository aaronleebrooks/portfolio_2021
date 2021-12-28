import styles from "./index.module.css";
import cx from "classnames";
import Button from "../Button";

const theme = {
  root: cx(
    styles.root
  ),
  textContainer: cx(
    styles.textContainer
  ),
  subText: cx(
    styles.text,
    styles.subText
  ),
  mainText: cx(
    styles.text,
    styles.mainText
  ),
  resumeBtn: cx(
    styles.resumeBtn
  ),
  photoContainer: cx(
    styles.photoContainer
  ),
  photo: cx(
    styles.photo
  )
}

function AboutMe() {
  return (
    <div className={theme.root}>
      <div className={theme.textContainer}>
        <span className={theme.subText}>Words, Words, Words</span>
        <span className={theme.mainText}>I do things that are good and cool.</span>
        <Button className={theme.resumeBtn}>My Resume</Button>
      </div>
      <div className={theme.photoContainer}>
        <img className={theme.photo} alt="me" src="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp" />
      </div>
    </div>
  );
}

export default AboutMe;
