import { React, useState, useEffect } from 'react';
import axios from 'axios';


export default function RandWord() {
  const [output, setOutput] = useState();

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
    ).then(
      resp => { setOutput(resp.data)}
    ).catch( err => {
      console.log(err)
    });
  }, [])
  
  return (
    <div>
      {output}
    </div>
  )
}
