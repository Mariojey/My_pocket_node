import express, {NextFunction, Request, Response} from 'express'


const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}))

function handleGetBook(req: Request, res: Response, next: NextFunction){
    console.log(req.params); 
}

app.get("/", (req: Request, res: Response) => {
    res.send({"status": true})
})

app.get("/ab*cd", (req: Request, res: Response) => {
    res.send("/ab*cd");
})

app.post('/api/data', (req: Request, res: Response) => {
    console.log(req.body);
    return res.sendStatus(200);
    
})

app.all('/api/all', (req: Request, res: Response) => {
    return res.sendStatus(200)
})

app.get('/api/books/:bookId', (req: Request, res: Response, next: NextFunction) => {
    console.log(req.params.bookId);
    res.send('I have params')
    
})
app.get('/api/cars/:carId/:carOwner', handleGetBook)
app.listen(8888, () => {
    console.log(`🫐  It's working`);
    
})
