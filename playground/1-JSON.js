const fs = require ('fs')
// const book = {
//     title:'Ponniyin selvan',
//     author:'kalki'
// }
// const bookJSON=JSON.stringify(book)
// fs.writeFileSync('1-JSON.json',bookJSON)

// const dataBuffer=fs.readFileSync('1-JSON.json')
// const data=dataBuffer.toString()
// const dataParsed=JSON.parse(data)
// console.log(dataParsed.title)

const bookbin = fs.readFileSync('1-JSON.json')
const bookJSON = bookbin.toString()
const bookParse = JSON.parse(bookJSON)
//delete(bookParse.author)
bookParse.title=('PONNIYIN SELVAN')
const bookinfo = JSON.stringify(bookParse)
fs.writeFileSync('1-JSON.json',bookinfo)

// console.log(bookJSON)
// const bookParsed=JSON.parse(bookJSON)
// console.log(bookParsed)