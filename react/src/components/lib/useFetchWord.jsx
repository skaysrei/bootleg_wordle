import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchWord = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWord = async () => {
            try {
                const { data: word } = await axios.get(
                    'https://random-word-api.herokuapp.com/word',
                    {
                        params:
                        { 
                            length : 5,
                            lang : 'it'
                        }
                    }
                );
                setData(word);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };

        fetchWord();
    }, []);

  return { data, loading};
}

export default useFetchWord;