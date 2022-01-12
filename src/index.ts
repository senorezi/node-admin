import express, {Request, Response} from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express(); // create an express application. store into app variable

app.use(express.json()); // let your application accept json data
app.use(cors({
    origin: ["http://localhost:3000"]
})); // set up your front-end app to be http://localhost:3000

routes(app);

app.get('/', (req: Request, res: Response) => {
    res.send('<b>Hello World</b>');
}); // when they land into your page, it's a get request. send them back 'Hello World'


// Our app is going to be on Port 8000
// Our frontend will run on a different port
// This is not allowed in Test Dev. Chrome will prevent
// We will not be able to use a wrap in the FrontEnd
// We can use cors to allow the FrontEnd to use the Port 8000

app.listen(8000, () => {
    console.log('Listening to port 8000')
}); 