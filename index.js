const fs = require('fs')

const message = 'Hello world'
console.log(message)
fs.writeFileSync('output.txt', message)
