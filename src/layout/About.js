import imgDvp from "../assets/imgDvp.webp";
import "../styles/Sass/About.scss";
import profilePic from "../assets/profilePic.webp";
function About() {
	return (
		<section className="about-section">
			<div className="about-section-title-subtitle-txt">
				<div className="about-section-title-img">
					<h1 className="about-section-title">Thibaut Teinturier</h1>
					<div className="img-container">
						<img
							src={profilePic}
							alt="Photo de profil"
							className="about-section-img-profil"
						/>
					</div>
				</div>
				<h2 className="about-section-subtitle" id="apropos">
					À propos :
				</h2>
				<p className="about-section-txt">
					Passionné par le monde du numérique et multimédia depuis
					l&apos;enfance, il n&apos;y a pas pour moi de métier plus stimulant
					que celui de développeur web.{" "}
				</p>
				<p className="about-section-txt">
					Actuellement spécialisé dans le développement front-end avec des
					technologies comme React/Javascript, je compte travailler dur dans le
					but de devenir un développeur full-stack chevronné !
				</p>
				<p className="about-section-txt">
					Diplômé d&apos;un bac+2 Techniques de commercialisation et ayant
					obtenu ma première année en fac de psychologie, c&apos;est donc une
					reconversion totale que j&apos;ai pu réaliser grâce à OpenClassRooms,
					ce qui est pour moi une chance exceptionnelle.
				</p>
				<p className="about-section-txt">
					D&apos;un naturel perfectionniste, d&apos;autant plus lorsque cela
					concerne la technologie, je donnerai le meilleur de moi-même si vous
					décidez de me faire confiance pour la réalisation de l&apos;un de vos
					projets.
				</p>
				<p className="about-section-txt">
					Je retourne coder, en vous souhaitant une bonne journée ! ;){" "}
				</p>
			</div>
			<img
				src={imgDvp}
				className="about-section-img"
				alt="Développeur front design"
			/>
		</section>
	);
}

export default About;
