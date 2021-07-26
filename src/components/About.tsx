import {
  ionic,
  python,
  js,
  mongodb,
  nodejs,
  sass,
  react,
  typescript,
  mysql,
  css,
  redux,
  aws,
  html,
  vscode,
  express,
  github,
} from '../utils/techlogo';

import './About.css';
// import '../styles/Responsive.css';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">Tous est possible, tout est realisable.</h2>
      <p className="about-text">
        Nous sommes <span>une équipe</span> de savants developpeurs{' '}
        <span>Full Stack</span> et
        <span>UI/UX designer</span>. Rigoureuse et faciné par l'informatique et
        les possibilités infinies de création et realisation de projet, nous
        avons une faccilité d'<span>assimilation</span> et d'
        <span>adaptation</span> qui nous permet d'intervenir sur toute sorte de
        senario.
      </p>

      <div className="about-tech">
        <h2>Les Tech que nous utillisont.</h2>
        <p className="about-text">
          Nous utilisons <span>les technologies</span> qui nous paraissent les
          plus stables, <span>versatiles</span> et <span>évolutives</span> mais{' '}
          <span>restons ouvert</span> aux autres languages, frameworks ou encore
          <span>ecosystemes</span> de travail.
        </p>
        <div className="tech-logo-container">
          <img className="tech-logo" src={html} alt="html" />
          <img className="tech-logo" src={css} alt="css" />
          <img className="tech-logo" src={js} alt="javascript" />
          <img className="tech-logo" src={typescript} alt="typescript" />
          <img className="tech-logo" src={ionic} alt="ionic" />
          <img className="tech-logo" src={sass} alt="sass/scss" />
          <img className="tech-logo" src={react} alt="react/react-native" />
          <img className="tech-logo" src={redux} alt="redux" />
          <img className="tech-logo" src={python} alt="python" />
          <img className="tech-logo" src={nodejs} alt="nodejs" />
          <img className="tech-logo" src={express} alt="express" />
          <img className="tech-logo" src={mysql} alt="mysql" />
          <img className="tech-logo" src={mongodb} alt="mongodb" />
          <img className="tech-logo" src={aws} alt="aws" />
          <img className="tech-logo" src={github} alt="github" />
          <img className="tech-logo" src={vscode} alt="vscode" />
        </div>
      </div>
    </div>
  );
};
export default About;
