import React from 'react'

const LoginForm = () => {
	return (
		<form id="LoginForm" action="#" method="POST">
			<input type="password" placeholder="Enter password" name="password" required data-lpignore="true" />
			<button type="submit" name="submit">
				<i className="fas fa-sign-in-alt"></i>
			</button>
		</form>
	)
}

export default LoginForm