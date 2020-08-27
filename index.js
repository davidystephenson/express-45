// 1. Import express
const express = require('express')

// 2. Create the server
const app = express() // the app is the server

// 3. Pick a port
const port = 3000

function onListen () {
  const message = `Listening on :${port}`

  console.log(message)
  // console.log(`Listening on :${port}`)
}

// 4. Tell the app to listen on that port
app.listen(port, onListen)

const math = 1.238435 * 1.43571243

// 5. Register an endpoint
app.get(
  '/test', // path - string beginning with '/'
  (
    request, // object - what data was requested
    response // object - methods for sending data
  ) => {
    response.send(math.toString())
  }
)

function homepage (request, response) {
  const page = `<html>
    <head>
      <title>Homepage</title>
    </head>
    <body>
      <h1>Welcome</h1>

      <p>Welcome to the homepage.</p>
    </body>
  </html>`

  response.send(page)
}

app.get('/', homepage)