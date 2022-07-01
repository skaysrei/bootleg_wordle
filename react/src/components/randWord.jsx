import { React, useState, useEffect } from 'react';
import axios from 'axios';


export default function RandWord() {
  const axios = require('axios').default;
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
    );
  }, [])
  
  return (
    <div>
      {output}
    </div>
  )
}
