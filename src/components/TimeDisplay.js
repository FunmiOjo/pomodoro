import React from 'react';

const TimeDisplay = (props) => {
	var seconds = Math.floor((props.time % 60000) / 1000).toString();
	var minutes = (Math.floor(props.time / 60000)).toString();
	
	if (seconds.length < 2) {
		seconds = "0".concat(seconds);
	}
	
	if (minutes.length < 2) {
		minutes = "0".concat(minutes);
	}
	
	return (
		<div className='work-time'>
			<span className='minutes'>
			{minutes}
			</span>
			
			<span>:</span>
			
			<span className='seconds'>{seconds}</span>
		
		</div>
	);
	
};

export default TimeDisplay;
