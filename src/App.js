import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import {orginals,actions,comedyMovies,horrorMovies,actionMovies,romanceMovies,documentaries} from './Urls'
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals' />
      <RowPost url={actions} title='Action' isSmall/>
      <RowPost url={comedyMovies} title='Comedy Movies' isSmall/>
      <RowPost url={horrorMovies} title='Horror Movies' isSmall/>
      <RowPost url={actionMovies} title='Action Movies' isSmall/>
      <RowPost url={romanceMovies} title='Romantic Movies' isSmall/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
