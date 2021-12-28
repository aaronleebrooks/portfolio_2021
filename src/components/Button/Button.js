import cx from 'classnames';
import styles from './index.module.css';

function Button(props) {
  return (
    <button className={cx(styles.button, props.className)} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
