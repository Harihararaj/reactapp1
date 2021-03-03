import React from 'react';
import Hello from './Hello';
const Hell = ( {arr} )=>{
	const lastele=arr.map((num,i)=>{
		return(<Hello name={arr[i].name} id={arr[i].l} key={i}/>);
	})
	return (
		<div>
			{lastele};
		</div>
		);
}
export default Hell;