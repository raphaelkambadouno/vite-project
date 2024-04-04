import React from 'react';
import { useState } from 'react';
import app from '../../FireBase-Config';
import {getDatabase, ref, set, push, get} from 'firebase/database';

const Read = () => {
    let [fruitArray, setfruitArray] = useState([]);

    const fetchData = async () => {
        const db = getDatabase (app);
        const dbRef = ref(db, "formations");
        const snapshot = await get (dbRef) 
        if (snapshot.exists()) {
            setfruitArray(Object.values(snapshot.val()))
        }else{
            alert ("error")
        }
    }
    return (
        <div>
          <h1>Les données de FireBase</h1>  
          <button onClick={fetchData}>Afficher les données</button>
          <ul>
            {console.log (fruitArray)}
            {fruitArray.map ((item, index) => (
                <li key= {index}>
                    {item.fruitName} &nbsp; &nbsp; &nbsp;
                    {item.infoFruit}
                </li>
            ))
            }
          </ul>

        </div>
    );
}

export default Read;