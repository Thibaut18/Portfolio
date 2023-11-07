import PropTypes from "prop-types";
import "../styles/Sass/ContactButton.scss";

const ContactButton = ({ email }) => {
	const href = `mailto:${encodeURIComponent(email)}`;

	return (
		<a href={href} className="contact-btn-email">
			<p className="contact-btn-email-txt">Contactez-moi !</p>
		</a>
	);
};

ContactButton.propTypes = {
	email: PropTypes.string.isRequired,
};

export default ContactButton;
