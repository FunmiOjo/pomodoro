import React from 'react';

class ResetButton extends React.Component {
	constructor(props) {
		super(props);
		this.onResetClick = this.onResetClick.bind(this);
	}
	
	onResetClick() {
		this.props.onReset();
	}
	
	render() {
		return (
			<button className='reset-button'
				onClick={this.onResetClick}>
				Reset
			</button>
		);
	}
}


export default ResetButton;
