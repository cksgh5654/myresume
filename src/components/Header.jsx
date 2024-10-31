import { useNavigate } from "react-router-dom";

import CallIcon from "./icons/CallIcon";
import MailIcon from "./icons/MailIcon";
import Logo from "./icons/Logo";

const Header = () => {
  const navigate = useNavigate();
  const handleClickMenu = (path) => {
    navigate(path);
  };

  return (
    <>
      <header>
        <div className="app-header">
          <Logo width={"120px"} height={"30px"} />
          <div className="header-menu">
            <button onClick={() => handleClickMenu("/")}>home</button>
            <button onClick={() => handleClickMenu("/portfolio")}>
              portfolio
            </button>
            <button onClick={() => handleClickMenu("/contact")}>contact</button>
          </div>
          <div className="icon-container">
            <a href="tel:+821023285654">
              <CallIcon width={"24px"} height={"30px"} />
            </a>
            <a href="mailto:qkrcksgh5654@gmail.com">
              <MailIcon width={"24px"} height={"30px"} />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
