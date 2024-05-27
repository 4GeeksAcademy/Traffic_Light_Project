import React, { useEffect, useState } from "react";

// Create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red");
	const [isChangingColors, setIsChangingColors] = useState(false);

	useEffect(() => {
		let interval;

		if (isChangingColors) {
			interval = setInterval(() => {
				setSelectedColor(prevColor => {
					if (prevColor === "red") return "yellow";
					if (prevColor === "yellow") return "green";
					if (prevColor === "green") return "red";
				});
			}, 1000);
		}

		return () => clearInterval(interval);
	}, [isChangingColors]);

	const ButtonClick = () => {
		setIsChangingColors(prevState => !prevState);
	};

	return (
		<div>
			<div className="top">
				<div className="traffic-top"></div>
			</div>
			<div className="traffic-light">
			    <div onClick={() => setSelectedColor("red")} className={"light red" + (selectedColor === "red" ? " glow" : "")}></div>
				<div onClick={() => setSelectedColor("yellow")} className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}></div>
				<div onClick={() => setSelectedColor("green")} className={"light green" + (selectedColor === "green" ? " glow" : "")}></div>
			</div>
			<div className="button">
				<button onClick={ButtonClick}><strong>{isChangingColors ? "Stop" : "Change Light"}</strong></button>
			</div>
		</div>
	);
};

export default Home;
