import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import MediaQuery from 'react-responsive';

const useStyles = makeStyles({
	list: {
		width: 250,
		padding: '200px 30px 30px 30px'
	}
});

export default function SideDrawer() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		left: false
	});

	const toggleDrawer = (side, open) => event => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [side]: open });
	};

	const sideList = side => (
		<div
			className={classes.list}
			role='presentation'
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}>
			<List style={{ display: 'flex', flexDirection: 'column' }}>
				<a
					href='https://github.com/SaurabhCR7'
					style={{
						color: 'black',
						fontSize: '1.3rem',
						textDecoration: 'none',
						padding: '5px'
					}}>
					Github
				</a>
				<a
					href='https://saurabh-chauhan.tk/'
					style={{
						color: 'black',
						fontSize: '1.3rem',
						textDecoration: 'none',
						padding: '5px'
					}}>
					Contact
				</a>
			</List>
		</div>
	);

	return (
		<div>
			<MediaQuery query='(max-width: 834px)'>
				<Button onClick={toggleDrawer('left', true)}>
					<i
						className='fas fa-bars'
						style={{ color: 'white', padding: '0', fontSize: '1.5rem' }}
					/>
				</Button>
				<SwipeableDrawer
					open={state.left}
					onClose={toggleDrawer('left', false)}
					onOpen={toggleDrawer('left', true)}>
					{sideList('left')}
				</SwipeableDrawer>
			</MediaQuery>
		</div>
	);
}
