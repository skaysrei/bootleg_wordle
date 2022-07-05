import { React, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import useFetchWord from './lib/useFetchWord.jsx'
/* import axios from 'axios' */
import './table.css'


let papersStack = []
let row = []  // for storing every word attempt

export default function Table() {
  const word = useFetchWord()["word"];

  sessionStorage.setItem("secretWord", word)

  useEffect(() => {
    _initPapersStack()
    document.addEventListener('keydown', handleKeypress)
  }, [])

  return (
    <>
      <h1>Parol.</h1>
      <Grid columns={24} container spacing={1}>
        <Grid item>
          <Paper id={0-0}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={0-1}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={0-2}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={0-3}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={0-4}>
            
          </Paper>
        </Grid>
      </Grid>
      <Grid columns={24} container spacing={1}>
        <Grid item>
          <Paper id={1-0}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={1-1}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={1-2}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={1-3}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={1-4}>
            
          </Paper>
        </Grid>
      </Grid>
      <Grid columns={24} container spacing={1}>
        <Grid item>
          <Paper id={2-0}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={2-1}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={2-2}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={2-3}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={2-4}>
            
          </Paper>
        </Grid>
      </Grid>
      <Grid columns={24} container spacing={1}>
        <Grid item>
          <Paper id={3-0}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={3-1}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={3-2}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={3-3}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={3-4}>
            
          </Paper>
        </Grid>
      </Grid>
      <Grid columns={24} container spacing={1}>
        <Grid item>
          <Paper id={4-0}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={4-1}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={4-2}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={4-3}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={4-4}>
            
          </Paper>
        </Grid>
      </Grid>
      <Grid columns={24} container spacing={1}>
        <Grid item>
          <Paper id={5-0}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={5-1}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={5-2}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={5-3}>
            
          </Paper>
        </Grid>
        <Grid item>
          <Paper id={5-4}>
            
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

/** Keyboard buttons press handler */
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
}

/** Pop Paper from row[] and push it back to paperStack[] */
function popRowPushPapers() {
  let latestPaper = row.pop()
  latestPaper.textContent = "ㅤ"
  papersStack.push(latestPaper)
}

/** Submit the user word attempt */
function submitRow() {
  let attemptedWord = row.map( paper => paper.textContent)
  let lettersScores = Array(5)
  for (const [idx, char] of attemptedWord.entries()) {
    compareLetter(char, idx, lettersScores)
  }
  markLetters(lettersScores)
  winOrLoss(lettersScores)
  for (let i = 0; i < 5; ++i) {
    row.pop()
  }
}

/** Check char by char and assign score based on presence & position in the solution */
function compareLetter(char, idx, lettersScores) {
  let score = 0
  let secretWord = sessionStorage.secretWord
    if (secretWord.includes(char)) {
      score++
      if (char === secretWord[idx])
        score++
    }
  lettersScores[idx] = score
}

/**
 * Change colors of Papers in DOM based on the score given
 * 1: yellow (letter is in the string but in a different position)
 * 2: green (letter is correct)
 */
function markLetters(lettersScores) {
  for (const [idx, score] of lettersScores.entries()) {
    switch (score) {
      case 2:
        row[idx].style.backgroundColor = "#66CC00"
        break
      case 1:
        row[idx].style.backgroundColor = "#FFCC00"
        break
      default:
        break
    }
  }
}

function winOrLoss(lettersScore) {
  if (lettersScore.every(val => val === 2)) {
    console.log("Hai vinto")
    document.removeEventListener("keydown", handleKeypress)
    // TODO: add winning popup
  } else if (!papersStack.length) {
    redRow()
    console.log("Hai perso")
    // TODO: add losing popup
  }
}

function redRow() {
  for (const paper of row) {
    paper.style.backgroundColor = "#FF0000"
  }
}

/* Pop Paper from paperStack[] and push it to row[] */
function popPapersPushRow() {
  let newPaper = papersStack.pop()
  row.push(newPaper)
}

/** Check if given character is from A-Z (ascii is always counted as uppercase somehow) */
function isLetter(letterAscii) {
  if (!(letterAscii >= 65 && letterAscii <= 90))
    return false
  return true
}

/** Change the current 'Paper' value into the given letter from user */
function papersStackPush(letter) {
  if (row.length >= 5) {
    return
  }
  let currentPaper = papersStack.at(-1)
  currentPaper.textContent = letter
  popPapersPushRow()
}

/** Fill the papers stack with the DOM-generated 'Paper' components */
function _initPapersStack() {
  papersStack = [
    ...document.getElementsByClassName(
    "MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-1ps6pg7-MuiPaper-root"
    )
  ].reverse()
}