function Button(props) {
  return (
    <button onClick={props.onClick}>
      {props.child}
    </button>
  );
}

export default Button;
