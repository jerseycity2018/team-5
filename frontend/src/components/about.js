import React, { Component } from 'react';
import '../styles/about.css';

class About extends Component {
    render() {
        return (
            <div>
	 	<h1>About Page</h1>

		<div>
			<h2>Chris Panican</h2>
			<h3> Front-end developer </h3>
			<p>Chris is a junior from the City College of New York. He will be graduating this Fall 2019 for a Bachelor’s degree in Computer Science. He has experience in React, Redux, Node, Python and SQL. He is really passionate about web development especially in front-end. He is currently an intern at flow.io. During his free time, he usually goes to the gym and play computer games. </p>
			<span>Github:</span><a href="https://github.com/cpanican">@cpanican</a>
		</div>
			
		<div>
			<h2>Amal Mittal</h2>
			<h3>Product Designer </h3>
			<p> Amal is a junior from Hunter College. He will be graduating in Spring 2020 for a Bachelor's degree in Computer Science. He had experience in Python, SQL, C++. He is really passionate about software engineering. He is involed and contributing in an independent study about Open Source Project. His end goal is to work in cloud computing. He likes to watch youtube videos and workout at the gym.</p>
			<span>Github:</span><a href="https://github.com/shadow12ac"> @shadow12ac</a>
		</div>
		<div>
			<h2>Mayank Vanjani</h2>
			<h3> Data Scientist</h3>
			<p>Mayank is a junior from NYU Tandon School of Engineering graduating in Spring 2020 majoring in Computer Engineering. His experiences involve Python, C/C++, and MATLAB with special interests in a collaboration of hardware and software implementing Xilinx and Arduino. He's currently a research assistant at the NYU Center of Quantum Phenomena working on chip design and particle physics.</p>
			<span>Github:</span><a href="https://github.com/mayankvanjani">@mayankvanjani</a>
		</div>
		<div>
			<h2>Michael Ousseinov</h2>
			<h3>Back-end developer</h3>
			<p>Michael Ousseinov is a junior studying Computer Engineering at the City College of New York. He will be graduating this Fall 2019. He previously interned @ UBS doing software engineering for the networks teams. He mostly works with backend applications but has a passion for many different areas in CS.</p>
			<span>Github</span><a href="https://github.com/mousseinov">@mousseinov</a>
		</div>
	</div>
        );
    }
}

export default About;
