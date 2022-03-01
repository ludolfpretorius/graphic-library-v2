import React from 'react'

import './AppView.scss'
import AppViewSearch from './AppViewSearch'
import AppViewContent from './AppViewContent'

const AppView = ({ setIsUploading }) => {
	return (
		<div id="AppView">
			<AppViewSearch />
			<AppViewContent setIsUploading={bool => setIsUploading(bool)} />
		</div>
	)
}

export default AppView