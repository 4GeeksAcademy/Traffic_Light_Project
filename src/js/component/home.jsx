import React, { useEffect, useState } from "react";
import TrafficLight from "./trafficLight";
// Create your first component
const Home = () => {
	return (
		<div>
			<div className="top">
				<div className="traffic-top"></div>
			</div>
			<TrafficLight />
		</div>
	);
};

export default Home;
