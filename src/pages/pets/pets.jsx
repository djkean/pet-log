import { React, useEffect, useState } from 'react';

export function PetsPage() {
  const [pets, setPets] = useState([]);

  const getPetData = async () => {
    try {
      const petDbRes = await fetch('/api/pets', { headers: {'Content-Type': 'application/json'} }, { method: 'GET' });
      if (petDbRes.status !== 200) {
        console.log('An error occurred');
      }
      const petDbResJson = await petDbRes.json();
      console.log(petDbRes);
      setPets(petDbResJson.response);
      return petDbResJson;
    }
    catch(err) {
      console.log(err, "Something isn't right here...");
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
      <html>
        <b>PETS!</b>
      </html>
    </>
  );

}