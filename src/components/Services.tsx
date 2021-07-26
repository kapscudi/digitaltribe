import {
  addonExtention,
  creawebapp,
  databaseTable,
  mgmt,
  services,
  uiux,
} from '../utils/techlogo';
import './Services.css';
// import '../styles/Responsive.scss';

const Services = () => {
  return (
    <div className="services-container">
      <h1>SERVICES</h1>
      <h3 className="services-title">
        <p className="services-text"></p>
      </h3>
      <div className="serv-contain">
        <div className="service-item">
          <img className="services-icons" src={uiux} alt="" />
          <h3>Design UI/UX </h3>
          <p>
            Une <b>idée</b> ? Prenons le temps de la <b>mettre en forme</b>{' '}
            ensemble. Notre chef de projet vous aidera à avoir <b>un visuel</b>{' '}
            exact de vos idées.
          </p>
        </div>
        <div className="service-item">
          <img className="services-icons" src={addonExtention} alt="" />
          <h3>Modules Web/App </h3>
          <p>
            L'<b>évolution</b> de votre <b>site</b> ou de votre <b>app</b> amène
            toujours des aménagements en terme <b>d'ajouts</b> ou{' '}
            <b>de refonte technique</b> de certaines de vos offres.
          </p>
        </div>
        <div className="service-item">
          <img className="services-icons" src={creawebapp} alt="" />
          <h3>Creation Web/App</h3>
          <p>
            À l'heure du <b>numerique</b>, une <b></b>vitrine permettant d'
            <b>étendre</b> son entreprise sur internet est une <b>necessité</b>.
            Nous réalisons votre site/app.
          </p>
        </div>
        <div className="service-item">
          <img className="services-icons" src={databaseTable} alt="" />
          <h3>Design base de données</h3>
          <p>
            Nous réalisons l'archithecture de votre base de données de façon a
            stocker vos datas de manière organisé.
          </p>
        </div>
        <div className="service-item">
          <img className="services-icons" src={services} alt="" />
          <h3>Maintenance Web/App</h3>
          <p>
            Nous proposons de faire la maintenance de vos produits digitaux site
            web ou application afin que vous puissiez travailler en etant
            serrain.
          </p>
        </div>
        <div className="service-item">
          <img className="services-icons" src={mgmt} alt="" />
          <h3>Gestion de project</h3>
          <p>
            Nous pouvons orchestrer un chantier de projet de developpement de
            module, web, app, server, communication ou refonte.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
