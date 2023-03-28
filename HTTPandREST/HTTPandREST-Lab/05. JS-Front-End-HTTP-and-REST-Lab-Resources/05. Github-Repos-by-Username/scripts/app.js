function loadRepos() {
	const BASE_URL = 'https://api.github.com/users/'
	const username = document.getElementById("username")
	const usernameValue = username.value
	const reposUl = document.querySelector('#repos > ul')
	
	fetch(`${BASE_URL}${usernameValue}/repos`)
		.then((res) => res.json())
		.then((data) => {
			data.forEach((reposes) => {
				console.log(reposes)
				const a = document.createElement('a')
				const li = document.createElement('li')
				a.href = `${BASE_URL}/${usernameValue}/${reposes}`
				a.textContent = reposes.name
				li.appendChild(a)
				
				

			});
		})

	

	console.log(repos);
}