import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
// import axios from 'axios';

function App() {

  const [movies, setMovies] = useState();

  const getMovies = async () => {

    try {
      const response = await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    } 
    catch (error) {
      console.log(error);
    }  
  };

  useEffect( () => {
    getMovies();
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
