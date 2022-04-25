
require('dotenv').config()
import express, {Request,Response} from 'express';
import routes from './src/routes/routes';
import bodyparser from 'body-parser';
require('dotenv').config()

const app:express.Application = express();
app.use('/',routes);
app.use(bodyparser.json())



app.get('/', (req, res) => {
    res.send('Well done!');
})

console.log(process.env.Test_VAR);

app.listen(4000, () => {
    console.log(`The application is listening on port `)
})