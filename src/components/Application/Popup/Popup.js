import React from 'react'
import './Popup.scss'

import PopupContentUpload from './PopupContentUpload'
import PopupBG from './PopupBG'

const Popup = ({ isUploading, setIsUploading, setImgInfo, setInitUpload }) => {
	return (
		<div id="Popup" className={isUploading ? 'show' : ''}>
			<PopupContentUpload 
				setIsUploading={bool => setIsUploading(bool)}
				setImgInfo={imgInfo => setImgInfo(imgInfo)}
				setInitUpload={bool => setInitUpload(bool)} />
			<PopupBG />
		</div>
	)
}

export default Popup