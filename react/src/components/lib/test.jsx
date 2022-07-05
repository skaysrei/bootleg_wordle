import {React, useState } from 'react'
import useFetchWord from './useFetchWord'

const Test = () => {
    const InitWord = () => {
        const { word, loading } = useFetchWord();
        return { word, loading };
    }
    const [word, setWord] = useState(InitWord);

    return (
        <>
            <div conatiner>
                <h2>{word}</h2>
                <button onClick={setWord(InitWord)}>Nuova Parola</button>
            </div>
        </>
    )
}

export default Test;
