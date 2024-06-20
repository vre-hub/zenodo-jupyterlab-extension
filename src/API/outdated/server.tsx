import express, { Request, Response } from 'express';
import runSearchScript from './run_search';

const app = express();
const PORT = 5000;

app.get('/search', (req: Request, res: Response) => {
    const query: string = req.query.query as string;
    runSearchScript(query, (data: any) => {
        res.json(data);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});