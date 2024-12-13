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
        <table className='pet-table'>
          {pets.length > 0 && pets.map((pet) => {
            return (
              <tbody>
                <tr key={pet.id}>
                  <td rowSpan={2}>
                    <img src={`../img-assets/pet-icons/${pet.id}.png`} alt='pet icon'></img>
                  </td>
                  <td colSpan={2}>{pet.name}</td>
                </tr>
                <tr>
                  {pet?.kc && <td>{pet.kc}</td> }
                  {pet?.kc2 && <td>{pet.kc2}</td> }
                </tr>
              </tbody>
            )
          })}
        </table>
      </div>
    </>
  );

}