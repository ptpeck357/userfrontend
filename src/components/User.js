import React from 'react'

// deconstructed props
const User = ({customer:{id, username, email, phonenumber} }) => {

return (
	<tr key={id}>
		<td>{id}</td>
		<td>{username}</td>
		<td>{email}</td>
		<td>{phonenumber}</td>
		<td><button>Edit</button><button>Delete</button></td>
	</tr>
)
}

export default User;