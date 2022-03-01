import React, { useContext } from 'react'
import ImagesContext from '../../../state/contexts/ImagesContext'
import FilteredImagesContext from '../../../state/contexts/FilteredImagesContext'

const AppViewSearchInput = ({ emitValue }) => {
	
	return (
		<div id="AppViewSearchInput">
			<i className="fas fa-search"></i>
			<input type="text" placeholder="Search keywords" id="searchInput" autoComplete="off" 
				onKeyUp={event => emitValue(event.target.value)}
			/>
		</div>
	)
}

export default AppViewSearchInput