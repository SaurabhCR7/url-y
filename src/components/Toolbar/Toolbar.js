import React from 'react';
import './css/Toolbar.css';
import Sidedrawer from './../Sidedrawer/Sidedrawer';

const toolbar = () => (
	<header className='toolbar'>
		<nav className='toolbar_nav'>
			<div>
				<Sidedrawer />
			</div>
			<div className='toolbar_logo'>
				<p>
					Link.<span>ify</span>
				</p>
			</div>
			<div className='spacer' />
			<div className='toolbar_nav_items'>
				<ul>
					<li>
						<a href='https://github.com/SaurabhCR7'>Github</a>
					</li>
					<li>
						<a href='https://saurabh-chauhan.netlify.com/'>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
);

export default toolbar;
