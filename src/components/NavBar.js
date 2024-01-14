import { FaPlus, FaSearch } from "react-icons/fa";

const NavBar = ({
  showFormModalFunction,
  //noteClearanceFunction,
  showSearchModalFunction
}) => {
  return (
    <nav className="NavBar">
      <h1>NOTES</h1>
      <div className="actions">
        <FaPlus className="action-icon" onClick={showFormModalFunction} />
        <FaSearch className="action-icon" onClick={showSearchModalFunction} />
      </div>
    </nav>
  );
};

export default NavBar;
