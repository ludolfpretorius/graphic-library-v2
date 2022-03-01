import React from 'react'

const AppSidebarMenu = () => {
	return (
		<div id="AppSidebarMenu">
			<h5>Sharing</h5>
			<ul>
				<li>
					<a href="#" className="sharableURL-btn">
						<i className="fas fa-link"></i>
						Create shareable URL
					</a>
				</li>
			</ul>

			<h5>UPs & Courses</h5>
			<ul>
				<li>
					<a href="#" className="sharableURL-btn">
						<i className="fas fa-link"></i>
						New UP
					</a>
				</li>
				<li>
					<a href="./adminlogin.php" className="admin">
						<i className="fas fa-wrench"></i>
						New course
					</a>
				</li>
			</ul>
			
			<h5>Session</h5>
			<ul>
				<li>
					<a href="#" className="logout" id="logout">
						<i className="fas fa-power-off"></i>
						Log out
					</a>
				</li>
			</ul>
		</div>
	)
}

export default AppSidebarMenu