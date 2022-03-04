import React from 'react'

import './AppView.scss'
import AppViewSearch from './AppViewSearch'
import AppViewContent from './AppViewContent'

const AppView = ({ isUploading, setIsUploading, imgInfo, initUpload }) => {
	return (
		<div id="AppView">
			<AppViewSearch />
			<AppViewContent 
				isUploading={isUploading} 
				setIsUploading={bool => setIsUploading(bool)} 
				imgInfo={imgInfo}
				initUpload={initUpload} />
		</div>
	)
}

export default AppView