import reactIcon from "../assets/skillsPics/reactIcon.webp";
import jsIcon from "../assets/skillsPics/jsIcon.webp";
import reduxIcon from "../assets/skillsPics/reduxIcon.webp";
import htmlIcon from "../assets/skillsPics/htmlIcon.webp";
import cssIcon from "../assets/skillsPics/cssIcon.webp";
import sassIcon from "../assets/skillsPics/sassIcon.webp";
import gitIcon from "../assets/skillsPics/gitIcon.webp";
import figmaIcon from "../assets/skillsPics/figmaIcon.webp";
import swaggerEditorIcon from "../assets/skillsPics/swaggerEditorIcon.png";
import SkillsItem from "../components/SkillsItem";
import "../styles/Sass/Skills.scss";

function Skills() {
	return (
		<section className="skills">
			<h2 className="skills-section-title" id="skills">
				Mes Skills
			</h2>
			<div className="skills-container">
				<SkillsItem title="REACT" imgSrc={reactIcon} alt="Icone React" />
				<SkillsItem title="JAVASCRIPT" imgSrc={jsIcon} alt="Icone Javascript" />
				<SkillsItem title="REDUX" imgSrc={reduxIcon} alt="Icone Redux" />
				<SkillsItem title="HTML" imgSrc={htmlIcon} alt="Icone Html" />
				<SkillsItem title="CSS" imgSrc={cssIcon} alt="Icone Css" />
				<SkillsItem title="SASS" imgSrc={sassIcon} alt="Icone Sass" />
				<SkillsItem title="GIT" imgSrc={gitIcon} alt="Icone Git" />
				<SkillsItem title="FIGMA" imgSrc={figmaIcon} alt="Icone Figma" />
				<SkillsItem
					title="SWAGGER EDITOR"
					imgSrc={swaggerEditorIcon}
					alt="Icone Swagger Editor"
				/>
			</div>
		</section>
	);
}

export default Skills;
