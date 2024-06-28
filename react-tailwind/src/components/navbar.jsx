import Menu from "./menu";

function Navbar() {
  return (
    <div className="flex bg-green-500 md:bg-violet-500 h-14 justify-center items-center gap-8">
      <Menu>Home</Menu>
      <Menu>Profile</Menu>
      <Menu>Portofolio</Menu>
      <Menu>Contact</Menu>
    </div>
  );
}

export default Navbar;
