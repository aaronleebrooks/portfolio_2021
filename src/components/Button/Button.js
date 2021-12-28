function Button(props) {
  return (
    <a className={props.className} onClick={props.onClick} href={props.href} target={props.target}>
      {props.children}
    </a>
  );
}

export default Button;
