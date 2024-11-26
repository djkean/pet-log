import React, { useState, useEffect } from 'react';
import axios from 'axios'

export function UpdatePetsPage() {
  const [petList, setPetList] = useState({});
  const [serverRes, setServerRes] = useState({});
  const [formData, setFormData] = useState({
    id: null,
    kc: null,
    kc2: null,
    info: null,
  });

  const getPetNamesFromDb = async () => {
    try {
      const petsRes = await fetch('http://localhost:8000/api/update', {
        headers: { 'Content-Type': 'application/json' }
      }, {
        method: 'GET'
      });
      if (petsRes.status !== 200) {
        console.log('An error occurred');
        return
      }
      const petsResJson = await petsRes.json();
      console.log(petsResJson.response);
      setPetList(petsResJson.response);
      return petsResJson;
    }
    catch(err) {
      console.log(err, 'Something went wrong!')
    }
  }

  useEffect(() => {
    getPetNamesFromDb()
  }, []);

  if (petList.length === 0) {
    return <h2>Retrieving pet data...</h2>
  }

  return (
    <>
      <div>
        <b>insert form here</b>
      </div>
    </>
  )









}
