import { React } from 'react'
import useFetchWord from './useFetchWord'

const Test = () => {
    const { word, loading } = useFetchWord();

    return (
        <>
            <div>
                <h2>WORD: {word}</h2>
                <h2>IS LOADING: {loading.toString()}</h2>
            </div>
        </>
    )
}

export default Test;
