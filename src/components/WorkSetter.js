import React from 'react';

class WorkSetter extends React.Component {
	constructor(props) {
		super(props);

		this.onIncreaseClick = this.onIncreaseClick.bind(this);
		this.onDecreaseClick = this.onDecreaseClick.bind(this);
	}
	
	onIncreaseClick() {
		this.props.onTimeChange(60000);
		
	}
	
	onDecreaseClick() {
			this.props.onTimeChange(-60000);
	}
	
	render() {
		return (
			<div className='work-setter'>
				<div className='work-choice-widget'>
					<span className='decrease-work'
						onClick={this.onDecreaseClick}>-</span>
					
					<span className='chosen-work-time'>{Math.floor(this.props.time / 60000)}</span>
					
					<span className='increase-work'
						onClick={this.onIncreaseClick}>+</span>
				</div>
				<p className='work-label'>Session length</p>
			</div>
		
		);
		
	}
	
}


export default WorkSetter;
