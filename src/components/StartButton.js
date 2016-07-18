import React from 'react';

class StartButton extends React.Component {
	constructor(props) {
		super(props);
		this.onStartClick = this.onStartClick.bind(this);		
	}
	
	onStartClick() {
		this.props.onStartButtonClick();
	}
	
	render() {
		return (
			<button className='start-button'
				onClick={this.onStartClick}>
				Start
			</button>
		);
		
	}
	
}

export default StartButton;
