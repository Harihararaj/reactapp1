import React from 'react';
const Hello = ({name , id})=>{
	return (
	<div className='bg-red pa3 ma3 grow dib'>
		<img src={id} height='300' width='300'/>
		<h1>{name} </h1>
		<p>All brands are available</p>
	</div>
	);
}
export default Hello;
