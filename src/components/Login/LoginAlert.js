import React from 'react'

const LoginAlert = () => {
	
	const style = {
		opacity: 0
	}

	return (
		<div id="LoginAlert" style={style}>
			Oops! The password you entered is incorrect.
		</div>
	)
}

export default LoginAlert