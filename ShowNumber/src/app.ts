
import express, {Request, Response, NextFunction} from 'express'
import bodyParser from 'body-parser';
import { isNumberObject } from 'util/types';

const app = express();


app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json());

const port = 8888;

let value = 1;

function getNumber(req: Request, res: Response, next: NextFunction){
    console.log(req.params.num);
    value += parseInt(req.params.num)
    res.send(`Thanks bro!`)
}

app.get("/", (req: Request, res: Response) => {
    res.send(JSON.stringify(value))
})
app.post('/number/:num', getNumber)
app.listen(port, () => {
    console.log(`🦝 Araluen is save, serer is working`);
    
})