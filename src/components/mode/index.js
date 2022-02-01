import React, { useState } from 'react';
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect } from 'react/cjs/react.development';
import '../../index.css';

const Mode = () => {

	const [state, setState] = useState({dark: false, change: false});
	

	useEffect(()=>{
		if(state.change === true){
			setState({...state, change: false})
		}
	},[state.change])
	
	const mdark = () =>{
		var body = document.querySelector('body');
		body.classList.toggle('darkmode');
		state.dark ? setState({...state, dark: false, change: true}): setState({...state, dark: true, change: true});
	}	

  return (
  	<>
	  <div className="mt-4">
	  { 
	  	!state.dark ? <button id="bdark" onClick={()=>{mdark()}}><FaMoon /></button> : <button id="bdark"  onClick={()=>{mdark()}}><FaSun /></button>
	  }
	  </div>
	 
		
  
  	</>
  )
};

export default Mode;
