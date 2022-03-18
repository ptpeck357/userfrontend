import { useState } from 'react';
import {
	MDBContainer,
	MDBCard,
	MDBCardBody,
	MDBInput,
	MDBBtn
} from 'mdb-react-ui-kit';

import Toast from 'react-simple-toasts';

import { baseURI } from '../utils/helpers';

const CreateUserForm = ({ fetchData }) => {
	const [errorMessage, setErrorMessage] = useState('');

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
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify(userForm)
			})
			.then(res => {
				if(!res.ok){
					setErrorMessage('Error trying to Register an user. Please try again later.');
				}
				return res;
			})
			.then(() => {
				Toast('New user created!');

				setUserForm({
					name: '',
					email: '',
					phone: ''
				});

				fetchData();
				setErrorMessage('');
			})
			.catch(error => {
				Toast('Error trying to Register an user. Please try again later.');
				setErrorMessage('Error trying to Register an user. Please try again later.');

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
						<h4 className="text-center py-4"><li className="fa fa-clipboard-list"/>Create a new user</h4>
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
						<div className="pt-4" role="alert" style={{ color: 'red' }}>
							{errorMessage}
						</div>
						<div className="pt-4">
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