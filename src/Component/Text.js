function Text(props) {
  return (
    <>

      <input id={props.id}
        placeholder={props.placeholder}
        type={props.type}
        name={props.name} />
    </>
  );
}
export default Text
