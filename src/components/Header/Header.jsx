import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import profilePic from "../../assets/me.png";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Kris Syevens</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div className="profile__pic">
          <img src={profilePic} alt="profile pic" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
export default Header;
