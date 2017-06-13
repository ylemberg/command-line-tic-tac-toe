const inquirer = require('inquirer')

const tiles = [[null, null, null], [null, null, null], [null, null, null]]
let player = 'X'
let gameInProgress = true
let winningPlayer

const winnerPrompt = () => {
  inquirer.prompt([{
    name: 'winner',
    type: 'input',
    message: `CONGRATULATIONS PLAYER ${winningPlayer}, you've won the game!`
  }])
}

const displayLine = row => {
  const firstCol = tiles[row][0] ? tiles[row][0] : ' '
  const secondCol = tiles[row][1] ? tiles[row][1] : ' '
  const thirdCol = tiles[row][2] ? tiles[row][2] : ' '
  console.log(`|${firstCol}|${secondCol}|${thirdCol}|`)
}

const addTile = (row, col) => {
  tiles[row][col] = player
}

const setWinner = winner => {
  gameInProgress = false
  winningPlayer = winner
  winnerPrompt()
}

const checkRows = () => {
  for (let i = 0; i < 3; i++) {
    const rowVal = tiles[i][0]
    let winner = true
    for (let j = 1; j < 3; j++) {
      if (tiles[i][j] !== rowVal || rowVal === null) {
        winner = false
      }
    }
    winner && setWinner(rowVal)
  }
}

const checkCols = () => {
  for (let i = 0; i < 3; i++) {
    const colVal = tiles[0][i]
    let winner = true
    for (let j = 1; j < 3; j++) {
      if (tiles[j][i] !== colVal || colVal === null) {
        winner = false
      }
    }
    winner && setWinner(colVal)
  }
}

const checkDiags = () => {
  if (tiles[0][0] === tiles[1][1] && tiles[1][1] === tiles[2][2] && tiles[2][2] !== null) {
    setWinner(tiles[0][0])
  } else if (tiles[0][2] === tiles[1][1] && tiles[1][1] === tiles[2][0] && tiles[2][0] !== null) {
    setWinner(tiles[0][2])
  }
}

const checkWinner = () => {
  checkRows()
  checkCols()
  checkDiags()
}

const prompt = () => {
  inquirer.prompt([{
    name: 'tile',
    type: 'input',
    message: `Player ${player}, please type selected cell, format: (row, col):`
  }]).then(input => {
    console.log('typeof input.tile', typeof input.tile)
    const row = input.tile[1]
    const col = input.tile[4]
    addTile(row, col)
    console.log('-------')
    displayLine(0)
    console.log('-------')
    displayLine(1)
    console.log('-------')
    displayLine(2)
    console.log('-------')
    player = player === 'X' ? 'O' : 'X'
    checkWinner()
    gameInProgress && prompt()
  }).catch(err => {
    console.log('err', err)
  })
}

console.log('-------')
console.log('| | | |')
console.log('-------')
console.log('| | | |')
console.log('-------')
console.log('| | | |')
console.log('-------')
prompt()
