const app = require("./app.js")

require("dotenv").config()

const PORT = process.env.PORT

app.use(express.json())

app.listen(PORT, () => {
    console.log(`this the port ${PORT}`)
})