import "./about.css";
import aboutImage from "../../assets/logo-ks.png";

import Underline from "../utilities/Underline";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-pic">
            <img src={aboutImage} alt="About Me Pic" />
          </div>
        </div>

        <div className="about__content">
          <p>
            My passion for software engineering began when I discovered a need
            to help people connect with technology. Having worked in the
            financial services industry and within culturally diverse
            communities, I realized a great disparity in available resources for
            Spanish-only speakers compared to English speakers. Taking matters
            into my own hands, I sought the necessary knowledge and built an
            online mortgage application website with its content in Spanish to
            help the needs of my community. During my learning journey, I
            uncovered countless tools and technologies that would enable me to
            solve some of the world’s largest problems. I haven’t stopped
            learning and never looked back.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Chat
          </a>
        </div>
      </div>
      <Underline />
    </section>
  );
};

export default About;
