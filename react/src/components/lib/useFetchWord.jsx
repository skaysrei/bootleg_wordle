import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchWord = () => {
    const [word, setWord] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWord = async () => {
            try {
                const { data: response } = await axios.get(
                    'https://random-word-api.herokuapp.com/word',
                    {
                        params:
                        { 
                            length : 5,
                            lang : 'it'
                        }
                    }
                );
                setWord(response[0]);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };

        fetchWord();
    }, []);

  return { word, loading };
};

export default useFetchWord;