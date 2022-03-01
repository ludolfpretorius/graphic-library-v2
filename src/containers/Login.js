import React from 'react'

import '../components/Login/Login.scss'
import LoginTitle from '../components/Login/LoginTitle'
import LoginForm from '../components/Login/LoginForm'
import LoginAlert from '../components/Login/LoginAlert'

const Login = () => {
	return (
		<div id="Login">
			<LoginTitle />
			<LoginForm />
			<LoginAlert />
		</div>
	)
}

export default Login