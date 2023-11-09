import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/Sass/ProjectsItem.scss";

function ProjectsItem({ title, subtitle, imgSrc, alt, repoUrl }) {
	const handleProjectClick = () => {
		window.open(repoUrl, "_blank");
	};
	const message = "Clique pour voir le code sur GitHub ";
	const messageSpans = message.split("").map((char, index) => (
		<span
			key={index}
			className="letter"
			style={{ animationDelay: `${index * 0.05}s` }}
		>
			{char}
		</span>
	));

	return (
		<div className="projects-item" onClick={handleProjectClick}>
			<div className="projects-item-hover-container">
				<p className="projects-item-hover-message">
					{messageSpans}{" "}
					<FontAwesomeIcon
						className="icon"
						icon={faGithub}
						style={{ animationDelay: `${message.length * 0.05}s` }}
					/>
				</p>
			</div>
			<img src={imgSrc} alt={alt} className="projects-item-img" />
			<div className="projects-item-img-title-and-subtitle">
				<h2 className="projects-item-img-title">{title}</h2>
				<p className="projects-item-img-subtitle">{subtitle}</p>
			</div>
		</div>
	);
}

ProjectsItem.propTypes = {
	title: PropTypes.string.isRequired,
	imgSrc: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	repoUrl: PropTypes.string,
};

export default ProjectsItem;
