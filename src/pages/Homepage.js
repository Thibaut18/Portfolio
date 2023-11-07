import About from "../layout/About";
import Skills from "../layout/Skills";
import Projects from "../layout/Projects";

const Homepage = () => {
	return (
		<div className="main">
			<About />
			<Skills />
			<Projects />
		</div>
	);
};

export default Homepage;
