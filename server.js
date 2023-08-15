const express = require("express")
const path = require("path")
const cors=require("cors")
var axios = require("axios")
const app = express()
const port = 3000
app.use(cors())
app.get('/', (req, res) => {
  console.log(path.join(__dirname, 'public'))
   return res.sendFile('public/index.html' , { root : __dirname})
})

let corsOptions = {
  origin: [ 'http://localhost:3000', 'http://localhost:3000' ]
}
app.get('/searchword', cors(corsOptions),(req, res) => {
  console.log(req.query)
 
var options = {
  method: 'GET',
  url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/definition/',
  params: {entry: req.params.entry},
  headers: {
    'X-RapidAPI-Key': '418079cedfmsha69261eac8d789ap19bbeajsnef684e2a3064',
    'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
  }
};


// let response= {} 
   // response.data = {
  //entry: 'abscond',
 // request: 'abscond',
//  response: 'abscond',
 // meaning: {
   // noun: '',
    //verb: '(vrb) run away; usually includes taking something or somebody along',
   // adverb: '',
   // adjective: ''
  //},
  //ipa: 'əbˈskɒnd',
  //version: '7.5.7',
 // author: 'twinword inc.',
  //email: 'help@twinword.com',
  //result_code: '200',
  //result_msg: 'Success'
//}


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} - http://localhost:3000`)
})