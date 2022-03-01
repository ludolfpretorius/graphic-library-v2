import React, { useContext, useEffect } from 'react'

import VisibleImagesContext from '../../../state/contexts/VisibleImagesContext'
import imgPlaceholder from '../../../assets/imgs/img.svg'

const AppThumbnail = ({ img }) => {
	const { visibleImages, setVisibleImages } = useContext(VisibleImagesContext)

	const toggleDropdown = (element) => {
		const dropdown = element.querySelector('.dropdown')
		dropdown.classList.toggle('show')
	}

	const closeDropdown = (element) => {
		const dropdown = element.querySelector('.dropdown')
		if (dropdown && dropdown.classList.contains('show')) dropdown.classList.remove('show')
	}

	return (
		<div id="AppViewContentThumbnail" data-tags={img.tags} onMouseLeave={(event) => closeDropdown(event.target)}>
			<div className="btns-wrap">
				<div className="menu-btn" onClick={(event) => toggleDropdown(event.target)} >
					<div className="label">•••</div>
					<div className="dropdown">
						<div className="dropdown-btn">
							<i className="fas fa-layer-group"></i>
							<div>Toggle VSG official</div>
						</div>
						<div className="dropdown-btn disable">
							<i className="fas fa-edit"></i>
							<div>Edit meta tags</div>
						</div>
						<hr />
						<div className="dropdown-btn delete-btn" data-delete="CAM-SUP-CO2-carbon-methane-pollution">
							<i className="fas fa-trash-alt"></i>
							<div>Delete</div>
						</div>
					</div>
				</div>
				<a className="menu-btn download-btn" href={img.url} download={img.tags.join('-')}>
					<i className="fas fa-download"></i>
				</a>
			</div>
			<img className="to-update" src={require(`../../../../upload/${img.url}.svg`) || imgPlaceholder} alt={img.title} loading="lazy" />
			</div>
	)
}

export default AppThumbnail