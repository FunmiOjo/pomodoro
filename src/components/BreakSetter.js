import React from 'react';

class BreakSetter extends React.Component{
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
			<div className='break-setter'>
				<div className='break-choice-widget'>
					<span className='decrease-break'
						onClick={this.onDecreaseClick}>-</span>
					<span className='chosen-break-time'>{Math.floor(this.props.time / 60000)}</span>
					<span className='increase-break'
						onClick={this.onIncreaseClick}>+</span>
				</div>
				<p className='break-label'>Break length</p>
			</div>
		);
	}

}


export default BreakSetter;
