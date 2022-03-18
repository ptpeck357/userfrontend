import { baseURI } from '../utils/helpers';
import Toast from 'react-simple-toasts';
import EditModal from './EditModal';

import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBTable,
	MDBTableHead,
	MDBTableBody,
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBBtn
} from 'mdb-react-ui-kit';

const UserTable = ({ userObj, fetchData }) => {
	const deleteUser = userId => {
		fetch(baseURI + `/delete/${userId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
		.then(() => {
			Toast(`User "${userId}" is deleted!`);
			fetchData();
		})
		.catch(error => {
			throw new Error(error);
		});
	};

	return (
		<MDBContainer>
			<MDBCard>
				<MDBCardTitle className='center-text'>
					<MDBRow>
						<MDBCol md="5">
							<h3>Information about our users</h3>
						</MDBCol>
					</MDBRow>
				</MDBCardTitle>
				<hr />
				<MDBCardBody className="user-table">
					{Object.keys(userObj).length === 0
						? <h5 className='text-center'>The table is empty. Either make an user or it means the API is down. 🐼</h5>
						: (
							<>
								<MDBTable striped>
									<MDBTableHead>
										<tr>
											<th scope='col'>Id</th>
											<th scope='col'>Name</th>
											<th scope='col'>Email</th>
											<th scope='col'>Phone Number</th>
											<th scope='col'>Edit</th>
											<th scope='col'>Delete</th>
										</tr>
									</MDBTableHead>
									<MDBTableBody>
										{userObj.map(user => (
											<tr key={user.id}>
												<th scope='row'>{user.id}</th>
												<td>{user.name}</td>
												<td>{user.email}</td>
												<td>{user.phone}</td>
												<td>
													<EditModal user={user} fetchData={fetchData}>
														<li className="mr-2 fa fa-edit" />
													</EditModal>
												</td>
												<td>
													<MDBBtn type="submit" tag='a' color='none' style={{ color: '#616161' }} onClick={() => deleteUser(user.id)}>
														<li className="mr-2 fa fa-trash" />
													</MDBBtn>
												</td>
											</tr>
										))}
									</MDBTableBody>
								</MDBTable>
							</>
						)
					}
				</MDBCardBody>
			</MDBCard>
		</MDBContainer>
	);
};

export default UserTable;