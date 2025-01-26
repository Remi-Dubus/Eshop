import { NavLink } from "react-router-dom";
import logo from "../assets/images/eshop.png";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 py-8 text-white flex flex-col items-center">
      <NavLink to={"/"}>
        {" "}
        <img src={logo} alt="eshop-logo" />
      </NavLink>
      <h1 className="text-4xl">ESHOP</h1>
    </nav>
  );
}
