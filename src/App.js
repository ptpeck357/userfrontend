import { useEffect, useState } from 'react';

import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Navbar from './components/Navbar';

import CreateUserForm from './components/CreateUserForm';
import UserTable from './components/UserTable';

import { fetchData } from './utils/helpers';

const App = () => {
	const [userObj, setUserObj] = useState([]);

	useEffect(() => {
		fetchData(setUserObj);
	}, []);

	return (
		<>
			<Navbar />
			<MDBRow className="mt-4">
				<MDBCol md="4" >
					<CreateUserForm />
				</MDBCol>

				<MDBCol md="8" >
					<UserTable userObj={userObj} />
				</MDBCol>
			</MDBRow>
		</>
	);
}

export default App;
