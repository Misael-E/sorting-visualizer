import React from "react";
import generateRandomValues from "../../utils/GenerateValues";

const Header = ({
	handleLength,
	handleSpeed,
	handleAlgo,
	arraySize,
	speed,
	algo,
}) => {
	return (
		<nav>
			<div className="toolbox">
				<div>
					<div className="speed-container">
						<label>Speed</label>
						<input
							type="range"
							onChange={handleSpeed}
							min="1"
							max="10"
							value={Math.ceil(400 / speed)}
						></input>
					</div>

					<div className="length-container">
						<label>Length</label>
						<input
							type="range"
							onChange={handleLength}
							min="5"
							max={100}
							step="1"
							value={arraySize}
						></input>
					</div>

					<select value={algo}>
						<option value="bubbleSort">Bubble Sort</option>
						<option value="selectionSort">Selection Sort</option>
						<option value="insertionSort">Insertion Sort</option>
						<option value="mergeSort">Merge Sort</option>
						<option value="quickSort">Quick Sort</option>
					</select>
				</div>

				<div>
					<button onClick={generateRandomValues}>Generate</button>
				</div>
			</div>
		</nav>
	);
};

export default Header;
