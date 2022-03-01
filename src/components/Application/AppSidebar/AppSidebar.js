import React from 'react'

import './AppSidebar.scss'
import AppSidebarTitle from './AppSidebarTitle'
import AppSidebarMenu from './AppSidebarMenu'

const AppSidebar = () => {
	return (
		<div id="AppSidebar">
			<AppSidebarTitle />
			<hr />
			<AppSidebarMenu />
		</div>
	)
}

export default AppSidebar