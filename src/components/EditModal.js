import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import CreateUserForm from './CreateUserForm';
import { baseURI, fetchData } from '../utils/helpers';

import { MDBContainer, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import toast from 'react-simple-toasts';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '500px'
	},
};

const EditModal = ({ children, user }) => {
	const [userForm, setUserForm] = useState(user);
	const [modalIsOpen, setIsOpen] = useState(false);

	const handleClick = (e) => {
		e.preventDefault()

		fetch(baseURI + `/update/${user.id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(userForm)

		})
		.then(() => {
			toast('User updated!');
			fetchData();
			setUserForm(userForm);
			closeModal();
		})
		.catch(error => {
			console.log(error);
		});
	}

	const onChange = (event) => {
		setUserForm({ ...userForm, [event.target.name]: event.target.value });
	};

	const openModal = () => {
		setIsOpen(true);
	}
	const closeModal = () => {
		setIsOpen(false);
	}

	useEffect(() => {
		Modal.setAppElement('body');
	});

	return  (
		<div>
			<MDBBtn tag='a' onClick={openModal} color='none' style={{ color: '#616161' }}>
				{children}
			</MDBBtn>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Edit Modal"
			>
				<form>
					<p className="h4 text-center py-4">Update user</p>
					<div className="grey-text">
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
					<div className="text-center py-4 mt-3">
						<MDBBtn className='ml-4' type="submit" onClick={handleClick}>
							Update
						</MDBBtn>
					</div>
				</form>
			</Modal>
		</div>
	);
};

// EditModal.PropTypes = {
// 	user: PropTypes.object
// }

export default EditModal;