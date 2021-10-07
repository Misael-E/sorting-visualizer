import { useEffect, useState } from "react";
import "./Bars.css";

const Bars = ({ bars }) => {
	const [width, setWidth] = useState(
		Math.min(20, Math.ceil(window.innerWidth / bars.length) - 5)
	);

	const color = bars.length <= 50 && width > 14 ? "black" : "transparent";

	// screen resize handler
	useEffect(() => {
		const handleResize = () => {
			setWidth(
				Math.min(20, Math.ceil(window.innerWidth / bars.length) - 8)
			);
		};

		window.addEventListener("resize", handleResize);

		setWidth(Math.min(20, Math.ceil(window.innerWidth / bars.length) - 8));
	}, [bars.length]);

	return (
		<div className="bars-container">
			{bars.map((bar, i) => {
				const height = (bar * 200) / bars.length;

				const style = {
					height: height,
					width: width,
					color: color,
				};
				return (
					<div key={i} className="bar" style={style}>
						{bar}
					</div>
				);
			})}
		</div>
	);
};

export default Bars;
