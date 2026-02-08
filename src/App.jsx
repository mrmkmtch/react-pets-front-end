import './App.css';
import { useState, useEffect } from 'react';
import * as petService from './services/petService'
import PetList from './components/PetList/PetList';
import PetDetail from './components/PetDetail/PetDetail'

// src/App.jsx

const App = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);



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

  const handleSelectPet = (pet) => {
    setSelectedPet(pet);
  };

  return (
    <>
    <PetList pets={pets} onSelectPet={handleSelectPet} />
    <PetDetail selected ={selectedPet} />
    </>
  );
};


export default App;