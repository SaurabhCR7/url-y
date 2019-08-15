import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import validator from 'validator';
import { withSnackbar } from 'notistack';
import Toolbar from './components/Toolbar/Toolbar';
import './App.css';

function App(props) {
	const [link, setLink] = useState('');
	const [url, setUrl] = useState('');
	const handleUrl = e => {
		setUrl(e.target.value);
	};
	const handleSubmit = e => {
		e.preventDefault();
		const validUrl = validator.isURL(url, {
			require_protocol: true
		});
		if (!validUrl) {
			alert(
				'Please ensure that this URL is correct and incudes the http(s) protocol!'
			);
		} else {
			axios
				.post('https://link-ify.herokuapp.com/api/shorten', {
					url: url
				})
				.then(res => {
					console.log(res.data.hash);
					setLink(`https://link.ify/${res.data.hash}`);
				})
				.catch(err => {
					console.log(err);
				});
		}
	};

	return (
		<div className='App'>
			<Toolbar />
			<br />
			<br />
			<br />
			<br />
			<br />
			<h1 className='main-logo'>
				Link.<span>ify</span>
			</h1>
			<br />
			<br />
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='url'
					placeholder='Enter URL with http(s) protocol'
					onChange={handleUrl}
				/>
				<button type='submit' className='submit-btn'>
					SUBMIT
				</button>
			</form>
			<br />
			<br />
			<br />
			<div className='link-main-container'>
				<p className='link-container' style={{ display: link ? '' : 'none' }}>
					{link}
				</p>
				<br />
				<CopyToClipboard
					text={link}
					onCopy={() => {
						props.enqueueSnackbar('Link copied to your clipboard!', {
							variant: 'success',
							anchorOrigin: {
								vertical: 'bottom',
								horizontal: 'right'
							}
						});
					}}>
					<button className='copy-btn' style={{ display: link ? '' : 'none' }}>
						<i className='far fa-copy' />
					</button>
				</CopyToClipboard>
			</div>
			<div className='footer-container'>
				<p className='footer-content'>
					Made With <i className='fas fa-heart' /> By Saurabh Chauhan
				</p>
			</div>
		</div>
	);
}

export default withSnackbar(App);
