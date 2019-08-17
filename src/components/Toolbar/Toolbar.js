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
					Url-y<span>.tk</span>
				</p>
			</div>
			<div className='spacer' />
			<div className='toolbar_nav_items'>
				<ul>
					<li>
						<a href='https://github.com/SaurabhCR7'>Github</a>
					</li>
					<li>
						<a href='https://saurabh-chauhan.tk/'>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
);

export default toolbar;
