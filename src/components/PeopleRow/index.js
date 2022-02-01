import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import PeopleInfo from '../PeopleInfo';



const PeopleRow = (datos) => {
  
	//console.log(datos);
	const {params} = datos;
	console.log("parametros: ", params)
	const [state, setState] = useState({datos: {}, photos: [], loading: false});

	useEffect(()=> {
		
		photo();
		
	},[])

	const photo = async () =>{
		
		const res = await fetch('https://jsonplaceholder.typicode.com/photos')
		.then(response => response.json())
		
		setState({...state, datos: params, photos: res, loading: true})
	}
	
	if (state.loading === false ) return <div>Loading...</div>;
	
	return (
		<>
			<Link to={'/info/' + state.datos.id} className=''>
				<div className='visual border-bottom border-info'>
				
					<div className='col'>
						<img className='rounded-circle' src={state.photos[state.datos.id].thumbnailUrl} alt="imagen" width="75px" />
					</div>
					<div className="col visual-item">
						<div className=' peque fw-bold '>{state.datos.name}</div>
					</div>
					<div className="col visual-item">
						<div className=' peque '>{state.datos.email}</div>
					</div>
				
					<div className="col visual-item">
						<div className=' peque '>{state.datos.website}</div>
					</div>
					
				</div>
			</Link>
		</>
		)
};

export default PeopleRow;
