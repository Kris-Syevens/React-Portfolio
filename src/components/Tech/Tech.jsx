import "./tech.css";
import Underline from "../utilities/Underline";
import TechItem from "./TechItem";
import { techItemDataFE, techItemDataBE } from "../utilities/techItems";

const Tech = () => {
  return (
    <section id="tech">
      <h2>Tech Stack</h2>

      <div className="container tech__container">
        {/* FRONT END CONTAINER */}
        <div className="tech__frontend">
          <h3>Frontend Development</h3>
          <div className="tech__content">
            {techItemDataFE.map((el, i) => {
              return <TechItem key={i + 1} name={el} />;
            })}
          </div>
        </div>

        {/* BACK END CONTAINER */}
        <div className="tech__backend">
          <h3>Backend Development</h3>
          <div className="tech__content">
            {techItemDataBE.map((el, i) => {
              return <TechItem key={i + 1} name={el} />;
            })}
          </div>
        </div>
      </div>
      <Underline />
    </section>
  );
};
export default Tech;
