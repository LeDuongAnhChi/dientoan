
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get('/', (req, res) => {
    res.send('cuong cuoi ')
  })

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})