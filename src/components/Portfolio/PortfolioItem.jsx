const PortfolioItem = ({ image, title, github, demo, description }) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__content__wrapper">
        <div className="portfolio__item-image">
          <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="portfolio__item-cta">
        <a href={github} target="_blank" rel="noreferrer" className="btn">
          Github
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
};
export default PortfolioItem;
