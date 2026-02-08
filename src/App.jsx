import './app.css';
import { useState, useEffect } from 'react';
import * as petService from './services/petService'
import PetList from './components/PetList/PetList';

// src/App.jsx

const App = () => {
  const [pets, setPets] = useState([]);

  // Create a new useEffect
  useEffect(() => {
    
    const fetchPets = async () => {

      try {
        const fetchedPets = await petService.index();

        if (fetchPets.err) {
          throw new Error(fetchPets.err)
        }

        setPets(fetchedPets);
      } catch (err) {
        console.log(err);
      }
    };
    // Invoke the function
    fetchPets();
    
    //(async () => {
      //const fetchedPets = await petService.index();
      //setPets(fetchedPets);
    //})
  }, []);

  return (
    <PetList pets={pets} />
  )
};


export default App;