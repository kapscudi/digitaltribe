import emailjs from 'emailjs-com';
import './Contact.css';
// import '../styles/Responsive.css';

const Contact = () => {
  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log(`values`, e.target);
    emailjs
      .sendForm(
        'service_l60zate',
        'template_x7117es',
        e.target,
        'user_vS7WUyuALghhZvpbZnHFm'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-container">
      <h1>CONTACT</h1>
      <p>
        Un project ou une idée a realiser, nous sommes toujours disponible et à
        l'écoute. Vous avez un projet, vous voulez faire évoluer? N'hésitez pas
        nous contacter.
      </p>
      <form className="contact-form" onSubmit={onSubmit}>
        <div className="form-emlt">
          <p>Prenom</p>
          <input
            name="name"
            required
            type="text"
            placeholder="entrez un prenom"
          />
        </div>
        <div className="form-emlt">
          <p>Nom</p>
          <input
            name="lastname"
            required
            type="text"
            placeholder="entrez un nom"
          />
        </div>
        <div className="form-emlt">
          <p>Société</p>
          <input
            name="company"
            type="text"
            placeholder="Remseignez votre société si c'est le cas."
          />
        </div>
        <div className="form-emlt">
          <p>Email</p>
          <input name="email" required type="email" placeholder="Votre email" />
        </div>
        <div className="form-emlt">
          <p>Objet</p>
          <input
            name="subject"
            required
            type="text"
            placeholder="votre project (ex. Site Web...)"
          />
        </div>
        <div className="form-emlt">
          <p>Message</p>
          <textarea
            name="message"
            required
            placeholder="devrivez votre demande ici"
          />
        </div>
        <button className="send-button" onSubmit={onSubmit}>
          <p>Envoyer</p>
        </button>
      </form>
    </div>
  );
};
export default Contact;
