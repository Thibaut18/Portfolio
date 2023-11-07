import PropTypes from "prop-types";
import "../styles/Sass/SkillsItem.scss";

function SkillsItem({ title, imgSrc, alt }) {
	return (
		<div className="skills-item">
			<img src={imgSrc} alt={alt} className="skills-image" />
			<h2 className="skills-title">{title}</h2>
		</div>
	);
}

SkillsItem.propTypes = {
	title: PropTypes.string.isRequired,
	imgSrc: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

export default SkillsItem;
