import React, { useState } from 'react';
import { MDBContainer, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

const CreateUserForm = () => {
	const [formValue, setFormValue] = useState({
		username: '',
		email: '',
		phonenumber: '',
	});

	const onChange = (event) => {
		setFormValue({ ...formValue, [event.target.name]: event.target.value });
	};

	return (
		<MDBContainer>
			<MDBCard>
				<MDBCardBody>
					<form>
						<p className="h4 text-center py-4">Create a new user</p>
						<div className="grey-text">
							<MDBInput
								id='username'
								type='text'
								label='Name'
								name='name'
								// value={}
								onChange={onChange}
								required
							/>
							<MDBInput className='mt-3'
								id='email'
								type='email'
								label='Email Address'
								name='email'
								// value={}
								onChange={onChange}
								required
							/>
							<MDBInput className='mt-3'
								id='phonenumber'
								type='tel'
								name='phonenumber'
								label='Phone Number'
								// value={}
								onChange={onChange}
								required
							/>
						</div>
						<div className="text-center py-4 mt-3">
							<MDBBtn type="submit">
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