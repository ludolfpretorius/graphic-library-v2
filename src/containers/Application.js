import React, { useState } from 'react'

import '../components/Application/Application.scss'
import Popup from '../components/Application/Popup/Popup'
import AppSidebar from '../components/Application/AppSidebar/AppSidebar'
import AppView from '../components/Application/AppView/AppView'

const Application = () => {
	const [ isUploading, setIsUploading ] = useState(false)
	const [ initUpload, setInitUpload ] = useState(false)
	// const uploadImage = () => 
	
	return (
		<div id="Application">
			<Popup isUploading={isUploading} setIsUploading={bool => setIsUploading(bool)} setInitUpload={bool => setInitUpload(bool)} />
			<AppSidebar />
			<AppView isUploading={isUploading} setIsUploading={bool => setIsUploading(bool)} initUpload={initUpload}/>
		</div>
	)
}

export default Application