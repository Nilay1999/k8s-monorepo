import express, { Request, Response } from 'express';
const app = express();
const port = 8080;

app.get('/ping', (req: Request, res: Response) => {
	res.json({ message: 'Pong' });
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
