import React, { useState, useEffect } from 'react';
import app from '../../FireBase-Config';
import { getDatabase, ref, set, push, get, remove, update } from 'firebase/database';

const Read = () => {
    const [fruitArray, setFruitArray] = useState([]);

    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "formations");
        try {
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
                setFruitArray(Object.values(snapshot.val()));
            } else {
                console.log("No data available");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const handleDelete = async (id) => {
        const db = getDatabase(app);
        const fruitRef = ref(db, `formations/${id}`);
        try {
            await remove(fruitRef);
            setFruitArray(fruitArray.filter(fruit => fruit.id !== id));
            console.log("Fruit deleted successfully");
        } catch (error) {
            console.error("Error deleting fruit:", error);
        }
    };

    const handleUpdate = async (id) => {
        // Implementer la fonction de mise à jour ici
        console.log("Mise à jour du fruit avec l'ID :", id);
    };

    return (
        <div>
            <h1 className='mb-3'>Les données de FireBase</h1>
            <button className='btn btn-primary mb-3' onClick={fetchData}>Afficher les données</button>
            <ul className='list-group'>
                {fruitArray.map((item, index) => (
                    <li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                            {item.fruitName} &nbsp; &nbsp; &nbsp; {item.infoFruit}
                        </div>
                        <div className='d-flex gap-2'>
                            <button className='btn btn-danger ' onClick={() => handleDelete(item.id)}>Supprimer</button>
                            <button className='btn btn-warning ' onClick={() => handleUpdate(item.id)}>Mise à jour</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Read;
