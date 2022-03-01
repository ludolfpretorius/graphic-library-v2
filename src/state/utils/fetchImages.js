const fetchImages = async () => {
  const resp = await fetch('http://localhost:8080/', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer c8ce9fe80d96063b79743a61cd68ed7ebf95'
    },
    body: JSON.stringify({
      path: 'images/fetchAll'
    })
  }).catch(err => {
    alert('Oops! Something went wrong. Please check your connection and try again.')
    console.error(err)
  })

  const data = await resp.json()
  return await data.body
}

export default fetchImages