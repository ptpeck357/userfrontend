import { useEffect, useState } from 'react';

import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Navbar from './components/Navbar';

import CreateUserForm from './components/CreateUserForm';
import UserTable from './components/UserTable';

import { baseURI } from './utils/URL';

const App = () => {
	const [userObj, setUserObj] = useState([]);

	const fetchData = () => {
		fetch(baseURI + '/getAll', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		})
		.then(res => res.json())
		.then((res) => setUserObj(res))
		.catch(error => {
			console.log(error);
		});
	}

	useEffect(() => {
		fetchData();
	}, [userObj]);

	return (
		<>
			<Navbar />
			<MDBRow className="mt-4">
				<MDBCol md="4" >
					<CreateUserForm />
				</MDBCol>

				<MDBCol md="8" >
					<UserTable userObj={userObj}/>
				</MDBCol>
			</MDBRow>
		</>
	);
}

export default App;
