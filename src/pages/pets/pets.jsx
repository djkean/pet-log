import { React, useEffect, useState } from 'react';

export function PetsPage() {
  const [pets, setPets] = useState([]);

  const getPetData = async () => {
    try {
      const petDbRes = await fetch('http://localhost:8000/api/pets', { 
        headers: { 'Content-Type': 'application/json' } 
      }, { 
        method: 'GET' 
      });
      if (petDbRes.status !== 200) {
        console.log('An error occurred');
        return
      }
      const petDbResJson = await petDbRes.json();
      console.log(petDbResJson.response);
      setPets(petDbResJson.response);
      return petDbResJson;
    }
    catch(err) {
      console.log(err, 'Something i\'snt right here...');
    }
  }
   
  useEffect(() => {
    getPetData()
  }, []);
  
  if (pets.length === 0) { 
    return <h2>Retrieving your pets...</h2> 
  }
  
  return (
    <>
      <div>
        <b>PETS!</b>
        {pets.length > 0 && pets.map((pet) => {
          return (
            <table>
              <tr key={pet.id}>
                <td>{pet.name}</td>
                <td> | </td>
                <td>{pet.source}</td>
              </tr>
            </table>
          )
        }) }
      </div>
    </>
  );

}