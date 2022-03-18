import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit';

 const Navbar = () => {
	return (
		<>
			<MDBNavbar expand='lg' dark  light style={{ backgroundColor: '#00008B' }}>
				<MDBContainer fluid>
					<MDBNavbarBrand tag="span" className='mb-0 h1 db'>User Table Information</MDBNavbarBrand>
				</MDBContainer>
			</MDBNavbar>
		</>
	);
}

export default Navbar;