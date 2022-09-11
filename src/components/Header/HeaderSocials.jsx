import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
    </div>
  );
};
export default HeaderSocials;
