import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 5000;

interface Params {
    a: number,
    b: number
}

type Add = (x: Params) => number;

const add = (x: Params) => x.a + x.b;

app.get('/', (req: Request, res: Response) => {
    res.json({
        sum: add({ a: 5, b: 7 })
    });
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))