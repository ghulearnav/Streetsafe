import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { TeamPage } from './team/team.js';
import { Landing } from './mapfiles/landing/landing.js';
import { MapApp } from './mapfiles/mapapp/mapapp.js';
import { Hp } from './Home/Home1.js';
import NavBar from './Bar/bar.js';
import Footers from './footer.js';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

export default class TestPage extends React.Component {
	render() {
		return (
			<div>
				<Hp />
				<Footers />
			</div>
		);
	}
}

ReactDOM.render(<TestPage />, document.getElementById('root'));
