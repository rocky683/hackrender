const express = require('express')
const app = express()
const {attack,attackRuthles} = require('./attack');
const cors = require('cors')
const path = require('path')

app.use(cors())

app.get('/',async (req,res)=>{
    console.log('sdf')
    await attack();
    res.ok();

    res.json('hello da maple ');
 })
app.get('/api/', (request, response) => {
    res.ok();

    attackRuthles()
  response.json(notes)
})
app.get('*', function (request, response) {
    response.sendFile(path.resolve('./dist/index.html'))
  })
 const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
 
// attack();