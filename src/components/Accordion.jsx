import React, { useState } from "react";
import { Data } from "./Data";

export default function Accordion() {
	// we can call the values in the array what ever we want and determine which we clicked using the index
	// The first value is the initial value (false) from useState(false)
	// the second value is a function which will change the first value in the array
	// most of the time, the second value will be called starting with 'set' then what ever the first value is 'clicked'
	const [clicked, setClicked] = useState(false);
	// we pass in an initial value (false) which we display in the template
	// then we call the second value in the array "the set function" to update it and trigger a rerender

	// toggle function
	const toggle = (index) => {
		//if already open clicked
		if (clicked === index) {
			// this function triggers react to set from index to null (update value)
			//if clicked question is already active, then close it
			return setClicked(null);
		}
		//if index wasn't clicked then set to the actual value which ends up opening it
		setClicked(index);
	};

	return (
		<>
			<div className="accord">
				{/* for each item in Data.jsx object */}
				{/* (item) for value and index for the (key) */}
				{Data.map((item, index) => {
					return (
						<>
							{/* accordion item */}
							{/* onClick toggle the "toggle function" and pass the key which is our index and give active class*/}
							<button
								className={`accordion ${clicked === index ? "active" : ""}`}
								onClick={() => toggle(index)}
								key={index}
							>
								{item.question}
							</button>
							{/* if accordion item was clicked -> drop down value */}
							{clicked === index ? (
								<div className="panel">
									<p>{item.answer}</p>
								</div>
							) : null}
						</>
					);
				})}
			</div>
		</>
	);
}
