const inquirer = require('inquirer')

const tiles = [[null, null, null], [null, null, null], [null, null, null]]

const prompt = () => {
  inquirer.prompt([{
    name: 'username',
    type: 'input',
    message: 'Player X, please type selected cell, format: (row, col):'
  }]).then(res => {
    console.log('-------')
    console.log('| | | |')
    console.log('-------')
    console.log('| | | |')
    console.log('-------')
    console.log('| | | |')
    console.log('-------')
    console.log('res', res)
    prompt()
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
