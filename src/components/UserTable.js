import React from 'react';
import PropTypes from 'prop-types';

import { baseURI } from '../utils/URL';
import toast from 'react-simple-toasts';
import EditModal from './EditModal';

import {
	MDBContainer,
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBTable,
	MDBTableHead,
	MDBTableBody,
	MDBBtn
} from 'mdb-react-ui-kit';

const UserTable = ({ userObj }) => {
	const editUser = (userId) => {
		<EditModal/>
	}

	const deleteUser = userId => {
		fetch(baseURI + `/delete/${userId}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		})
		.then(() => {
			toast(`User "${userId}" is deleted!`)
		})
		.catch(error => {
			console.log(error);
		});
	}

	return (
		<MDBContainer>
			<MDBCard>
				<MDBCardTitle className='center-text'>
					Information about our users
				</MDBCardTitle>
				<hr />
				<MDBCardBody>

					{Object.keys(userObj).length === 0
						? <h5 className='text-center'>There are no users in the database</h5>
						: (
							<MDBTable striped>
								<MDBTableHead>
									<tr>
										<th scope='col'>ID</th>
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
												<MDBBtn tag='a' color='none' style={{ color: '#204354' }} onClick={() => editUser(user.id)}>
													<li className="mr-2 fa fa-edit"/>
												</MDBBtn>
											</td>
											<td>
												<MDBBtn tag='a' color='none' style={{ color: '#616161' }} onClick={() => deleteUser(user.id)}>
													<li className="mr-2 fa fa-trash" />
												</MDBBtn>
											</td>
										</tr>
									))}
								</MDBTableBody>
							</MDBTable>
						)
					}
				</MDBCardBody>
			</MDBCard>
		</MDBContainer>
	);
}

// UserTable.propTypes = {
// 	userObj: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			id: PropTypes.number,
// 			name: PropTypes.string,
// 			email: PropTypes.email,
// 			phone: PropTypes.number
// 		})
// 	)
// };

export default UserTable;