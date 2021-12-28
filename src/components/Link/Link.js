import cx from 'classnames';
import styles from './index.module.css';

function Link(props) {
  return (
    <a className={cx(styles.link, props.className)} href={props.href} target='_blank' rel="noreferrer">
      {props.children}
    </a>
  );
}

export default Link;
