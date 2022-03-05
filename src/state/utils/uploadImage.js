const uploadImage = async (formData) => {
	const resp = await fetch('http://localhost:8080/', {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer c8ce9fe80d96063b79743a61cd68ed7ebf95',
		},
		body: formData
	}).catch(err => {
		alert('Oops! Something went wrong. Please check your connection and try again.')
		console.error(err)
	})
	const data = await resp.json()
	return await data
}

export default uploadImage