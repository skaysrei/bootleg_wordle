import { React, useState, useCallback, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import useFetchWord from './lib/useFetchWord.jsx'
import Popup from './popup.jsx'
/* import axios from 'axios' */
import './table.css'

let papersStack = []
let row = []  // for storing every word attempt

let isOpen = false;
let gametime = '00:00';


export default function Table() {
  console.log("RENDER HERE")
  const word = useFetchWord()["word"];
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const closeDialog = useCallback(() => {
    setIsDialogOpen(()=> false);
  }, [setIsDialogOpen]);
  const openDialog = useCallback(() => {
    setIsDialogOpen(()=> true);
  }, [setIsDialogOpen]);

  sessionStorage.setItem("secretWord", word)

  /** Starts the game engine */
    useEffect(() => {
      _initPapersStack()
      document.addEventListener('keydown', handleKeypress)
    }, [])
  
  /** Fill the papers stack with the DOM-generated 'Paper' components */
  function _initPapersStack() {
    papersStack = [
      ...document.getElementsByClassName(
      "MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-1ps6pg7-MuiPaper-root"
      )
    ].reverse()
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

  /** Colors the last row in red */
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

  /** Keyboard buttons press handler */
  const handleKeypress = useCallback((e) => {
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
  }, [])

  /** Determines outcome of the game */
  const winOrLoss = useCallback((lettersScores) => {
    if (lettersScores.every(val => val === 2)) {
      console.log("Hai vinto")
      document.removeEventListener("keydown", handleKeypress)
      // TODO: add winning popup
      openDialog()      
    } else if (!papersStack.length) {
      redRow()
      console.log("Hai perso")
      // TODO: add losing popup
      openDialog()
    }
    gametime='00:00'
  }, [])

  /** Pop Paper from row[] and push it back to paperStack[] */
  function popRowPushPapers() {
    let latestPaper = row.pop()
    latestPaper.textContent = "ㅤ"
    papersStack.push(latestPaper)
  }

  /** Submit the user word attempt */
  function submitRow() {
    let attemptedWord = row.map(paper => paper.textContent)
    let lettersScores = Array(5).fill(0)
    let secretWord = sessionStorage.secretWord
    secretWord = Array.from(secretWord)
    for (const [idx, char] of attemptedWord.entries()) {
      compareLetter(idx, char, lettersScores, secretWord)
    }
    for (const [idx, char] of attemptedWord.entries()) {
      searchLetter(idx, char, lettersScores, secretWord)
    }
    markLetters(lettersScores)
    winOrLoss(lettersScores)

    for (let i = 0; i < 5; ++i) {
      row.pop()
    }
  }

  /** Check char by char and assign score based on presence & position in the solution */
  function compareLetter(idx, char, lettersScores, secretWord) {
    if (char === secretWord[idx]) {
      lettersScores[idx] = 2
      secretWord[idx] = -1
    }
  }

  /** Checks if the letter is in the word */
  function searchLetter(idx, char, lettersScores, secretWord) {
    if (lettersScores[idx] === 2)
      return
    if (secretWord.includes(char)) {
      lettersScores[idx] = 1
      let idxSecretChar = secretWord.indexOf(char)
      console.log(idxSecretChar)
      secretWord[idxSecretChar] = 0
    }
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
      {/* <OpenContext.Provider value={isOpen}>
        <Popup open={isOpen} word={word} gametime={gametime}/>
      </OpenContext.Provider> */}
      <Popup open={isDialogOpen} word={word} gametime={gametime} closeDialog={closeDialog}/>
    </>
  )
}