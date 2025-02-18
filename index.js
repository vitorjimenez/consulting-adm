import express from 'express';
import router from './src/routes/usuarioRoutes.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.use(cors);
app.use(express.json());
app.use(router);

app.listen(port, () => console.log('Sistema iniciado na porta '+ port))