import React from "react";
import { Parallax } from "react-parallax";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

import img from "./elliott-engelmann-DjlKxYFJlTc-unsplash.jpg"

const App = () => {
	return (
		<div>
			<Header />
			<div className='main'>
				<Parallax strength={-200} bgImage={img} >
					<Home />
				</Parallax>
				<About />
			</div>
			<Footer />
		</div>
	);
};

export default App;
