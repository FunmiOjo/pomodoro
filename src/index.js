import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';

import TimeDisplay from './components/TimeDisplay';
import WorkSetter from './components/WorkSetter';
import BreakSetter from './components/BreakSetter';
import StartButton from './components/StartButton';
import ResetButton from './components/ResetButton';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			remainingTime: 1500000,
			started: false,
			onSession: false,
			onBreak: false,
			workTime: 0,
			breakTime: 0
			
		};
		
		this.sessionCount = this.sessionCount.bind(this);
		this.onStart = this.onStart.bind(this);
		this.changeWorkTime = this.changeWorkTime.bind(this);
		this.changeBreakTime = this.changeBreakTime.bind(this);
		this.reset = this.reset.bind(this);
	}
	
	sessionCount(whichSession) {
		var counter = whichSession;
		var intervalId = window.setInterval(countdown, 1000);
		var that = this;
		
		function countdown() {
				//if user has clicked reset button during countdown
				if (that.state.started === false) {
					clearInterval(intervalId);
					that.setState({remainingTime: 0});
					return;
					
				}
				
				that.setState({remainingTime: counter});
				var alarm = new Audio('http://res.cloudinary.com/djsd8ajub/video/upload/v1468868409/High_Boom_yd6mhf.wav');
				
				if (counter === 0) { 
					if (that.state.onBreak === false) {		
						alarm.play();
						clearInterval(intervalId);
						that.setState({onBreak: true, onSession: false});
						that.sessionCount(that.state.breakTime);
					} else {
						alarm.play();
						that.setState({onBreak: false});
						clearInterval(intervalId);
					}
				}
				counter -= 1000;
		}
	}
	
	onStart() {
		var session = this.state.sessionTime;
		this.setState({ 
			started: true,
			onSession: true
		});
		
		this.sessionCount(this.state.workTime);
	}
	
	changeWorkTime(change) {
		if (this.state.workTime <= 0 && change === -1) {
			return;
		}
		var newTime = this.state.workTime + change;
		this.setState({workTime: newTime});
	}
	
	changeBreakTime(change) {
		if (this.state.workTime <= 0 && change === -1) {
			return;
		}
		var newTime = this.state.breakTime + change;
		this.setState({breakTime: newTime});
	}
	
	reset() {
		this.setState(
			{
				remainingTime: 0,
				started: false,
				onSession: false,
				onBreak: false,
				workTime: 0,
				breakTime: 0
			}
		);
	}
	
	render() {
		return (
			<div className='wrapper'>
				<h1>Pomodoro</h1>
				<TimeDisplay
					time={this.state.remainingTime}
				/>
				<div className='time-setters'>
					<WorkSetter
						time={this.state.workTime}
						onTimeChange={this.changeWorkTime}
						/>
					<BreakSetter
						time={this.state.breakTime}
						onTimeChange={this.changeBreakTime}
					/>
				</div>
				<div className='buttons'>
					<StartButton onStartButtonClick={this.onStart}/>
					<ResetButton onReset={this.reset} />
				</div>
			
			</div>
		);
	}
}


ReactDOM.render(<App />, document.getElementById('app'));
