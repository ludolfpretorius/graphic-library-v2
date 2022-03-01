import React, { useState } from 'react'

import '../components/Application/Application.scss'
import Popup from '../components/Application/Popup/Popup'
import AppSidebar from '../components/Application/AppSidebar/AppSidebar'
import AppView from '../components/Application/AppView/AppView'

const Application = () => {
	const [ isUploading, setIsUploading ] = useState(false)
	
	return (
		<div id="Application">
			<Popup isUploading={isUploading} setIsUploading={bool => setIsUploading(bool)} />
			<AppSidebar />
			<AppView setIsUploading={bool => setIsUploading(bool)}/>
		</div>
	)
}

export default Application