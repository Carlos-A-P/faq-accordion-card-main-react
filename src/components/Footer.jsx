import React from "react";
import styled from "styled-components";

const Attribution = styled.div`
	footer {
		font-size: 11px;
		text-align: center;
		color: rgb(180, 200, 243);
		padding-bottom: 3rem;
	}
	footer a {
		color: hsl(305, 85%, 80%);
	}
`;

export default function Footer() {
	return (
		<>
			<Attribution>
				<footer>
					Challenge by{" "}
					<a
						href="https://www.frontendmentor.io/profile/Carlos-A-P"
						target="_blank"
					>
						Frontend Mentor
					</a>
					. Coded by <a href="https://carlospwd.netlify.app/">Carlos Perez</a>.
				</footer>
			</Attribution>
		</>
	);
}
