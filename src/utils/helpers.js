export const baseURI = 'http://localhost:8080';

export const fetchData = (setUser) => {
	fetch(baseURI + '/getAll', {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	})
		.then(res => res.json())
		.then((res) => setUser(res))
		.catch(error => {
			console.log(error);
		});
};