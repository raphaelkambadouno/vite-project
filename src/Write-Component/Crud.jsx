import { db } from "../FireBase-Config";
import {collection, Doc, addDoc, delectDoc, updateDoc, getDoc, doc} from 'firebase/firestore'
import { useState, useEffect } from "react";


const Crud = () => {
    const [nom, setNom] = useState("");
    const [fetchData, setfetchData] = useState([]);
    const [id, setid] = useState();

    //Creatiom de la reference de la base de donnee

    const dbref = collection(db, 'CRUD')

    //Ajout de la donnee
    const add = async ()=> {
        const addData = await addDoc(dbref, {Nom: nom})
        if (addData){
            alert('Envoyer avec succes')
            window.Location.reload()
        }else{
            alert('Erreur')
        }
    }

    //Recuperation des donnee
    const fetch = async () => {
        const snapshot = await getDoc(dbref)
        const fetchData = snapshot.Doc.map((doc => ({id:doc.id, ...doc.data})))
    }

    return (
        <input type="text" placeholder="Nom" aria-autocomplete="off" value={nom} onChange={(e) => setNom(e.targe.value)} />
        
        
    )

}
export default Crud