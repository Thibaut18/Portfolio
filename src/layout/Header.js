import { NavLink } from "react-router-dom";
import "../styles/Sass/Header.scss";
import ContactButton from "../components/ContactButton";

function Header() {
	const createLetterSpans = (word) => {
		return [...word].map((letter, index) => (
			<span key={index} style={{ animationDelay: `${0.1 * index}s` }}>
				{letter}
			</span>
		));
	};
	const handleScrollToSection = (sectionId, event) => {
		event.preventDefault();
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<header className="header">
			<NavLink to="/homepage">
				<h1 className="header-logo">{createLetterSpans("TT")}</h1>
			</NavLink>
			<nav className="header-nav">
				<ul className="header-nav-ul">
					<li className="header-nav-li">
						<a
							href="#apropos"
							onClick={(e) => handleScrollToSection("apropos", e)}
						>
							À propos
						</a>
					</li>
					<li className="header-nav-li">
						<a
							href="#skills"
							onClick={(e) => handleScrollToSection("skills", e)}
						>
							Mes Skills
						</a>
					</li>
					<li className="header-nav-li">
						<a
							href="#realisations"
							onClick={(e) => handleScrollToSection("projects", e)}
						>
							Mes Réalisations
						</a>
					</li>
				</ul>
			</nav>
			<ContactButton email="thibaut.teinturier18@gmail.com">
				Contactez-moi
			</ContactButton>
		</header>
	);
}

export default Header;
