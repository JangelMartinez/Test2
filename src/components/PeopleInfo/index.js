import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link, useParams} from 'react-router-dom'
import './style.css';

const PeopleInfo = () => {

	const {id} = useParams();
	const [state, setState] = useState({info: [], photos: [], load: 0});

	useEffect(()=>{
		if (state.load === 0){info();}
		if (state.load === 1){photo();}
	},[state.load])

	const info = async ()=>{

		const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
		.then(response => response.json())

		setState({...state, info: res, load:1});
	}

	const photo = async () =>{
		
		const res1 = await fetch('https://jsonplaceholder.typicode.com/photos')
		.then(response => response.json())
		
		setState({...state, photos: res1, load: 2})
	}


	if(state.load < 2) return <div>Loading...</div>;
  return (
  	<>	
	  	<div className="container mt-5 peque">
			<div className='card'>
				<div className="card-header bg-success bg-opacity-25">
					<div className="visual3">
						<div className="visual3-item">
							<img className='rounded-circle' src={state.photos[state.info.id].thumbnailUrl} alt="imagen" />
						</div>
						<div className="visual3-item">
							<h2 className="card-title">{state.info.name}</h2>
							<div><span className='fw-bold'> E-mail:</span> {state.info.email}</div>
							<div><span className='fw-bold'> Phone:</span> {state.info.phone}</div>
							<div><span className='fw-bold'> Username:</span> {state.info.username}</div>
							<div><span className='fw-bold'> WebSite:</span> {state.info.website}</div>
						</div>
					</div>
					
				</div>
				<div className="card-body">
					<div className="visual4">
						<div className="visual4-item ps-4">
							<h4 className='fw-bold'>Address</h4>
							<div className='text-start'><span className='fw-bold '> Street : </span> {state.info.address.street}</div>
							<div className='text-start'><span className='fw-bold '> Suite : </span> {state.info.address.suite}</div>
							<div className='text-start'><span className='fw-bold'> City : </span> {state.info.address.city}</div>
							<div className='text-start'><span className='fw-bold'> Code :</span> {state.info.address.zipcode}</div>
						</div>
						<div className="visual4-item">
							<h4 className='fw-bold'>Company</h4>
							<div className='text-start'><span className='fw-bold'> Name : </span> {state.info.company.name}</div>
							<div className='text-start'><span className='fw-bold'> BS : </span> {state.info.company.bs}</div>
							<div className='text-start'><span className='fw-bold'> CatchPhrase :</span>
								<div>{state.info.company.catchPhrase}</div>
							</div>
						</div>
					</div>
				</div>
				<div className="card-footer bg-success bg-opacity-25 text-center">
					<h5>
						<Link to="/"> Volver </Link>
					</h5>
				</div>
			</div>
		</div>
		
  
 	</>
  )
};

export default PeopleInfo;
