import { useState } from 'react';
import { baseURI } from '../utils/helpers';

import {
	MDBBtn,
	MDBModal,
	MDBModalDialog,
	MDBModalContent,
	MDBModalHeader,
	MDBModalTitle,
	MDBModalFooter,
	MDBInput
} from 'mdb-react-ui-kit';

import toast from 'react-simple-toasts';

const EditModal = ({ children, user, fetchData }) => {
	const [userForm, setUserForm] = useState(user);

	const handleClick = (event) => {
		if(userForm.name && userForm.email && userForm.phone){
			event.preventDefault();

			fetch(baseURI + `/update/${user.id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(userForm)

			})
			.then(() => {
				toast('User updated!');
				setUserForm(userForm);
				fetchData();
				closeModal();
			})
			.catch(error => {
				console.log(error);
			});
		};
	};

	const onChange = (event) => {
		setUserForm({ ...userForm, [event.target.name]: event.target.value });
	};

	const [modalIsOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			<MDBBtn tag='a' onClick={openModal} color='none' style={{ color: '#616161' }}>
				{children}
			</MDBBtn>
			<MDBModal closeOnEsc show={modalIsOpen} setShow={setIsOpen} tabIndex='-1'>
				<MDBModalDialog>
					<MDBModalContent>
						<MDBModalHeader>
							<MDBModalTitle><div className="h4 text-center p-1">Updating user: {user.name}</div></MDBModalTitle>
							<MDBBtn className='btn-close' color='none' onClick={closeModal}></MDBBtn>
						</MDBModalHeader>
						<form>
							<div className="grey-text form-inputs">
								<MDBInput
									id='name'
									type='text'
									label='Name'
									name='name'
									value={userForm.name}
									onChange={onChange}
									required
								/>
								<MDBInput className='mt-3'
									id='email'
									type='email'
									label='Email Address'
									name='email'
									value={userForm.email}
									onChange={onChange}
									required
								/>
								<MDBInput className='mt-3'
									id='phone'
									type='tel'
									name='phone'
									label='Phone Number'
									value={userForm.phone}
									onChange={onChange}
									required
								/>
							</div>
							<MDBModalFooter>
								<MDBBtn color='secondary' onClick={closeModal}>
									Close
								</MDBBtn>
								<div className="text-center">
									<MDBBtn className='ml-4' type="submit" onClick={handleClick}>
										Update
									</MDBBtn>
								</div>
							</MDBModalFooter>
						</form>
					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>
		</>
	);
};

export default EditModal;