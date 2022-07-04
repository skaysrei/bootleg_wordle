import { React, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Item from '@mui/material/ListItem'
import Attempt from './attempt'

export default function Table() {
  useEffect(() => {
    document.addEventListener('keypress', handleKeypress)
  }, [])
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 20 }}>
      {Array.from(Array(30)).map((_, index) => (
        <Attempt />
      ))}
      </Grid>
    </>
  )
}

function handleKeypress(e) {
  
  console.log("Premuto ", e.key)
}