function Backdrop(props) {
  return (
    <div
      onClick={props.onClick}
      className="fixed z-40 bg-black/75 w-full h-screen top-0 left-0"
    ></div>
  );
}
export default Backdrop;
