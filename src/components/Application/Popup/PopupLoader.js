import React from 'react'
import loader from '../../../assets/imgs/loader.svg'

const PopupLoader = () => {
	return (
		<div>
			<div id="PopupLoader">
				<img src={loader} alt="loader" loading="eager" />
			</div>
		</div>
	)
}

export default PopupLoader