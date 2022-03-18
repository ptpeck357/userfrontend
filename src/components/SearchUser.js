import React, { useState } from 'react';
import {
	MDBContainer,
	MDBCard,
	MDBCardBody,
	MDBBtn,
	MDBCol,
	MDBInput,
	MDBRow
} from 'mdb-react-ui-kit';

import { baseURI } from '../utils/helpers';

const SearchUser = () => {
	const [searchedUser, setSearchedUser] = useState([]);
	const [searchTerm, setSearchTerm] = React.useState('');
	const [errorMessage, setErrorMessage] = React.useState('');

	const searchTermOnChange = event => {
		setSearchTerm(event.target.value)
	}

	const submitSearchTerm = event => {
		if(searchTerm){
			event.preventDefault();

			fetch(baseURI + `/get/${searchTerm}`, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' }
			})
			.then(res => {
				if(!res.ok){
					setErrorMessage('No user is found.');
				}
				return res.json();
			})
			.then((res) => {
				if(res.status === 500){
					return setSearchedUser([]);
				}

				setErrorMessage('');
				setSearchedUser([res]);
			})
			.catch(error => {
				setErrorMessage('No user is found.');
				throw new Error(error);
			});
		};
	};

	return (
		<MDBContainer>
			<MDBCard>
				<MDBCardBody style={{ height: '275px' }}>
					<MDBRow>
						<MDBCol md="12">
							<form>
								<p className="h4 py-4">Search for an existing user</p>
								<div className="input-group rounded">
									<MDBInput
										id="searchterm"
										type="number"
										className="form-control rounded"
										label="Search by Id"
										aria-label="Search"
										aria-describedby="search-addon"
										required
										onChange={searchTermOnChange}
									/>
									<MDBBtn type="submit" onClick={submitSearchTerm}>
										<i className="fas fa-search" />
									</MDBBtn>
								</div>
							</form>
						</MDBCol>
						<div className="mt-2" role="alert" style={{ color: 'red' }}>
							{errorMessage}
						</div>
						<div>
							{searchedUser ? searchedUser.map((data) => {
								return (
									<div key={data.id }>
										{
											`"id:" ${data.id}
											"name:" ${data.name}
											"email:" ${data.email}
											"phone:" ${data.phone}`
										}
									</div>
								);
							}) : null}
						</div>
					</MDBRow>
				</MDBCardBody>
			</MDBCard>
		</MDBContainer>
	);
};

export default SearchUser;