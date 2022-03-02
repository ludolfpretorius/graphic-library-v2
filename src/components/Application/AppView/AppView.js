import React from 'react'

import './AppView.scss'
import AppViewSearch from './AppViewSearch'
import AppViewContent from './AppViewContent'

const AppView = ({ isUploading, setIsUploading, initUpload }) => {
	return (
		<div id="AppView">
			<AppViewSearch />
			<AppViewContent isUploading={isUploading} setIsUploading={bool => setIsUploading(bool)} initUpload={initUpload} />
		</div>
	)
}

export default AppView