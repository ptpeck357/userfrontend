import React from 'react';
import {
	MDBContainer,
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBTable,
	MDBTableHead,
	MDBTableBody
} from 'mdb-react-ui-kit';

const UserTable = () => {
	return (
		<MDBContainer>
			<MDBCard>
				<MDBCardTitle className='center-text'>
					Information about our users
				</MDBCardTitle>
				<MDBCardBody>
					<MDBTable striped>
						<MDBTableHead>
							<tr>
								<th scope='col'>#</th>
								<th scope='col'>Name</th>
								<th scope='col'>Email</th>
								<th scope='col'>Phone Number</th>
								<th scope='col'>Action</th>
							</tr>
						</MDBTableHead>
						<MDBTableBody>
							<tr>
								<th scope='row'>1</th>
								<td>Mark</td>
								<td>Otto</td>
								<td>@mdo</td>
								<td>@mdo</td>
							</tr>
							<tr>
								<th scope='row'>2</th>
								<td>Jacob</td>
								<td>Thornton</td>
								<td>@fat</td>
								<td>@mdo</td>
							</tr>
							<tr>
								<th scope='row'>3</th>
								<td colSpan={2}>Larry the Bird</td>
								<td>@twitter</td>
								<td>@mdo</td>
							</tr>
						</MDBTableBody>
					</MDBTable>
				</MDBCardBody>
			</MDBCard>
		</MDBContainer>
	);
}

export default UserTable;