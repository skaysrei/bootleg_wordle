import { React, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Item from '@mui/material/ListItem'

let nextPaper = [0,0] // [0-5, 0-4]

export default function Table() {
  useEffect(() => {
    document.addEventListener('keypress', handleKeypress)
  }, [])
  return (
    <>
      <Grid columns={25} sx={{ width: '40%' }} container>
        <Grid xs={5} item>
          <Paper id={0-0}>
            1
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={0-1}>
            2
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={0-2}>
            3
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={0-3}>
            4
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={0-4}>
            5
          </Paper>
        </Grid>
      </Grid>
      <Grid columns={25} sx={{ width: '40%' }} container>
        <Grid xs={5} item>
          <Paper id={1-0}>
            1
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={1-1}>
            2
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={1-2}>
            3
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={1-3}>
            4
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={1-4}>
            5
          </Paper>
        </Grid>
      </Grid>
      <Grid columns={25} sx={{ width: '40%' }} container>
        <Grid xs={5} item>
          <Paper id={2-0}>
            1
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={2-1}>
            2
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={2-2}>
            3
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={2-3}>
            4
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={2-4}>
            5
          </Paper>
        </Grid>
      </Grid>
      <Grid columns={25} sx={{ width: '40%' }} container>
        <Grid xs={5} item>
          <Paper id={3-0}>
            1
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={3-1}>
            2
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={3-2}>
            3
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={3-3}>
            4
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={3-4}>
            5
          </Paper>
        </Grid>
      </Grid>
      <Grid columns={25} sx={{ width: '40%' }} container>
        <Grid xs={5} item>
          <Paper id={4-0}>
            1
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={4-1}>
            2
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={4-2}>
            3
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={4-3}>
            4
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={4-4}>
            5
          </Paper>
        </Grid>
      </Grid>
      <Grid columns={25} sx={{ width: '40%' }} container>
        <Grid xs={5} item>
          <Paper id={5-0}>
            1
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={5-1}>
            2
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={5-2}>
            3
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={5-3}>
            4
          </Paper>
        </Grid>
        <Grid xs={5} item>
          <Paper id={5-4}>
            5
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

function handleKeypress(e) {
  let letter = e.key.toLowerCase()  // string
  if (!isLetter(letter))
    return
  insertIntoTable(letter)

}

function isLetter(letter) {
  return letter !== letter.toUpperCase()
}

function insertIntoTable(letter) {
  
}