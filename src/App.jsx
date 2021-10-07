import { useEffect, useState } from "react";
import generateRandomValues from "./utils/GenerateValues";
import "./App.css";
import Bars from "./components/bars/Bars";
import Header from "./components/header/Header";

const App = () => {
	const [arraySize, setArraySize] = useState(100);
	const [speed, setSpeed] = useState(250);
	const [compare, setCompare] = useState([]);
	const [bars, setBars] = useState([]);
	const [completed, setCompleted] = useState(true);

	useEffect(() => {
		setBars(generateRandomValues(arraySize));
	}, [arraySize]);

	// handling the length of the array
	const handleLength = (event) => {
		setArraySize(Number(event.target.value));
	};

	// handling the speed of sorting
	const handleSpeed = (event) => {
		setSpeed(Math.ceil(400 / Number(event.target.value)));
	};

	return (
		<div>
			<Header
				handleLength={handleLength}
				handleSpeed={handleSpeed}
				completed={completed}
				arraySize={arraySize}
				speed={speed}
			/>
			<Bars bars={bars} />
		</div>
	);
};

export default App;
