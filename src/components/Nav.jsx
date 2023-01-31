import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav>
      <div className="flex justify-around pt-3 dashboard--nav">
        <i className="fa-solid fa-bars pl-3 "></i>
        <Link to="/"> Personal Hoe </Link>
        <button className="">Logout</button>
      </div>
    </nav>
  );
}
