import react, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMicOutline } from "react-icons/io5";
import { HiUpload } from "react-icons/hi";
import { GoBell } from "react-icons/go";
import SideMenu from "./SideMenu.jsx";
import "./navbar.css";

function Navbar() {
  const [user,setuser]=useState("data:image/png;base64,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");
  const [navbarModal, setNavbarModal] = useState(false);
  function handleClickModal(){
    setNavbarModal(!navbarModal);
  }
  return (
    <>
    {/* designing navbar component and dividing into left , center and right sections */}
      <div className="navbar">
        {/* left section of navbar with menu and logo */}
        <div className="navbar-left">
          <div className="navbarHamburger">
            <IoMenu size={25} />
          </div>
          <div className="navbar_youtubeImg ">
            <FaYoutube size={34} color="red" className="navbar_youtubeImage"/>
            <div className="navbar_utubeTitle">YouTube</div>
          </div>
        </div>
        {/* center section of navbar with search bar */}
        <div className="navbar-middle">
          <div className="navbar_searchbox">
            <input
              type="text"
              className="navbar_searchBoxInput"
              placeholder="Search"
            />
            <div className="navbar_searchIconBox"><FaSearch /></div>

          </div>
          <div className="navbar_mic">
            <IoMicOutline/>
          </div>
        </div>
        {/* right section of navbar with upload and bell icons */}
        <div className="navbar-right">
          <HiUpload size={26} className="navbar_uploadIcon"/>
          <GoBell size={26} className="navbar_bellIcon"/>
          <img onClick={handleClickModal} src={user} alt="logo" className="navbar-right-logo" />
          {navbarModal &&
            <div className="navbar-modal">
            <div className="navbar-modal-option">Profile</div>
            <div className="navbar-modal-option">Settings</div>
            <div className="navbar-modal-option">Logout</div>
          </div>}
        </div>
      </div>
    </>
  );
}
export default Navbar;
