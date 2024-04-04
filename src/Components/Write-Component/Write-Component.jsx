import React from 'react';
import { useState } from 'react';
import app from '../../FireBase-Config';
import { getDatabase, ref, set, push } from 'firebase/database';

const WriteComponent = () => {
    let [inputValue1, setInputValue1] = useState("");
    let [inputValue2, setInputValue2] = useState("");

    const saveData = async () => {
        const db = getDatabase(app);
        const newDocRef = push(ref(db, 'formations'))
        set(newDocRef, {
            fruitName: inputValue1,
            infoFruit: inputValue2
        }).then(() => {
            alert("data saved succefully")
        }).catch((error) => {
            alert("Error:", error.message);
        })

    }
    return (
        <div className="container-fluid">
            <h1 className="text-center mb-4">Enrregistrement</h1>
            <div class="row g-3 align-items-center">
                <div className="col-auto">
                    <label for="texte" class="col-form-label" >Nom du Fruit</label> <br />
                </div>
                <div className="col-auto">
                    <input className="form-control" type='text' value={inputValue1}
                        onChange={(e) => setInputValue1(e.target.value)} /> <br />

                </div>
                <div className="col-auto">
                    <span id="passwordHelpInline" class="form-text">

                    </span>
                </div>
            </div>
            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <label for="text" className="col-form-label">Infos du Fruit</label>
                </div>
                <div className="col-auto">
                    <textarea className='form-control' type='text' value={inputValue2}
                        onChange={(e) => setInputValue2(e.target.value)} cols={22} rows={3}> </textarea> <br />
                </div>
                <div class="col-auto">
                    <span id="passwordHelpInline" class="form-text">

                    </span>
                </div>
            </div>
            <button className=" mb-4 bg-success" onClick={saveData} >Ajouter</button>

        </div>
    );
}

export default WriteComponent;