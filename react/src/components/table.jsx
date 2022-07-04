import { React, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import RandWord from './lib/randWord'

let papersStack = []
let row = []  // for storing every word attempt
const secretWord = RandWord()

export default function Table() {
  useEffect(() => {
    _initPapersStack()
    document.addEventListener('keydown', handleKeypress)
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

// Keyboard buttons press handler
function handleKeypress(e) {
  let letter = e.key.toLowerCase()  // string
  let letterAscii = e.keyCode
  if (letterAscii === 8) {
    if (row.length)
      popRowPushPapers()
    return
  }
  else if (letterAscii === 13) {
    if (row.length === 5)
      submitRow()
    return
  }
  else if (!isLetter(letterAscii)) {
    return
  }
  papersStackPush(letter)
  if (!papersStack.length)
    document.removeEventListener("keydown", handleKeypress)
}

function popRowPushPapers() {
  let latestPaper = row.pop()
  latestPaper.textContent = "ㅤ"
  papersStack.push(latestPaper)
}

function submitRow() {
  let attemptedWord = row.map( paper => paper.textContent)
  let lettersScores = Array(5)
  console.log(lettersScores)
  for (const [idx, char] of attemptedWord.entries()) {
    compareLetter(char, idx, lettersScores)
  }
  console.log(lettersScores)
  for (let i = 0; i < 5; ++i) {
    row.pop()
  }
}

function compareLetter(char, idx, lettersScores) {
  let score = 0
    if (char in secretWord) {
      score++
      if (char === secretWord[idx])
        score++
    }
  lettersScores[idx] = score
}

function popPapersPushRow() {
  let newPaper = papersStack.pop()
  row.push(newPaper)
}

// Check if given character is from A-Z (ascii is always counted as uppercase somehow)
function isLetter(letterAscii) {
  console.log(letterAscii)
  if (!(letterAscii >= 65 && letterAscii <= 90))
    return false
  return true
}

// Change the current 'Paper' value into the given letter from user
function papersStackPush(letter) {
  if (row.length >= 5) {
    console.log("The row is filled already! Submit it or delete from it")
    return
  }
  console.log("Pressed = ", letter)
  let currentPaper = papersStack.at(-1)
  currentPaper.textContent = letter
  popPapersPushRow()
}

// Fill the papers stack with the DOM-generated 'Paper' components
function _initPapersStack() {
  papersStack = [
    ...document.getElementsByClassName(
    "MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-1ps6pg7-MuiPaper-root"
    )
  ].reverse()
}