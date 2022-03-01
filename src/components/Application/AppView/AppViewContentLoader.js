import React from 'react'
import loader from '../../../assets/imgs/loader.svg'

const AppViewContentLoader = () => {
	return (
		<div id="AppViewContentLoader">
			<img src={loader} alt="loader" loading="eager" />
		</div>
	)
}

export default AppViewContentLoader