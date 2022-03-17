import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const UserTable = () => {
	return (
		<MDBTable striped>
			<MDBTableHead>
				<tr>
					<th scope='col'>#</th>
					<th scope='col'>Name</th>
					<th scope='col'>Email</th>
					<th scope='col'>Phone Number</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				<tr>
					<th scope='row'>1</th>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
				</tr>
				<tr>
					<th scope='row'>2</th>
					<td>Jacob</td>
					<td>Thornton</td>
					<td>@fat</td>
				</tr>
				<tr>
					<th scope='row'>3</th>
					<td colSpan={2}>Larry the Bird</td>
					<td>@twitter</td>
				</tr>
			</MDBTableBody>
		</MDBTable>
	);
}

export default UserTable;