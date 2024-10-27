import Button from "./Button";
import "./Header.scss";

function Header({ title }) {
  return (
    <header className="Header">
      <div className="header_left"><Button text='<'/></div>
      <div className="header_center">{title}</div>
      <div className="header_right"><Button text='>'/></div>
    </header>
  );
}

export default Header;
