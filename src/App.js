import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import PeopleList from './components/PeopleList';
import PeopleInfo from './components/PeopleInfo';
import Mode from './components/mode';

function App() {
  return (
	  <Router>
		
			<div className="App">
				<Mode/>
				<Routes>
					<Route exact path="/"  element={<PeopleList />}></Route>
					<Route path="/info/:id" element={<PeopleInfo />}></Route>
				</Routes> 		 
			</div>
	
	  </Router>
    
  );
}

export default App;
