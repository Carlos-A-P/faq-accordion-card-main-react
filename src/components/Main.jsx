import React from "react";
import Accordion from "../components/Accordion";
import "./Main.css";

export default function Main() {
	return (
		<>
			<main>
				<div className="wrapper">
					<div className="image"></div>
					<div className="content">
						<h1>FAQ</h1>
						<Accordion />
					</div>
				</div>
			</main>
		</>
	);
}
