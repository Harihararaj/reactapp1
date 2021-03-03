import React, {Component} from 'react';

import Ttop from './Ttop';
import Hell from './Hell';
import {array} from './App';
import Scrol from './Scrol';
class Ass extends Component {
	constructor()
	{
		super();
		this.state ={
			ar:array,
			feild:''
		};
	}

	onsearchof=(event)=>{
		this.setState({feild: event.target.value.toLowerCase()});
	}

	render(){
			const newarray= this.state.ar.filter( num =>{
				return(num.name.toLowerCase().includes(this.state.feild));
			});
		return(
		<div className="tc bg-blue">
			<Ttop a={this.onsearchof}/>
			<Scrol>
				<Hell arr={newarray}/>
			</Scrol>
		</div>
		);
	}
}
export default Ass;


