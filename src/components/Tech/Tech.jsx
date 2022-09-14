import "./tech.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Tech = () => {
  return (
    <section id="tech">
      <h5>What Skill I Possess</h5>
      <h2>Tech Stack</h2>

      <div className="container tech__container">
        {/* FRONT END CONTAINER */}
        <div className="tech__frontend">
          <h3>Frontend Development</h3>
          <div className="tech__content">
            <article className="tech__details">
              <BsPatchCheckFill className="tech__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="tech__details">
              <BsPatchCheckFill className="tech__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="tech__details">
              <BsPatchCheckFill className="tech__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="tech__details">
              <BsPatchCheckFill className="tech__details-icon" />
              <div>
                <h4>TypeScript</h4>
              </div>
            </article>
            <article className="tech__details">
              <BsPatchCheckFill className="tech__details-icon" />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className="tech__details">
              <BsPatchCheckFill className="tech__details-icon" />
              <div>
                <h4>Tailwind</h4>
              </div>
            </article>
            <article className="tech__details">
              <BsPatchCheckFill className="tech__details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>

        {/* BACK END CONTAINER */}

        <div className="tech__backend">
          <h3>Backend Development</h3>
          <div className="tech__content">
            <article className="tech__details">
              <BsPatchCheckFill className="tech__details-icon" />
              <div>
                <h4>Node</h4>
              </div>
            </article>
            <article className="tech__details">
              <BsPatchCheckFill className="tech__details-icon" />
              <div>
                <h4>Express</h4>
              </div>
            </article>
            <article className="tech__details">
              <BsPatchCheckFill className="tech__details-icon" />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="tech__details">
              <BsPatchCheckFill className="tech__details-icon" />
              <div>
                <h4>PostgresSQL</h4>
              </div>
            </article>
            <article className="tech__details">
              <BsPatchCheckFill className="tech__details-icon" />
              <div>
                <h4>MVC</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Tech;
