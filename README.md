# React-faq-accordion-card

- Live website -(https://cpwd-accordion-react.netlify.app/)

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

## My process

### Screenshot

### End Result

![result](https://user-images.githubusercontent.com/85038929/126051502-46433f96-a7ba-4632-b3d8-9dfba57ea9b5.JPG)

### Active image

![active](https://user-images.githubusercontent.com/85038929/126051510-7bc6b36f-7159-439a-9332-e87307fdbf97.JPG)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- React.JS

### What I learned

In this project I learned how to use my background settings in css to move images in the correct places. I also learned how to use the transition tool so that I could create the accordion affect with the help of javascript. I thought this task would be alot more difficult but with the help of a few resources I was able to complete the task

Here is some code that I wrote in order to complete this task

- This is my Accordion component which uses the useState hook to display accordion answers.
- When clicked, the hook changed the state of the clicked item to the set key value and displays the corresponding panel and closes all other panels.

```Javascript
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


```

- This is my data component which holds and array with objects. Each object has a question value and a answer value which is displayed in my Accordion file

```Javascript
export const Data = [
	{
		question: "How many team members can I invite?",
		answer:
			"You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
	},
	{
		question: "What is the maximum file upload size?",
		answer:
			"No more than 2GB. All files in your account must fit your allotted storage space.",
	},
	{
		question: "How do I reset my password?",
		answer:
			"Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
	},
	{
		question: "Can I cancel my subscription?",
		answer:
			"Yes! Send us a message and we’ll process your request no questions asked.",
	},
	{
		question: "Do you provide additional support?",
		answer:
			"Chat and email support is available 24/7. Phone lines are open during normal business hours.",
	},
];
// this is the content used for accordion

```

### Questions

- Should I used less HTML syntax when using React.js? I used a few divs when setting up my Main.js files and was wondering if I should get use to using components instead?

### Useful resources

- [CSS background-size Property](https://www.w3schools.com/cssref/css3_pr_background-size.asp) - This helped me when positioning my background images properly

- [How to Deploy a React Application to Netlify [2020]](https://www.youtube.com/watch?v=8KGLOJHqNMg&t=347s&ab_channel=PedroTech) - How to deploy react site

- [Debugging JavaScript in Visual Studio Code and Google Chrome](https://www.youtube.com/watch?v=AX7uybwukkk&ab_channel=JamesQQuick) - this video taught me how to debug my javascript using the debugger tool in developer tools

## Author

- Website - [Carlos Perez](https://carlospwd.netlify.app/)
- Frontend Mentor - [@Carlos-A-P](https://www.frontendmentor.io/profile/Carlos-A-P)
- Twitter - [@WDCarlosP](https://www.twitter.com/WDCarlosP)
