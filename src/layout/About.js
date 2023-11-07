import imgDvp from "../assets/imgDvp.webp";
import "../styles/Sass/About.scss";
import profilePic from "../assets/profilePic.webp";
function About() {
	return (
		<section className="about-section">
			<div className="about-section-title-subtitle-txt">
				<div className="about-section-title-img">
					<h1 className="about-section-title">Thibaut Teinturier</h1>
					<img
						src={profilePic}
						alt="Photo de profil"
						className="about-section-img"
					/>
				</div>
				<h2 className="about-section-subtitle" id="apropos">
					À propos :
				</h2>
				<p className="about-section-txt">...</p>
			</div>
			<img src={imgDvp} className="about-section-img" />
		</section>
	);
}

export default About;
