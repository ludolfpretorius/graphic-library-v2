import React from 'react'
import './Popup.scss'

import PopupContentUpload from './PopupContentUpload'
import PopupBG from './PopupBG'

const Popup = ({ isUploading, setIsUploading, setInitUpload }) => {
	return (
		<div id="Popup" className={isUploading ? 'show' : ''}>
			<PopupContentUpload setIsUploading={bool => setIsUploading(bool)} setInitUpload={bool => setInitUpload(bool)} />
			<PopupBG />
		</div>
	)
}

export default Popup