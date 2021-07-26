import { useState } from 'react';
import { portfolio } from '../utils/portData';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState<string>('');

  // function to remove duplicates
  function removeDuplicates(array: any) {
    return array.filter((a: any, b: any) => array.indexOf(a) === b);
  }

  const data = filter
    ? portfolio.filter((item) => item.type.includes(filter))
    : portfolio;
  const filtre = removeDuplicates(portfolio.flatMap((fil) => fil.type));

  return (
    <div className="portfolio-container">
      <h1>PORTFOLIO</h1>
      <div className="portfolio-filter">
        <h4>Filtres :</h4>
        <div className="portfolio-filter-el" onClick={() => setFilter('')}>
          <p>All</p>
        </div>
        {filtre.map((el: string, i: any) => (
          <div
            key={i}
            className="portfolio-filter-el"
            onClick={() => setFilter(el)}
          >
            <p>{el}</p>
          </div>
        ))}
      </div>
      <div className="portfolio-masony">
        {data.map((item: any, i) => (
          <div
            key={i}
            className="project-cover"
            style={{
              backgroundSize: 'cover',
              backgroundImage: `url(${item.img})`,
              backgroundPosition: 'center center',
            }}
            onClick={() => window.open(item.link)}
          >
            <h4>{item.projet}</h4>
            <p>{item.job}</p>

            <div>
              <p>{item.techs.join(' • ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Portfolio;
