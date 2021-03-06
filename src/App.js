import { useEffect, useState } from 'react';

import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Navbar from './components/Navbar';

import CreateUserForm from './components/CreateUserForm';
import UserTable from './components/UserTable';
import SearchUser from './components/SearchUser';

import { baseURI } from './utils/helpers';

const App = () => {
	const [userObj, setUserObj] = useState([]);

	const fetchData = () => {
		fetch(baseURI + '/getAll', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
		.then(res => res.json())
		.then((res) => setUserObj(res))
		.catch(error => {
			throw new Error(error);
		});
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<Navbar />

			<MDBRow className="mt-4">
				<MDBCol md="4" >
					<CreateUserForm fetchData={fetchData}/>
					<br />
					<SearchUser/>
				</MDBCol>

				<MDBCol md="8" >
					<UserTable userObj={userObj} fetchData={fetchData}/>
				</MDBCol>
			</MDBRow>
		</>
	);
};

export default App;
