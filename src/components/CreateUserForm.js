import React, { useState } from 'react';
import { MDBContainer, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import toast from 'react-simple-toasts';

import { baseURI } from '../utils/helpers';

const CreateUserForm = ({ fetchData }) => {
	const [userForm, setUserForm] = useState({
		name: '',
		email: '',
		phone: ''
	});

	const handleClick = event => {
		if(userForm.name && userForm.email && userForm.phone){
			event.preventDefault();

			fetch(baseURI + '/save', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(userForm)
			})
			.then(() => {
				toast('New user created!');
				setUserForm({
					name: '',
					email: '',
					phone: ''
				});
				fetchData();
			})
			.catch(error => {
				throw new Error(error);
			});
		};
	};

	const onChange = event => {
		setUserForm({ ...userForm, [event.target.name]: event.target.value });
	};

	return (
		<MDBContainer>
			<MDBCard>
				<MDBCardBody>
					<form>
						<p className="h4 text-center py-4">Create a new user</p>
						<div className="grey-text">
							<MDBInput
								id="name"
								type="text"
								required
								label="Name"
								name="name"
								value={userForm.name}
								onChange={onChange}
							/>
							<MDBInput className="mt-3"
								id="email"
								type="email"
								required
								label="Email Address"
								name="email"
								value={userForm.email}
								onChange={onChange}
							/>
							<MDBInput className="mt-3"
								id="phone"
								type="tel"
								required
								name="phone"
								label="Phone Number"
								value={userForm.phone}
								onChange={onChange}
							/>
						</div>
						<div className="text-center py-4 mt-3">
							<MDBBtn type="submit" onClick={handleClick}>
								Register
							</MDBBtn>
						</div>
					</form>
				</MDBCardBody>
			</MDBCard>
		</MDBContainer>
	);
};

export default CreateUserForm;