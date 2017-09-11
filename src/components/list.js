import React from 'react';

const List = (props) => {

	const arraylist = props.eggs.map((egg, index) => {
		return <li key={index}> {egg} </li>;
	});

	return (
		<div>
			<ul>
				{arraylist}
			</ul>
		</div>
	);
}

export default List;