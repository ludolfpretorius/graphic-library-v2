import React, { useState, useEffect } from 'react'

import '../components/Application/Application.scss'
import Popup from '../components/Application/Popup/Popup'
import AppSidebar from '../components/Application/AppSidebar/AppSidebar'
import AppView from '../components/Application/AppView/AppView'

const Application = () => {
	const [ isUploading, setIsUploading ] = useState(false)
	const [ initUpload, setInitUpload ] = useState(false)
	const [ imgInfo, setImgInfo ] = useState({})
	
	return (
		<div id="Application">
			<Popup 
				isUploading={isUploading}
				setIsUploading={bool => setIsUploading(bool)}
				setImgInfo={imgInfo => setImgInfo(imgInfo)}
				initUpload={initUpload}
				setInitUpload={bool => setInitUpload(bool)} />
			<AppSidebar />
			<AppView
				isUploading={isUploading}
				setIsUploading={bool => setIsUploading(bool)}
				imgInfo={imgInfo}
				initUpload={initUpload} />
		</div>
	)
}

export default Application