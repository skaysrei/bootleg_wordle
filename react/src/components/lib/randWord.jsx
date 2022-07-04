import axios from 'axios';


export default function RandWord(func) {
  axios.get(
    'https://random-word-api.herokuapp.com/word',
    {
      params:
        { 
          length : 5,
          lang : 'it'
        }
    }
  ).then((
    resp => { func(resp.data) }
  )).catch( err => {
    console.log(err)
  });
}
