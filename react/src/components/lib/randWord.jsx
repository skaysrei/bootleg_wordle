import axios from 'axios';
import { useState, useEffect } from 'react';

export default function RandWord() {
  const [secretWord, setWord] = useState()
  useEffect(()=> {
    axios.get(
      'https://random-word-api.herokuapp.com/word',
      {
        params:
          { 
            length : 5,
            lang : 'it'
          }
      }
    )
    .then(res => { 
        const data = res.data;
        setWord( data );
      }
    )
    .catch( err => {
      console.log(err)
    });
    }, []);

  return secretWord
}
