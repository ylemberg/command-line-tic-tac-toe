var inquirer = require('inquirer')

console.log('-------')
console.log('| | | |')
console.log('-------')
console.log('| | | |')
console.log('-------')
console.log('| | | |')
console.log('-------')
inquirer.prompt([{
  name: 'username',
  type: 'input',
  message: 'Player X, please type selected cell, format: (row, col):',
  validate: value => value.length ? true : 'Please enter your username or e-mail address'
}]).then(res => {
  console.log('-------')
  console.log('| | | |')
  console.log('-------')
  console.log('| | | |')
  console.log('-------')
  console.log('| | | |')
  console.log('-------')
  console.log('res', res)
  }).catch(err => {
    console.log('err', err)
  })
