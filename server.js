const express = require("express")
const server = express()

server.all("/", (req, res)=> {
  res.send("bot is running")
})

function keepAlive(){
  server.listen(process.env.PORT, () => {
    console.log("Server is ready")
  })
}

module.exports = keepAlive