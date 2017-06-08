import React, {Component} from 'react';
import ListView from './ListView';
import Picture from './Picture';
import {actionChangeTab, actionAddNumber} from '../actions/actions.js';
import {connect} from 'react-redux';

class TabComponent extends Component {
	constructor(props) {
		super(props);
		this.handleClickWeather = this.handleClickWeather.bind(this);
		this.handleClickNumbers = this.handleClickNumbers.bind(this);
		this.handleClickPicture = this.handleClickPicture.bind(this);
		this.handleClickAddNumber = this.handleClickAddNumber.bind(this)
	}
	render() {
		let view;
		if( this.props.tab === 1 ) {
			view = <ListView items={['regn', 'sol', 'hagel', 'dimma']} />;
		} else if( this.props.tab === 2 ) {
			view = <ListView items={this.props.numbers} />;
		} else {
			view = <Picture image={this.props.imageUrl} />;
		}
		return (
			<div className="App">
			<div className="tabheader">
				<button onClick={this.handleClickWeather}>väder</button>
				<button onClick={this.handleClickNumbers}>tal</button>
				<button onClick={this.handleClickPicture}>bild</button>
				
			</div>
			<div className="tabbody">
				{view}
			</div>
			<div>
				<button onClick={this.handleClickAddNumber}>Lägg till tal</button>
			</div>
		  </div>
		);
	}
	handleClickAddNumber(e) {
		this.props.dispatch( actionAddNumber(42) );
	}
	handleClickWeather(e) {
		let action = actionChangeTab(1);
		console.log('handleClickWeather', action);
		this.props.dispatch(action);
	}
	handleClickNumbers(e) {
		let action = actionChangeTab(2);
		this.props.dispatch(action);
	}
	handleClickPicture(e) {
		let action = actionChangeTab(3);
		this.props.dispatch(action);
	}
}

function mapStateToProps(state) {
	console.log('state:', state);
	return {
		tab: state.tab,
		imageUrl: state.imageUrl,
		numbers: state.numbers
	}
}

export default connect(mapStateToProps)(TabComponent);


