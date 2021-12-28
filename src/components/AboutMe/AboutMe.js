import styles from "./index.module.css";
import cx from "classnames";
import Link from "../Link";
import ResumePdf from "../../assets/pdf/resume.pdf";


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
  ),
  downloadIcon: cx(
    styles.downloadIcon
  )
}

function AboutMe() {
  return (
    <div className={theme.root} id="about-me">
      <div className={theme.textContainer}>
        <span className={theme.subText}>Words, Words, Words</span>
        <span className={theme.mainText}>I do things that are good and cool.</span>
        <Link className={theme.resumeBtn} href={ResumePdf} download="resume.pdf" target='_blank'>
          My Resume <span className={theme.downloadIcon} />
        </Link>
      </div>
      <div className={theme.photoContainer}>
        <img className={theme.photo} alt="me" src="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp" />
      </div>
    </div>
  );
}

export default AboutMe;
