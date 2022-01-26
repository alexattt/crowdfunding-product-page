import React from 'react'

const ProgressBar = ({progress}) => {
	
	const Parentdiv = {
		height: '10px',
		width: '100%',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: '#3cb4ac',
	  borderRadius: 40,
		textAlign: 'right'
	}
		
	return (
	<div style={Parentdiv}>
	  <div style={Childdiv}></div>
	</div>
	)
}

export default ProgressBar;
