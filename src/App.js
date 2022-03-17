import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Navbar from './components/Navbar';

import CreateUserForm from './components/CreateUserForm';
import UserTable from './components/UserTable';

const App = () => {
	return (
		<>
			<Navbar />
			<MDBRow className="mt-4">
				<MDBCol md="4" >
					<CreateUserForm />
				</MDBCol>

				<MDBCol md="8" >
					<UserTable />
				</MDBCol>
			</MDBRow>
		</>
	);
}

export default App;
