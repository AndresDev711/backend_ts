import express from "express"
const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_, res) => {
    console.log('pinged here !!')
    return res.json({message: "OK"})
})

app.listen(PORT, ()=> {
    console.log('SERVER ON :)')
})