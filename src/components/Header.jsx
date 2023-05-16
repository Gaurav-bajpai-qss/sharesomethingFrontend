import { useState } from "react";
import img from "../assets/img/pic.jpg";

const Header = ({ setSearch, search }) => {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);

  return (
    <header className="container">
      <div className="wrap">
        <div className="left">
          <h5>Order Something</h5>
          <div className="profile" onClick={() => setActive1(!active1)}>
            <img src={img} alt="img" />
          </div>
          <div className={active1 ? "pop1 active1" : "pop1"}>
            <ul>
              <li>Profile</li>
              <li>Orders</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
        <div className="midle">
          <div className="searchBox">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Something...."
            />
            <button>
              <i className="bx bx-search"></i>
            </button>
          </div>
        </div>
        <div className="right">
          <div className="profile" onClick={() => setActive(!active)}>
            <img src={img} alt="img" />
          </div>
          <div className={active ? "pop active" : "pop"}>
            <ul>
              <li>Profile</li>
              <li>Orders</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
