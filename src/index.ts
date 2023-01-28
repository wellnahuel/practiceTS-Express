import express from 'express' //aca VSC chilla porque hay que instalar @types/express -D
const app = express()

app.use(express.json()) //middleware que trnasforma la req.body en un json

const PORT = 3000

app.get('/ping', (_req,res) => { //req chilla, ya no diciendo que es tipo 'any' , sino que tiene un tipo de express (_ soluciona)
    
    console.log('someone pinged here')
    res.send('pong')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})