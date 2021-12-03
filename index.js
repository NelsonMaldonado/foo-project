require("dotenv").config()
const express = require("express")

const server = express()

server.get("/api/users", (req, res) => {
  res.json([
    { id: 1, username: "Jonh" },
    { id: 2, username: "Carl" },
    { id: 3, username: "Apu" },
  ])
})

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
// console.log("Hello Im a program ran by Nelly")
