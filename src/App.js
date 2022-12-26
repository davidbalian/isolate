import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
	return (
		<div>
			<Header />
			<div className='main'>
				<Home />
			</div>
		</div>
	);
};

export default App;
