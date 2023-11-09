import ProjectsItem from "../components/ProjectsItem";
import abPic from "../assets/projectsPic/abPic.webp";
import eventsPic from "../assets/projectsPic/eventsPic.webp";
import omfPic from "../assets/projectsPic/omfPic.webp";
import kasaPic from "../assets/projectsPic/kasaPic.webp";
import sbPic from "../assets/projectsPic/sbPic.webp";
import printitPic from "../assets/projectsPic/printitPic.webp";
import bookiPic from "../assets/projectsPic/bookiPic.webp";
import ninaPic from "../assets/projectsPic/ninaPic.webp";
import "../styles/Sass/Projects.scss";

const Projects = () => {
	return (
		<section className="projects-section">
			<h2 className="projects-section-title" id="projects">
				Mes Réalisations
			</h2>
			<div className="projects-section-items">
				<ProjectsItem
					title="ArgentBank :"
					subtitle="React/Redux"
					imgSrc={abPic}
					alt="Projet Argent Bank"
					repoUrl="https://github.com/Thibaut18/ArgentBank-website"
				/>
				<ProjectsItem
					title="724 Events :"
					imgSrc={eventsPic}
					alt="Projet Débug 724Events"
					repoUrl="https://github.com/Thibaut18/P-10_Debug"
					subtitle="Débug"
				/>
				<ProjectsItem
					title="OhMyFood! :"
					imgSrc={omfPic}
					alt="Projet OhMyFood"
					repoUrl="https://github.com/Thibaut18/Projet-4-OC"
					subtitle="Animations CSS"
				/>
				<ProjectsItem
					title="Kasa :"
					imgSrc={kasaPic}
					alt="Projet Kasa"
					repoUrl="https://github.com/Thibaut18/Projet-8_Kasa"
					subtitle="React"
				/>
				<ProjectsItem
					title="Portefolio - Sophie Bluel :"
					imgSrc={sbPic}
					alt="Projet Portefolio Sophie Bluel"
					repoUrl="https://github.com/Thibaut18/Projet-6_Creez-une-page-web-dynamique-avec-javascript"
					subtitle="Javascript"
				/>
				<ProjectsItem
					title="Print-It :"
					imgSrc={printitPic}
					alt="Projet Print-It"
					repoUrl="https://github.com/Thibaut18/P5_Print-It"
					subtitle="Gestion d'un caroussel en javasacript"
				/>
				<ProjectsItem
					title="Booki :"
					imgSrc={bookiPic}
					alt="Projet Booki"
					repoUrl="https://github.com/Thibaut18/Projet-3"
					subtitle="HTML/CSS"
				/>
				<ProjectsItem
					title="Portefolio - Nina Carducci :"
					imgSrc={ninaPic}
					alt="Projet Portefolio Nina Carducci"
					repoUrl="https://github.com/Thibaut18/Opti-SEO"
					subtitle="Optimisation SEO"
				/>
			</div>
		</section>
	);
};
export default Projects;
