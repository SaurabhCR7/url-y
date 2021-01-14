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
			require_protocol: true,
		});
		if (!validUrl) {
			props.enqueueSnackbar(
				'Please ensure that this URL is correct and incudes the http(s) protocol!',
				{
					variant: 'warning',
					anchorOrigin: {
						vertical: 'bottom',
						horizontal: 'right',
					},
				},
			);
		} else {
			axios
				.post('http://www.url-y.ml/api/shorten/', {
					url: url,
				})
				.then(res => {
					console.log(res.data.hash);
					setLink(`url-y.ml/${res.data.hash}`);
				})
				.catch(err => {
					console.log(err);
				});
		}
	};

	return (
		<div className="App">
			<Toolbar />
			<br />
			<br />
			<br />
			<br />
			<br />
			<h1 className="main-logo">
				Url-y<span>.tk</span>
			</h1>
			<br />
			<br />
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="url"
					placeholder="Enter URL with http(s) protocol"
					onChange={handleUrl}
				/>
				<button type="submit" className="submit-btn">
					SUBMIT
				</button>
			</form>
			<br />
			<br />
			<br />
			<div className="link-main-container">
				<a
					href={'http://www.' + link}
					className="link-container"
					style={{ display: link ? '' : 'none' }}>
					{link}
				</a>
				<br />
				<CopyToClipboard
					text={'http://www.' + link}
					onCopy={() => {
						props.enqueueSnackbar('Link copied to your clipboard!', {
							variant: 'success',
							anchorOrigin: {
								vertical: 'bottom',
								horizontal: 'right',
							},
						});
					}}>
					<button className="copy-btn" style={{ display: link ? '' : 'none' }}>
						<i className="far fa-copy" />
					</button>
				</CopyToClipboard>
			</div>
			<div className="footer-container">
				<p className="footer-content">
					Made With <i className="fas fa-heart" /> By Saurabh Chauhan
				</p>
			</div>
		</div>
	);
}

export default withSnackbar(App);
