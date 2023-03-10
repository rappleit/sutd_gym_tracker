import { getDatabase, onValue, ref } from "firebase/database";
import { useState, useEffect } from 'react';



const Counter = ({
    db
}) => {
    const currentDate = new Date();
    const [numEntries, setNumEntries] = useState(0)
    const [numExits, setNumExits] = useState(0)


    const entryRef = ref(db, 'tracker/' + `${currentDate.getFullYear()}/` + `${currentDate.getMonth() + 1}/` + `${currentDate.getDate()}/` + 'entry')
    useEffect(() => {
        onValue(entryRef, (snapshot) => {
            setNumEntries(snapshot.size); //pull number of entries from db
        }, (error) => {
            console.error(error);
        });
    
        const exitRef = ref(db, 'tracker/' + `${currentDate.getFullYear()}/` + `${currentDate.getMonth() + 1}/` + `${currentDate.getDate()}/` + 'exit')
        onValue(exitRef, (snapshot) => {
            setNumExits(snapshot.size); //pull number of exits from db
        }, (error) => {
            console.error(error);
        });
    }, [])
    
    return (
        <div className="counter">
            <h3>Number of people in the gym:</h3>
            <h1>{numEntries-numExits}</h1>
        </div>
    );
}

export default Counter;