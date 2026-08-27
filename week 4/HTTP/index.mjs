import express from 'express'

const app = express()

//route handlers
// route for get method
app.get('/', (req, res) => {
  // req object all things related to request
  //res object is to send response from server
  //we can send response only once at a time
  res.send('Hello World')
})

app.get('/abc', (req, res) => {
  res.send('Hello World from abc')
})

//POST route handler
app.post('/', (req, res) => {
  res.send('Hello World from the post route handler')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

