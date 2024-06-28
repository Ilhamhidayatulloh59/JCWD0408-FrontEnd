function Menu(props) {
  return (
    <div
      className="text-white hover:text-black hover:cursor-pointer"
    >
      <p>{props.children}</p>
    </div>
  );
}

export default Menu;
