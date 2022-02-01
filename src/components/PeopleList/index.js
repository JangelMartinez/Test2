import React, {useEffect, useState} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PeopleRow from '../PeopleRow';
import HeadTitle from '../HeadTitle';

const PeopleList = () => {

	const [state, setState] = useState({users:[]});

	useEffect( ()=>{
		
		datos();
				
	},[])

	const datos = async () =>{
		const res = await fetch ('https://jsonplaceholder.typicode.com/users')
		.then (response => response.json())
		
		setState({...state, users: res});			
	}

  return <>
			
			<div className="container mt-5">
				<HeadTitle />
				{state.users.map(element => <PeopleRow params={element}/>)}
				
			</div>
			
  		</>;
};

export default PeopleList;
