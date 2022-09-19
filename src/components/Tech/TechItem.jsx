import { BsPatchCheckFill } from "react-icons/bs";

const TechItem = ({ name }) => {
  return (
    <article className="tech__details">
      <BsPatchCheckFill className="tech__details-icon" />
      <div>
        <h4>{name}</h4>
      </div>
    </article>
  );
};
export default TechItem;
