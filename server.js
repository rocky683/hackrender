const express = require('express')
const app = express()
const {attack,attackRuthles} = require('./attack');
const cors = require('cors')
app.use(cors())

app.get('/',async (req,res)=>{
    console.log('sdf')
    await attack();
    res.ok();

    res.json('hello da maple ');
 })
app.get('/api/', (request, response) => {
    attackRuthles()
  response.json(notes)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
 
// attack();