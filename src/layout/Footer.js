import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/Sass/Footer.scss";

const Footer = () => {
	const githubUrl = "https://github.com/Thibaut18";
	return (
		<footer className="footer">
			<p className="footer-txt">Copyright 2023 ©</p>
			<p className="footer-txt">
				Teinturier Thibaut
				<a
					href={githubUrl}
					target="_blank"
					aria-label="Icone GitHub"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon className="github-icon" icon={faGithub} />
				</a>
			</p>
		</footer>
	);
};
export default Footer;
